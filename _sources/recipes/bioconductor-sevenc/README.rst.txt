:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sevenc'
.. highlight: bash

bioconductor-sevenc
===================

.. conda:recipe:: bioconductor-sevenc
   :replaces_section_title:
   :noindex:

   Computational Chromosome Conformation Capture by Correlation of ChIP\-seq at CTCF motifs

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/sevenC.html
   :license: GPL-3
   :recipe: /`bioconductor-sevenc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sevenc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sevenc/meta.yaml>`_

   Chromatin looping is an essential feature of eukaryotic genomes and can bring regulatory sequences\, such as enhancers or transcription factor binding sites\, in the close physical proximity of regulated target genes. Here\, we provide sevenC\, an R package that uses protein binding signals from ChIP\-seq and sequence motif information to predict chromatin looping events. Cross\-linking of proteins that bind close to loop anchors result in ChIP\-seq signals at both anchor loci. These signals are used at CTCF motif pairs together with their distance and orientation to each other to predict whether they interact or not. The resulting chromatin loops might be used to associate enhancers or transcription factor binding sites \(e.g.\, ChIP\-seq peaks\) to regulated target genes.


.. conda:package:: bioconductor-sevenc

   |downloads_bioconductor-sevenc| |docker_bioconductor-sevenc|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-interactionset: ``>=1.20.0,<1.21.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-boot: ``>=1.3-20``
   :depends r-data.table: ``>=1.10.4``
   :depends r-purrr: ``>=0.2.2``
   :depends r-readr: ``>=1.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sevenc

   and update with::

      conda update bioconductor-sevenc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sevenc:<tag>

   (see `bioconductor-sevenc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sevenc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sevenc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sevenc
   :alt:   (downloads)
.. |docker_bioconductor-sevenc| image:: https://quay.io/repository/biocontainers/bioconductor-sevenc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sevenc
.. _`bioconductor-sevenc/tags`: https://quay.io/repository/biocontainers/bioconductor-sevenc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sevenc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sevenc/README.html