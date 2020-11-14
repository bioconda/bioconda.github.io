:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macpet'
.. highlight: bash

bioconductor-macpet
===================

.. conda:recipe:: bioconductor-macpet
   :replaces_section_title:
   :noindex:

   Model based analysis for paired\-end data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/MACPET.html
   :license: GPL-3
   :recipe: /`bioconductor-macpet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macpet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macpet/meta.yaml>`_

   The MACPET package can be used for complete interaction analysis for ChIA\-PET data. MACPET reads ChIA\-PET data in BAM or SAM format and separates the data into Self\-ligated\, Intra\- and Inter\-chromosomal PETs. Furthermore\, MACPET breaks the genome into regions and applies 2D mixture models for identifying candidate peaks\/binding sites using skewed generalized students\-t distributions \(SGT\). It then uses a local poisson model for finding significant binding sites. Finally it runs an additive interaction\-analysis model for calling for significant interactions between those peaks. MACPET is mainly written in C\+\+\, and it also supports the BiocParallel package.


.. conda:package:: bioconductor-macpet

   |downloads_bioconductor-macpet| |docker_bioconductor-macpet|

   :versions:
      
      

      ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-geoquery: ``>=2.58.0,<2.59.0``
   :depends bioconductor-interactionset: ``>=1.18.0,<1.19.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rbowtie: ``>=1.30.0,<1.31.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-shortread: ``>=1.48.0,<1.49.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-bh: ``>=1.66.0.1``
   :depends r-bigmemory: ``>=4.5.33``
   :depends r-futile.logger: ``>=1.4.3``
   :depends r-gtools: ``>=3.8.1``
   :depends r-intervals: ``>=0.15.1``
   :depends r-knitr: ``>=1.23``
   :depends r-plyr: ``>=1.8.4``
   :depends r-rcpp: ``>=1.0.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-macpet

   and update with::

      conda update bioconductor-macpet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macpet:<tag>

   (see `bioconductor-macpet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macpet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macpet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macpet
   :alt:   (downloads)
.. |docker_bioconductor-macpet| image:: https://quay.io/repository/biocontainers/bioconductor-macpet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macpet
.. _`bioconductor-macpet/tags`: https://quay.io/repository/biocontainers/bioconductor-macpet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macpet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macpet/README.html