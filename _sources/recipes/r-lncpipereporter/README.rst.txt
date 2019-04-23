:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lncpipereporter'
.. highlight: bash

r-lncpipereporter
=================

.. conda:recipe:: r-lncpipereporter
   :replaces_section_title:

   Automatically Aggregating and Summarizing lncRNA Analysis Results for Interactive Report

   :homepage: https://github.com/bioinformatist/LncPipeReporter
   :license: GPL-2
   :recipe: /`r-lncpipereporter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lncpipereporter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lncpipereporter/meta.yaml>`_

   


.. conda:package:: r-lncpipereporter

   |downloads_r-lncpipereporter| |docker_r-lncpipereporter|

   :versions: 0.1.1-2, 0.1.1-1, 0.1.1-0
   
   :depends bioconductor-deseq2: 1.20.0.*
   :depends bioconductor-edger: 
   :depends bioconductor-noiseq: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-devtools: 
   :depends r-dt: 
   :depends r-flexdashboard: 
   :depends r-ggbiplot: 
   :depends r-ggplot2: 
   :depends r-ggsci: 
   :depends r-heatmaply: 
   :depends r-htmlwidgets: 
   :depends r-knitr: 
   :depends r-plotly: 
   :depends r-rmarkdown: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-lncpipereporter

   and update with::

      conda update r-lncpipereporter

   or use the docker container::

      docker pull quay.io/biocontainers/r-lncpipereporter:<tag>

   (see `r-lncpipereporter/tags`_ for valid values for ``<tag>``)


.. |downloads_r-lncpipereporter| image:: https://img.shields.io/conda/dn/bioconda/r-lncpipereporter.svg?style=flat
   :alt:   (downloads)
.. |docker_r-lncpipereporter| image:: https://quay.io/repository/biocontainers/r-lncpipereporter/status
   :target: https://quay.io/repository/biocontainers/r-lncpipereporter
.. _`r-lncpipereporter/tags`: https://quay.io/repository/biocontainers/r-lncpipereporter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lncpipereporter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lncpipereporter/README.html