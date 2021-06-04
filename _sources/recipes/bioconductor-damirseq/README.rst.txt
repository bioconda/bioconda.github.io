:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-damirseq'
.. highlight: bash

bioconductor-damirseq
=====================

.. conda:recipe:: bioconductor-damirseq
   :replaces_section_title:
   :noindex:

   Data Mining for RNA\-seq data\: normalization\, feature selection and classification

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/DaMiRseq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-damirseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-damirseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-damirseq/meta.yaml>`_

   The DaMiRseq package offers a tidy pipeline of data mining procedures to identify transcriptional biomarkers and exploit them for both binary and multi\-class classification purposes. The package accepts any kind of data presented as a table of raw counts and allows including both continous and factorial variables that occur with the experimental setting. A series of functions enable the user to clean up the data by filtering genomic features and samples\, to adjust data by identifying and removing the unwanted source of variation \(i.e. batches and confounding factors\) and to select the best predictors for modeling. Finally\, a \"stacking\" ensemble learning technique is applied to build a robust classification model. Every step includes a checkpoint that the user may exploit to assess the effects of data management by looking at diagnostic plots\, such as clustering and heatmaps\, RLE boxplots\, MDS or correlation plot.


.. conda:package:: bioconductor-damirseq

   |downloads_bioconductor-damirseq| |docker_bioconductor-damirseq|

   :versions:
      
      

      ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.2-0``

      

   
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-edaseq: ``>=2.26.0,<2.27.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-sva: ``>=3.40.0,<3.41.0``
   :depends r-arm: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-caret: 
   :depends r-corrplot: 
   :depends r-e1071: 
   :depends r-factominer: 
   :depends r-fselector: 
   :depends r-ggplot2: 
   :depends r-hmisc: 
   :depends r-ineq: 
   :depends r-kknn: 
   :depends r-lubridate: 
   :depends r-mass: 
   :depends r-pheatmap: 
   :depends r-pls: 
   :depends r-plsvarsel: 
   :depends r-plyr: 
   :depends r-randomforest: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rsnns: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-damirseq

   and update with::

      conda update bioconductor-damirseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-damirseq:<tag>

   (see `bioconductor-damirseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-damirseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-damirseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-damirseq
   :alt:   (downloads)
.. |docker_bioconductor-damirseq| image:: https://quay.io/repository/biocontainers/bioconductor-damirseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-damirseq
.. _`bioconductor-damirseq/tags`: https://quay.io/repository/biocontainers/bioconductor-damirseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-damirseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-damirseq/README.html