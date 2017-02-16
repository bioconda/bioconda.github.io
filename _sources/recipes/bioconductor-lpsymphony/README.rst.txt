.. _`bioconductor-lpsymphony`:

bioconductor-lpsymphony
=======================

|downloads|

This package was derived from Rsymphony_0.1-17 from CRAN. These packages provide an R interface to SYMPHONY, an open-source linear programming solver written in C++. The main difference between this package and Rsymphony is that it includes the solver source code (SYMPHONY version 5.6), while Rsymphony expects to find header and library files on the users' system. Thus the intention of lpsymphony is to provide an easy to install interface to SYMPHONY. For Windows, precompiled DLLs are included in this package.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/lpsymphony.html
Versions 1.2.0
License  EPL
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpsymphony
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-lpsymphony

and update with::

   conda update bioconductor-lpsymphony



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-lpsymphony.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-lpsymphony/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-lpsymphony/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-lpsymphony/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-lpsymphony
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-lpsymphony/status
                :target: https://quay.io/repository/biocontainers/bioconductor-lpsymphony


