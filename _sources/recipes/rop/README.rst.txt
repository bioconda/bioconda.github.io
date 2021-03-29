:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rop'
.. highlight: bash

rop
===

.. conda:recipe:: rop
   :replaces_section_title:
   :noindex:

   The Read Origin Protocol \(ROP\) is a computational protocol that aims to discover the source of all reads\, including those originating from repeat sequences\, recombinant B and T cell receptors\, and microbial communities. 

   :homepage: https://github.com/smangul1/rop
   :license: GPL-3.0
   :recipe: /`rop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rop/meta.yaml>`_

   


.. conda:package:: rop

   |downloads_rop| |docker_rop|

   :versions:
      
      

      ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends bowtie2: 
   :depends bwa: 
   :depends fastx_toolkit: 
   :depends intervaltree: 
   :depends kmer-jellyfish: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends tophat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rop

   and update with::

      conda update rop

   or use the docker container::

      docker pull quay.io/biocontainers/rop:<tag>

   (see `rop/tags`_ for valid values for ``<tag>``)


.. |downloads_rop| image:: https://img.shields.io/conda/dn/bioconda/rop.svg?style=flat
   :target: https://anaconda.org/bioconda/rop
   :alt:   (downloads)
.. |docker_rop| image:: https://quay.io/repository/biocontainers/rop/status
   :target: https://quay.io/repository/biocontainers/rop
.. _`rop/tags`: https://quay.io/repository/biocontainers/rop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rop/README.html