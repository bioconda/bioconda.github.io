:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-fastx-reader'
.. highlight: bash

perl-fastx-reader
=================

.. conda:recipe:: perl-fastx-reader
   :replaces_section_title:

   FASTX\:\:Reader\, Perl module to parse FASTA and FASTQ files

   :homepage: https://github.com/telatin/FASTQ-Parser
   :license: gpl_3
   :recipe: /`perl-fastx-reader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fastx-reader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fastx-reader/meta.yaml>`_

   


.. conda:package:: perl-fastx-reader

   |downloads_perl-fastx-reader| |docker_perl-fastx-reader|

   :versions: 0.60-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-fastx-reader

   and update with::

      conda update perl-fastx-reader

   or use the docker container::

      docker pull quay.io/biocontainers/perl-fastx-reader:<tag>

   (see `perl-fastx-reader/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-fastx-reader| image:: https://img.shields.io/conda/dn/bioconda/perl-fastx-reader.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-fastx-reader
   :alt:   (downloads)
.. |docker_perl-fastx-reader| image:: https://quay.io/repository/biocontainers/perl-fastx-reader/status
   :target: https://quay.io/repository/biocontainers/perl-fastx-reader
.. _`perl-fastx-reader/tags`: https://quay.io/repository/biocontainers/perl-fastx-reader?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-fastx-reader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-fastx-reader/README.html