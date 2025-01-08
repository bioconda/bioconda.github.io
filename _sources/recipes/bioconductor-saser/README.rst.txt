:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-saser'
.. highlight: bash

bioconductor-saser
==================

.. conda:recipe:: bioconductor-saser
   :replaces_section_title:
   :noindex:

   Scalable Aberrant Splicing and Expression Retrieval

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/saseR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-saser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saser/meta.yaml>`_

   saseR is a highly performant and fast framework for aberrant expression and splicing analyses. The main functions are\: \\itemize\{ \\item \\code\{\\link\{BamtoAspliCounts\}\} \- Process BAM files to ASpli counts \\item \\code\{\\link\{convertASpli\}\} \- Get gene\, bin or junction counts from ASpli SummarizedExperiment \\item \\code\{\\link\{calculateOffsets\}\} \- Create an offsets assays for aberrant expression or splicing analysis \\item \\code\{\\link\{saseRfindEncodingDim\}\} \- Estimate the optimal number of latent factors to include when estimating the mean expression \\item \\code\{\\link\{saseRfit\}\} \- Parameter estimation of the negative binomial distribution and compute p\-values for aberrant expression and splicing \} For information upon how to use these functions\, check out our vignette at \\url\{https\:\/\/github.com\/statOmics\/saseR\/blob\/main\/vignettes\/Vignette.Rmd\} and the saseR paper\: Segers\, A. et al. \(2023\). Juggling offsets unlocks RNA\-seq tools for fast scalable differential usage\, aberrant splicing and expression analyses. bioRxiv. \\url\{https\:\/\/doi.org\/10.1101\/2023.06.29.547014\}.


.. conda:package:: bioconductor-saser

   |downloads_bioconductor-saser| |docker_bioconductor-saser|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-aspli: ``>=2.16.0,<2.17.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-dexseq: ``>=1.52.0,<1.53.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-mass: 
   :depends r-pracma: 
   :depends r-precrec: 
   :depends r-prroc: 
   :depends r-rrcov: 
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

      mamba install bioconductor-saser

   and update with::

      mamba update bioconductor-saser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-saser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-saser:<tag>

   (see `bioconductor-saser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-saser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-saser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-saser
   :alt:   (downloads)
.. |docker_bioconductor-saser| image:: https://quay.io/repository/biocontainers/bioconductor-saser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-saser
.. _`bioconductor-saser/tags`: https://quay.io/repository/biocontainers/bioconductor-saser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-saser";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-saser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-saser/README.html