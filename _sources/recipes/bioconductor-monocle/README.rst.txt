.. _`r-monocle`:

r-monocle
=========

|downloads|

Monocle performs differential expression and time-series analysis for single-cell expression experiments. It orders individual cells according to progress through a biological process, without knowing ahead of time which genes define progress through that process. Monocle also performs differential expression analysis, clustering, visualization, and other useful tasks on single cell expression data.  It is designed to work with RNA-Seq and qPCR data, but could be used with other types as well.

======== ===========
Home     http://bioconductor.org/packages/release/bioc/html/monocle.html
Versions 2.4.0
License  Artistic-2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-monocle
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-monocle

and update with::

   conda update r-monocle



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-monocle.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-monocle/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-monocle/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-monocle/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-monocle
.. |docker| image:: https://quay.io/repository/biocontainers/r-monocle/status
                :target: https://quay.io/repository/biocontainers/r-monocle


