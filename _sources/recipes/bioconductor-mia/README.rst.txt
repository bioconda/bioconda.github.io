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
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.2-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bluster: ``>=1.16.0,<1.17.0``
   :depends bioconductor-decipher: ``>=3.2.0,<3.3.0``
   :depends bioconductor-decontam: ``>=1.26.0,<1.27.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.28.0,<1.29.0``
   :depends bioconductor-dirichletmultinomial: ``>=1.48.0,<1.49.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-scuttle: ``>=1.16.0,<1.17.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.14.0,<2.15.0``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-mass: 
   :depends r-mediation: 
   :depends r-rbiom: 
   :depends r-rlang: 
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
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.2"];
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