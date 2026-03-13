:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libcifpp'
.. highlight: bash

libcifpp
========

.. conda:recipe:: libcifpp
   :replaces_section_title:
   :noindex:

   Library containing code to manipulate mmCIF and PDB files.

   :homepage: https://github.com/PDB-REDO/libcifpp
   :documentation: https://pdb-redo.github.io/libcifpp
   
   :license: BSD / BSD-2-Clause
   :recipe: /`libcifpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libcifpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libcifpp/meta.yaml>`_

   This library\, libcifpp\, is a generic CIF library with some specific additions to work with mmCIF files.
   The main focus of this library is to make sure that files read or written are valid.
   That is\, they are syntactically valid and their content is valid with respect to a CIF dictionary\, if such a dictionary is available and specified.



.. conda:package:: libcifpp

   |downloads_libcifpp| |docker_libcifpp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>10.0.0-0</code>,  <code>9.0.6-1</code>,  <code>9.0.6-0</code>,  <code>9.0.5-1</code>,  <code>9.0.5-0</code>,  <code>9.0.4-0</code>,  <code>9.0.3-0</code>,  <code>9.0.2-0</code>,  <code>9.0.1-0</code>,  </span></summary>
      

      ``10.0.0-0``,  ``9.0.6-1``,  ``9.0.6-0``,  ``9.0.5-1``,  ``9.0.5-0``,  ``9.0.4-0``,  ``9.0.3-0``,  ``9.0.2-0``,  ``9.0.1-0``,  ``9.0.0-0``,  ``8.0.1-5``,  ``8.0.1-3``,  ``8.0.1-2``,  ``8.0.1-1``,  ``8.0.1-0``,  ``8.0.0-1``,  ``8.0.0-0``,  ``7.0.9-3``,  ``7.0.9-1``,  ``7.0.9-0``,  ``7.0.8-1``,  ``7.0.8-0``,  ``7.0.7-0``,  ``7.0.6-0``,  ``7.0.5-0``,  ``7.0.4-1``,  ``7.0.4-0``,  ``7.0.3-0``,  ``5.0.0-2``,  ``5.0.0-1``,  ``5.0.0-0``,  ``4.2.2-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.1-0``,  ``4.0.0-0``,  ``3.0.3-0``,  ``3.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libboost: ``>=1.86.0,<1.87.0a0``
   :depends on libgcc: ``>=14``
   :depends on libsqlite: ``>=3.51.2,<4.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pcre2: ``>=10.47,<10.48.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install libcifpp

to add into an existing workspace instead, run::

    pixi add libcifpp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libcifpp

Alternatively, to install into a new environment, run::

    conda create -n envname libcifpp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libcifpp:<tag>

(see `libcifpp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libcifpp| image:: https://img.shields.io/conda/dn/bioconda/libcifpp.svg?style=flat
   :target: https://anaconda.org/bioconda/libcifpp
   :alt:   (downloads)
.. |docker_libcifpp| image:: https://quay.io/repository/biocontainers/libcifpp/status
   :target: https://quay.io/repository/biocontainers/libcifpp
.. _`libcifpp/tags`: https://quay.io/repository/biocontainers/libcifpp?tab=tags


.. raw:: html

    <script>
        var package = "libcifpp";
        var versions = ["10.0.0","9.0.6","9.0.6","9.0.5","9.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libcifpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libcifpp/README.html