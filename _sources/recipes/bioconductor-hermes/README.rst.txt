:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hermes'
.. highlight: bash

bioconductor-hermes
===================

.. conda:recipe:: bioconductor-hermes
   :replaces_section_title:
   :noindex:

   Preprocessing\, analyzing\, and reporting of RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/hermes.html
   :license: Apache License 2.0 | file LICENSE
   :recipe: /`bioconductor-hermes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hermes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hermes/meta.yaml>`_

   Provides classes and functions for quality control\, filtering\, normalization and differential expression analysis of pre\-processed RNA\-seq data. Data can be imported from \`SummarizedExperiment\` as well as \`matrix\` objects and can be annotated from BioMart. Filtering for genes without too low expression or containing required annotations\, as well as filtering for samples with sufficient correlation to other samples or total number of reads is supported. The standard normalization methods including \`cpm\`\, \`rpkm\` and \`tpm\` can be used\, and \`DESeq2\` as well as \`voom\` differential expression analyses are available.


.. conda:package:: bioconductor-hermes

   |downloads_bioconductor-hermes| |docker_bioconductor-hermes|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: ``>=2.1``
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-envstats: 
   :depends r-forcats: 
   :depends r-ggfortify: 
   :depends r-ggplot2: 
   :depends r-ggrepel: ``>=0.9``
   :depends r-lifecycle: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-purrr: 
   :depends r-r6: 
   :depends r-rdpack: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hermes

   and update with::

      conda update bioconductor-hermes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hermes:<tag>

   (see `bioconductor-hermes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hermes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hermes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hermes
   :alt:   (downloads)
.. |docker_bioconductor-hermes| image:: https://quay.io/repository/biocontainers/bioconductor-hermes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hermes
.. _`bioconductor-hermes/tags`: https://quay.io/repository/biocontainers/bioconductor-hermes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hermes";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hermes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hermes/README.html