:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'delly'
.. highlight: bash

delly
=====

.. conda:recipe:: delly
   :replaces_section_title:
   :noindex:

   Structural variant discovery by integrated paired\-end and split\-read analysis

   :homepage: https://github.com/dellytools/delly
   :license: BSD / BSD-3-Clause
   :recipe: /`delly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/delly/meta.yaml>`_

   


.. conda:package:: delly

   |downloads_delly| |docker_delly|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.6-0</code>,  <code>0.8.5-0</code>,  <code>0.8.3-1</code>,  <code>0.8.3-0</code>,  <code>0.8.2-1</code>,  <code>0.8.2-0</code>,  <code>0.8.1-3</code>,  <code>0.8.1-2</code>,  <code>0.8.1-1</code>,  </span></summary>
      

      ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-3``,  ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.7.9-4``,  ``0.7.8-4``,  ``0.7.8-3``,  ``0.7.8-2``,  ``0.7.8-1``,  ``0.7.8-0``,  ``0.7.7-1``,  ``0.7.6-0``,  ``0.7.2-1``,  ``0.7.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install delly

   and update with::

      conda update delly

   or use the docker container::

      docker pull quay.io/biocontainers/delly:<tag>

   (see `delly/tags`_ for valid values for ``<tag>``)


.. |downloads_delly| image:: https://img.shields.io/conda/dn/bioconda/delly.svg?style=flat
   :target: https://anaconda.org/bioconda/delly
   :alt:   (downloads)
.. |docker_delly| image:: https://quay.io/repository/biocontainers/delly/status
   :target: https://quay.io/repository/biocontainers/delly
.. _`delly/tags`: https://quay.io/repository/biocontainers/delly?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/delly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/delly/README.html