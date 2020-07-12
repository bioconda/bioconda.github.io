:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysam'
.. highlight: bash

pysam
=====

.. conda:recipe:: pysam
   :replaces_section_title:
   :noindex:

   Pysam is a python module for reading and manipulating Samfiles. It is a lightweight wrapper of the samtools C\-API. Pysam also includes an interface for tabix.

   :homepage: https://github.com/pysam-developers/pysam
   :license: MIT
   :recipe: /`pysam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysam/meta.yaml>`_
   :links: biotools: :biotools:`pysam`, doi: :doi:`10.1093/bioinformatics/btp352`

   


.. conda:package:: pysam

   |downloads_pysam| |docker_pysam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.16.0.1-1</code>,  <code>0.16.0.1-0</code>,  <code>0.16.0-1</code>,  <code>0.16.0-0</code>,  <code>0.15.4-1</code>,  <code>0.15.4-0</code>,  <code>0.15.3-3</code>,  <code>0.15.3-1</code>,  <code>0.15.3-0</code>,  </span></summary>
      

      ``0.16.0.1-1``,  ``0.16.0.1-0``,  ``0.16.0-1``,  ``0.16.0-0``,  ``0.15.4-1``,  ``0.15.4-0``,  ``0.15.3-3``,  ``0.15.3-1``,  ``0.15.3-0``,  ``0.15.2-6``,  ``0.15.2-5``,  ``0.15.2-4``,  ``0.15.2-3``,  ``0.15.2-2``,  ``0.15.2-1``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0.1-1``,  ``0.15.0.1-0``,  ``0.15.0-0``,  ``0.14.1-1``,  ``0.14.1-0``,  ``0.14.0-2``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0.1-2``,  ``0.12.0.1-1``,  ``0.12.0.1-0``,  ``0.11.2.2-2``,  ``0.11.2.2-1``,  ``0.11.2.2-0``,  ``0.11.2.1-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.0-11``,  ``0.10.0-10``,  ``0.10.0-9``,  ``0.10.0-8``,  ``0.10.0-7``,  ``0.10.0-6``,  ``0.10.0-5``,  ``0.10.0-4``,  ``0.10.0-3``,  ``0.10.0-1``,  ``0.9.1.4-1``,  ``0.9.1.4-0``,  ``0.9.1-9``,  ``0.9.1-8``,  ``0.9.1-7``,  ``0.9.1-6``,  ``0.9.1-5``,  ``0.9.1-4``,  ``0.9.1-3``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.4pre0-0``,  ``0.8.3-6``,  ``0.8.3-5``,  ``0.8.3-4``,  ``0.8.3-3``,  ``0.8.3-2``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.7.7-4``,  ``0.7.7-3``,  ``0.7.7-2``,  ``0.7.7-1``,  ``0.7.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=7.71.1,<8.0a0``
   :depends libdeflate: ``>=1.6,<1.7.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends openssl: ``>=1.1.1g,<1.1.2a``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pysam

   and update with::

      conda update pysam

   or use the docker container::

      docker pull quay.io/biocontainers/pysam:<tag>

   (see `pysam/tags`_ for valid values for ``<tag>``)


.. |downloads_pysam| image:: https://img.shields.io/conda/dn/bioconda/pysam.svg?style=flat
   :target: https://anaconda.org/bioconda/pysam
   :alt:   (downloads)
.. |docker_pysam| image:: https://quay.io/repository/biocontainers/pysam/status
   :target: https://quay.io/repository/biocontainers/pysam
.. _`pysam/tags`: https://quay.io/repository/biocontainers/pysam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysam/README.html