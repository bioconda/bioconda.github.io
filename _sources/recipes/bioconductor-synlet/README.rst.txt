.. _`bioconductor-synlet`:

bioconductor-synlet
===================

|downloads|

Select hits from synthetic lethal RNAi screen data\. For example\, there are two identical celllines except one gene is knocked\-down in one cellline\. The interest is to find genes that lead to stronger lethal effect when they are knocked\-down further by siRNA\. Quality control and various visualisation tools are implemented\. Four different algorithms could be used to pick up the interesting hits\. This package is designed based on 384 wells plates\, but may apply to other platforms with proper configuration\.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/synlet.html
Versions      1.8.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synlet



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-synlet

and update with::

   conda update bioconductor-synlet



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-synlet.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-synlet/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-synlet/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-synlet/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-synlet
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-synlet/status
                :target: https://quay.io/repository/biocontainers/bioconductor-synlet

