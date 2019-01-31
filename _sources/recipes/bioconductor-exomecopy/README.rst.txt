.. _`bioconductor-exomecopy`:

bioconductor-exomecopy
======================

|downloads|

Detection of copy number variants \(CNV\) from exome sequencing samples\, including unpaired samples.  The package implements a hidden Markov model which uses positional covariates\, such as background read depth and GC\-content\, to simultaneously normalize and segment the samples into regions of constant copy count.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/exomeCopy.html
Versions      1.26.0, 1.24.0, 1.22.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-exomecopy/meta.yaml



Links         biotools: :biotools:`exomecopy`, doi: :doi:`10.2202/1544-6115.1732`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-exomecopy

and update with::

   conda update bioconductor-exomecopy



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-exomecopy.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-exomecopy/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-exomecopy/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-exomecopy/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-exomecopy
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-exomecopy/status
                :target: https://quay.io/repository/biocontainers/bioconductor-exomecopy

