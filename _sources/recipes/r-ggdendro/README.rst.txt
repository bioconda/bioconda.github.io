.. _`r-ggdendro`:

r-ggdendro
==========

|downloads|

This is a set of tools for dendrograms and tree plots using 'ggplot2'.  The 'ggplot2' philosophy is to clearly separate data from the presentation. Unfortunately the plot method for dendrograms plots directly to a plot device without exposing the data. The 'ggdendro' package resolves this by making available functions that extract the dendrogram plot data. The package  provides implementations for tree, rpart, as well as diana and agnes cluster diagrams.

======== ===========
Home     https://github.com/andrie/ggdendro
Versions 0.1_17
License  GPL-2 | GPL-3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggdendro
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-ggdendro

and update with::

   conda update r-ggdendro



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-ggdendro.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-ggdendro/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-ggdendro/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-ggdendro/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-ggdendro
.. |docker| image:: https://quay.io/repository/biocontainers/r-ggdendro/status
                :target: https://quay.io/repository/biocontainers/r-ggdendro


