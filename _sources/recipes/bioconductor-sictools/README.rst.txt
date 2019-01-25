.. _`bioconductor-sictools`:

bioconductor-sictools
=====================

|downloads|

This package is to find SNV\/Indel differences between two bam files with near relationship in a way of pairwise comparison thourgh each base position across the genome region of interest. The difference is inferred by fisher test and euclidean distance\, the input of which is the base count \(A\,T\,G\,C\) in a given position and read counts for indels that span no less than 2bp on both sides of indel region.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/SICtools.html
Versions      
License       GPL (>=2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-sictools/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sictools

and update with::

   conda update bioconductor-sictools



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sictools.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sictools/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sictools/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sictools/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sictools
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sictools/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sictools

