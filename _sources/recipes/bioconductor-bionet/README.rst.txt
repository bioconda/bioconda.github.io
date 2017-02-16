.. _`bioconductor-bionet`:

bioconductor-bionet
===================

|downloads|

This package provides functions for the integrated analysis of protein-protein interaction networks and the detection of functional modules. Different datasets can be integrated into the network by assigning p-values of statistical tests to the nodes of the network. E.g. p-values obtained from the differential expression of the genes from an Affymetrix array are assigned to the nodes of the network. By fitting a beta-uniform mixture model and calculating scores from the p-values, overall scores of network regions can be calculated and an integer linear programming algorithm identifies the maximum scoring subnetwork.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/BioNet.html
Versions 1.34.0
License  GPL (>= 2)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionet
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-bionet

and update with::

   conda update bioconductor-bionet



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-bionet.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-bionet/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-bionet/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-bionet/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-bionet
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-bionet/status
                :target: https://quay.io/repository/biocontainers/bioconductor-bionet


