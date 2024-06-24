:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-musicatk'
.. highlight: bash

bioconductor-musicatk
=====================

.. conda:recipe:: bioconductor-musicatk
   :replaces_section_title:
   :noindex:

   Mutational Signature Comprehensive Analysis Toolkit

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/musicatk.html
   :license: LGPL-3
   :recipe: /`bioconductor-musicatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-musicatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-musicatk/meta.yaml>`_

   Mutational signatures are carcinogenic exposures or aberrant cellular processes that can cause alterations to the genome. We created musicatk \(MUtational SIgnature Comprehensive Analysis ToolKit\) to address shortcomings in versatility and ease of use in other pre\-existing computational tools. Although many different types of mutational data have been generated\, current software packages do not have a flexible framework to allow users to mix and match different types of mutations in the mutational signature inference process. Musicatk enables users to count and combine multiple mutation types\, including SBS\, DBS\, and indels. Musicatk calculates replication strand\, transcription strand and combinations of these features along with discovery from unique and proprietary genomic feature associated with any mutation type. Musicatk also implements several methods for discovery of new signatures as well as methods to infer exposure given an existing set of signatures. Musicatk provides functions for visualization and downstream exploratory analysis including the ability to compare signatures between cohorts and find matching signatures in COSMIC V2 or COSMIC V3.


.. conda:package:: bioconductor-musicatk

   |downloads_bioconductor-musicatk| |docker_bioconductor-musicatk|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm10: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm9: ``>=1.4.0,<1.5.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-decomptumor2sig: ``>=2.18.0,<2.19.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-maftools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.18.0,<3.19.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-deconstructsigs: 
   :depends r-dplyr: 
   :depends r-factoextra: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-gtools: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-matrixtests: 
   :depends r-mcmcprecision: 
   :depends r-nmf: 
   :depends r-philentropy: 
   :depends r-plotly: 
   :depends r-rlang: 
   :depends r-shiny: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyverse: 
   :depends r-topicmodels: 
   :depends r-uwot: 
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

      mamba install bioconductor-musicatk

   and update with::

      mamba update bioconductor-musicatk

  To create a new environment, run::

      mamba create --name myenvname bioconductor-musicatk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-musicatk:<tag>

   (see `bioconductor-musicatk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-musicatk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-musicatk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-musicatk
   :alt:   (downloads)
.. |docker_bioconductor-musicatk| image:: https://quay.io/repository/biocontainers/bioconductor-musicatk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-musicatk
.. _`bioconductor-musicatk/tags`: https://quay.io/repository/biocontainers/bioconductor-musicatk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-musicatk";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-musicatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-musicatk/README.html