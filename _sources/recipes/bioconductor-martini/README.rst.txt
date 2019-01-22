.. _`bioconductor-martini`:

bioconductor-martini
====================

|downloads|

martini deals with the low power inherent to GWAS studies by using prior knowledge represented as a network. SNPs are the vertices of the network\, and the edges represent biological relationships between them \(genomic adjacency\, belonging to the same gene\, physical interaction between protein products\). The network is scanned using SConES\, which looks for groups of SNPs maximally associated with the phenotype\, that form a close subnetwork.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/martini.html
Versions      
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-martini



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-martini

and update with::

   conda update bioconductor-martini



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-martini.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-martini/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-martini/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-martini/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-martini
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-martini/status
                :target: https://quay.io/repository/biocontainers/bioconductor-martini

