Repodata patching
=================

TL; DR: Major steps necessary
-----------------------------

To patch the package metadata in the ``repodata.json`` files for the different architectures (for an example ``repodata.json`` file, see `the noarch folder <https://conda.anaconda.org/bioconda/noarch/>`_), the following steps are required:

1. ``git clone`` the `bioconda-recipes repository <https://github.com/bioconda/bioconda-recipes>`_.
2. Create a dedicated branch branch for your updates, for example: ``git checkout -b fix/patch-repodata-package-x-to-require-minimum-version-of-y``.
3. Edit ``recipes/bioconda-repodata-patches/gen_patch_json.py``, adding or adjusting repodata patches in the ``_gen_new_index_per_key()`` function, modelling on the existing patches.
4. Run ``gen_patch_json.py`` locally, to see which patches get generated in the ``patches/<architecture>/patch_instructions.json`` files.
5. Compare the newly generated patches to the existing patches with ``show_diff.py``, and double-check that the modifications work as intended or update accordingly.
6. Commit all the changes to ``gen_patch_json.py`` (don't commit the ``patches/`` folder).
7. Also update and commit the ``meta.yaml`` recipe definition for the ``bioconda-repodata-patches`` package by updating the ``version`` to the current date and resetting the build number to ``0`` (if necessary).
8. Publish your dedicated branch and open a pull request on the main repository.


The full story
--------------

Oh no, your favorite package, ``nanoqc``, pulls in bokeh as a dependency, but there
was recently a major version change in it that breaks backward compatibility.
That wouldn't be a problem, except ``nanoqc`` doesn't restrict the range of `bokeh`
that can be installed. Thus, you and everyone else in the world, will
constantly get non-functional installs whenever creating new environments with
nanoqc. Sure you can get around this with ``conda create -n nanoqc nanoqc bokeh=2.4.3``,
but that still leaves things broken for everyone else in the world. Another
option would be to update the nanoqc recipe in bioconda-recipes, and this
should also be done if the latest version is problematic, but this would not
solve all other existing, earlier versions of nanoqc packages that also do not
restrict bokeh.

Wouldn't it be nice if you could just fix the nanoqc package, in place, such
that it magically contains a restriction on the version of bokeh that it
depends on? It turns out you **CAN** do this with repodata patching.

What is repodata?
-----------------

Repodata is a JSON file that contains a variety of information for each package
in Bioconda. There is one for each architecture (``linux-64``, ``linux-aarch64``, ``osx-64``, ``osx-arm64``, ``noarch``, etc.)
and they're hosted in the bioconda channel. For example, `the noarch repodata.json file is
available here <https://conda.anaconda.org/bioconda/noarch/repodata.json>`_.
Let's take a look at what sorts of things are stored within this file for a
single package:

   .. code-block:: json

    {
      "info": {
        "subdir": "noarch"
      },
      "packages": {
        ... many packages ..
        "nanoqc-0.9.4-py_0.tar.bz2": {
          "build": "py_0",
          "build_number": 0,
          "depends": [
            "biopython",
            "bokeh",
            "numpy",
            "python >=3"
          ],
          "license": "MIT License",
          "license_family": "MIT",
          "md5": "ebe00c0c2390252a67f5f6419dd4db80",
          "name": "nanoqc",
          "noarch": "python",
          "sha256": "32d12881d92396cf85274268baf82d400ae353edf370096c0ddf559993807ce8",
          "size": 9867,
          "subdir": "noarch",
          "timestamp": 1592396392980,
          "version": "0.9.4"
        },
      },
      "packages.conda": {},
      "removed": [],
      "repodata_version": 1
    }

This is what's used by `conda` and `mamba` for determining what packages exist
and their dependencies. Note that the exact fields have changed over time, with
older packages lacking things like the ``timestamp`` value.

In order to add/remove/update a dependency (like restricting the `bokeh`
version), we need to modify the ``"depends": {}`` list in each package that should be
modified. We can't directly modify these files, instead we need to patch them
with the bioconda-repodata-patches package.

The bioconda-repodata-patches package
-------------------------------------

The `bioconda-repodata-patches` package itself contains a set of patches for
each architecture::

    .
    ├── linux-64
    │   └── patch_instructions.json
    ├── noarch
    │   └── patch_instructions.json
    └── osx-64
        └── patch_instructions.json
..
  TODO: update when bioconda-repodata-patches is updated with linux-aarch64

For an individual package, the json file will eventually contain the updated dependencies.
For the `nanoqc` example above, that will eventually look like::

    "nanoqc-0.9.4-py_0.tar.bz2": {
      "depends": [
        "biopython",
        "bokeh >=2.4,<3",
        "numpy",
        "python >=3"
      ]
    },

Thankfully, you do not need to manually update each package and in fact if you
do, your changes will be lost over time. Instead, update the
`bioconda-repodata-patches` recipe, by editing the `gen_patch_json.py` script
and building a new package version as described below.

Modifying gen_patch_json.py
---------------------------

We will be working in the `bioconda-repodata-patches recipe
<https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-repodata-patches>`_.

The ``gen_patch_json.py`` file is borrowed from conda-forge and has one function
that should typically be modified: ``_gen_new_index_per_key()``. Within this function, each
record in each repodata.json is iterated over and changes that should be made to it
are returned to a comparison function. So if you make changes within this
function, they'll end up in the appropriate ``patch_instructions.json`` file, once 
you build a new version of the `bioconda-repodata-patches` package.
Let's use the `nanoqc` example to see how we can do this.

We first need to come up with a strategy for finding and updating the `nanoqc`
packages. A process like that might look like the following:

 1. Find any package whose name starts with nanoqc
 2. See if it has `bokeh` listed as a dependency.
 3. Change that dependency to ``bokeh >=2.4,<3``

One thing we should think about is what will happen if a new version of `nanoqc`
comes out that **IS** compatible with new versions of `bokeh`. We certainly
don't want to continue adding this version constraint to new releases. To avoid
this, we can use the ``timestamp``, so we only update packages that currently
exist. The code for this might look like the following:

  .. code-block:: python

    # Nanoqc requires bokeh >=2.4,<3
    if record_name.startswith('nanoqc') and has_dep(record, "bokeh") and record.get('timestamp', 0) < 1592397000000:
        for i, dep in enumerate(deps):
            if dep.startswith('bokeh'):
                deps[i] = 'bokeh >=2.4,<3'
                break

So, we're only modifying packages that start with `nanoqc`, have `bokeh` as a
dependency and are sufficiently old.

After making this change, we then need to run ``gen_patch_json.py``, to
actually generate the new patch files. This is why the patch files should not be manually
modified themselves, the changes will be overwritten the next time this script
is run.

Confirming the patch is correct
-------------------------------

Now that the patches have been made, it's good to check that they actually
contain the right changes before proceeding. To do this, we can use the
``show_diff.py`` script. In the example above, this would produce::

    noarch::nanoqc-0.9.1-py_0.tar.bz2
    -    "bokeh",
    +    "bokeh >=2.4,<3",
    noarch::nanoqc-0.9.2-py_0.tar.bz2
    -    "bokeh",
    +    "bokeh >=2.4,<3",
    noarch::nanoqc-0.9.4-py_0.tar.bz2
    -    "bokeh",
    +    "bokeh >=2.4,<3",
    linux-64::nanoqc-0.6.0-py35_0.tar.bz2
    -    "bokeh",
    +    "bokeh >=2.4,<3",
    linux-64::nanoqc-0.6.0-py36_0.tar.bz2
    -    "bokeh",
    +    "bokeh >=2.4,<3",
    ... and many more ...

Note that you must have ``conda-build`` in your path for this to work, for
example via the ``bioconda`` environment used for testing recipes locally with bioconda_utils_.

As long as all of the packages that should be updated are listed there, then
these changes are ready for committing. Don't be surprised if
additional packages are also updated. It's not unusual for bioconductor package
repodata to get updated over time, for example.

Building a new ``bioconda-repodata-patches`` package version
------------------------------------------------------------

For the repodata patches to be applied, they
`need to be placed in the right location for Anaconda's mirroring tools to find them <https://docs.conda.io/projects/conda-build/en/latest/concepts/generating-index.html#repodata-patches-applied-from-a-json-file>`_.
This is done via building a new ``version`` of the `bioconda-repodata-patches` package.
Thus, after verifying and committing you repodata patch updates, bump the
``version`` in ``meta.yaml`` to the current date (and reset the build number to
``0``, if necessary). Now, you can publish your new branch and open a pull
request on the main ``bioconda-recipes`` repository.
