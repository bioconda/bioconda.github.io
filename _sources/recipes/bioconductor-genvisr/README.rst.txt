:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genvisr'
.. highlight: bash

bioconductor-genvisr
====================

.. conda:recipe:: bioconductor-genvisr
   :replaces_section_title:

   Produce highly customizable publication quality graphics for genomic data primarily at the cohort level.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GenVisR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-genvisr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genvisr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genvisr/meta.yaml>`_
   :links: biotools: :biotools:`genvisr`

   


.. conda:package:: bioconductor-genvisr

   |downloads_bioconductor-genvisr| |docker_bioconductor-genvisr|

   :versions: 1.14.1-1, 1.14.1-0, 1.12.1-0, 1.8.0-0, 1.6.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-data.table: 
   
   :depends r-dbi: 
   
   :depends r-ffield: 
   
   :depends r-ggplot2: >=2.1.0
   
   :depends r-gridextra: >=2.0.0
   
   :depends r-gtable: 
   
   :depends r-gtools: 
   
   :depends r-plyr: >=1.8.3
   
   :depends r-reshape2: 
   
   :depends r-scales: 
   
   :depends r-viridis: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genvisr

   and update with::

      conda update bioconductor-genvisr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genvisr:<tag>

   (see `bioconductor-genvisr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genvisr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genvisr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genvisr| image:: https://quay.io/repository/biocontainers/bioconductor-genvisr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genvisr
.. _`bioconductor-genvisr/tags`: https://quay.io/repository/biocontainers/bioconductor-genvisr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genvisr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genvisr/README.html