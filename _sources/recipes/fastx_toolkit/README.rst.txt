.. title:: Package Recipe 'fastx_toolkit'
.. highlight: bash


fastx_toolkit
=============

.. conda:recipe:: fastx_toolkit
   :replaces_section_title:

   The FASTX\-Toolkit is a collection of command line tools for
   Short\-Reads FASTA\/FASTQ files preprocessing.

   Next\-Generation sequencing machines usually produce FASTA or FASTQ files\,
   containing multiple short\-reads sequences \(possibly with quality
   information\).

   The main processing of such FASTA\/FASTQ files is mapping \(aka aligning\) the
   sequences to reference genomes or other databases using specialized
   programs. Example of such mapping programs are\: Blat\, SHRiMP\, LastZ\, MAQ
   and many many others

   However\, it is sometimes more productive to preprocess the FASTA\/FASTQ files
   before mapping the sequences to the genome \- manipulating the sequences to
   produce better mapping results.

   The FASTX\-Toolkit tools perform some of these preprocessing tasks.\'

   :homepage: https://github.com/agordon/fastx_toolkit
   :license: AGPL
   :recipe: /`fastx_toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastx_toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastx_toolkit/meta.yaml>`_

   


.. conda:package:: fastx_toolkit

   |downloads_fastx_toolkit| |docker_fastx_toolkit|

   :versions: 0.0.14

   :depends: :conda:package:`cython`  :conda:package:`gnuplot`  :conda:package:`libgtextutils`  :conda:package:`nose`  

   :required~by: |required_by_fastx_toolkit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastx_toolkit

   and update with::

      conda update fastx_toolkit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastx_toolkit


.. |required_by_fastx_toolkit| conda:required_by:: fastx_toolkit
.. |downloads_fastx_toolkit| image:: https://img.shields.io/conda/dn/bioconda/fastx_toolkit.svg?style=flat
   :alt:   (downloads)
.. |docker_fastx_toolkit| image:: https://quay.io/repository/biocontainers/fastx_toolkit/status
   :target: https://quay.io/repository/biocontainers/fastx_toolkit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastx_toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastx_toolkit/README.html

