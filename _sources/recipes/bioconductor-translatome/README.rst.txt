:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-translatome'
.. highlight: bash

bioconductor-translatome
========================

.. conda:recipe:: bioconductor-translatome
   :replaces_section_title:
   :noindex:

   Comparison between multiple levels of gene expression

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/tRanslatome.html
   :license: GPL-3
   :recipe: /`bioconductor-translatome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-translatome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-translatome/meta.yaml>`_

   Detection of differentially expressed genes \(DEGs\) from the comparison of two biological conditions \(treated vs. untreated\, diseased vs. normal\, mutant vs. wild\-type\) among different levels of gene expression \(transcriptome \,translatome\, proteome\)\, using several statistical methods\: Rank Product\, Translational Efficiency\, t\-test\, Limma\, ANOTA\, DESeq\, edgeR. Possibility to plot the results with scatterplots\, histograms\, MA plots\, standard deviation \(SD\) plots\, coefficient of variation \(CV\) plots. Detection of significantly enriched post\-transcriptional regulatory factors \(RBPs\, miRNAs\, etc\) and Gene Ontology terms in the lists of DEGs previously identified for the two expression levels. Comparison of GO terms enriched only in one of the levels or in both. Calculation of the semantic similarity score between the lists of enriched GO terms coming from the two expression levels. Visual examination and comparison of the enriched terms with heatmaps\, radar plots and barplots.


.. conda:package:: bioconductor-translatome

   |downloads_bioconductor-translatome| |docker_bioconductor-translatome|

   :versions:
      
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.5-0``,  ``1.16.0-0``

      

   
   :depends bioconductor-anota: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-gosemsim: ``>=2.18.0,<2.19.0``
   :depends bioconductor-heatplus: ``>=3.0.0,<3.1.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-rankprod: ``>=3.18.0,<3.19.0``
   :depends bioconductor-sigpathway: ``>=1.60.0,<1.61.0``
   :depends bioconductor-topgo: ``>=2.44.0,<2.45.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gplots: 
   :depends r-plotrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-translatome

   and update with::

      conda update bioconductor-translatome

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-translatome:<tag>

   (see `bioconductor-translatome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-translatome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-translatome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-translatome
   :alt:   (downloads)
.. |docker_bioconductor-translatome| image:: https://quay.io/repository/biocontainers/bioconductor-translatome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-translatome
.. _`bioconductor-translatome/tags`: https://quay.io/repository/biocontainers/bioconductor-translatome?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-translatome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-translatome/README.html