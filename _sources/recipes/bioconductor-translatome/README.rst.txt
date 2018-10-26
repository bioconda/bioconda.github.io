.. _`bioconductor-translatome`:

bioconductor-translatome
========================

|downloads|

Detection of differentially expressed genes \(DEGs\) from the comparison of two biological conditions \(treated vs. untreated\, diseased vs. normal\, mutant vs. wild\-type\) among different levels of gene expression \(transcriptome \,translatome\, proteome\)\, using several statistical methods\:  Rank Product\, Translational Efficiency\, t\-test\, SAM\, Limma\, ANOTA\, DESeq\, edgeR. Possibility to plot the results with scatterplots\, histograms\, MA plots\, standard deviation \(SD\) plots\, coefficient of variation \(CV\) plots. Detection of significantly enriched post\-transcriptional regulatory factors \(RBPs\, miRNAs\, etc\) and Gene Ontology terms in the lists of DEGs previously identified for the two expression levels. Comparison of GO terms enriched only in one of the levels or in both. Calculation of the semantic similarity score between the lists of enriched GO terms coming from the two expression levels. Visual examination and comparison of the enriched terms with heatmaps\, radar plots and barplots.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/tRanslatome.html
Versions      1.16.0, 1.18.5
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-translatome



Links         biotools: :biotools:`translatome`, doi: :doi:`10.1093/bioinformatics/btt634`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-translatome

and update with::

   conda update bioconductor-translatome



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-translatome.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-translatome/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-translatome/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-translatome/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-translatome
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-translatome/status
                :target: https://quay.io/repository/biocontainers/bioconductor-translatome

