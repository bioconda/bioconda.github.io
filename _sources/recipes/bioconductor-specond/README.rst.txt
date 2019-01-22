.. _`bioconductor-specond`:

bioconductor-specond
====================

|downloads|

This package performs a gene expression data analysis to detect condition\-specific genes. Such genes are significantly up\- or down\-regulated in a small number of conditions. It does so by fitting a mixture of normal distributions to the expression values. Conditions can be environmental conditions\, different tissues\, organs or any other sources that you wish to compare in terms of gene expression.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/SpeCond.html
Versions      1.34.0, 1.32.0, 1.30.0
License       LGPL (>=2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specond



Links         biotools: :biotools:`specond`, doi: :doi:`10.1186/gb-2011-12-12-413`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-specond

and update with::

   conda update bioconductor-specond



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-specond.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-specond/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-specond/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-specond/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-specond
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-specond/status
                :target: https://quay.io/repository/biocontainers/bioconductor-specond

