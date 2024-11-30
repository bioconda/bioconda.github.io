:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methreg'
.. highlight: bash

bioconductor-methreg
====================

.. conda:recipe:: bioconductor-methreg
   :replaces_section_title:
   :noindex:

   Assessing the regulatory potential of DNA methylation regions or sites on gene transcription

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MethReg.html
   :license: GPL-3
   :recipe: /`bioconductor-methreg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methreg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methreg/meta.yaml>`_

   Epigenome\-wide association studies \(EWAS\) detects a large number of DNA methylation differences\, often hundreds of differentially methylated regions and thousands of CpGs\, that are significantly associated with a disease\, many are located in non\-coding regions. Therefore\, there is a critical need to better understand the functional impact of these CpG methylations and to further prioritize the significant changes. MethReg is an R package for integrative modeling of DNA methylation\, target gene expression and transcription factor binding sites data\, to systematically identify and rank functional CpG methylations. MethReg evaluates\, prioritizes and annotates CpG sites with high regulatory potential using matched methylation and gene expression data\, along with external TF\-target interaction databases based on manually curation\, ChIP\-seq experiments or gene regulatory network analysis.


.. conda:package:: bioconductor-methreg

   |downloads_bioconductor-methreg| |docker_bioconductor-methreg|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-sesame: ``>=1.20.0,<1.21.0``
   :depends bioconductor-sesamedata: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-plyr: 
   :depends r-progress: 
   :depends r-pscl: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-sfsmisc: 
   :depends r-stringr: 
   :depends r-tibble: 
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

      mamba install bioconductor-methreg

   and update with::

      mamba update bioconductor-methreg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methreg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methreg:<tag>

   (see `bioconductor-methreg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methreg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methreg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methreg
   :alt:   (downloads)
.. |docker_bioconductor-methreg| image:: https://quay.io/repository/biocontainers/bioconductor-methreg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methreg
.. _`bioconductor-methreg/tags`: https://quay.io/repository/biocontainers/bioconductor-methreg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methreg";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methreg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methreg/README.html