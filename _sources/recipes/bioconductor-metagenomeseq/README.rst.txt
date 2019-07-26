:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagenomeseq'
.. highlight: bash

bioconductor-metagenomeseq
==========================

.. conda:recipe:: bioconductor-metagenomeseq
   :replaces_section_title:

   metagenomeSeq is designed to determine features \(be it Operational Taxanomic Unit \(OTU\)\, species\, etc.\) that are differentially abundant between two or more groups of multiple samples. metagenomeSeq is designed to address the effects of both normalization and under\-sampling of microbial communities on disease association detection and the testing of feature correlations.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/metagenomeSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metagenomeseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagenomeseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagenomeseq/meta.yaml>`_
   :links: biotools: :biotools:`metagenomeseq`, doi: :doi:`10.1038/nmeth.2658`

   


.. conda:package:: bioconductor-metagenomeseq

   |downloads_bioconductor-metagenomeseq| |docker_bioconductor-metagenomeseq|

   :versions: 1.26.2-0, 1.24.1-0, 1.24.0-0, 1.22.0-0, 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-ihw: >=1.12.0,<1.13.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-wrench: >=1.2.0,<1.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-foreach: 
   :depends r-glmnet: 
   :depends r-gplots: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metagenomeseq

   and update with::

      conda update bioconductor-metagenomeseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metagenomeseq:<tag>

   (see `bioconductor-metagenomeseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metagenomeseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagenomeseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagenomeseq
   :alt:   (downloads)
.. |docker_bioconductor-metagenomeseq| image:: https://quay.io/repository/biocontainers/bioconductor-metagenomeseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagenomeseq
.. _`bioconductor-metagenomeseq/tags`: https://quay.io/repository/biocontainers/bioconductor-metagenomeseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagenomeseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagenomeseq/README.html