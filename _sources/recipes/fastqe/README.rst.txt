:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqe'
.. highlight: bash

fastqe
======

.. conda:recipe:: fastqe
   :replaces_section_title:
   :noindex:

   A emoji based bioinformatics command line tool

   :homepage: https://github.com/lonsbio/fastqe
   :license: MIT / MIT
   :recipe: /`fastqe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqe/meta.yaml>`_

   The program reads one or more input FASTQ files.
   For each file it computes the minimum\, maximum and mean FASTQ quality score at each position across all reads in a file.

   For some reason\, it then represents these as emoji.


.. conda:package:: fastqe

   |downloads_fastqe| |docker_fastqe|

   :versions:
      
      

      ``0.2.6-0``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends biopython: ``>=1.66``
   :depends pyemojify: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastqe

   and update with::

      conda update fastqe

   or use the docker container::

      docker pull quay.io/biocontainers/fastqe:<tag>

   (see `fastqe/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqe| image:: https://img.shields.io/conda/dn/bioconda/fastqe.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqe
   :alt:   (downloads)
.. |docker_fastqe| image:: https://quay.io/repository/biocontainers/fastqe/status
   :target: https://quay.io/repository/biocontainers/fastqe
.. _`fastqe/tags`: https://quay.io/repository/biocontainers/fastqe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqe/README.html