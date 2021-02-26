:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqfu'
.. highlight: bash

seqfu
=====

.. conda:recipe:: seqfu
   :replaces_section_title:
   :noindex:

   DNA sequence utilities

   :homepage: https://github.com/telatin/seqfu2/
   :license: mit
   :recipe: /`seqfu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqfu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqfu/meta.yaml>`_
   :links: biotools: :biotools:`seqfu`

   A collection of utilities to work with FASTX \(FASTA or FASTQ\) files
   that accept gzipped input.
   Tools to interleave and deinterleave\, to calculate stats\, and extract
   portions of sequence datasets.



.. conda:package:: seqfu

   |downloads_seqfu| |docker_seqfu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.8-0</code>,  <code>0.8.7-0</code>,  <code>0.8.5-0</code>,  <code>0.8.2-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.2.0-1</code>,  </span></summary>
      

      ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.5-0``,  ``0.8.2-0``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends pcre: ``>=8.44,<9.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqfu

   and update with::

      conda update seqfu

   or use the docker container::

      docker pull quay.io/biocontainers/seqfu:<tag>

   (see `seqfu/tags`_ for valid values for ``<tag>``)


.. |downloads_seqfu| image:: https://img.shields.io/conda/dn/bioconda/seqfu.svg?style=flat
   :target: https://anaconda.org/bioconda/seqfu
   :alt:   (downloads)
.. |docker_seqfu| image:: https://quay.io/repository/biocontainers/seqfu/status
   :target: https://quay.io/repository/biocontainers/seqfu
.. _`seqfu/tags`: https://quay.io/repository/biocontainers/seqfu?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqfu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqfu/README.html