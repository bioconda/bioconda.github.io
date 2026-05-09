:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beachmat.tiledb'
.. highlight: bash

bioconductor-beachmat.tiledb
============================

.. conda:recipe:: bioconductor-beachmat.tiledb
   :replaces_section_title:
   :noindex:

   beachmat bindings for TileDB\-backed matrices

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/beachmat.tiledb.html
   :license: GPL-3
   :recipe: /`bioconductor-beachmat.tiledb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beachmat.tiledb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beachmat.tiledb/meta.yaml>`_

   Extends beachmat to initialize tatami matrices from TileDB\-backed arrays. This allows C\+\+ code in downstream packages to directly call the TileDB C\/C\+\+ library to access array data\, without the need for block processing via DelayedArray. Developers only need to import this package to automatically extend the capabilities of beachmat\:\:initializeCpp to TileDBArray instances.


.. conda:package:: bioconductor-beachmat.tiledb

   |downloads_bioconductor-beachmat.tiledb| |docker_bioconductor-beachmat.tiledb|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-assorthead: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-assorthead: ``>=1.4.0,<1.5.0a0``
   :depends on bioconductor-beachmat: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-beachmat: ``>=2.26.0,<2.27.0a0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends on bioconductor-tiledbarray: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-tiledbarray: ``>=1.20.0,<1.21.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcpp: 
   :depends on r-tiledb: 

   :additional platforms:
      

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

    pixi global install bioconductor-beachmat.tiledb

to add into an existing workspace instead, run::

    pixi add bioconductor-beachmat.tiledb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-beachmat.tiledb

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-beachmat.tiledb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-beachmat.tiledb:<tag>

(see `bioconductor-beachmat.tiledb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-beachmat.tiledb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beachmat.tiledb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beachmat.tiledb
   :alt:   (downloads)
.. |docker_bioconductor-beachmat.tiledb| image:: https://quay.io/repository/biocontainers/bioconductor-beachmat.tiledb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beachmat.tiledb
.. _`bioconductor-beachmat.tiledb/tags`: https://quay.io/repository/biocontainers/bioconductor-beachmat.tiledb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beachmat.tiledb";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beachmat.tiledb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beachmat.tiledb/README.html