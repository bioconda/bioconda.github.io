:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-irisfgm'
.. highlight: bash

bioconductor-irisfgm
====================

.. conda:recipe:: bioconductor-irisfgm
   :replaces_section_title:
   :noindex:

   Comprehensive Analysis of Gene Interactivity Networks Based on Single\-Cell RNA\-Seq

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/IRISFGM.html
   :license: GPL-2
   :recipe: /`bioconductor-irisfgm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-irisfgm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-irisfgm/meta.yaml>`_

   Single\-cell RNA\-Seq data is useful in discovering cell heterogeneity and signature genes in specific cell populations in cancer and other complex diseases. Specifically\, the investigation of functional gene modules \(FGM\) can help to understand gene interactive networks and complex biological processes. QUBIC2 is recognized as one of the most efficient and effective tools for FGM identification from scRNA\-Seq data. However\, its availability is limited to a C implementation\, and its applicative power is affected by only a few downstream analyses functionalities. We developed an R package named IRIS\-FGM \(integrative scRNA\-Seq interpretation system for functional gene module analysis\) to support the investigation of FGMs and cell clustering using scRNA\-Seq data. Empowered by QUBIC2\, IRIS\-FGM can identify co\-expressed and co\-regulated FGMs\, predict types\/clusters\, identify differentially expressed genes\, and perform functional enrichment analysis. It is noteworthy that IRIS\-FGM also applies Seurat objects that can be easily used in the Seurat vignettes.


.. conda:package:: bioconductor-irisfgm

   |downloads_bioconductor-irisfgm| |docker_bioconductor-irisfgm|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-clusterprofiler: ``>=4.0.0,<4.1.0``
   :depends bioconductor-desingle: ``>=1.12.0,<1.13.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-scater: ``>=1.20.0,<1.21.0``
   :depends bioconductor-scran: ``>=1.20.0,<1.21.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-adaptgauss: 
   :depends r-anocva: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-colorspace: 
   :depends r-drimpute: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggraph: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-matrix: 
   :depends r-mcl: 
   :depends r-mixtools: 
   :depends r-pheatmap: 
   :depends r-polychrome: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=1.0.0``
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-irisfgm

   and update with::

      conda update bioconductor-irisfgm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-irisfgm:<tag>

   (see `bioconductor-irisfgm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-irisfgm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-irisfgm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-irisfgm
   :alt:   (downloads)
.. |docker_bioconductor-irisfgm| image:: https://quay.io/repository/biocontainers/bioconductor-irisfgm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-irisfgm
.. _`bioconductor-irisfgm/tags`: https://quay.io/repository/biocontainers/bioconductor-irisfgm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-irisfgm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-irisfgm/README.html