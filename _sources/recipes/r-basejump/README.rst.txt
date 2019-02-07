.. title:: Package Recipe 'r-basejump'
.. highlight: bash


r-basejump
==========

.. conda:recipe:: r-basejump
   :replaces_section_title:

   Base functions for bioinformatics and R package development.

   :homepage: https://github.com/steinbaugh/basejump
   :license: MIT
   :recipe: /`r-basejump <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-basejump>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-basejump/meta.yaml>`_

   


.. conda:package:: r-basejump

   |downloads_r-basejump| |docker_r-basejump|

   :versions: 0.7.2, 0.5.9, 0.5.3, 0.1.1

   :depends: :conda:package:`bioconductor-annotationhub`  :conda:package:`bioconductor-biobase`  :conda:package:`bioconductor-biocgenerics`  :conda:package:`bioconductor-ensembldb`  :conda:package:`bioconductor-genomeinfodb`  :conda:package:`bioconductor-s4vectors`  :conda:package:`r-assertive`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-cowplot` >=0.9 :conda:package:`r-dendsort`  :conda:package:`r-devtools`  :conda:package:`r-dplyr` >=0.7 :conda:package:`r-ggplot2` >=2.2.1 :conda:package:`r-knitr` >=1.2.0 :conda:package:`r-magrittr` >=1.5 :conda:package:`r-matrix` >=1.2 :conda:package:`r-matrix.utils` >=0.9 :conda:package:`r-pbapply`  :conda:package:`r-pheatmap`  :conda:package:`r-r.utils`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcurl` >=1.95 :conda:package:`r-readr` >=1.1 :conda:package:`r-readxl` >=1.0 :conda:package:`r-rio`  :conda:package:`r-rlang` >=0.2 :conda:package:`r-scales`  :conda:package:`r-sessioninfo`  :conda:package:`r-stringr` >=1.3 :conda:package:`r-tibble` >=1.4 :conda:package:`r-tidyr` >=0.8 :conda:package:`r-viridis`  :conda:package:`r-yaml`  

   :required~by: |required_by_r-basejump|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-basejump

   and update with::

      conda update r-basejump

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-basejump


.. |required_by_r-basejump| conda:required_by:: r-basejump
.. |downloads_r-basejump| image:: https://img.shields.io/conda/dn/bioconda/r-basejump.svg?style=flat
   :alt:   (downloads)
.. |docker_r-basejump| image:: https://quay.io/repository/biocontainers/r-basejump/status
   :target: https://quay.io/repository/biocontainers/r-basejump







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-basejump/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-basejump/README.html

