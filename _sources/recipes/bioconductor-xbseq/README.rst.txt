.. _`bioconductor-xbseq`:

bioconductor-xbseq
==================

|downloads|

We developed a novel algorithm\, XBSeq\, where a statistical model was established based on the assumption that observed signals are the convolution of true expression signals and sequencing noises\. The mapped reads in non\-exonic regions are considered as sequencing noises\, which follows a Poisson distribution\. Given measureable observed and noise signals from RNA\-seq data\, true expression signals\, assuming governed by the negative binomial distribution\, can be delineated and thus the accurate detection of differential expressed genes\.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/XBSeq.html
Versions      1.6.0, 1.8.0
License       GPL (>=3)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xbseq



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-xbseq

and update with::

   conda update bioconductor-xbseq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-xbseq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-xbseq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-xbseq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-xbseq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-xbseq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-xbseq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-xbseq

