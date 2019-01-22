.. _`bioconductor-hgu133plus2cellscore`:

bioconductor-hgu133plus2cellscore
=================================

|downloads|

The CellScore Standard Dataset contains expression data from a wide variety of human cells and tissues\, which should be used as standard cell types in the calculation of the CellScore. All data was curated from public databases such as Gene Expression Omnibus \(https\:\/\/www.ncbi.nlm.nih.gov\/geo\/\) or ArrayExpress \(https\:\/\/www.ebi.ac.uk\/arrayexpress\/\). This standard dataset only contains data from the Affymetrix GeneChip Human Genome U133 Plus 2.0 microarrays. Samples were manually annotated using the database information or consulting the publications in which the datasets originated. The sample annotations are stored in the phenoData slot of the expressionSet object. Raw data \(CEL files\) were processed with the affy package to generate present\/absent calls \(mas5calls\) and background\-subtracted values\, which were then normalized by the R\-package yugene to yield the final expression values for the standard expression matrix. The annotation table for the microarray was retrieved from the BioC annotation package hgu133plus2. All data are stored in an expressionSet object.

============= ===========
Home          https://bioconductor.org/packages/3.8/data/experiment/html/hgu133plus2CellScore.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2cellscore



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-hgu133plus2cellscore

and update with::

   conda update bioconductor-hgu133plus2cellscore



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-hgu133plus2cellscore.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-hgu133plus2cellscore/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-hgu133plus2cellscore/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-hgu133plus2cellscore/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-hgu133plus2cellscore
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2cellscore/status
                :target: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2cellscore

