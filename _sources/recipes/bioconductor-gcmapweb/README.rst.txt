.. _`bioconductor-gcmapweb`:

bioconductor-gcmapweb
=====================

|downloads|

The gCMAPWeb R package provides a graphical user interface for the gCMAP package. gCMAPWeb uses the Rook package and can be used either on a local machine\, leveraging R\'s internal web server\, or run on a dedicated rApache web server installation. gCMAPWeb allows users to search their own data sources and instructions to generate reference datasets from public repositories are included with the package. The package supports three common types of analyses\, specifically queries with 1. one or two sets of query gene identifiers\, whose members are expected to show changes in gene expression in a consistent direction. For example\, an up\-regulated gene set might contain genes activated by a transcription factor\, a down\-regulated geneset targets repressed by the same factor. 2. a single set of query gene identifiers\, whose members are expected to show divergent differential expression \(non\-directional query\). For example\, members of a particular signaling pathway\, some of which may be up\- some down\-regulated in response to a stimulus. 3. a query with the complete results of a differential expression profiling experiment. For example\, gene identifiers and z\-scores from a previous perturbation experiment. gCMAPWeb accepts three types of identifiers\: EntreIds\, gene Symbols and microarray probe ids and can be configured to work with any species supported by Bioconductor. For each query submission\, significantly similar reference datasets will be identified and reported in graphical and tabular form.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/gCMAPWeb.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-gcmapweb/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gcmapweb

and update with::

   conda update bioconductor-gcmapweb



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gcmapweb.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gcmapweb/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gcmapweb/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gcmapweb/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gcmapweb
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gcmapweb/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gcmapweb

