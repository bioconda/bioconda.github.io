.. title:: Package Recipe 'bioconductor-hireadsprocessor'
.. highlight: bash


bioconductor-hireadsprocessor
=============================

.. conda:recipe:: bioconductor-hireadsprocessor
   :replaces_section_title:

   hiReadsProcessor contains set of functions which allow users to process LM\-PCR products sequenced using any platform. Given an excel\/txt file containing parameters for demultiplexing and sample metadata\, the functions automate trimming of adaptors and identification of the genomic product. Genomic products are further processed for QC and abundance quantification.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/hiReadsProcessor.html
   :license: GPL-3
   :recipe: /`bioconductor-hireadsprocessor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireadsprocessor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireadsprocessor/meta.yaml>`_

   


.. conda:package:: bioconductor-hireadsprocessor

   |downloads_bioconductor-hireadsprocessor| |docker_bioconductor-hireadsprocessor|

   :versions: 1.18.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-hiannotator` >=1.16.0,<1.17.0 :conda:package:`bioconductor-rsffreader` >=0.30.0,<0.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-readxl`  :conda:package:`r-soniclength`  

   :required~by: |required_by_bioconductor-hireadsprocessor|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hireadsprocessor

   and update with::

      conda update bioconductor-hireadsprocessor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hireadsprocessor


.. |required_by_bioconductor-hireadsprocessor| conda:required_by:: bioconductor-hireadsprocessor
.. |downloads_bioconductor-hireadsprocessor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hireadsprocessor.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hireadsprocessor| image:: https://quay.io/repository/biocontainers/bioconductor-hireadsprocessor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hireadsprocessor







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hireadsprocessor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hireadsprocessor/README.html

