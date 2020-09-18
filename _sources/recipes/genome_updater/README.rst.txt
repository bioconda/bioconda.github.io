:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genome_updater'
.. highlight: bash

genome_updater
==============

.. conda:recipe:: genome_updater
   :replaces_section_title:
   :noindex:

   genome\_updater\: bash script to download and update snapshots of the NCBI genomes

   :homepage: https://github.com/pirovc/genome_updater
   :license: MIT / MIT License
   :recipe: /`genome_updater <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome_updater>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome_updater/meta.yaml>`_

   Bash script to download and update snapshots of the NCBI genomes \(refseq\/genbank\) 
   keeping all files and detailed log for each update\, with file integrity check \(MD5\) 
   and parallel download support.



.. conda:package:: genome_updater

   |downloads_genome_updater| |docker_genome_updater|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends bc: 
   :depends coreutils: 
   :depends gawk: 
   :depends parallel: 
   :depends tar: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genome_updater

   and update with::

      conda update genome_updater

   or use the docker container::

      docker pull quay.io/biocontainers/genome_updater:<tag>

   (see `genome_updater/tags`_ for valid values for ``<tag>``)


.. |downloads_genome_updater| image:: https://img.shields.io/conda/dn/bioconda/genome_updater.svg?style=flat
   :target: https://anaconda.org/bioconda/genome_updater
   :alt:   (downloads)
.. |docker_genome_updater| image:: https://quay.io/repository/biocontainers/genome_updater/status
   :target: https://quay.io/repository/biocontainers/genome_updater
.. _`genome_updater/tags`: https://quay.io/repository/biocontainers/genome_updater?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genome_updater/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genome_updater/README.html