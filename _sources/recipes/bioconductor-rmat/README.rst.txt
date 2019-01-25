.. _`bioconductor-rmat`:

bioconductor-rmat
=================

|downloads|

This package is an R version of the package MAT and contains functions to parse and merge Affymetrix BPMAP and CEL tiling array files \(using C\+\+ based Fusion SDK and Bioconductor package affxparser\)\, normalize tiling arrays using sequence specific models\, detect enriched regions from ChIP\-chip experiments. Note\: users should have GSL and GenomeGraphs installed. Windows users\: \'consult the README file available in the inst directory of the source distribution for necessary configuration instructions\'. Snow Leopard users can take advantage of increase speed with Grand Central Dispatch\!

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/rMAT.html
Versions      3.30.0, 3.28.0, 3.26.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-rmat/meta.yaml



Links         biotools: :biotools:`rmat`, doi: :doi:`10.1093/bioinformatics/btq023`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rmat

and update with::

   conda update bioconductor-rmat



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rmat.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rmat/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rmat/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rmat/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rmat
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rmat/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rmat

