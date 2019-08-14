:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genvisr'
.. highlight: bash

bioconductor-genvisr
====================

.. conda:recipe:: bioconductor-genvisr
   :replaces_section_title:

   Produce highly customizable publication quality graphics for genomic data primarily at the cohort level.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/GenVisR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-genvisr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genvisr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genvisr/meta.yaml>`_
   :links: biotools: :biotools:`genvisr`

   


.. conda:package:: bioconductor-genvisr

   |downloads_bioconductor-genvisr| |docker_bioconductor-genvisr|

   :versions: 1.16.0-1, 1.14.2-0, 1.14.1-1, 1.14.1-0, 1.12.1-0, 1.8.0-0, 1.6.3-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biomart: >=2.40.0,<2.41.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-bsgenome: >=1.52.0,<1.53.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-variantannotation: >=1.30.0,<1.31.0
   :depends r-base: >=3.6,<3.7.0a0
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
   :target: https://anaconda.org/bioconda/bioconductor-genvisr
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