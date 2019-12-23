:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-fastx-abi'
.. highlight: bash

perl-fastx-abi
==============

.. conda:recipe:: perl-fastx-abi
   :replaces_section_title:

   FASTX\:\:Abi \- Read Sanger trace file \(.ab1 chromatograms\) in FASTQ format. For traces called with hetero option\, the ambiguities will be split into two sequences to allow usage from NGS tools that usually do not understand IUPAC ambiguities. 

   :homepage: https://github.com/telatin/FASTX-Abi
   :documentation: https://metacpan.org/pod/FASTX::Abi
   
   :license: MIT
   :recipe: /`perl-fastx-abi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fastx-abi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fastx-abi/meta.yaml>`_

   This module reads a Sanger trace \(chromatogram\). If the chromatogram was saved in \"hetero\" mode\, that is allowing IUPAC
   ambiguities in the basecalling\, the module will return two \(unphased\) sequences in standard \"ACGT\" alphabet.


.. conda:package:: perl-fastx-abi

   |downloads_perl-fastx-abi| |docker_perl-fastx-abi|

   :versions: 0.08-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-bio-trace-abif: 
   :depends perl-carp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-fastx-abi

   and update with::

      conda update perl-fastx-abi

   or use the docker container::

      docker pull quay.io/biocontainers/perl-fastx-abi:<tag>

   (see `perl-fastx-abi/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-fastx-abi| image:: https://img.shields.io/conda/dn/bioconda/perl-fastx-abi.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-fastx-abi
   :alt:   (downloads)
.. |docker_perl-fastx-abi| image:: https://quay.io/repository/biocontainers/perl-fastx-abi/status
   :target: https://quay.io/repository/biocontainers/perl-fastx-abi
.. _`perl-fastx-abi/tags`: https://quay.io/repository/biocontainers/perl-fastx-abi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-fastx-abi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-fastx-abi/README.html