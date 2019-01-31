.. _`bioconductor-parathyroidse`:

bioconductor-parathyroidse
==========================

|downloads|

This package provides RangedSummarizedExperiment objects of read counts in genes and exonic parts for paired\-end RNA\-Seq data from experiments on primary cultures of parathyroid tumors.  The data were presented in the article \"Evidence of a Functional Estrogen Receptor in Parathyroid Adenomas\" by Haglund F\, Ma R\, Huss M\, Sulaiman L\, Lu M\, Nilsson IL\, Hoog A\, Juhlin CC\, Hartman J\, Larsson C\, J Clin Endocrinol Metab. jc.2012\-2484\, Epub 2012 Sep 28\, PMID\: 23024189.  The sequencing was performed on tumor cultures from 4 patients at 2 time points over 3 conditions \(DPN\, OHT and control\).  One control sample was omitted by the paper authors due to low quality. The package vignette describes the creation of the object from raw sequencing data provided by NCBI Gene Expression Omnibus under accession number GSE37211.  The gene and exon features are the GRCh37 Ensembl annotations.

============= ===========
Home          https://bioconductor.org/packages/3.8/data/experiment/html/parathyroidSE.html
Versions      
License       LGPL
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-parathyroidse/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-parathyroidse

and update with::

   conda update bioconductor-parathyroidse



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-parathyroidse.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-parathyroidse/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-parathyroidse/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-parathyroidse/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-parathyroidse
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-parathyroidse/status
                :target: https://quay.io/repository/biocontainers/bioconductor-parathyroidse

