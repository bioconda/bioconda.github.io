.. _`bioconductor-aldex2`:

bioconductor-aldex2
===================

|downloads|

A differential abundance analysis for the comparison of two or more conditions. For example, single-organism and meta-RNA-seq high-throughput sequencing assays, or of selected and unselected values from in-vitro sequence selections. Uses a Dirichlet-multinomial model to infer abundance from counts, that has been optimized for three or more experimental replicates. Infers sampling variation and calculates the expected false discovery rate given the biological and sampling variation using the Wilcox rank test or Welches t-test (aldex.ttest) or the glm and Kruskal Wallis tests (aldex.glm). Reports both P and fdr values calculated by the Benjamini Hochberg correction.

======== ===========
Home     http://bioconductor.org/packages/3.5/bioc/html/ALDEx2.html
Versions 1.10.0, 1.8.0
License  file LICENSE
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aldex2
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-aldex2

and update with::

   conda update bioconductor-aldex2



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-aldex2.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-aldex2/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-aldex2/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-aldex2/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-aldex2
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-aldex2/status
                :target: https://quay.io/repository/biocontainers/bioconductor-aldex2


