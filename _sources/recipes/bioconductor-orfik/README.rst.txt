:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-orfik'
.. highlight: bash

bioconductor-orfik
==================

.. conda:recipe:: bioconductor-orfik
   :replaces_section_title:

   Tools for manipulation of RiboSeq\, RNASeq and CageSeq data. ORFik is extremely fast through use of C\, data.table and GenomicRanges. Package allows to reassign starts of the transcripts with the use of CageSeq data\, automatic shifting of RiboSeq reads\, finding of Open Reading Frames for whole genomes and much more.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ORFik.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-orfik <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orfik>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orfik/meta.yaml>`_

   


.. conda:package:: bioconductor-orfik

   |downloads_bioconductor-orfik| |docker_bioconductor-orfik|

   :versions: 1.4.1-0, 1.2.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicalignments: >=1.20.0,<1.21.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: >=1.11.8
   :depends r-ggplot2: >=2.2.1
   :depends r-rcpp: >=1.0.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-orfik

   and update with::

      conda update bioconductor-orfik

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-orfik:<tag>

   (see `bioconductor-orfik/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-orfik| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-orfik.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-orfik
   :alt:   (downloads)
.. |docker_bioconductor-orfik| image:: https://quay.io/repository/biocontainers/bioconductor-orfik/status
   :target: https://quay.io/repository/biocontainers/bioconductor-orfik
.. _`bioconductor-orfik/tags`: https://quay.io/repository/biocontainers/bioconductor-orfik?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-orfik/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-orfik/README.html