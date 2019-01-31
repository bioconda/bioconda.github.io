.. _`bioconductor-pathwaysplice`:

bioconductor-pathwaysplice
==========================

|downloads|

Pathway analysis of alternative splicing would be biased without accounting for the different number of exons associated with each gene\, because genes with higher number of exons are more likely to be included in the \'significant\' gene list in alternative splicing. PathwaySplice is an R package that\: \(1\) performs pathway analysis that explicitly adjusts for the number of exons associated with each gene \(2\) visualizes selection bias due to different number of exons for each gene \(3\) formally tests for presence of bias using logistic regression \(4\) supports gene sets based on the Gene Ontology terms\, as well as more broadly defined gene sets \(e.g. MSigDB\) or user defined gene sets \(5\) identifies the significant genes driving pathway significance \(6\) organizes significant pathways with an enrichment map\, where pathways with large number of overlapping genes are grouped together in a network graph

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/PathwaySplice.html
Versions      
License       LGPL(>=2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-pathwaysplice/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-pathwaysplice

and update with::

   conda update bioconductor-pathwaysplice



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-pathwaysplice.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-pathwaysplice/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-pathwaysplice/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-pathwaysplice/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-pathwaysplice
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-pathwaysplice/status
                :target: https://quay.io/repository/biocontainers/bioconductor-pathwaysplice

