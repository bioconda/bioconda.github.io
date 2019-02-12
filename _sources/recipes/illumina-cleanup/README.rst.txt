:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'illumina-cleanup'
.. highlight: bash

illumina-cleanup
================

.. conda:recipe:: illumina-cleanup
   :replaces_section_title:

   Nextflow pipeline for pre\-processing Illumina FASTQ files

   :homepage: https://github.com/rpetit3/illumina-cleanup
   :license: MIT
   :recipe: /`illumina-cleanup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-cleanup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-cleanup/meta.yaml>`_

   


.. conda:package:: illumina-cleanup

   |downloads_illumina-cleanup| |docker_illumina-cleanup|

   :versions: 1.0.0-0
   
   :depends bbmap: 
   
   :depends fastq-scan: 
   
   :depends fastqc: 
   
   :depends lighter: 
   
   :depends nextflow: 
   
   :depends pigz: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install illumina-cleanup

   and update with::

      conda update illumina-cleanup

   or use the docker container::

      docker pull quay.io/repository/biocontainers/illumina-cleanup:<tag>

   (see `illumina-cleanup/tags`_ for valid values for ``<tag>``)


.. |downloads_illumina-cleanup| image:: https://img.shields.io/conda/dn/bioconda/illumina-cleanup.svg?style=flat
   :alt:   (downloads)
.. |docker_illumina-cleanup| image:: https://quay.io/repository/biocontainers/illumina-cleanup/status
   :target: https://quay.io/repository/biocontainers/illumina-cleanup
.. _`illumina-cleanup/tags`: https://quay.io/repository/biocontainers/illumina-cleanup?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illumina-cleanup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illumina-cleanup/README.html