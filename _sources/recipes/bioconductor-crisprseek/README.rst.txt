:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprseek'
.. highlight: bash

bioconductor-crisprseek
=======================

.. conda:recipe:: bioconductor-crisprseek
   :replaces_section_title:
   :noindex:

   Design of target\-specific guide RNAs in CRISPR\-Cas9\, genome\-editing systems

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/CRISPRseek.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-crisprseek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseek/meta.yaml>`_
   :links: biotools: :biotools:`crisprseek`

   The package includes functions to find potential guide RNAs for the CRISPR editing system including Base Editors and the Prime Editor for input target sequences\, optionally filter guide RNAs without restriction enzyme cut site\, or without paired guide RNAs\, genome\-wide search for off\-targets\, score\, rank\, fetch flank sequence and indicate whether the target and off\-targets are located in exon region or not. Potential guide RNAs are annotated with total score of the top5 and topN off\-targets\, detailed topN mismatch sites\, restriction enzyme cut sites\, and paired guide RNAs. The package also output indels and their frequencies for Cas9 targeted sites.


.. conda:package:: bioconductor-crisprseek

   |downloads_bioconductor-crisprseek| |docker_bioconductor-crisprseek|

   :versions:
      
      

      ``1.32.0-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rhdf5: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-hash: 
   :depends r-reticulate: 
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