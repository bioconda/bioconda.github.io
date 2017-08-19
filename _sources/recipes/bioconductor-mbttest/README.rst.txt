.. _`bioconductor-mbttest`:

bioconductor-mbttest
====================

|downloads|

MBttest method was developed from beta t-test method of Baggerly et al(2003). Compared to baySeq (Hard castle and Kelly 2010), DESeq (Anders and Huber 2010) and exact test (Robinson and Smyth 2007, 2008) and the GLM of McCarthy et al(2012), MBttest is of high work efficiency,that is, it has high power, high conservativeness of FDR estimation and high stability. MBttest is suit- able to transcriptomic data, tag data, SAGE data (count data) from small samples or a few replicate libraries. It can be used to identify genes, mRNA isoforms or tags differentially expressed between two conditions.

======== ===========
Home     http://bioconductor.org/packages/3.5/bioc/html/MBttest.html
Versions 
License  GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbttest
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-mbttest

and update with::

   conda update bioconductor-mbttest



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-mbttest.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-mbttest/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-mbttest/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-mbttest/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-mbttest
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-mbttest/status
                :target: https://quay.io/repository/biocontainers/bioconductor-mbttest


