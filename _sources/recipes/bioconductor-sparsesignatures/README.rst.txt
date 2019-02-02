.. _`bioconductor-sparsesignatures`:

bioconductor-sparsesignatures
=============================

|downloads|

Point mutations occurring in a genome can be divided into 96 categories based on the base being mutated\, the base it is mutated into and its two flanking bases. Therefore\, for any patient\, it is possible to represent all the point mutations occurring in that patient’s tumor as a vector of length 96\, where each element represents the count of mutations for a given category in the patient. A mutational signature represents the pattern of mutations produced by a mutagen or mutagenic process inside the cell. Each signature can also be represented by a vector of length 96\, where each element represents the probability that this particular mutagenic process generates a mutation of the 96 above mentioned categories. In this R package\, we provide a set of functions to extract and visualize the mutational signatures that best explain the mutation counts of a large number of patients.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/SparseSignatures.html
Versions      1.2.0
License       file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-sparsesignatures/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-sparsesignatures

and update with::

   conda update bioconductor-sparsesignatures



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-sparsesignatures.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-sparsesignatures/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-sparsesignatures/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-sparsesignatures/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-sparsesignatures
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-sparsesignatures/status
                :target: https://quay.io/repository/biocontainers/bioconductor-sparsesignatures

