:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mia'
.. highlight: bash

bioconductor-mia
================

.. conda:recipe:: bioconductor-mia
   :replaces_section_title:
   :noindex:

   Microbiome analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mia.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-mia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mia/meta.yaml>`_

   mia implements tools for microbiome analysis based on the SummarizedExperiment\, SingleCellExperiment and TreeSummarizedExperiment infrastructure. Data wrangling and analysis in the context of taxonomic data is the main scope. Additional functions for common task are implemented such as community indices calculation and summarization.


.. conda:package:: bioconductor-mia

   |downloads_bioconductor-mia| |docker_bioconductor-mia|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.2-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends bioconductor-bluster: ``>=1.20.0,<1.21.0``
   :depends bioconductor-bluster: ``>=1.20.0,<1.21.0a0``
   :depends bioconductor-decipher: ``>=3.6.0,<3.7.0``
   :depends bioconductor-decipher: ``>=3.6.0,<3.7.0a0``
   :depends bioconductor-decontam: ``>=1.30.0,<1.31.0``
   :depends bioconductor-decontam: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends bioconductor-delayedarray: ``>=0.36.0,<0.37.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-dirichletmultinomial: ``>=1.52.0,<1.53.0``
   :depends bioconductor-dirichletmultinomial: ``>=1.52.0,<1.53.0a0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-multiassayexperiment: ``>=1.36.1,<1.37.0a0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends bioconductor-scater: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-scuttle: ``>=1.20.0,<1.21.0``
   :depends bioconductor-scuttle: ``>=1.20.0,<1.21.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.18.0,<2.19.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.18.0,<2.19.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=19``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-ape: 
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-dplyr: 
   :depends r-mass: 
   :depends r-rbiom: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vegan: 
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

      mamba install bioconductor-mia

   and update with::

      mamba update bioconductor-mia

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mia:<tag>

   (see `bioconductor-mia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mia
   :alt:   (downloads)
.. |docker_bioconductor-mia| image:: https://quay.io/repository/biocontainers/bioconductor-mia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mia
.. _`bioconductor-mia/tags`: https://quay.io/repository/biocontainers/bioconductor-mia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mia";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mia/README.html