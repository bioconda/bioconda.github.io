.. _`bioconductor-cpvsnp`:

bioconductor-cpvsnp
===================

|downloads|

Gene set analysis methods exist to combine SNP\-level association p\-values into gene sets\, calculating a single association p\-value for each gene set. This package implements two such methods that require only the calculated SNP p\-values\, the gene set\(s\) of interest\, and a correlation matrix \(if desired\). One method \(GLOSSI\) requires independent SNPs and the other \(VEGAS\) can take into account correlation \(LD\) among the SNPs. Built\-in plotting functions are available to help users visualize results.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/cpvSNP.html
Versions      1.10.0, 1.12.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cpvsnp



Links         biotools: :biotools:`cpvsnp`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-cpvsnp

and update with::

   conda update bioconductor-cpvsnp



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-cpvsnp.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-cpvsnp/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-cpvsnp/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-cpvsnp/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-cpvsnp
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-cpvsnp/status
                :target: https://quay.io/repository/biocontainers/bioconductor-cpvsnp

