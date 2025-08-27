:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dreamlet'
.. highlight: bash

bioconductor-dreamlet
=====================

.. conda:recipe:: bioconductor-dreamlet
   :replaces_section_title:
   :noindex:

   Cohort\-scale differential expression analysis of single cell data using linear \(mixed\) models

   :homepage: https://bioconductor.org/packages/3.21/bioc/html/dreamlet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dreamlet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dreamlet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dreamlet/meta.yaml>`_

   Recent advances in single cell\/nucleus transcriptomic technology has enabled collection of cohort\-scale datasets to study cell type specific gene expression differences associated disease state\, stimulus\, and genetic regulation. The scale of these data\, complex study designs\, and low read count per cell mean that characterizing cell type specific molecular mechanisms requires a user\-frieldly\, purpose\-build analytical framework. We have developed the dreamlet package that applies a pseudobulk approach and fits a regression model for each gene and cell cluster to test differential expression across individuals associated with a trait of interest. Use of precision\-weighted linear mixed models enables accounting for repeated measures study designs\, high dimensional batch effects\, and varying sequencing depth or observed cells per biosample.


.. conda:package:: bioconductor-dreamlet

   |downloads_bioconductor-dreamlet| |docker_bioconductor-dreamlet|

   :versions:
      
      

      ``1.6.0-0``

      

   
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-limma: ``>=3.62.1,<3.63.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-sparsematrixstats: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-variancepartition: ``>=1.36.2,<1.37.0a0``
   :depends bioconductor-zenith: ``>=1.1.2``
   :depends bioconductor-zenith: ``>=1.8.0,<1.9.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-ashr: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggbeeswarm: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gtools: 
   :depends r-lme4: ``>=1.1-33``
   :depends r-mashr: ``>=0.2.52``
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-metafor: 
   :depends r-purrr: 
   :depends r-rcpp: 
   :depends r-rdpack: 
   :depends r-reshape2: 
   :depends r-scattermore: 
   :depends r-tidyr: 
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

      mamba install bioconductor-dreamlet

   and update with::

      mamba update bioconductor-dreamlet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dreamlet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dreamlet:<tag>

   (see `bioconductor-dreamlet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dreamlet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dreamlet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dreamlet
   :alt:   (downloads)
.. |docker_bioconductor-dreamlet| image:: https://quay.io/repository/biocontainers/bioconductor-dreamlet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dreamlet
.. _`bioconductor-dreamlet/tags`: https://quay.io/repository/biocontainers/bioconductor-dreamlet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dreamlet";
        var versions = ["1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dreamlet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dreamlet/README.html