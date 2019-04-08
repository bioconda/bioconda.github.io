:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icetea'
.. highlight: bash

bioconductor-icetea
===================

.. conda:recipe:: bioconductor-icetea
   :replaces_section_title:

   icetea \(Integrating Cap Enrichment with Transcript Expression Analysis\) provides functions for end\-to\-end analysis of multiple 5\'\-profiling methods such as CAGE\, RAMPAGE and MAPCap\, beginning from raw reads to detection of transcription start sites using replicates. It also allows performing differential TSS detection between group of samples\, therefore\, integrating the mRNA cap enrichment information with transcript expression analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/icetea.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-icetea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icetea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icetea/meta.yaml>`_

   


.. conda:package:: bioconductor-icetea

   |downloads_bioconductor-icetea| |docker_bioconductor-icetea|

   :versions: 1.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-csaw: >=1.16.0,<1.17.0
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-shortread: >=1.40.0,<1.41.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends bioconductor-txdb.dmelanogaster.ucsc.dm6.ensgene: >=3.4.0,<3.5.0
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-icetea

   and update with::

      conda update bioconductor-icetea

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-icetea:<tag>

   (see `bioconductor-icetea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-icetea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icetea.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-icetea| image:: https://quay.io/repository/biocontainers/bioconductor-icetea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icetea
.. _`bioconductor-icetea/tags`: https://quay.io/repository/biocontainers/bioconductor-icetea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icetea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icetea/README.html