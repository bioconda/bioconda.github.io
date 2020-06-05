:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcmap'
.. highlight: bash

bioconductor-gcmap
==================

.. conda:recipe:: bioconductor-gcmap
   :replaces_section_title:
   :noindex:

   Tools for Connectivity Map\-like analyses

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/gCMAP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gcmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcmap/meta.yaml>`_

   The gCMAP package provides a toolkit for comparing differential gene expression profiles through gene set enrichment analysis. Starting from normalized microarray or RNA\-seq gene expression values \(stored in lists of ExpressionSet and CountDataSet objects\) the package performs differential expression analysis using the limma or DESeq packages. Supplying a simple list of gene identifiers\, global differential expression profiles or data from complete experiments as input\, users can use a unified set of several well\-known gene set enrichment analysis methods to retrieve experiments with similar changes in gene expression. To take into account the directionality of gene expression changes\, gCMAPQuery introduces the SignedGeneSet class\, directly extending GeneSet from the GSEABase package.  To increase performance of large queries\, multiple gene sets are stored as sparse incidence matrices within CMAPCollection eSets. gCMAP offers implementations of 1. Fisher\'s exact test \(Fisher\, J R Stat Soc\, 1922\) 2. The \"connectivity map\" method \(Lamb et al\, Science\, 2006\) 3. Parametric and non\-parametric t\-statistic summaries \(Jiang \& Gentleman\, Bioinformatics\, 2007\) and 4. Wilcoxon \/ Mann\-Whitney rank sum statistics \(Wilcoxon\, Biometrics Bulletin\, 1945\) as well as wrappers for the 5. camera \(Wu \& Smyth\, Nucleic Acid Res\, 2012\) 6. mroast and romer \(Wu et al\, Bioinformatics\, 2010\) functions from the limma package and 7. wraps the gsea method from the mgsa package \(Bauer et al\, NAR\, 2010\). All methods return CMAPResult objects\, an S4 class inheriting from AnnotatedDataFrame\, containing enrichment statistics as well as annotation data and providing simple high\-level summary plots.


.. conda:package:: bioconductor-gcmap

   |downloads_bioconductor-gcmap| |docker_bioconductor-gcmap|

   :versions:
      
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``

      

   
   :depends bioconductor-annotate: ``>=1.66.0,<1.67.0``
   :depends bioconductor-annotationdbi: ``>=1.50.0,<1.51.0``
   :depends bioconductor-bigmemoryextras: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-category: ``>=2.54.0,<2.55.0``
   :depends bioconductor-deseq: ``>=1.39.0,<1.40.0``
   :depends bioconductor-genefilter: ``>=1.70.0,<1.71.0``
   :depends bioconductor-gseabase: ``>=1.50.0,<1.51.0``
   :depends bioconductor-gsealm: ``>=1.48.0,<1.49.0``
   :depends bioconductor-limma: ``>=3.44.0,<3.45.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-bigmemory: 
   :depends r-matrix: ``>=1.0.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcmap

   and update with::

      conda update bioconductor-gcmap

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcmap:<tag>

   (see `bioconductor-gcmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcmap
   :alt:   (downloads)
.. |docker_bioconductor-gcmap| image:: https://quay.io/repository/biocontainers/bioconductor-gcmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcmap
.. _`bioconductor-gcmap/tags`: https://quay.io/repository/biocontainers/bioconductor-gcmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcmap/README.html