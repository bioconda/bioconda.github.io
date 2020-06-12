:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqfu'
.. highlight: bash

seqfu
=====

.. conda:recipe:: seqfu
   :replaces_section_title:
   :noindex:

   DNA sequence utilities \(N50\, de\/interleave FASTQ\, grep etc.\)

   :homepage: http://github.com/quadram-institute-bioscience/seqfu/
   :license: mit
   :recipe: /`seqfu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqfu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqfu/meta.yaml>`_
   :links: biotools: :biotools:`seqfu`

   A collection of utilities to work with FASTX \(FASTA or FASTQ\) files
   using the FASTX\:\:Reader module that accepts gzipped input.
   \'n50\' will calculate N50\, minimum\, maximum and total size of the 
   sequences in one or more files\, supporting CSV\, TSV\, JSON and screen
   friendly output.
   \'interleafq\' allows to interleave or deinterleave paired\-end sequences.



.. conda:package:: seqfu

   |downloads_seqfu| |docker_seqfu|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends interleafq: ``>=0.99``
   :depends n50: ``>=1.3.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-exporter: 
   :depends perl-fastx-abi: 
   :depends perl-fastx-reader: ``>=0.88``
   :depends perl-file-which: 
   :depends perl-getopt-long: 
   :depends perl-json-pp: 
   :depends perl-pod-usage: 
   :depends perl-text-asciitable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqfu

   and update with::

      conda update seqfu

   or use the docker container::

      docker pull quay.io/biocontainers/seqfu:<tag>

   (see `seqfu/tags`_ for valid values for ``<tag>``)


.. |downloads_seqfu| image:: https://img.shields.io/conda/dn/bioconda/seqfu.svg?style=flat
   :target: https://anaconda.org/bioconda/seqfu
   :alt:   (downloads)
.. |docker_seqfu| image:: https://quay.io/repository/biocontainers/seqfu/status
   :target: https://quay.io/repository/biocontainers/seqfu
.. _`seqfu/tags`: https://quay.io/repository/biocontainers/seqfu?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqfu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqfu/README.html