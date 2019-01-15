.. _`bioconductor-methylumi`:

bioconductor-methylumi
======================

|downloads|

This package provides classes for holding and manipulating Illumina methylation data.  Based on eSet\, it can contain MIAME information\, sample information\, feature information\, and multiple matrices of data.  An \"intelligent\" import function\, methylumiR can read the Illumina text files and create a MethyLumiSet. methylumIDAT can directly read raw IDAT files from HumanMethylation27 and HumanMethylation450 microarrays.  Normalization\, background correction\, and quality control features for GoldenGate\, Infinium\, and Infinium HD arrays are also included.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/methylumi.html
Versions      2.26.0, 2.24.1, 2.22.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylumi



Links         biotools: :biotools:`methylumi`, doi: :doi:`10.1186/1471-2164-14-293`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-methylumi

and update with::

   conda update bioconductor-methylumi



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-methylumi.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-methylumi/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-methylumi/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-methylumi/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-methylumi
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-methylumi/status
                :target: https://quay.io/repository/biocontainers/bioconductor-methylumi

