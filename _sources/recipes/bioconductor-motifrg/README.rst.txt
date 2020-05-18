:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifrg'
.. highlight: bash

bioconductor-motifrg
====================

.. conda:recipe:: bioconductor-motifrg
   :replaces_section_title:

   A package for discriminative motif discovery\, designed for high throughput sequencing dataset

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/motifRG.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-motifrg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifrg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifrg/meta.yaml>`_
   :links: biotools: :biotools:`motifrg`, doi: :doi:`10.1093/bioinformatics/btt615`

   Tools for discriminative motif discovery using regression methods


.. conda:package:: bioconductor-motifrg

   |downloads_bioconductor-motifrg| |docker_bioconductor-motifrg|

   :versions: 1.31.0-0, 1.30.0-0, 1.28.0-1, 1.26.0-0, 1.24.0-0, 1.22.0-0, 1.20.0-0, 1.18.0-0, 1.14.0-0
   
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-bsgenome: >=1.56.0,<1.57.0
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: >=1.4.0,<1.5.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-seqlogo: >=1.54.0,<1.55.0
   :depends bioconductor-xvector: >=0.28.0,<0.29.0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-motifrg

   and update with::

      conda update bioconductor-motifrg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motifrg:<tag>

   (see `bioconductor-motifrg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motifrg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifrg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifrg
   :alt:   (downloads)
.. |docker_bioconductor-motifrg| image:: https://quay.io/repository/biocontainers/bioconductor-motifrg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifrg
.. _`bioconductor-motifrg/tags`: https://quay.io/repository/biocontainers/bioconductor-motifrg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifrg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifrg/README.html