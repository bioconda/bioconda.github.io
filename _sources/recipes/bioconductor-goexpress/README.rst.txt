.. _`bioconductor-goexpress`:

bioconductor-goexpress
======================

|downloads|

The package contains methods to visualise the expression profile of genes from a microarray or RNA\-seq experiment\, and offers a supervised clustering approach to identify GO terms containing genes with expression levels that best classify two or more predefined groups of samples. Annotations for the genes present in the expression dataset may be obtained from Ensembl through the biomaRt package\, if not provided by the user. The default random forest framework is used to evaluate the capacity of each gene to cluster samples according to the factor of interest. Finally\, GO terms are scored by averaging the rank \(alternatively\, score\) of their respective gene sets to cluster the samples. P\-values may be computed to assess the significance of GO term ranking. Visualisation function include gene expression profile\, gene ontology\-based heatmaps\, and hierarchical clustering of experimental samples using gene expression data.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/GOexpress.html
Versions      
License       GPL (>= 3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-goexpress/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-goexpress

and update with::

   conda update bioconductor-goexpress



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-goexpress.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-goexpress/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-goexpress/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-goexpress/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-goexpress
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-goexpress/status
                :target: https://quay.io/repository/biocontainers/bioconductor-goexpress

