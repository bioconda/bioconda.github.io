:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htseqtools'
.. highlight: bash

bioconductor-htseqtools
=======================

.. conda:recipe:: bioconductor-htseqtools
   :replaces_section_title:

   We provide efficient\, easy\-to\-use tools for High\-Throughput Sequencing \(ChIP\-seq\, RNAseq etc.\). These include MDS plots \(analogues to PCA\)\, detecting inefficient immuno\-precipitation or over\-amplification artifacts\, tools to identify and test for genomic regions with large accumulation of reads\, and visualization of coverage profiles.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/htSeqTools.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-htseqtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htseqtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htseqtools/meta.yaml>`_
   :links: biotools: :biotools:`htseqtools`, doi: :doi:`10.1093/bioinformatics/btr700`

   


.. conda:package:: bioconductor-htseqtools

   |downloads_bioconductor-htseqtools| |docker_bioconductor-htseqtools|

   :versions: 1.30.0-0, 1.28.3-0, 1.26.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-mass: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-htseqtools

   and update with::

      conda update bioconductor-htseqtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-htseqtools:<tag>

   (see `bioconductor-htseqtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-htseqtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htseqtools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-htseqtools| image:: https://quay.io/repository/biocontainers/bioconductor-htseqtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htseqtools
.. _`bioconductor-htseqtools/tags`: https://quay.io/repository/biocontainers/bioconductor-htseqtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htseqtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htseqtools/README.html