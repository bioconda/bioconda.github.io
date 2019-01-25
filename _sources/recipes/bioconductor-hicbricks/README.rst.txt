.. _`bioconductor-hicbricks`:

bioconductor-hicbricks
======================

|downloads|

A flexible framework for storing and accessing high\-resolution Hi\-C data through HDF files. HiCBricks allows import of Hi\-C data through various formats such as the 2D matrix format or a generalized n\-column table formats. In terms of access\, HiCBricks offers functions to retrieve values from genomic loci separated by a certain distance\, or the ability to fetch matrix subsets using word alike terms. HiCBricks will at a later point offer the ability to fetch multiple matrix subsets using fewer calls. It offers the capacity to store GenomicRanges that may be associated to a particular Hi\-C experiment\, to do basic ranges overlap \(any\, within\) with the Hi\-C experiment associated Ranges object and also to store any metadata that users may think to be relevant for their Hi\-C experiment. Finally\, you can do TAD calls with LSD and create pretty heatmaps.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/HiCBricks.html
Versions      
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-hicbricks/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-hicbricks

and update with::

   conda update bioconductor-hicbricks



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-hicbricks.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-hicbricks/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-hicbricks/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-hicbricks/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-hicbricks
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-hicbricks/status
                :target: https://quay.io/repository/biocontainers/bioconductor-hicbricks

