:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-poma'
.. highlight: bash

bioconductor-poma
=================

.. conda:recipe:: bioconductor-poma
   :replaces_section_title:
   :noindex:

   User\-friendly Workflow for Metabolomics and Proteomics Data Analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/POMA.html
   :license: GPL-3
   :recipe: /`bioconductor-poma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poma/meta.yaml>`_

   A structured\, reproducible and easy\-to\-use workflow for the visualization\, pre\-processing\, exploratory data analysis\, and statistical analysis of metabolomics and proteomics data. The main aim of POMA is to enable a flexible data cleaning and statistical analysis processes in one comprehensible and user\-friendly R package. This package also has a Shiny app version that implements all POMA functions. See https\:\/\/github.com\/pcastellanoescuder\/POMAShiny.


.. conda:package:: bioconductor-poma

   |downloads_bioconductor-poma| |docker_bioconductor-poma|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-impute: ``>=1.66.0,<1.67.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-mixomics: ``>=6.16.0,<6.17.0``
   :depends bioconductor-msnbase: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rankprod: ``>=3.18.0,<3.19.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-broom: 
   :depends r-caret: 
   :depends r-clisymbols: 
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-e1071: 
   :depends r-ggcorrplot: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-ggrepel: 
   :depends r-glasso: ``>=1.11``
   :depends r-glmnet: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-qpdf: 
   :depends r-randomforest: 
   :depends r-rmarkdown: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-poma

   and update with::

      conda update bioconductor-poma

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-poma:<tag>

   (see `bioconductor-poma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-poma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-poma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-poma
   :alt:   (downloads)
.. |docker_bioconductor-poma| image:: https://quay.io/repository/biocontainers/bioconductor-poma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-poma
.. _`bioconductor-poma/tags`: https://quay.io/repository/biocontainers/bioconductor-poma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-poma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-poma/README.html