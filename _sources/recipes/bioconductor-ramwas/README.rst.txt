.. _`bioconductor-ramwas`:

bioconductor-ramwas
===================

|downloads|

A complete toolset for methylome\-wide association studies \(MWAS\). It is specifically designed for data from enrichment based methylation assays\, but can be applied to other data as well. The analysis pipeline includes seven steps\: \(1\) scanning aligned reads from BAM files\, \(2\) calculation of quality control measures\, \(3\) creation of methylation score \(coverage\) matrix\, \(4\) principal component analysis for capturing batch effects and detection of outliers\, \(5\) association analysis with respect to phenotypes of interest while correcting for top PCs and known covariates\, \(6\) annotation of significant findings\, and \(7\) multi\-marker analysis \(methylation risk score\) using elastic net. Additionally\, RaMWAS include tools for joint analysis of methlyation and genotype data. This work is published in Bioinformatics\, Shabalin et al. \(2018\) \<doi\:10.1093\/bioinformatics\/bty069\>.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/ramwas.html
Versions      1.6.0
License       LGPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-ramwas/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-ramwas

and update with::

   conda update bioconductor-ramwas



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-ramwas.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-ramwas/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-ramwas/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-ramwas/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-ramwas
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-ramwas/status
                :target: https://quay.io/repository/biocontainers/bioconductor-ramwas

