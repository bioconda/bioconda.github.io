:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffutr'
.. highlight: bash

bioconductor-diffutr
====================

.. conda:recipe:: bioconductor-diffutr
   :replaces_section_title:
   :noindex:

   diffUTR\: Streamlining differential exon and 3\' UTR usage

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/diffUTR.html
   :license: GPL-3
   :recipe: /`bioconductor-diffutr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffutr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffutr/meta.yaml>`_

   The diffUTR package provides a uniform interface and plotting functions for limma\/edgeR\/DEXSeq \-powered differential bin\/exon usage. It includes in addition an improved version of the limma\:\:diffSplice method. Most importantly\, diffUTR further extends the application of these frameworks to differential UTR usage analysis using poly\-A site databases.


.. conda:package:: bioconductor-diffutr

   |downloads_bioconductor-diffutr| |docker_bioconductor-diffutr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-dexseq: ``>=1.38.0,<1.39.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-ensembldb: ``>=2.16.0,<2.17.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-rsubread: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-matrixstats: 
   :depends r-stringi: 
   :depends r-viridislite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffutr

   and update with::

      conda update bioconductor-diffutr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffutr:<tag>

   (see `bioconductor-diffutr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffutr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffutr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffutr
   :alt:   (downloads)
.. |docker_bioconductor-diffutr| image:: https://quay.io/repository/biocontainers/bioconductor-diffutr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffutr
.. _`bioconductor-diffutr/tags`: https://quay.io/repository/biocontainers/bioconductor-diffutr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffutr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffutr/README.html