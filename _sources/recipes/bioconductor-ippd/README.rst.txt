.. _`bioconductor-ippd`:

bioconductor-ippd
=================

|downloads|

The package provides functionality to extract isotopic peak patterns from raw mass spectra. This is done by fitting a large set of template basis functions to the raw spectrum using either nonnegative least squares or least absolute deviation fittting. The package offers a flexible function which tries to estimate model parameters in a way tailored to the peak shapes in the data. The package also provides functionality to process LCMS runs.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/IPPD.html
Versions      1.28.0, 1.26.0
License       GPL (version 2 or later)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ippd



Links         biotools: :biotools:`ippd`, doi: :doi:`10.1186/1471-2105-13-291`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-ippd

and update with::

   conda update bioconductor-ippd



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-ippd.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-ippd/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-ippd/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-ippd/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-ippd
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-ippd/status
                :target: https://quay.io/repository/biocontainers/bioconductor-ippd

