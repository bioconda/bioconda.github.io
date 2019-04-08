:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpaanalyze'
.. highlight: bash

bioconductor-hpaanalyze
=======================

.. conda:recipe:: bioconductor-hpaanalyze
   :replaces_section_title:

   Provide functions for retrieving\, exploratory analyzing and visualizing the Human Protein Atlas data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/HPAanalyze.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-hpaanalyze <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpaanalyze>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpaanalyze/meta.yaml>`_

   


.. conda:package:: bioconductor-hpaanalyze

   |downloads_bioconductor-hpaanalyze| |docker_bioconductor-hpaanalyze|

   :versions: 1.0.0-0
   
   :depends bioconductor-hpar: >=1.24.0,<1.25.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-xlconnect: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hpaanalyze

   and update with::

      conda update bioconductor-hpaanalyze

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hpaanalyze:<tag>

   (see `bioconductor-hpaanalyze/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hpaanalyze| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpaanalyze.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hpaanalyze| image:: https://quay.io/repository/biocontainers/bioconductor-hpaanalyze/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpaanalyze
.. _`bioconductor-hpaanalyze/tags`: https://quay.io/repository/biocontainers/bioconductor-hpaanalyze?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpaanalyze/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpaanalyze/README.html