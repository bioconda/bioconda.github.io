.. _`bioconductor-pgca`:

bioconductor-pgca
=================

|downloads|

Protein Group Code Algorithm \(PGCA\) is a computationally inexpensive algorithm to merge protein summaries from multiple experimental quantitative proteomics data. The algorithm connects two or more groups with overlapping accession numbers. In some cases\, pairwise groups are mutually exclusive but they may still be connected by another group \(or set of groups\) with overlapping accession numbers. Thus\, groups created by PGCA from multiple experimental runs \(i.e.\, global groups\) are called \"connected\" groups. These identified global protein groups enable the analysis of quantitative data available for protein groups instead of unique protein identifiers.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/pgca.html
Versions      
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-pgca/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-pgca

and update with::

   conda update bioconductor-pgca



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-pgca.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-pgca/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-pgca/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-pgca/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-pgca
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-pgca/status
                :target: https://quay.io/repository/biocontainers/bioconductor-pgca

