.. _`bioconductor-gcmap`:

bioconductor-gcmap
==================

|downloads|

The gCMAP package provides a toolkit for comparing differential gene expression profiles through gene set enrichment analysis. Starting from normalized microarray or RNA\-seq gene expression values \(stored in lists of ExpressionSet and CountDataSet objects\) the package performs differential expression analysis using the limma or DESeq packages. Supplying a simple list of gene identifiers\, global differential expression profiles or data from complete experiments as input\, users can use a unified set of several well\-known gene set enrichment analysis methods to retrieve experiments with similar changes in gene expression. To take into account the directionality of gene expression changes\, gCMAPQuery introduces the SignedGeneSet class\, directly extending GeneSet from the GSEABase package.  To increase performance of large queries\, multiple gene sets are stored as sparse incidence matrices within CMAPCollection eSets. gCMAP offers implementations of 1. Fisher\'s exact test \(Fisher\, J R Stat Soc\, 1922\) 2. The \"connectivity map\" method \(Lamb et al\, Science\, 2006\) 3. Parametric and non\-parametric t\-statistic summaries \(Jiang \& Gentleman\, Bioinformatics\, 2007\) and 4. Wilcoxon \/ Mann\-Whitney rank sum statistics \(Wilcoxon\, Biometrics Bulletin\, 1945\) as well as wrappers for the 5. camera \(Wu \& Smyth\, Nucleic Acid Res\, 2012\) 6. mroast and romer \(Wu et al\, Bioinformatics\, 2010\) functions from the limma package and 7. wraps the gsea method from the mgsa package \(Bauer et al\, NAR\, 2010\). All methods return CMAPResult objects\, an S4 class inheriting from AnnotatedDataFrame\, containing enrichment statistics as well as annotation data and providing simple high\-level summary plots.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/gCMAP.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-gcmap/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gcmap

and update with::

   conda update bioconductor-gcmap



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gcmap.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gcmap/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gcmap/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gcmap/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gcmap
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gcmap/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gcmap

