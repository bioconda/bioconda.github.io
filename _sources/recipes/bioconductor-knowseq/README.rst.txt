:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-knowseq'
.. highlight: bash

bioconductor-knowseq
====================

.. conda:recipe:: bioconductor-knowseq
   :replaces_section_title:

   A R package to extract knowledge by using RNA\-seq raw files

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/KnowSeq.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-knowseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-knowseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-knowseq/meta.yaml>`_

   KnowSeq proposes a whole pipeline that comprises the most relevant steps in the RNA\-seq gene expression analysis\, with the main goal of extracting biological knowledge from raw data \(Differential Expressed Genes\, Gene Ontology enrichment\, pathway visualization and related diseases\). In this sense\, KnowSeq allows aligning raw data from the original fastq or sra files\, by using the most renowned aligners such as tophat2\, hisat2\, salmon and kallisto. Nowadays\, there is no package that only from the information of the samples to align \-included in a text file\-\, automatically performs the download and alignment of all of the samples. Furthermore\, the package includes functions to\: calculate the gene expression values\; remove batch effect\; calculate the Differentially Expressed Genes \(DEGs\)\; plot different graphs\; and perform the DEGs enrichment with the GO information\, pathways visualization and related diseases information retrieval. Moreover\, KnowSeq is the only package that allows applying both a machine learning and DEGs enrichment processes just after the DEGs extraction. This idea emerged with the aim of proposing a complete tool to the research community containing all the necessary steps to carry out complete studies in a simple and fast way.


.. conda:package:: bioconductor-knowseq

   |downloads_bioconductor-knowseq| |docker_bioconductor-knowseq|

   :versions: 1.0.0-1
   
   :depends bioconductor-arrayqualitymetrics: >=3.42.0,<3.43.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biomart: >=2.42.0,<2.43.0
   :depends bioconductor-cqn: >=1.32.0,<1.33.0
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-multtest: >=2.42.0,<2.43.0
   :depends bioconductor-pathview: >=1.26.0,<1.27.0
   :depends bioconductor-rhdf5: >=2.30.0,<2.31.0
   :depends bioconductor-sva: >=3.34.0,<3.35.0
   :depends bioconductor-topgo: >=2.37.0,<2.38.0
   :depends bioconductor-tximport: >=1.14.0,<1.15.0
   :depends bioconductor-tximportdata: >=1.14.0,<1.15.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-caret: 
   :depends r-class: 
   :depends r-e1071: 
   :depends r-factoextra: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-kernlab: 
   :depends r-mclust: 
   :depends r-praznik: 
   :depends r-quantreg: 
   :depends r-r.utils: 
   :depends r-randomforest: 
   :depends r-rcurl: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-knowseq

   and update with::

      conda update bioconductor-knowseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-knowseq:<tag>

   (see `bioconductor-knowseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-knowseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-knowseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-knowseq
   :alt:   (downloads)
.. |docker_bioconductor-knowseq| image:: https://quay.io/repository/biocontainers/bioconductor-knowseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-knowseq
.. _`bioconductor-knowseq/tags`: https://quay.io/repository/biocontainers/bioconductor-knowseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-knowseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-knowseq/README.html