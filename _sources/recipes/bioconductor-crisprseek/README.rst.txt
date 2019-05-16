:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprseek'
.. highlight: bash

bioconductor-crisprseek
=======================

.. conda:recipe:: bioconductor-crisprseek
   :replaces_section_title:

   The package includes functions to find potential guide RNAs for input target sequences\, optionally filter guide RNAs without restriction enzyme cut site\, or without paired guide RNAs\, genome\-wide search for off\-targets\, score\, rank\, fetch flank sequence and indicate whether the target and off\-targets are located in exon region or not. Potential guide RNAs are annotated with total score of the top5 and topN off\-targets\, detailed topN mismatch sites\, restriction enzyme cut sites\, and paired guide RNAs. This package leverages Biostrings and BSgenome packages.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CRISPRseek.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-crisprseek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseek/meta.yaml>`_
   :links: biotools: :biotools:`crisprseek`

   


.. conda:package:: bioconductor-crisprseek

   |downloads_bioconductor-crisprseek| |docker_bioconductor-crisprseek|

   :versions: 1.22.0-0, 1.20.0-0, 1.18.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :depends r-hash: 
   :depends r-seqinr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crisprseek

   and update with::

      conda update bioconductor-crisprseek

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprseek:<tag>

   (see `bioconductor-crisprseek/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprseek| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprseek.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprseek
   :alt:   (downloads)
.. |docker_bioconductor-crisprseek| image:: https://quay.io/repository/biocontainers/bioconductor-crisprseek/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprseek
.. _`bioconductor-crisprseek/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprseek?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprseek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprseek/README.html