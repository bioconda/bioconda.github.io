.. _`bioconductor-garfield`:

bioconductor-garfield
=====================

|downloads|

GARFIELD is a non\-parametric functional enrichment analysis approach described in the paper GARFIELD\: GWAS analysis of regulatory or functional information enrichment with LD correction. Briefly\, it is a method that leverages GWAS findings with regulatory or functional annotations \(primarily from ENCODE and Roadmap epigenomics data\) to find features relevant to a phenotype of interest. It performs greedy pruning of GWAS SNPs \(LD r2 \> 0.1\) and then annotates them based on functional information overlap. Next\, it quantifies Fold Enrichment \(FE\) at various GWAS significance cutoffs and assesses them by permutation testing\, while matching for minor allele frequency\, distance to nearest transcription start site and number of LD proxies \(r2 \> 0.8\).

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/garfield.html
Versions      1.10.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-garfield/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-garfield

and update with::

   conda update bioconductor-garfield



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-garfield.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-garfield/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-garfield/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-garfield/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-garfield
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-garfield/status
                :target: https://quay.io/repository/biocontainers/bioconductor-garfield

