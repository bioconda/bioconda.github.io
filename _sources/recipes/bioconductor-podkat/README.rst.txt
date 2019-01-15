.. _`bioconductor-podkat`:

bioconductor-podkat
===================

|downloads|

This package provides an association test that is capable of dealing with very rare and even private variants. This is accomplished by a kernel\-based approach that takes the positions of the variants into account. The test can be used for pre\-processed matrix data\, but also directly for variant data stored in VCF files. Association testing can be performed whole\-genome\, whole\-exome\, or restricted to pre\-defined regions of interest. The test is complemented by tools for analyzing and visualizing the results.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/podkat.html
Versions      1.12.0, 1.10.0, 1.8.0
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podkat



Links         biotools: :biotools:`podkat`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-podkat

and update with::

   conda update bioconductor-podkat



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-podkat.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-podkat/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-podkat/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-podkat/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-podkat
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-podkat/status
                :target: https://quay.io/repository/biocontainers/bioconductor-podkat

