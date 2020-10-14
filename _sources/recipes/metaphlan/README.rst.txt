:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaphlan'
.. highlight: bash

metaphlan
=========

.. conda:recipe:: metaphlan
   :replaces_section_title:
   :noindex:

   Metagenomic Phylogenetic Analysis

   :homepage: https://github.com/biobakery/metaphlan
   :license: MIT / MIT License
   :recipe: /`metaphlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphlan/meta.yaml>`_

   MetaPhlAn is a computational tool for profiling the composition of microbial
   communities \(Bacteria\, Archaea and Eukaryotes\) from metagenomic
   shotgun sequencing data with species level resolution. From version 2.0
   MetaPhlAn is also able to identify specific strains \(in the not\-so\-frequent
   cases in which the sample contains a previously sequenced strains\) and to
   track strains across samples for all species.


.. conda:package:: metaphlan

   |downloads_metaphlan| |docker_metaphlan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.4-1</code>,  <code>3.0.4-0</code>,  <code>3.0.3-0</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>3.0-4</code>,  <code>3.0-3</code>,  <code>3.0-2</code>,  <code>3.0-1</code>,  </span></summary>
      

      ``3.0.4-1``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``,  ``3.0.0.alpha-1``,  ``3.0.0.alpha-0``

      
      .. raw:: html

         </details>
      

   
   :depends biom-format: 
   :depends biopython: 
   :depends blast: ``>=2.6.0``
   :depends bowtie2: ``>=2.3.0``
   :depends cmseq: 
   :depends dendropy: 
   :depends matplotlib-base: 
   :depends muscle: ``>=3.8.1551``
   :depends numpy: 
   :depends pandas: 
   :depends phylophlan: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends raxml: ``>=8.2.10``
   :depends requests: 
   :depends samtools: ``>=1.9``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaphlan

   and update with::

      conda update metaphlan

   or use the docker container::

      docker pull quay.io/biocontainers/metaphlan:<tag>

   (see `metaphlan/tags`_ for valid values for ``<tag>``)


.. |downloads_metaphlan| image:: https://img.shields.io/conda/dn/bioconda/metaphlan.svg?style=flat
   :target: https://anaconda.org/bioconda/metaphlan
   :alt:   (downloads)
.. |docker_metaphlan| image:: https://quay.io/repository/biocontainers/metaphlan/status
   :target: https://quay.io/repository/biocontainers/metaphlan
.. _`metaphlan/tags`: https://quay.io/repository/biocontainers/metaphlan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaphlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaphlan/README.html