:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-goexpress'
.. highlight: bash

bioconductor-goexpress
======================

.. conda:recipe:: bioconductor-goexpress
   :replaces_section_title:

   Visualise microarray and RNAseq data using gene ontology annotations

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/GOexpress.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-goexpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goexpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goexpress/meta.yaml>`_

   The package contains methods to visualise the expression profile of genes from a microarray or RNA\-seq experiment\, and offers a supervised clustering approach to identify GO terms containing genes with expression levels that best classify two or more predefined groups of samples. Annotations for the genes present in the expression dataset may be obtained from Ensembl through the biomaRt package\, if not provided by the user. The default random forest framework is used to evaluate the capacity of each gene to cluster samples according to the factor of interest. Finally\, GO terms are scored by averaging the rank \(alternatively\, score\) of their respective gene sets to cluster the samples. P\-values may be computed to assess the significance of GO term ranking. Visualisation function include gene expression profile\, gene ontology\-based heatmaps\, and hierarchical clustering of experimental samples using gene expression data.


.. conda:package:: bioconductor-goexpress

   |downloads_bioconductor-goexpress| |docker_bioconductor-goexpress|

   :versions: 1.22.0-0, 1.20.0-0, 1.18.0-1, 1.16.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-ggplot2: >=0.9.0
   :depends r-gplots: >=2.13.0
   :depends r-randomforest: >=4.6
   :depends r-rcolorbrewer: >=1.0
   :depends r-rcurl: >=1.95
   :depends r-stringr: >=0.6.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-goexpress

   and update with::

      conda update bioconductor-goexpress

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-goexpress:<tag>

   (see `bioconductor-goexpress/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-goexpress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-goexpress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-goexpress
   :alt:   (downloads)
.. |docker_bioconductor-goexpress| image:: https://quay.io/repository/biocontainers/bioconductor-goexpress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-goexpress
.. _`bioconductor-goexpress/tags`: https://quay.io/repository/biocontainers/bioconductor-goexpress?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-goexpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-goexpress/README.html