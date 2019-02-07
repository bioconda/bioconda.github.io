.. title:: Package Recipe 'bioconductor-crisprseek'
.. highlight: bash


bioconductor-crisprseek
=======================

.. conda:recipe:: bioconductor-crisprseek
   :replaces_section_title:

   The package includes functions to find potential guide RNAs for input target sequences\, optionally filter guide RNAs without restriction enzyme cut site\, or without paired guide RNAs\, genome\-wide search for off\-targets\, score\, rank\, fetch flank sequence and indicate whether the target and off\-targets are located in exon region or not. Potential guide RNAs are annotated with total score of the top5 and topN off\-targets\, detailed topN mismatch sites\, restriction enzyme cut sites\, and paired guide RNAs. This package leverages Biostrings and BSgenome packages.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CRISPRseek.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-crisprseek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseek/meta.yaml>`_
   :links: biotools: :biotools:`crisprseek`

   


.. conda:package:: bioconductor-crisprseek

   |downloads_bioconductor-crisprseek| |docker_bioconductor-crisprseek|

   :versions: 1.22.0, 1.20.0, 1.18.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-hash`  :conda:package:`r-seqinr`  

   :required~by: |required_by_bioconductor-crisprseek|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crisprseek

   and update with::

      conda update bioconductor-crisprseek

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-crisprseek


.. |required_by_bioconductor-crisprseek| conda:required_by:: bioconductor-crisprseek
.. |downloads_bioconductor-crisprseek| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprseek.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-crisprseek| image:: https://quay.io/repository/biocontainers/bioconductor-crisprseek/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprseek







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprseek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprseek/README.html

