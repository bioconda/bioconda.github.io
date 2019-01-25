.. _`bioconductor-gdcrnatools`:

bioconductor-gdcrnatools
========================

|downloads|

This is an easy\-to\-use package for downloading\, organizing\, and integrative analyzing RNA expression data in GDC with an emphasis on deciphering the lncRNA\-mRNA related ceRNA regulatory network in cancer. Three databases of lncRNA\-miRNA interactions including spongeScan\, starBase\, and miRcode\, as well as three databases of mRNA\-miRNA interactions including miRTarBase\, starBase\, and miRcode are incorporated into the package for ceRNAs network construction. limma\, edgeR\, and DESeq2 can be used to identify differentially expressed genes\/miRNAs. Functional enrichment analyses including GO\, KEGG\, and DO can be performed based on the clusterProfiler and DO packages. Both univariate CoxPH and KM survival analyses of multiple genes can be implemented in the package. Besides some routine visualization functions such as volcano plot\, bar plot\, and KM plot\, a few simply shiny apps are developed to facilitate visualization of results on a local webpage.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/GDCRNATools.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-gdcrnatools/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gdcrnatools

and update with::

   conda update bioconductor-gdcrnatools



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gdcrnatools.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gdcrnatools/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gdcrnatools/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gdcrnatools/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gdcrnatools
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gdcrnatools/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gdcrnatools

