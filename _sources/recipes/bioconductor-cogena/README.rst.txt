.. title:: Package Recipe 'bioconductor-cogena'
.. highlight: bash


bioconductor-cogena
===================

.. conda:recipe:: bioconductor-cogena
   :replaces_section_title:

   cogena is a workflow for co\-expressed gene\-set enrichment analysis. It aims to discovery smaller scale\, but highly correlated cellular events that may be of great biological relevance. A novel pipeline for drug discovery and drug repositioning based on the cogena workflow is proposed. Particularly\, candidate drugs can be predicted based on the gene expression of disease\-related data\, or other similar drugs can be identified based on the gene expression of drug\-related data. Moreover\, the drug mode of action can be disclosed by the associated pathway analysis. In summary\, cogena is a flexible workflow for various gene set enrichment analysis for co\-expressed genes\, with a focus on pathway\/GO analysis and drug repositioning.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cogena.html
   :license: LGPL-3
   :recipe: /`bioconductor-cogena <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogena>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogena/meta.yaml>`_
   :links: biotools: :biotools:`cogena`, doi: :doi:`10.1186/s12864-016-2737-8`

   


.. conda:package:: bioconductor-cogena

   |downloads_bioconductor-cogena| |docker_bioconductor-cogena|

   :versions: 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-amap`  :conda:package:`r-apcluster`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biwt`  :conda:package:`r-class`  :conda:package:`r-cluster`  :conda:package:`r-corrplot`  :conda:package:`r-devtools`  :conda:package:`r-doparallel`  :conda:package:`r-dplyr`  :conda:package:`r-fastcluster`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-kohonen`  :conda:package:`r-mclust`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-cogena|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cogena

   and update with::

      conda update bioconductor-cogena

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cogena


.. |required_by_bioconductor-cogena| conda:required_by:: bioconductor-cogena
.. |downloads_bioconductor-cogena| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogena.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cogena| image:: https://quay.io/repository/biocontainers/bioconductor-cogena/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogena







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogena/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogena/README.html

