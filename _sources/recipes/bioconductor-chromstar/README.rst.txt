.. title:: Package Recipe 'bioconductor-chromstar'
.. highlight: bash


bioconductor-chromstar
======================

.. conda:recipe:: bioconductor-chromstar
   :replaces_section_title:

   This package implements functions for combinatorial and differential analysis of ChIP\-seq data. It includes uni\- and multivariate peak\-calling\, export to genome browser viewable files\, and functions for enrichment analyses.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/chromstaR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chromstar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromstar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromstar/meta.yaml>`_
   :links: biotools: :biotools:`chromstar`, doi: :doi:`10.1101/038612`

   


.. conda:package:: bioconductor-chromstar

   |downloads_bioconductor-chromstar| |docker_bioconductor-chromstar|

   :versions: 1.8.1, 1.8.0, 1.6.2, 1.4.0

   :depends: :conda:package:`bioconductor-bamsignals` >=1.14.0,<1.15.0 :conda:package:`bioconductor-chromstardata` >=1.8.0,<1.9.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-doparallel`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-mvtnorm`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-chromstar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chromstar

   and update with::

      conda update bioconductor-chromstar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chromstar


.. |required_by_bioconductor-chromstar| conda:required_by:: bioconductor-chromstar
.. |downloads_bioconductor-chromstar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromstar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chromstar| image:: https://quay.io/repository/biocontainers/bioconductor-chromstar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromstar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromstar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromstar/README.html

