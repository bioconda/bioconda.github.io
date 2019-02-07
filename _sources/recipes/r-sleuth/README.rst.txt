.. title:: Package Recipe 'r-sleuth'
.. highlight: bash


r-sleuth
========

.. conda:recipe:: r-sleuth
   :replaces_section_title:

   Sleuth is an R library for analysis of RNA\-Seq experiments for which transcript abundances have been quantified with kallisto.

   :homepage: http://pachterlab.github.io/sleuth
   :license: GPLv3
   :recipe: /`r-sleuth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sleuth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sleuth/meta.yaml>`_

   


.. conda:package:: r-sleuth

   |downloads_r-sleuth| |docker_r-sleuth|

   :versions: 0.30.0, 0.29.0, 0.28.0, 0.0.1

   :depends: :conda:package:`bioconductor-rhdf5`  :conda:package:`r-aggregation`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-lazyeval`  :conda:package:`r-matrixstats`  :conda:package:`r-pheatmap`  :conda:package:`r-reshape2`  :conda:package:`r-shiny`  :conda:package:`r-tidyr`  

   :required~by: |required_by_r-sleuth|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sleuth

   and update with::

      conda update r-sleuth

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-sleuth


.. |required_by_r-sleuth| conda:required_by:: r-sleuth
.. |downloads_r-sleuth| image:: https://img.shields.io/conda/dn/bioconda/r-sleuth.svg?style=flat
   :alt:   (downloads)
.. |docker_r-sleuth| image:: https://quay.io/repository/biocontainers/r-sleuth/status
   :target: https://quay.io/repository/biocontainers/r-sleuth







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sleuth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sleuth/README.html

