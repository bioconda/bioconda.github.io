.. _`bioconductor-lpe`:

bioconductor-lpe
================

|downloads|

This LPE library is used to do significance analysis of microarray data with small number of replicates\. It uses resampling based FDR adjustment\, and gives less conservative results than traditional \'BH\' or \'BY\' procedures\. Data accepted is raw data in txt format from MAS4\, MAS5 or dChip\. Data can also be supplied after normalization\. LPE library is primarily used for analyzing data between two conditions\. To use it for paired data\, see LPEP library\. For using LPE in multiple conditions\, use HEM library\.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/LPE.html
Versions 1.52.0
License  LGPL
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpe

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-lpe

and update with::

   conda update bioconductor-lpe



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-lpe.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-lpe/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-lpe/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-lpe/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-lpe
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-lpe/status
                :target: https://quay.io/repository/biocontainers/bioconductor-lpe

