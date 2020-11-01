:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rqc'
.. highlight: bash

bioconductor-rqc
================

.. conda:recipe:: bioconductor-rqc
   :replaces_section_title:
   :noindex:

   Quality Control Tool for High\-Throughput Sequencing Data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/Rqc.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqc/meta.yaml>`_

   Rqc is an optimised tool designed for quality control and assessment of high\-throughput sequencing data. It performs parallel processing of entire files and produces a report which contains a set of high\-resolution graphics.


.. conda:package:: bioconductor-rqc

   |downloads_bioconductor-rqc| |docker_bioconductor-rqc|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.2-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biocstyle: ``>=2.18.0,<2.19.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biovizbase: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfiles: ``>=1.26.0,<1.27.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-shortread: ``>=1.48.0,<1.49.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=9.0.1``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-knitr: ``>=1.7``
   :depends r-markdown: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=0.11.6``
   :depends r-reshape2: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rqc

   and update with::

      conda update bioconductor-rqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rqc:<tag>

   (see `bioconductor-rqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rqc
   :alt:   (downloads)
.. |docker_bioconductor-rqc| image:: https://quay.io/repository/biocontainers/bioconductor-rqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rqc
.. _`bioconductor-rqc/tags`: https://quay.io/repository/biocontainers/bioconductor-rqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rqc/README.html