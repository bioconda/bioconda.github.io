:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffloop'
.. highlight: bash

bioconductor-diffloop
=====================

.. conda:recipe:: bioconductor-diffloop
   :replaces_section_title:

   Identifying differential DNA loops from chromatin topology data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/diffloop.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-diffloop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffloop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffloop/meta.yaml>`_
   :links: biotools: :biotools:`diffloop`, doi: :doi:`10.1101/087338`

   A suite of tools for subsetting\, visualizing\, annotating\, and statistically analyzing the results of one or more ChIA\-PET experiments or other assays that infer chromatin loops.


.. conda:package:: bioconductor-diffloop

   |downloads_bioconductor-diffloop| |docker_bioconductor-diffloop|

   :versions: 1.16.0-0, 1.14.0-0, 1.12.0-1, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-edger: >=3.30.0,<3.31.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-sushi: >=1.26.0,<1.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-locfit: 
   :depends r-matrixstats: 
   :depends r-pbapply: 
   :depends r-plyr: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-statmod: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffloop

   and update with::

      conda update bioconductor-diffloop

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffloop:<tag>

   (see `bioconductor-diffloop/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffloop| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffloop.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffloop
   :alt:   (downloads)
.. |docker_bioconductor-diffloop| image:: https://quay.io/repository/biocontainers/bioconductor-diffloop/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffloop
.. _`bioconductor-diffloop/tags`: https://quay.io/repository/biocontainers/bioconductor-diffloop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffloop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffloop/README.html