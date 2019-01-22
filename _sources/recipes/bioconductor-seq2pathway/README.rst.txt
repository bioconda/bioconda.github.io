.. _`bioconductor-seq2pathway`:

bioconductor-seq2pathway
========================

|downloads|

Seq2pathway is a novel tool for functional gene\-set \(or termed as pathway\) analysis of next\-generation sequencing data\, consisting of \"seq2gene\" and \"gene2path\" components. The seq2gene links sequence\-level measurements of genomic regions \(including SNPs or point mutation coordinates\) to gene\-level scores\, and the gene2pathway summarizes gene scores to pathway\-scores for each sample. The seq2gene has the feasibility to assign both coding and non\-exon regions to a broader range of neighboring genes than only the nearest one\, thus facilitating the study of functional non\-coding regions. The gene2pathway takes into account the quantity of significance for gene members within a pathway compared those outside a pathway. The output of seq2pathway is a general structure of quantitative pathway\-level scores\, thus allowing one to functional interpret such datasets as RNA\-seq\, ChIP\-seq\, GWAS\, and derived from other next generational sequencing experiments.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/seq2pathway.html
Versions      1.12.0, 1.10.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq2pathway



Links         biotools: :biotools:`seq2pathway`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-seq2pathway

and update with::

   conda update bioconductor-seq2pathway



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-seq2pathway.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-seq2pathway/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-seq2pathway/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-seq2pathway/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-seq2pathway
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-seq2pathway/status
                :target: https://quay.io/repository/biocontainers/bioconductor-seq2pathway

