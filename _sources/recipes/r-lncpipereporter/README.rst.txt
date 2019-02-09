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

   :versions: 0.1.1

   :depends: :conda:package:`bioconductor-deseq2` 1.20.0.* :conda:package:`bioconductor-edger`  :conda:package:`bioconductor-noiseq`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-cowplot`  :conda:package:`r-data.table`  :conda:package:`r-devtools`  :conda:package:`r-dt`  :conda:package:`r-flexdashboard`  :conda:package:`r-ggbiplot`  :conda:package:`r-ggplot2`  :conda:package:`r-ggsci`  :conda:package:`r-heatmaply`  :conda:package:`r-htmlwidgets`  :conda:package:`r-knitr`  :conda:package:`r-plotly`  :conda:package:`r-rmarkdown`  

   :required~by: |required_by_r-lncpipereporter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-lncpipereporter

   and update with::

      conda update r-lncpipereporter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-lncpipereporter


.. |required_by_r-lncpipereporter| conda:required_by:: r-lncpipereporter
.. |downloads_r-lncpipereporter| image:: https://img.shields.io/conda/dn/bioconda/r-lncpipereporter.svg?style=flat
   :alt:   (downloads)
.. |docker_r-lncpipereporter| image:: https://quay.io/repository/biocontainers/r-lncpipereporter/status
   :target: https://quay.io/repository/biocontainers/r-lncpipereporter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lncpipereporter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lncpipereporter/README.html

