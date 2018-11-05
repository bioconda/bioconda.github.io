.. _`bioconductor-cnanorm`:

bioconductor-cnanorm
====================

|downloads|

Performs ratio\, GC content correction and normalization of data obtained using low coverage \(one read every 100\-10\,000 bp\) high troughput sequencing. It performs a \"discrete\" normalization looking for the ploidy of the genome. It will also provide tumour content if at least two ploidy states can be found.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/CNAnorm.html
Versions      1.22.1, 1.24.0, 1.26.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnanorm



Links         biotools: :biotools:`cnanorm`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-cnanorm

and update with::

   conda update bioconductor-cnanorm



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-cnanorm.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-cnanorm/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-cnanorm/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-cnanorm/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-cnanorm
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-cnanorm/status
                :target: https://quay.io/repository/biocontainers/bioconductor-cnanorm

