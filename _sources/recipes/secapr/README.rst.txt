:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'secapr'
.. highlight: bash

secapr
======

.. conda:recipe:: secapr
   :replaces_section_title:
   :noindex:

   Process sequence\-capture FASTQ files into alignments for phylogenetic analyses. Integrates allele phasing.

   :homepage: https://github.com/AntonelliLab/seqcap_processor
   :license: MIT
   :recipe: /`secapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secapr/meta.yaml>`_

   


.. conda:package:: secapr

   |downloads_secapr| |docker_secapr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-0</code>,  <code>1.1.15-2</code>,  <code>1.1.15-1</code>,  <code>1.1.15-0</code>,  <code>1.1.14-0</code>,  <code>1.1.12-0</code>,  <code>1.1.10-2</code>,  <code>1.1.10-0</code>,  <code>1.1.9-0</code>,  </span></summary>
      

      ``2.0.2-0``,  ``1.1.15-2``,  ``1.1.15-1``,  ``1.1.15-0``,  ``1.1.14-0``,  ``1.1.12-0``,  ``1.1.10-2``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.4-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends abyss: 
   :depends biopython: 
   :depends blast: 
   :depends bwa: 
   :depends emboss: 
   :depends fastqc: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends muscle: 
   :depends pandas: 
   :depends python: 
   :depends samtools: 
   :depends spades: 
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install secapr

   and update with::

      conda update secapr

   or use the docker container::

      docker pull quay.io/biocontainers/secapr:<tag>

   (see `secapr/tags`_ for valid values for ``<tag>``)


.. |downloads_secapr| image:: https://img.shields.io/conda/dn/bioconda/secapr.svg?style=flat
   :target: https://anaconda.org/bioconda/secapr
   :alt:   (downloads)
.. |docker_secapr| image:: https://quay.io/repository/biocontainers/secapr/status
   :target: https://quay.io/repository/biocontainers/secapr
.. _`secapr/tags`: https://quay.io/repository/biocontainers/secapr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/secapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/secapr/README.html