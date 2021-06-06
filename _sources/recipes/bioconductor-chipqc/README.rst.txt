:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipqc'
.. highlight: bash

bioconductor-chipqc
===================

.. conda:recipe:: bioconductor-chipqc
   :replaces_section_title:
   :noindex:

   Quality metrics for ChIPseq data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ChIPQC.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-chipqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipqc/meta.yaml>`_
   :links: biotools: :biotools:`chipqc`

   Quality metrics for ChIPseq data.


.. conda:package:: bioconductor-chipqc

   |downloads_bioconductor-chipqc| |docker_bioconductor-chipqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.18.2-0</code>,  <code>1.18.0-0</code>,  <code>1.16.1-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.2-0``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.3-0``,  ``1.10.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-chipseq: ``>=1.42.0,<1.43.0``
   :depends bioconductor-diffbind: ``>=3.2.0,<3.3.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicfeatures: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-txdb.celegans.ucsc.ce6.ensgene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.dmelanogaster.ucsc.dm3.ensgene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg18.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.mmusculus.ucsc.mm10.knowngene: ``>=3.10.0,<3.11.0``
   :depends bioconductor-txdb.mmusculus.ucsc.mm9.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.rnorvegicus.ucsc.rn4.ensgene: ``>=3.2.0,<3.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-nozzle.r1: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipqc

   and update with::

      conda update bioconductor-chipqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipqc:<tag>

   (see `bioconductor-chipqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipqc
   :alt:   (downloads)
.. |docker_bioconductor-chipqc| image:: https://quay.io/repository/biocontainers/bioconductor-chipqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipqc
.. _`bioconductor-chipqc/tags`: https://quay.io/repository/biocontainers/bioconductor-chipqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipqc/README.html