.. title:: Package Recipe 'r-ampvis'
.. highlight: bash


r-ampvis
========

.. conda:recipe:: r-ampvis
   :replaces_section_title:

   A package to visualise amplicon data

   :homepage: https://github.com/MadsAlbertsen/ampvis
   :license: AGPL-3
   :recipe: /`r-ampvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ampvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ampvis/meta.yaml>`_

   


.. conda:package:: r-ampvis

   |downloads_r-ampvis| |docker_r-ampvis|

   :versions: 1.27.0

   :depends: :conda:package:`bioconductor-biostrings`  :conda:package:`bioconductor-deseq2`  :conda:package:`bioconductor-phyloseq`  :conda:package:`r` 3.3.1* :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-ggdendro`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-gridextra`  :conda:package:`r-igraph`  :conda:package:`r-knitr`  :conda:package:`r-magrittr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-scales`  :conda:package:`r-stringr`  :conda:package:`r-vegan`  

   :required~by: |required_by_r-ampvis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ampvis

   and update with::

      conda update r-ampvis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-ampvis


.. |required_by_r-ampvis| conda:required_by:: r-ampvis
.. |downloads_r-ampvis| image:: https://img.shields.io/conda/dn/bioconda/r-ampvis.svg?style=flat
   :alt:   (downloads)
.. |docker_r-ampvis| image:: https://quay.io/repository/biocontainers/r-ampvis/status
   :target: https://quay.io/repository/biocontainers/r-ampvis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ampvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ampvis/README.html

