:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zellkonverter'
.. highlight: bash

bioconductor-zellkonverter
==========================

.. conda:recipe:: bioconductor-zellkonverter
   :replaces_section_title:
   :noindex:

   Conversion Between scRNA\-seq Objects

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/zellkonverter.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-zellkonverter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zellkonverter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zellkonverter/meta.yaml>`_

   Provides methods to convert between Python AnnData objects and SingleCellExperiment objects. These are primarily intended for use by downstream Bioconductor packages that wrap Python methods for single\-cell data analysis. It also includes functions to read and write H5AD files used for saving AnnData objects to disk.


.. conda:package:: bioconductor-zellkonverter

   |downloads_bioconductor-zellkonverter| |docker_bioconductor-zellkonverter|

   :versions:
      
      

      ``1.12.1-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.14.0,<1.15.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cli: 
   :depends r-matrix: 
   :depends r-reticulate: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-zellkonverter

   and update with::

      mamba update bioconductor-zellkonverter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-zellkonverter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-zellkonverter:<tag>

   (see `bioconductor-zellkonverter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-zellkonverter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zellkonverter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zellkonverter
   :alt:   (downloads)
.. |docker_bioconductor-zellkonverter| image:: https://quay.io/repository/biocontainers/bioconductor-zellkonverter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zellkonverter
.. _`bioconductor-zellkonverter/tags`: https://quay.io/repository/biocontainers/bioconductor-zellkonverter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-zellkonverter";
        var versions = ["1.12.1","1.10.1","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zellkonverter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zellkonverter/README.html