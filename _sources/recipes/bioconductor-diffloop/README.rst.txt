.. title:: Package Recipe 'bioconductor-diffloop'
.. highlight: bash


bioconductor-diffloop
=====================

.. conda:recipe:: bioconductor-diffloop
   :replaces_section_title:

   A suite of tools for subsetting\, visualizing\, annotating\, and statistically analyzing the results of one or more ChIA\-PET experiments or other assays that infer chromatin loops.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/diffloop.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-diffloop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffloop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffloop/meta.yaml>`_
   :links: biotools: :biotools:`diffloop`, doi: :doi:`10.1101/087338`

   


.. conda:package:: bioconductor-diffloop

   |downloads_bioconductor-diffloop| |docker_bioconductor-diffloop|

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-sushi` >=1.20.0,<1.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-locfit`  :conda:package:`r-matrixstats`  :conda:package:`r-pbapply`  :conda:package:`r-plyr`  :conda:package:`r-readr`  :conda:package:`r-reshape2`  :conda:package:`r-statmod`  

   :required~by: |required_by_bioconductor-diffloop|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffloop

   and update with::

      conda update bioconductor-diffloop

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-diffloop


.. |required_by_bioconductor-diffloop| conda:required_by:: bioconductor-diffloop
.. |downloads_bioconductor-diffloop| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffloop.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-diffloop| image:: https://quay.io/repository/biocontainers/bioconductor-diffloop/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffloop







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffloop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffloop/README.html

