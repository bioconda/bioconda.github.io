:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bam2fastx'
.. highlight: bash

bam2fastx
=========

.. conda:recipe:: bam2fastx
   :replaces_section_title:

   Converting and demultiplexing of PacBio BAM files into gzipped fasta and fastq files

   :homepage: https://github.com/PacificBiosciences/bam2fastx
   :license: BSD-3-Clause-Clear
   :recipe: /`bam2fastx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam2fastx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam2fastx/meta.yaml>`_

   


.. conda:package:: bam2fastx

   |downloads_bam2fastx| |docker_bam2fastx|

   :versions: 1.3.0-6, 1.3.0-5, 1.3.0-4, 1.3.0-3, 1.3.0-2, 1.3.0-1, 1.3.0-0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends pbbam: 0.19.0.*
   
   :depends pbcopper: 0.4.2.*
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bam2fastx

   and update with::

      conda update bam2fastx

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bam2fastx:<tag>

   (see `bam2fastx/tags`_ for valid values for ``<tag>``)


.. |downloads_bam2fastx| image:: https://img.shields.io/conda/dn/bioconda/bam2fastx.svg?style=flat
   :alt:   (downloads)
.. |docker_bam2fastx| image:: https://quay.io/repository/biocontainers/bam2fastx/status
   :target: https://quay.io/repository/biocontainers/bam2fastx
.. _`bam2fastx/tags`: https://quay.io/repository/biocontainers/bam2fastx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bam2fastx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bam2fastx/README.html