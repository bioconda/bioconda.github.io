:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathogen-profiler'
.. highlight: bash

pathogen-profiler
=================

.. conda:recipe:: pathogen-profiler
   :replaces_section_title:

   Library giving access to classes and functions to create a profiling tool to look for mutations from NGS data.

   :homepage: https://github.com/jodyphelan/pathogen-profiler
   :license: GPL3
   :recipe: /`pathogen-profiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogen-profiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogen-profiler/meta.yaml>`_

   


.. conda:package:: pathogen-profiler

   |downloads_pathogen-profiler| |docker_pathogen-profiler|

   :versions: 1.7.3-0, 1.7.2-0, 1.7.1-1, 1.7.1-0, 1.7-0, 1.6.1-0, 1.6-0, 1.5-0, 1.3-0, 1.2-0, 1.1-2, 1.1-1, 1.1-0, 1.0-0, 0.1-3, 0.1-2, 0.1-1, 0.1-0
   
   :depends bcftools: >=1.9
   :depends biopython: 
   :depends bowtie2: 
   :depends bwa: 
   :depends delly: 
   :depends gatk4: 
   :depends minimap2: 
   :depends parallel: 
   :depends python: 
   :depends samtools: >=1.9
   :depends tqdm: 
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pathogen-profiler

   and update with::

      conda update pathogen-profiler

   or use the docker container::

      docker pull quay.io/biocontainers/pathogen-profiler:<tag>

   (see `pathogen-profiler/tags`_ for valid values for ``<tag>``)


.. |downloads_pathogen-profiler| image:: https://img.shields.io/conda/dn/bioconda/pathogen-profiler.svg?style=flat
   :target: https://anaconda.org/bioconda/pathogen-profiler
   :alt:   (downloads)
.. |docker_pathogen-profiler| image:: https://quay.io/repository/biocontainers/pathogen-profiler/status
   :target: https://quay.io/repository/biocontainers/pathogen-profiler
.. _`pathogen-profiler/tags`: https://quay.io/repository/biocontainers/pathogen-profiler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathogen-profiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathogen-profiler/README.html