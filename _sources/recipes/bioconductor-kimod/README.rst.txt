.. _`bioconductor-kimod`:

bioconductor-kimod
==================

|downloads|

This package allows to work with mixed omics data \(transcriptomics\, proteomics\, microarray\-chips\, rna\-seq data\)\, introducing the following improvements\: distance options \(for numeric and\/or categorical variables\) for each of the tables\, bootstrap resampling techniques on the residuals matrices for all methods\, that enable perform confidence ellipses for the projection of individuals\, variables and biplot methodology to project variables \(gene expression\) on the compromise. Since the main purpose of the package is to use these techniques to omic data analysis\, it includes an example data from four different microarray platforms \(i.e.\,Agilent\, Affymetrix HGU 95\, Affymetrix HGU 133 and Affymetrix HGU 133plus 2.0\) on the NCI\-60 cell lines.NCI60\_4arrays is a list containing the NCI\-60 microarray data with only few hundreds of genes randomly selected in each platform to keep the size of the package small. The data are the same that the package omicade4 used to implement the co\-inertia analysis. The references in packages follow the style of the APA\-6th norm.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/kimod.html
Versions      1.6.0
License       GPL (>=2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kimod



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-kimod

and update with::

   conda update bioconductor-kimod



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-kimod.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-kimod/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-kimod/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-kimod/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-kimod
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-kimod/status
                :target: https://quay.io/repository/biocontainers/bioconductor-kimod

