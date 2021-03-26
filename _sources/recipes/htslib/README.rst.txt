:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htslib'
.. highlight: bash

htslib
======

.. conda:recipe:: htslib
   :replaces_section_title:
   :noindex:

   C library for high\-throughput sequencing data formats.

   :homepage: https://github.com/samtools/htslib
   :license: MIT
   :recipe: /`htslib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htslib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htslib/meta.yaml>`_
   :links: biotools: :biotools:`HTSlib`

   


.. conda:package:: htslib

   |downloads_htslib| |docker_htslib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12-1</code>,  <code>1.12-0</code>,  <code>1.11-2</code>,  <code>1.11-1</code>,  <code>1.11-0</code>,  <code>1.10.2-1</code>,  <code>1.10.2-0</code>,  <code>1.10.1-0</code>,  <code>1.10-1</code>,  </span></summary>
      

      ``1.12-1``,  ``1.12-0``,  ``1.11-2``,  ``1.11-1``,  ``1.11-0``,  ``1.10.2-1``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10-1``,  ``1.10-0``,  ``1.9-9``,  ``1.9-8``,  ``1.9-7``,  ``1.9-6``,  ``1.9-5``,  ``1.9-4``,  ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3.2-0``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2.1-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=7.75.0,<8.0a0``
   :depends libdeflate: ``>=1.7,<1.8.0a0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install htslib

   and update with::

      conda update htslib

   or use the docker container::

      docker pull quay.io/biocontainers/htslib:<tag>

   (see `htslib/tags`_ for valid values for ``<tag>``)


.. |downloads_htslib| image:: https://img.shields.io/conda/dn/bioconda/htslib.svg?style=flat
   :target: https://anaconda.org/bioconda/htslib
   :alt:   (downloads)
.. |docker_htslib| image:: https://quay.io/repository/biocontainers/htslib/status
   :target: https://quay.io/repository/biocontainers/htslib
.. _`htslib/tags`: https://quay.io/repository/biocontainers/htslib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htslib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htslib/README.html