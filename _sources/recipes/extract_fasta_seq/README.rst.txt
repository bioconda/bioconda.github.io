:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extract_fasta_seq'
.. highlight: bash

extract_fasta_seq
=================

.. conda:recipe:: extract_fasta_seq
   :replaces_section_title:

   To extract specific fasta sequences from a fasta file.

   :homepage: https://github.com/linzhi2013/extract_fasta_seq
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`extract_fasta_seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_fasta_seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_fasta_seq/meta.yaml>`_
   :links: biotools: :biotools:`extract_fasta_seq`

   


.. conda:package:: extract_fasta_seq

   |downloads_extract_fasta_seq| |docker_extract_fasta_seq|

   :versions: 0.0.1-0
   
   :depends python: >=2.7.15
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install extract_fasta_seq

   and update with::

      conda update extract_fasta_seq

   or use the docker container::

      docker pull quay.io/biocontainers/extract_fasta_seq:<tag>

   (see `extract_fasta_seq/tags`_ for valid values for ``<tag>``)


.. |downloads_extract_fasta_seq| image:: https://img.shields.io/conda/dn/bioconda/extract_fasta_seq.svg?style=flat
   :target: https://anaconda.org/bioconda/extract_fasta_seq
   :alt:   (downloads)
.. |docker_extract_fasta_seq| image:: https://quay.io/repository/biocontainers/extract_fasta_seq/status
   :target: https://quay.io/repository/biocontainers/extract_fasta_seq
.. _`extract_fasta_seq/tags`: https://quay.io/repository/biocontainers/extract_fasta_seq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extract_fasta_seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extract_fasta_seq/README.html