:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-validatefastq'
.. highlight: bash

biopet-validatefastq
====================

.. conda:recipe:: biopet-validatefastq
   :replaces_section_title:
   :noindex:

   This tool validates a FASTQ file.

   :homepage: https://github.com/biopet/validatefastq
   :license: MIT
   :recipe: /`biopet-validatefastq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validatefastq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validatefastq/meta.yaml>`_

   This tool validates a FASTQ file. When data is paired it can
   also validate a pair of FASTQ files.
   ValidateFastq will check if the FASTQ is in valid FASTQ format.
   This includes checking for duplicate reads and checking whether
   a pair of FASTQ files contains the same amount of reads and headers match.
   It also check whether the quality encodings are correct and outputs
   the most likely encoding format \(Sanger\, Solexa etc.\).

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/validatefastq


.. conda:package:: biopet-validatefastq

   |downloads_biopet-validatefastq| |docker_biopet-validatefastq|

   :versions:
      
      

      ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biopet-validatefastq

   and update with::

      conda update biopet-validatefastq

   or use the docker container::

      docker pull quay.io/biocontainers/biopet-validatefastq:<tag>

   (see `biopet-validatefastq/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-validatefastq| image:: https://img.shields.io/conda/dn/bioconda/biopet-validatefastq.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-validatefastq
   :alt:   (downloads)
.. |docker_biopet-validatefastq| image:: https://quay.io/repository/biocontainers/biopet-validatefastq/status
   :target: https://quay.io/repository/biocontainers/biopet-validatefastq
.. _`biopet-validatefastq/tags`: https://quay.io/repository/biocontainers/biopet-validatefastq?tab=tags






Notes
-----
biopet\-validatefastq is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-validatefastq\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-validatefastq \-Xms512m \-Xmx1g\'. 


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-validatefastq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-validatefastq/README.html