.. _`bioconductor-qusage`:

bioconductor-qusage
===================

|downloads|

This package is an implementation the Quantitative Set Analysis for Gene Expression \(QuSAGE\) method described in \(Yaari G. et al\, Nucl Acids Res\, 2013\). This is a novel Gene Set Enrichment\-type test\, which is designed to provide a faster\, more accurate\, and easier to understand test for gene expression studies. qusage accounts for inter\-gene correlations using the Variance Inflation Factor technique proposed by Wu et al. \(Nucleic Acids Res\, 2012\). In addition\, rather than simply evaluating the deviation from a null hypothesis with a single number \(a P value\)\, qusage quantifies gene set activity with a complete probability density function \(PDF\). From this PDF\, P values and confidence intervals can be easily extracted. Preserving the PDF also allows for post\-hoc analysis \(e.g.\, pair\-wise comparisons of gene set activity\) while maintaining statistical traceability. Finally\, while qusage is compatible with individual gene statistics from existing methods \(e.g.\, LIMMA\)\, a Welch\-based method is implemented that is shown to improve specificity. For questions\, contact Chris Bolen \(cbolen1\@gmail.com\) or Steven Kleinstein \(steven.kleinstein\@yale.edu\)

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/qusage.html
Versions      2.14.0, 2.12.0, 2.10.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qusage



Links         biotools: :biotools:`qusage`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-qusage

and update with::

   conda update bioconductor-qusage



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-qusage.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-qusage/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-qusage/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-qusage/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-qusage
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-qusage/status
                :target: https://quay.io/repository/biocontainers/bioconductor-qusage

