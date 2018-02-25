.. _`bioconductor-dexus`:

bioconductor-dexus
==================

|downloads|

DEXUS identifies differentially expressed genes in RNA\-Seq data under all possible study designs such as studies without replicates\, without sample groups\, and with unknown conditions\. DEXUS works also for known conditions\, for example for RNA\-Seq data with two or multiple conditions\. RNA\-Seq read count data can be provided both by the S4 class Count Data Set and by read count matrices\. Differentially expressed transcripts can be visualized by heatmaps\, in which unknown conditions\, replicates\, and samples groups are also indicated\. This software is fast since the core algorithm is written in C\. For very large data sets\, a parallel version of DEXUS is provided in this package\. DEXUS is a statistical model that is selected in a Bayesian framework by an EM algorithm\. DEXUS does not need replicates to detect differentially expressed transcripts\, since the replicates \(or conditions\) are estimated by the EM method for each transcript\. The method provides an informative\/non\-informative value to extract differentially expressed transcripts at a desired significance level or power\.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/dexus.html
Versions 1.18.0
License  LGPL (>= 2.0)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexus

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-dexus

and update with::

   conda update bioconductor-dexus



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-dexus.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-dexus/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-dexus/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-dexus/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-dexus
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-dexus/status
                :target: https://quay.io/repository/biocontainers/bioconductor-dexus

