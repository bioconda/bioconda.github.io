.. _`bioconductor-gostag`:

bioconductor-gostag
===================

|downloads|

Gene lists derived from the results of genomic analyses are rich in biological information. For instance\, differentially expressed genes \(DEGs\) from a microarray or RNA\-Seq analysis are related functionally in terms of their response to a treatment or condition. Gene lists can vary in size\, up to several thousand genes\, depending on the robustness of the perturbations or how widely different the conditions are biologically. Having a way to associate biological relatedness between hundreds and thousands of genes systematically is impractical by manually curating the annotation and function of each gene. Over\-representation analysis \(ORA\) of genes was developed to identify biological themes. Given a Gene Ontology \(GO\) and an annotation of genes that indicate the categories each one fits into\, significance of the over\-representation of the genes within the ontological categories is determined by a Fisher\'s exact test or modeling according to a hypergeometric distribution. Comparing a small number of enriched biological categories for a few samples is manageable using Venn diagrams or other means for assessing overlaps. However\, with hundreds of enriched categories and many samples\, the comparisons are laborious. Furthermore\, if there are enriched categories that are shared between samples\, trying to represent a common theme across them is highly subjective. goSTAG uses GO subtrees to tag and annotate genes within a set. goSTAG visualizes the similarities between the over\-representation of DEGs by clustering the p\-values from the enrichment statistical tests and labels clusters with the GO term that has the most paths to the root within the subtree generated from all the GO terms in the cluster.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/goSTAG.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-gostag/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gostag

and update with::

   conda update bioconductor-gostag



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gostag.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gostag/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gostag/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gostag/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gostag
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gostag/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gostag

