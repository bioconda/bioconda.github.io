.. title:: Package Recipe 'r-bcbiobase'
.. highlight: bash


r-bcbiobase
===========

.. conda:recipe:: r-bcbiobase
   :replaces_section_title:

   Base functions and generics for bcbio R packages.

   :homepage: http://bioinformatics.sph.harvard.edu/bcbioBase/
   :developer docs: https://github.com/hbc/bcbioBase
   :license: MIT / MIT
   :recipe: /`r-bcbiobase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiobase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiobase/meta.yaml>`_

   


.. conda:package:: r-bcbiobase

   |downloads_r-bcbiobase| |docker_r-bcbiobase|

   :versions: 0.4.1, 0.2.15, 0.2.12, 0.2.10, 0.2.9, 0.0.3

   :depends: :conda:package:`bioconductor-biocgenerics`  :conda:package:`bioconductor-biostrings`  :conda:package:`bioconductor-genomeinfodb`  :conda:package:`bioconductor-genomicranges`  :conda:package:`bioconductor-iranges`  :conda:package:`bioconductor-s4vectors`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-basejump` >=0.7.2 :conda:package:`r-dendsort`  :conda:package:`r-dplyr` >=0.7 :conda:package:`r-ggplot2` >=2.2.1 :conda:package:`r-ggrepel` >=0.7 :conda:package:`r-magrittr` >=1.5 :conda:package:`r-pheatmap` >=1.0.10 :conda:package:`r-plyr` >=1.8 :conda:package:`r-rcolorbrewer`  :conda:package:`r-rdrop2` >=0.8 :conda:package:`r-readr` >=1.1 :conda:package:`r-rlang` >=0.2 :conda:package:`r-rmysql`  :conda:package:`r-sessioninfo` >=1.0 :conda:package:`r-stringr` >=1.3 :conda:package:`r-tibble` >=1.4 :conda:package:`r-tidyr` >=0.8 :conda:package:`r-viridis` >=0.5 

   :required~by: |required_by_r-bcbiobase|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bcbiobase

   and update with::

      conda update r-bcbiobase

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-bcbiobase


.. |required_by_r-bcbiobase| conda:required_by:: r-bcbiobase
.. |downloads_r-bcbiobase| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiobase.svg?style=flat
   :alt:   (downloads)
.. |docker_r-bcbiobase| image:: https://quay.io/repository/biocontainers/r-bcbiobase/status
   :target: https://quay.io/repository/biocontainers/r-bcbiobase







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiobase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiobase/README.html

