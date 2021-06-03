:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hireadsprocessor'
.. highlight: bash

bioconductor-hireadsprocessor
=============================

.. conda:recipe:: bioconductor-hireadsprocessor
   :replaces_section_title:
   :noindex:

   Functions to process LM\-PCR reads from 454\/Illumina data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/hiReadsProcessor.html
   :license: GPL-3
   :recipe: /`bioconductor-hireadsprocessor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireadsprocessor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireadsprocessor/meta.yaml>`_

   hiReadsProcessor contains set of functions which allow users to process LM\-PCR products sequenced using any platform. Given an excel\/txt file containing parameters for demultiplexing and sample metadata\, the functions automate trimming of adaptors and identification of the genomic product. Genomic products are further processed for QC and abundance quantification.


.. conda:package:: bioconductor-hireadsprocessor

   |downloads_bioconductor-hireadsprocessor| |docker_bioconductor-hireadsprocessor|

   :versions:
      
      

      ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-hiannotator: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-readxl: 
   :depends r-soniclength: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hireadsprocessor

   and update with::

      conda update bioconductor-hireadsprocessor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hireadsprocessor:<tag>

   (see `bioconductor-hireadsprocessor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hireadsprocessor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hireadsprocessor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hireadsprocessor
   :alt:   (downloads)
.. |docker_bioconductor-hireadsprocessor| image:: https://quay.io/repository/biocontainers/bioconductor-hireadsprocessor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hireadsprocessor
.. _`bioconductor-hireadsprocessor/tags`: https://quay.io/repository/biocontainers/bioconductor-hireadsprocessor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hireadsprocessor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hireadsprocessor/README.html