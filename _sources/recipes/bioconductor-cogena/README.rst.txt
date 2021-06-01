:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cogena'
.. highlight: bash

bioconductor-cogena
===================

.. conda:recipe:: bioconductor-cogena
   :replaces_section_title:
   :noindex:

   co\-expressed gene\-set enrichment analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/cogena.html
   :license: LGPL-3
   :recipe: /`bioconductor-cogena <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogena>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogena/meta.yaml>`_
   :links: biotools: :biotools:`cogena`, doi: :doi:`10.1186/s12864-016-2737-8`

   cogena is a workflow for co\-expressed gene\-set enrichment analysis. It aims to discovery smaller scale\, but highly correlated cellular events that may be of great biological relevance. A novel pipeline for drug discovery and drug repositioning based on the cogena workflow is proposed. Particularly\, candidate drugs can be predicted based on the gene expression of disease\-related data\, or other similar drugs can be identified based on the gene expression of drug\-related data. Moreover\, the drug mode of action can be disclosed by the associated pathway analysis. In summary\, cogena is a flexible workflow for various gene set enrichment analysis for co\-expressed genes\, with a focus on pathway\/GO analysis and drug repositioning.


.. conda:package:: bioconductor-cogena

   |downloads_bioconductor-cogena| |docker_bioconductor-cogena|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends r-amap: 
   :depends r-apcluster: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biwt: 
   :depends r-class: 
   :depends r-cluster: 
   :depends r-corrplot: 
   :depends r-devtools: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-fastcluster: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-kohonen: 
   :depends r-mclust: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cogena

   and update with::

      conda update bioconductor-cogena

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cogena:<tag>

   (see `bioconductor-cogena/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cogena| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogena.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cogena
   :alt:   (downloads)
.. |docker_bioconductor-cogena| image:: https://quay.io/repository/biocontainers/bioconductor-cogena/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogena
.. _`bioconductor-cogena/tags`: https://quay.io/repository/biocontainers/bioconductor-cogena?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogena/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogena/README.html