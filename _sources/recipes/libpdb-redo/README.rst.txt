:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libpdb-redo'
.. highlight: bash

libpdb-redo
===========

.. conda:recipe:: libpdb-redo
   :replaces_section_title:
   :noindex:

   Library containing shared code for various PDB\-REDO programs.

   :homepage: https://pdb-redo.eu
   :developer docs: https://github.com/PDB-REDO/libpdb-redo
   :license: BSD / BSD-2-Clause
   :recipe: /`libpdb-redo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libpdb-redo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libpdb-redo/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444911054515`

   This library contains code shared by the various tools we develop at the NKI for the \[PDB\-REDO\]\(https\:\/\/pdb\-redo.eu\/\) project.



.. conda:package:: libpdb-redo

   |downloads_libpdb-redo| |docker_libpdb-redo|

   :versions:
      
      

      ``3.3.1-0``,  ``3.3.0-0``

      

   
   :depends on clipper: ``>=2.1.20180802,<3.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libcifpp: ``>=9.0.4,<10.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install libpdb-redo

to add into an existing workspace instead, run::

    pixi add libpdb-redo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libpdb-redo

Alternatively, to install into a new environment, run::

    conda create -n envname libpdb-redo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libpdb-redo:<tag>

(see `libpdb-redo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libpdb-redo| image:: https://img.shields.io/conda/dn/bioconda/libpdb-redo.svg?style=flat
   :target: https://anaconda.org/bioconda/libpdb-redo
   :alt:   (downloads)
.. |docker_libpdb-redo| image:: https://quay.io/repository/biocontainers/libpdb-redo/status
   :target: https://quay.io/repository/biocontainers/libpdb-redo
.. _`libpdb-redo/tags`: https://quay.io/repository/biocontainers/libpdb-redo?tab=tags


.. raw:: html

    <script>
        var package = "libpdb-redo";
        var versions = ["3.3.1","3.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libpdb-redo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libpdb-redo/README.html