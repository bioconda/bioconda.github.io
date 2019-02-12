:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'brockman-pipeline'
.. highlight: bash

brockman-pipeline
=================

.. conda:recipe:: brockman-pipeline
   :replaces_section_title:

   Brockman Representation Of Chromatin by K\-mers in Mark\-Associated Nucleotides

   :homepage: https://github.com/Carldeboer/Brockman
   :license: GPL-3.0
   :recipe: /`brockman-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brockman-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brockman-pipeline/meta.yaml>`_

   


.. conda:package:: brockman-pipeline

   |downloads_brockman-pipeline| |docker_brockman-pipeline|

   :versions: 1.0-1, 1.0-0
   
   :depends amused: 
   
   :depends bedtools: 
   
   :depends bowtie2: 
   
   :depends bzip2: 
   
   :depends jemalloc: 
   
   :depends ncurses: 
   
   :depends ruby: >=2.4
   
   :depends ruby-dna-tools: 
   
   :depends samtools: 
   
   :depends trimmomatic: 
   
   :depends ucsc-twobittofa: 
   
   :depends zlib: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install brockman-pipeline

   and update with::

      conda update brockman-pipeline

   or use the docker container::

      docker pull quay.io/repository/biocontainers/brockman-pipeline:<tag>

   (see `brockman-pipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_brockman-pipeline| image:: https://img.shields.io/conda/dn/bioconda/brockman-pipeline.svg?style=flat
   :alt:   (downloads)
.. |docker_brockman-pipeline| image:: https://quay.io/repository/biocontainers/brockman-pipeline/status
   :target: https://quay.io/repository/biocontainers/brockman-pipeline
.. _`brockman-pipeline/tags`: https://quay.io/repository/biocontainers/brockman-pipeline?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/brockman-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/brockman-pipeline/README.html