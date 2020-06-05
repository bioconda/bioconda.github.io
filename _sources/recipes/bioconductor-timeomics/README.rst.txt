:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-timeomics'
.. highlight: bash

bioconductor-timeomics
======================

.. conda:recipe:: bioconductor-timeomics
   :replaces_section_title:
   :noindex:

   Time\-Course Multi\-Omics data integration

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/timeOmics.html
   :license: GPL-3
   :recipe: /`bioconductor-timeomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timeomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timeomics/meta.yaml>`_

   timeOmics is a generic data\-driven framework to integrate multi\-Omics longitudinal data measured on the same biological samples and select key temporal features with strong associations within the same sample group. The main steps of timeOmics are\: 1. Plaform and time\-specific normalization and filtering steps\; 2. Modelling each biological into one time expression profile\; 3. Clustering features with the same expression profile over time\; 4. Post\-hoc validation step.


.. conda:package:: bioconductor-timeomics

   |downloads_bioconductor-timeomics| |docker_bioconductor-timeomics|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-mixomics: ``>=6.12.0,<6.13.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-lmms: 
   :depends r-lmtest: 
   :depends r-magrittr: 
   :depends r-propr: 
   :depends r-purrr: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-timeomics

   and update with::

      conda update bioconductor-timeomics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-timeomics:<tag>

   (see `bioconductor-timeomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-timeomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timeomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-timeomics
   :alt:   (downloads)
.. |docker_bioconductor-timeomics| image:: https://quay.io/repository/biocontainers/bioconductor-timeomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timeomics
.. _`bioconductor-timeomics/tags`: https://quay.io/repository/biocontainers/bioconductor-timeomics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timeomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timeomics/README.html