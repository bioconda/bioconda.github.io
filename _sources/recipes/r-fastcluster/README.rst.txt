.. _`r-fastcluster`:

r-fastcluster
=============

|downloads|

This is a two-in-one package which provides interfaces to both R and Python. It implements fast hierarchical, agglomerative clustering routines. Part of the functionality is designed as drop-in replacement for existing routines: linkage() in the SciPy package 'scipy.cluster.hierarchy', hclust() in R's 'stats' package, and the 'flashClust' package. It provides the same functionality with the benefit of a much faster implementation. Moreover, there are memory-saving routines for clustering of vector data, which go beyond what the existing packages provide. For information on how to install the Python files, see the file INSTALL in the source distribution.

======== ===========
Home     http://danifold.net/fastcluster.html
Versions 1.1.20
License  FreeBSD | GPL-2 | file LICENSE
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fastcluster
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-fastcluster

and update with::

   conda update r-fastcluster



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-fastcluster.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-fastcluster/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-fastcluster/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-fastcluster/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-fastcluster
.. |docker| image:: https://quay.io/repository/biocontainers/r-fastcluster/status
                :target: https://quay.io/repository/biocontainers/r-fastcluster


