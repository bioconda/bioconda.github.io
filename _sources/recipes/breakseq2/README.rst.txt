:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breakseq2'
.. highlight: bash

breakseq2
=========

.. conda:recipe:: breakseq2
   :replaces_section_title:

   BreakSeq2\: Ultrafast and accurate nucleotide\-resolution analysis of structural variants.

   :homepage: http://bioinform.github.io/breakseq2
   :license: BSD-2-Clause
   :recipe: /`breakseq2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakseq2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakseq2/meta.yaml>`_

   


.. conda:package:: breakseq2

   |downloads_breakseq2| |docker_breakseq2|

   :versions: 2.2-2, 2.2-1, 2.2-0
   
   :depends biopython: 1.65
   
   :depends bwa: 
   
   :depends cython: 
   
   :depends pysam: 0.7.7
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends samtools: 0.1.19
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install breakseq2

   and update with::

      conda update breakseq2

   or use the docker container::

      docker pull quay.io/biocontainers/breakseq2:<tag>

   (see `breakseq2/tags`_ for valid values for ``<tag>``)


.. |downloads_breakseq2| image:: https://img.shields.io/conda/dn/bioconda/breakseq2.svg?style=flat
   :alt:   (downloads)
.. |docker_breakseq2| image:: https://quay.io/repository/biocontainers/breakseq2/status
   :target: https://quay.io/repository/biocontainers/breakseq2
.. _`breakseq2/tags`: https://quay.io/repository/biocontainers/breakseq2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breakseq2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breakseq2/README.html