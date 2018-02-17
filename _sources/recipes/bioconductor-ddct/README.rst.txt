.. _`bioconductor-ddct`:

bioconductor-ddct
=================

|downloads|

The Delta-Delta-Ct (ddCt) Algorithm is an approximation method to determine relative gene expression with quantitative real-time PCR (qRT-PCR) experiments. Compared to other approaches, it requires no standard curve for each primer-target pair, therefore reducing the working load and yet returning accurate enough results as long as the assumptions of the amplification efficiency hold. The ddCt package implements a pipeline to collect, analyse and visualize qRT-PCR results, for example those from TaqMan SDM software, mainly using the ddCt method. The pipeline can be either invoked by a script in command-line or through the API consisting of S4-Classes, methods and functions.

======== ===========
Home     http://bioconductor.org/packages/3.6/bioc/html/ddCt.html
Versions 1.34.0
License  LGPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ddct
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-ddct

and update with::

   conda update bioconductor-ddct



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-ddct.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-ddct/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-ddct/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-ddct/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-ddct
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-ddct/status
                :target: https://quay.io/repository/biocontainers/bioconductor-ddct


