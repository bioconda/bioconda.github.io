:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-fastqsplitter'
.. highlight: bash

biopet-fastqsplitter
====================

.. conda:recipe:: biopet-fastqsplitter
   :replaces_section_title:
   :noindex:

   This tool divides a fastq file into smaller fastq files\, based on the number of output files specified.

   :homepage: https://github.com/biopet/fastq-splitter
   :license: MIT
   :recipe: /`biopet-fastqsplitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-fastqsplitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-fastqsplitter/meta.yaml>`_

   This tool divides a fastq file into smaller fastq files\, based on the number of output files specified. For ecample\,
   if one specifies 5 output files\, it will split the fastq into 5 files of equal size. This can be very useful if one
   wants to use the chunking option in a pipeline\: FastqSplitter can generate the exact number of fastq files
   \(chunks\) as needed.

   FastqSplitter will read groups of reads \(100 reads per group\)
   and distribute this evenly over the output FASTQ
   files. FastqSplitter will iterate over all the output files while writing the
   read groups.

   Example\:
   A fastq file is split with a group size of 100 and three output files.
   read 1\-100 will be assigned to output1
   read 101\-200 will be assigned to output2
   read 201\-300 will be assigned to output3
   read 301\-400 will be assigned to output1
   read 401\-500 will be assigned to output2
   etc.

   This will make sure the output fastq files are of equal size and there is no positional bias in each
   output file.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/fastq\-splitter


.. conda:package:: biopet-fastqsplitter

   |downloads_biopet-fastqsplitter| |docker_biopet-fastqsplitter|

   :versions:
      
      

      ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biopet-fastqsplitter

   and update with::

      conda update biopet-fastqsplitter

   or use the docker container::

      docker pull quay.io/biocontainers/biopet-fastqsplitter:<tag>

   (see `biopet-fastqsplitter/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-fastqsplitter| image:: https://img.shields.io/conda/dn/bioconda/biopet-fastqsplitter.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-fastqsplitter
   :alt:   (downloads)
.. |docker_biopet-fastqsplitter| image:: https://quay.io/repository/biocontainers/biopet-fastqsplitter/status
   :target: https://quay.io/repository/biocontainers/biopet-fastqsplitter
.. _`biopet-fastqsplitter/tags`: https://quay.io/repository/biocontainers/biopet-fastqsplitter?tab=tags






Notes
-----
biopet\-fastqsplitter is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-fastqsplitter\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-fastqsplitter \-Xms512m \-Xmx1g\'. 


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-fastqsplitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-fastqsplitter/README.html