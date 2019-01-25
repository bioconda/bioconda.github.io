.. _`bioconductor-anota2seq`:

bioconductor-anota2seq
======================

|downloads|

anota2seq provides analysis of translational efficiency and differential expression analysis for polysome\-profiling and ribosome\-profiling studies \(two or more sample classes\) quantified by RNA sequencing or DNA\-microarray. Polysome\-profiling and ribosome\-profiling typically generate data for two RNA sources\; translated mRNA and total mRNA. Analysis of differential expression is used to estimate changes within each RNA source \(i.e. translated mRNA or total mRNA\). Analysis of translational efficiency aims to identify changes in translation efficiency leading to altered protein levels that are independent of total mRNA levels \(i.e. changes in translated mRNA that are independent of levels of total mRNA\) or buffering\, a mechanism regulating translational efficiency so that protein levels remain constant despite fluctuating total mRNA levels \(i.e. changes in total mRNA that are independent of levels of translated mRNA\). anota2seq applies analysis of partial variance and the random variance model to fulfill these tasks.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/anota2seq.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-anota2seq/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-anota2seq

and update with::

   conda update bioconductor-anota2seq



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-anota2seq.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-anota2seq/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-anota2seq/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-anota2seq/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-anota2seq
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-anota2seq/status
                :target: https://quay.io/repository/biocontainers/bioconductor-anota2seq

