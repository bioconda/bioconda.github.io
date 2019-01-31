.. _`bioconductor-gigsea`:

bioconductor-gigsea
===================

|downloads|

We presented the Genotype\-imputed Gene Set Enrichment Analysis \(GIGSEA\)\, a novel method that uses GWAS\-and\-eQTL\-imputed trait\-associated differential gene expression to interrogate gene set enrichment for the trait\-associated SNPs. By incorporating eQTL from large gene expression studies\, e.g. GTEx\, GIGSEA appropriately addresses such challenges for SNP enrichment as gene size\, gene boundary\, SNP distal regulation\, and multiple\-marker regulation. The weighted linear regression model\, taking as weights both imputation accuracy and model completeness\, was used to perform the enrichment test\, properly adjusting the bias due to redundancy in different gene sets. The permutation test\, furthermore\, is used to evaluate the significance of enrichment\, whose efficiency can be largely elevated by expressing the computational intensive part in terms of large matrix operation. We have shown the appropriate type I error rates for GIGSEA \(\<5\%\)\, and the preliminary results also demonstrate its good performance to uncover the real signal.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/GIGSEA.html
Versions      
License       LGPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-gigsea/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gigsea

and update with::

   conda update bioconductor-gigsea



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gigsea.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gigsea/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gigsea/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gigsea/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gigsea
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gigsea/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gigsea

