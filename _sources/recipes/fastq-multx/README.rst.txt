:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-multx'
.. highlight: bash

fastq-multx
===========

.. conda:recipe:: fastq-multx
   :replaces_section_title:

   Demultiplexes a fastq. Capable of auto\-determining barcode id\'s based on a master set fields. Keeps multiple reads in\-sync during demultiplexing. Can verify that the reads are in\-sync as well\, and fail if they\'re not.

   :homepage: https://github.com/brwnj/fastq-multx
   :license: MIT
   :recipe: /`fastq-multx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-multx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-multx/meta.yaml>`_

   


.. conda:package:: fastq-multx

   |downloads_fastq-multx| |docker_fastq-multx|

   :versions: 1.3.1-3, 1.3.1-2, 1.3.0-2, 1.3.0-1
   
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq-multx

   and update with::

      conda update fastq-multx

   or use the docker container::

      docker pull quay.io/biocontainers/fastq-multx:<tag>

   (see `fastq-multx/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-multx| image:: https://img.shields.io/conda/dn/bioconda/fastq-multx.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-multx
   :alt:   (downloads)
.. |docker_fastq-multx| image:: https://quay.io/repository/biocontainers/fastq-multx/status
   :target: https://quay.io/repository/biocontainers/fastq-multx
.. _`fastq-multx/tags`: https://quay.io/repository/biocontainers/fastq-multx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-multx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-multx/README.html