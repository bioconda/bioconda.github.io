:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trinity'
.. highlight: bash

trinity
=======

.. conda:recipe:: trinity
   :replaces_section_title:
   :noindex:

   Trinity assembles transcript sequences from Illumina RNA\-Seq data.

   :homepage: https://github.com/trinityrnaseq/trinityrnaseq/
   :documentation: https://github.com/trinityrnaseq/trinityrnaseq/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`trinity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinity/meta.yaml>`_
   :links: biotools: :biotools:`trinity`, doi: :doi:`10.1038/nbt.1883`, usegalaxy-eu: :usegalaxy-eu:`trinity`

   


.. conda:package:: trinity

   |downloads_trinity| |docker_trinity|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.11.0-1</code>,  <code>2.11.0-0</code>,  <code>2.9.1-1</code>,  <code>2.9.1-0</code>,  <code>2.8.5-5</code>,  <code>2.8.5-4</code>,  <code>2.8.5-3</code>,  <code>2.8.5-2</code>,  <code>2.8.5-1</code>,  </span></summary>
      

      ``2.11.0-1``,  ``2.11.0-0``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.8.5-5``,  ``2.8.5-4``,  ``2.8.5-3``,  ``2.8.5-2``,  ``2.8.5-1``,  ``2.8.5-0``,  ``2.8.4-1``,  ``2.8.4-0``,  ``2.8.3-0``,  ``2.8.2-2``,  ``2.8.2-1``,  ``2.8.2-0``,  ``2.6.6-2``,  ``2.6.6-1``,  ``2.6.6-0``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.4.0-5``,  ``2.4.0-4``,  ``2.4.0-3``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.2.0-7``,  ``2.2.0-6``,  ``2.2.0-5``,  ``2.2.0-4``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-6``,  ``date.2011_11_26-8``,  ``date.2011_11_26-7``,  ``date.2011_11_26-6``,  ``date.2011_11_26-5``,  ``date.2011_11_26-4``,  ``date.2011_11_26-3``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ctc: 
   :depends bioconductor-dexseq: 
   :depends bioconductor-edger: 
   :depends bioconductor-go.db: 
   :depends bioconductor-goseq: 
   :depends bioconductor-qvalue: 
   :depends bowtie: 
   :depends bowtie2: ``>=2.3.0``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends kmer-jellyfish: ``>=2.2``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends numpy: 
   :depends openjdk: ``>=8``
   :depends perl: 
   :depends python: ``>=3.6``
   :depends r-ape: 
   :depends r-argparse: 
   :depends r-cluster: 
   :depends r-fastcluster: 
   :depends r-gplots: 
   :depends r-phangorn: 
   :depends r-sm: 
   :depends r-tidyverse: 
   :depends r-vioplot: 
   :depends salmon: ``>=1.0``
   :depends samtools: ``>=1.9``
   :depends trimmomatic: ``>=0.36``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trinity

   and update with::

      conda update trinity

   or use the docker container::

      docker pull quay.io/biocontainers/trinity:<tag>

   (see `trinity/tags`_ for valid values for ``<tag>``)


.. |downloads_trinity| image:: https://img.shields.io/conda/dn/bioconda/trinity.svg?style=flat
   :target: https://anaconda.org/bioconda/trinity
   :alt:   (downloads)
.. |docker_trinity| image:: https://quay.io/repository/biocontainers/trinity/status
   :target: https://quay.io/repository/biocontainers/trinity
.. _`trinity/tags`: https://quay.io/repository/biocontainers/trinity?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trinity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trinity/README.html