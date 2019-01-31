.. _`bioconductor-methylmix`:

bioconductor-methylmix
======================

|downloads|

MethylMix is an algorithm implemented to identify hyper and hypomethylated genes for a disease. MethylMix is based on a beta mixture model to identify methylation states and compares them with the normal DNA methylation state. MethylMix uses a novel statistic\, the Differential Methylation value or DM\-value defined as the difference of a methylation state with the normal methylation state. Finally\, matched gene expression data is used to identify\, besides differential\, functional methylation states by focusing on methylation changes that effect gene expression. References\: Gevaert 0. MethylMix\: an R package for identifying DNA methylation\-driven genes. Bioinformatics \(Oxford\, England\). 2015\;31\(11\)\:1839\-41. doi\:10.1093\/bioinformatics\/btv020. Gevaert O\, Tibshirani R\, Plevritis SK. Pancancer analysis of DNA methylation\-driven genes using MethylMix. Genome Biology. 2015\;16\(1\)\:17. doi\:10.1186\/s13059\-014\-0579\-8.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/MethylMix.html
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-methylmix/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-methylmix

and update with::

   conda update bioconductor-methylmix



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-methylmix.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-methylmix/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-methylmix/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-methylmix/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-methylmix
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-methylmix/status
                :target: https://quay.io/repository/biocontainers/bioconductor-methylmix

