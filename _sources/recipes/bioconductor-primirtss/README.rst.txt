:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-primirtss'
.. highlight: bash

bioconductor-primirtss
======================

.. conda:recipe:: bioconductor-primirtss
   :replaces_section_title:
   :noindex:

   Prediction of pri\-miRNA Transcription Start Site

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/primirTSS.html
   :license: GPL-2
   :recipe: /`bioconductor-primirtss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-primirtss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-primirtss/meta.yaml>`_

   A fast\, convenient tool to identify the TSSs of miRNAs by integrating the data of H3K4me3 and Pol II as well as combining the conservation level and sequence feature\, provided within both command\-line and graphical interfaces\, which achieves a better performance than the previous non\-cell\-specific methods on miRNA TSSs.


.. conda:package:: bioconductor-primirtss

   |downloads_bioconductor-primirtss| |docker_bioconductor-primirtss|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicscores: ``>=2.2.0,<2.3.0``
   :depends bioconductor-gviz: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-jaspar2018: ``>=1.1.0,<1.2.0``
   :depends bioconductor-phastcons100way.ucsc.hg38: ``>=3.7.0,<3.8.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-tfbstools: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: ``>=0.7.6``
   :depends r-purrr: ``>=0.2.5``
   :depends r-r.utils: ``>=2.6.0``
   :depends r-shiny: ``>=1.0.5``
   :depends r-stringr: ``>=1.3.1``
   :depends r-tibble: ``>=1.4.2``
   :depends r-tidyr: ``>=0.8.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-primirtss

   and update with::

      conda update bioconductor-primirtss

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-primirtss:<tag>

   (see `bioconductor-primirtss/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-primirtss| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-primirtss.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-primirtss
   :alt:   (downloads)
.. |docker_bioconductor-primirtss| image:: https://quay.io/repository/biocontainers/bioconductor-primirtss/status
   :target: https://quay.io/repository/biocontainers/bioconductor-primirtss
.. _`bioconductor-primirtss/tags`: https://quay.io/repository/biocontainers/bioconductor-primirtss?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-primirtss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-primirtss/README.html