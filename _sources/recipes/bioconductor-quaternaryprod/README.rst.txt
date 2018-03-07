.. _`bioconductor-quaternaryprod`:

bioconductor-quaternaryprod
===========================

|downloads|

QuaternaryProd is an R package that performs causal reasoning on biological networks\, including publicly available networks such as STRINGdb. QuaternaryProd is an open\-sorce alternative to commercial products such as Quiagen and Inginuity pathway analysis. For a given a set of differentially expressed genes\, QuaternaryProd computes the significance of upstream regulators in the network by performing causal reasoning using the Quaternary Dot Product Scoring Statistic \(Quaternary Statistic\)\, Ternary Dot product Scoring Statistic \(Ternary Statistic\) and Fisher\'s exact test. The Quaternary Statistic handles signed\, unsigned and ambiguous edges in the network. Ambiguity arises when the direction of causality is unknown\, or when the source node \(e.g.\, a protein\) has edges with conflicting signs for the same target gene. On the other hand\, the Ternary Statistic provides causal reasoning using the signed and unambiguous edges only. The Vignette provides more details on the Quaternary Statistic and illustrates an example of how to perform causal reasoning using STRINGdb.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/QuaternaryProd.html
Versions      1.6.0
License       GPL (>=3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quaternaryprod



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-quaternaryprod

and update with::

   conda update bioconductor-quaternaryprod



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-quaternaryprod.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-quaternaryprod/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-quaternaryprod/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-quaternaryprod/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-quaternaryprod
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-quaternaryprod/status
                :target: https://quay.io/repository/biocontainers/bioconductor-quaternaryprod

