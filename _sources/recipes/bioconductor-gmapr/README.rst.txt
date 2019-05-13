:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gmapr'
.. highlight: bash

bioconductor-gmapr
==================

.. conda:recipe:: bioconductor-gmapr
   :replaces_section_title:

   GSNAP and GMAP are a pair of tools to align short\-read data written by Tom Wu.  This package provides convenience methods to work with GMAP and GSNAP from within R. In addition\, it provides methods to tally alignment results on a per\-nucleotide basis using the bam\_tally tool.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gmapR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gmapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmapr/meta.yaml>`_

   


.. conda:package:: bioconductor-gmapr

   |downloads_bioconductor-gmapr| |docker_bioconductor-gmapr|

   :versions: 1.24.1-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gmapr

   and update with::

      conda update bioconductor-gmapr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gmapr:<tag>

   (see `bioconductor-gmapr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gmapr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gmapr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gmapr
   :alt:   (downloads)
.. |docker_bioconductor-gmapr| image:: https://quay.io/repository/biocontainers/bioconductor-gmapr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gmapr
.. _`bioconductor-gmapr/tags`: https://quay.io/repository/biocontainers/bioconductor-gmapr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gmapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gmapr/README.html