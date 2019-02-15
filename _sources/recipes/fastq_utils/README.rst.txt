:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq_utils'
.. highlight: bash

fastq_utils
===========

.. conda:recipe:: fastq_utils
   :replaces_section_title:

   Set of Linux utilities to validate and manipulate fastq files. It also includes a set of programs to preprocess barcodes \(namely UMIs\, cells and samples\)\, add the barcodes as tags in BAM files and count UMIs.

   :homepage: https://github.com/nunofonseca/fastq_utils
   :license: GPL / GPL-3
   :recipe: /`fastq_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq_utils/meta.yaml>`_

   


.. conda:package:: fastq_utils

   |downloads_fastq_utils| |docker_fastq_utils|

   :versions: 0.18.2-1
   
   :depends samtools: 1.9
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq_utils

   and update with::

      conda update fastq_utils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastq_utils:<tag>

   (see `fastq_utils/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq_utils| image:: https://img.shields.io/conda/dn/bioconda/fastq_utils.svg?style=flat
   :alt:   (downloads)
.. |docker_fastq_utils| image:: https://quay.io/repository/biocontainers/fastq_utils/status
   :target: https://quay.io/repository/biocontainers/fastq_utils
.. _`fastq_utils/tags`: https://quay.io/repository/biocontainers/fastq_utils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq_utils/README.html