.. _`bioconductor-desingle`:

bioconductor-desingle
=====================

|downloads|

DEsingle is an R package for differential expression \(DE\) analysis of single\-cell RNA\-seq \(scRNA\-seq\) data. It defines and detects 3 types of differentially expressed genes between two groups of single cells\, with regard to different expression status \(DEs\)\, differential expression abundance \(DEa\)\, and general differential expression \(DEg\). DEsingle employs Zero\-Inflated Negative Binomial model to estimate the proportion of real and dropout zeros and to define and detect the 3 types of DE genes. Results showed that DEsingle outperforms existing methods for scRNA\-seq DE analysis\, and can reveal different types of DE genes that are enriched in different biological functions.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DEsingle.html
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-desingle/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-desingle

and update with::

   conda update bioconductor-desingle



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-desingle.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-desingle/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-desingle/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-desingle/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-desingle
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-desingle/status
                :target: https://quay.io/repository/biocontainers/bioconductor-desingle

