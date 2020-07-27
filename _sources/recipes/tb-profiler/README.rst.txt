:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tb-profiler'
.. highlight: bash

tb-profiler
===========

.. conda:recipe:: tb-profiler
   :replaces_section_title:
   :noindex:

   Profiling tool for Mycobacterium tuberculosis to detect drug resistance and lineage from WGS data

   :homepage: https://github.com/jodyphelan/TBProfiler
   :license: GPL3
   :recipe: /`tb-profiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb-profiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb-profiler/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13073-019-0650-x`

   


.. conda:package:: tb-profiler

   |downloads_tb-profiler| |docker_tb-profiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.12-2</code>,  <code>2.8.12-1</code>,  <code>2.8.12-0</code>,  <code>2.8.11-0</code>,  <code>2.8.10-0</code>,  <code>2.8.9-0</code>,  <code>2.8.8-0</code>,  <code>2.8.6-0</code>,  <code>2.8.5-0</code>,  </span></summary>
      

      ``2.8.12-2``,  ``2.8.12-1``,  ``2.8.12-0``,  ``2.8.11-0``,  ``2.8.10-0``,  ``2.8.9-0``,  ``2.8.8-0``,  ``2.8.6-0``,  ``2.8.5-0``,  ``2.8.4-0``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.4-0``,  ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7-0``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6-0``,  ``2.5-1``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.2-1``,  ``2.2-0``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.9``
   :depends bedtools: 
   :depends biopython: 
   :depends bowtie2: 
   :depends bwa: 
   :depends delly: 
   :depends gatk4: 
   :depends git: 
   :depends minimap2: 
   :depends parallel: 
   :depends python: 
   :depends python: ``>=3.6``
   :depends samtools: ``>=1.9``
   :depends tqdm: 
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tb-profiler

   and update with::

      conda update tb-profiler

   or use the docker container::

      docker pull quay.io/biocontainers/tb-profiler:<tag>

   (see `tb-profiler/tags`_ for valid values for ``<tag>``)


.. |downloads_tb-profiler| image:: https://img.shields.io/conda/dn/bioconda/tb-profiler.svg?style=flat
   :target: https://anaconda.org/bioconda/tb-profiler
   :alt:   (downloads)
.. |docker_tb-profiler| image:: https://quay.io/repository/biocontainers/tb-profiler/status
   :target: https://quay.io/repository/biocontainers/tb-profiler
.. _`tb-profiler/tags`: https://quay.io/repository/biocontainers/tb-profiler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tb-profiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tb-profiler/README.html