:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htseqgenie'
.. highlight: bash

bioconductor-htseqgenie
=======================

.. conda:recipe:: bioconductor-htseqgenie
   :replaces_section_title:

   A NGS analysis pipeline.

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/HTSeqGenie.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htseqgenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htseqgenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htseqgenie/meta.yaml>`_

   Libraries to perform NGS analysis.


.. conda:package:: bioconductor-htseqgenie

   |downloads_bioconductor-htseqgenie| |docker_bioconductor-htseqgenie|

   :versions: 4.18.0-0, 4.16.0-0, 4.14.0-1, 4.12.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-chipseq: >=1.38.0,<1.39.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicalignments: >=1.24.0,<1.25.0
   :depends bioconductor-genomicfeatures: >=1.40.0,<1.41.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-gmapr: >=1.30.0,<1.31.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-shortread: >=1.46.0,<1.47.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends bioconductor-variantannotation: >=1.34.0,<1.35.0
   :depends bioconductor-varianttools: >=1.30.0,<1.31.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cairo: >=1.5.5
   :depends r-hwriter: >=1.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-htseqgenie

   and update with::

      conda update bioconductor-htseqgenie

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-htseqgenie:<tag>

   (see `bioconductor-htseqgenie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-htseqgenie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htseqgenie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-htseqgenie
   :alt:   (downloads)
.. |docker_bioconductor-htseqgenie| image:: https://quay.io/repository/biocontainers/bioconductor-htseqgenie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htseqgenie
.. _`bioconductor-htseqgenie/tags`: https://quay.io/repository/biocontainers/bioconductor-htseqgenie?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htseqgenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htseqgenie/README.html