:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libbigwig'
.. highlight: bash

libbigwig
=========

.. conda:recipe:: libbigwig
   :replaces_section_title:
   :noindex:

   A C library for handling bigWig files

   :homepage: https://github.com/dpryan79/libBigWig
   :license: MIT
   :recipe: /`libbigwig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbigwig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbigwig/meta.yaml>`_

   


.. conda:package:: libbigwig

   |downloads_libbigwig| |docker_libbigwig|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.6-1</code>,  <code>0.4.6-0</code>,  <code>0.4.4-1</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.1-2</code>,  <code>0.4.1-1</code>,  </span></summary>
      

      ``0.4.6-1``,  ``0.4.6-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libbigwig

   and update with::

      conda update libbigwig

   or use the docker container::

      docker pull quay.io/biocontainers/libbigwig:<tag>

   (see `libbigwig/tags`_ for valid values for ``<tag>``)


.. |downloads_libbigwig| image:: https://img.shields.io/conda/dn/bioconda/libbigwig.svg?style=flat
   :target: https://anaconda.org/bioconda/libbigwig
   :alt:   (downloads)
.. |docker_libbigwig| image:: https://quay.io/repository/biocontainers/libbigwig/status
   :target: https://quay.io/repository/biocontainers/libbigwig
.. _`libbigwig/tags`: https://quay.io/repository/biocontainers/libbigwig?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libbigwig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libbigwig/README.html