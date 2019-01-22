.. _`bioconductor-gpart`:

bioconductor-gpart
==================

|downloads|

we provide a new SNP sequence partitioning method which partitions the whole SNP sequence based on not only LD block structures but also gene location information. The LD block construction for GPART is performed using Big\-LD algorithm\, with additional improvement from previous version reported in Kim et al.\(2017\). We also add a visualization tool to show the LD heatmap with the information of LD block boundaries and gene locations in the package.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/gpart.html
Versions      
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpart



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gpart

and update with::

   conda update bioconductor-gpart



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gpart.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gpart/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gpart/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gpart/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gpart
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gpart/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gpart

