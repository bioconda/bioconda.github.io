.. _`bioconductor-prebs`:

bioconductor-prebs
==================

|downloads|

The prebs package aims at making RNA\-sequencing \(RNA\-seq\) data more comparable to microarray data. The comparability is achieved by summarizing sequencing\-based expressions of probe regions using a modified version of RMA algorithm. The pipeline takes mapped reads in BAM format as an input and produces either gene expressions or original microarray probe set expressions as an output.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/prebs.html
Versions      1.18.0, 1.20.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prebs



Links         biotools: :biotools:`prebs`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-prebs

and update with::

   conda update bioconductor-prebs



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-prebs.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-prebs/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-prebs/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-prebs/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-prebs
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-prebs/status
                :target: https://quay.io/repository/biocontainers/bioconductor-prebs

