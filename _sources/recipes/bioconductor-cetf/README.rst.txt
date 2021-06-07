:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cetf'
.. highlight: bash

bioconductor-cetf
=================

.. conda:recipe:: bioconductor-cetf
   :replaces_section_title:
   :noindex:

   Coexpression for Transcription Factors using Regulatory Impact Factors and Partial Correlation and Information Theory analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/CeTF.html
   :license: GPL-3
   :recipe: /`bioconductor-cetf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cetf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cetf/meta.yaml>`_

   This package provides the necessary functions for performing the Partial Correlation coefficient with Information Theory \(PCIT\) \(Reverter and Chan 2008\) and Regulatory Impact Factors \(RIF\) \(Reverter et al. 2010\) algorithm. The PCIT algorithm identifies meaningful correlations to define edges in a weighted network and can be applied to any correlation\-based network including but not limited to gene co\-expression networks\, while the RIF algorithm identify critical Transcription Factors \(TF\) from gene expression data. These two algorithms when combined provide a very relevant layer of information for gene expression studies \(Microarray\, RNA\-seq and single\-cell RNA\-seq data\).


.. conda:package:: bioconductor-cetf

   |downloads_bioconductor-cetf| |docker_bioconductor-cetf|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.4-0``,  ``1.2.2-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.0.0,<4.1.0``
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-rcy3: ``>=2.12.0,<2.13.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-genomictools: 
   :depends r-genomictools.filehandler: 
   :depends r-ggally: 
   :depends r-ggnetwork: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-network: 
   :depends r-pbapply: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-tidyr: 
   :depends r-webgestaltr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cetf

   and update with::

      conda update bioconductor-cetf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cetf:<tag>

   (see `bioconductor-cetf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cetf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cetf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cetf
   :alt:   (downloads)
.. |docker_bioconductor-cetf| image:: https://quay.io/repository/biocontainers/bioconductor-cetf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cetf
.. _`bioconductor-cetf/tags`: https://quay.io/repository/biocontainers/bioconductor-cetf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cetf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cetf/README.html