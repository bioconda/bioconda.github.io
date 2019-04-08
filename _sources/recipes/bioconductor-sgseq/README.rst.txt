:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sgseq'
.. highlight: bash

bioconductor-sgseq
==================

.. conda:recipe:: bioconductor-sgseq
   :replaces_section_title:

   SGSeq is a software package for analyzing splice events from RNA\-seq data. Input data are RNA\-seq reads mapped to a reference genome in BAM format. Genes are represented as a splice graph\, which can be obtained from existing annotation or predicted from the mapped sequence reads. Splice events are identified from the graph and are quantified locally using structurally compatible reads at the start or end of each splice variant. The software includes functions for splice event prediction\, quantification\, visualization and interpretation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SGSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sgseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sgseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sgseq/meta.yaml>`_
   :links: biotools: :biotools:`sgseq`

   


.. conda:package:: bioconductor-sgseq

   |downloads_bioconductor-sgseq| |docker_bioconductor-sgseq|

   :versions: 1.16.2-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-igraph: 
   :depends r-runit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sgseq

   and update with::

      conda update bioconductor-sgseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sgseq:<tag>

   (see `bioconductor-sgseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sgseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sgseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sgseq| image:: https://quay.io/repository/biocontainers/bioconductor-sgseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sgseq
.. _`bioconductor-sgseq/tags`: https://quay.io/repository/biocontainers/bioconductor-sgseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sgseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sgseq/README.html