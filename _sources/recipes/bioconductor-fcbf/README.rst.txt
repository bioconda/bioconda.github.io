.. _`bioconductor-fcbf`:

bioconductor-fcbf
=================

|downloads|

This package provides a simple R implementation for the Fast Correlation Based Filter described in Yu\, L. and Liu\, H.\; Feature Selection for High\-Dimensional Data\: A Fast Correlation Based Filter Solution\,Proc. 20th Intl. Conf. Mach. Learn. \(ICML\-2003\)\, Washington DC\, 2003 The current package is an intent to make easier for bioinformaticians to use FCBF for feature selection\, especially regarding transcriptomic data.This implies discretizing expression \(function discretize\_exprs\) before calculating the features that explain the class\, but are not predictable by other features. The functions are implemented based on the algorithm of Yu and Liu\, 2003 and Rajarshi Guha\'s implementation from 13\/05\/2005 available \(as of 26\/08\/2018\) at http\:\/\/www.rguha.net\/code\/R\/fcbf.R .

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/FCBF.html
Versions      
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-fcbf/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-fcbf

and update with::

   conda update bioconductor-fcbf



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-fcbf.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-fcbf/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-fcbf/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-fcbf/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-fcbf
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-fcbf/status
                :target: https://quay.io/repository/biocontainers/bioconductor-fcbf

