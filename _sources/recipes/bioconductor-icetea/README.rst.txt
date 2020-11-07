:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icetea'
.. highlight: bash

bioconductor-icetea
===================

.. conda:recipe:: bioconductor-icetea
   :replaces_section_title:
   :noindex:

   Integrating Cap Enrichment with Transcript Expression Analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/icetea.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-icetea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icetea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icetea/meta.yaml>`_

   icetea \(Integrating Cap Enrichment with Transcript Expression Analysis\) provides functions for end\-to\-end analysis of multiple 5\'\-profiling methods such as CAGE\, RAMPAGE and MAPCap\, beginning from raw reads to detection of transcription start sites using replicates. It also allows performing differential TSS detection between group of samples\, therefore\, integrating the mRNA cap enrichment information with transcript expression analysis.


.. conda:package:: bioconductor-icetea

   |downloads_bioconductor-icetea| |docker_bioconductor-icetea|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-csaw: ``>=1.24.0,<1.25.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-shortread: ``>=1.48.0,<1.49.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-txdb.dmelanogaster.ucsc.dm6.ensgene: ``>=3.12.0,<3.13.0``
   :depends bioconductor-variantannotation: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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
   :target: https://anaconda.org/bioconda/bioconductor-icetea
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