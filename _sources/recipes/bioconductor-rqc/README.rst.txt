.. title:: Package Recipe 'bioconductor-rqc'
.. highlight: bash


bioconductor-rqc
================

.. conda:recipe:: bioconductor-rqc
   :replaces_section_title:

   Rqc is an optimised tool designed for quality control and assessment of high\-throughput sequencing data. It performs parallel processing of entire files and produces a report which contains a set of high\-resolution graphics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Rqc.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqc/meta.yaml>`_

   


.. conda:package:: bioconductor-rqc

   |downloads_bioconductor-rqc| |docker_bioconductor-rqc|

   :versions: 1.16.2

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biocstyle` >=2.10.0,<2.11.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-biovizbase` >=1.30.0,<1.31.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfiles` >=1.18.0,<1.19.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-digest`  :conda:package:`r-ggplot2`  :conda:package:`r-knitr` >=1.7 :conda:package:`r-markdown`  :conda:package:`r-plyr`  :conda:package:`r-rcpp` >=0.11.6 :conda:package:`r-reshape2`  :conda:package:`r-shiny`  

   :required~by: |required_by_bioconductor-rqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rqc

   and update with::

      conda update bioconductor-rqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rqc


.. |required_by_bioconductor-rqc| conda:required_by:: bioconductor-rqc
.. |downloads_bioconductor-rqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rqc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rqc| image:: https://quay.io/repository/biocontainers/bioconductor-rqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rqc/README.html

