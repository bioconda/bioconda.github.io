:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scarray'
.. highlight: bash

bioconductor-scarray
====================

.. conda:recipe:: bioconductor-scarray
   :replaces_section_title:
   :noindex:

   Large\-scale single\-cell RNA\-seq data manipulation with GDS files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SCArray.html
   :license: GPL-3
   :recipe: /`bioconductor-scarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scarray/meta.yaml>`_

   Provides large\-scale single\-cell RNA\-seq data manipulation using Genomic Data Structure \(GDS\) files. It combines dense and sparse matrices stored in GDS files and the Bioconductor infrastructure framework \(SingleCellExperiment and DelayedArray\) to provide out\-of\-memory data storage and large\-scale manipulation using the R programming language.


.. conda:package:: bioconductor-scarray

   |downloads_bioconductor-scarray| |docker_bioconductor-scarray|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.2-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-biocsingular: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biocsingular: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-gdsfmt: ``>=1.38.0,<1.39.0``
   :depends bioconductor-gdsfmt: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-scarray

   and update with::

      mamba update bioconductor-scarray

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scarray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scarray:<tag>

   (see `bioconductor-scarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scarray
   :alt:   (downloads)
.. |docker_bioconductor-scarray| image:: https://quay.io/repository/biocontainers/bioconductor-scarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scarray
.. _`bioconductor-scarray/tags`: https://quay.io/repository/biocontainers/bioconductor-scarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scarray";
        var versions = ["1.10.0","1.8.2","1.6.0","1.6.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scarray/README.html