:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sdm'
.. highlight: bash

sdm
===

.. conda:recipe:: sdm
   :replaces_section_title:
   :noindex:

   sdm \- simple demultiplex tool for FASTQ demultiplexing and dereplication

   :homepage: https://github.com/hildebra/sdm/
   :license: GPL-3.0-or-later
   :recipe: /`sdm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdm/meta.yaml>`_

   


.. conda:package:: sdm

   |downloads_sdm| |docker_sdm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.87-0</code>,  <code>1.86-0</code>,  <code>1.85-0</code>,  <code>1.84.1-0</code>,  <code>1.84-0</code>,  <code>1.83post0-0</code>,  <code>1.83-0</code>,  <code>1.73-2</code>,  <code>1.73-1</code>,  </span></summary>
      

      ``1.87-0``,  ``1.86-0``,  ``1.85-0``,  ``1.84.1-0``,  ``1.84-0``,  ``1.83post0-0``,  ``1.83-0``,  ``1.73-2``,  ``1.73-1``,  ``1.73-0``,  ``1.47-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sdm

   and update with::

      conda update sdm

   or use the docker container::

      docker pull quay.io/biocontainers/sdm:<tag>

   (see `sdm/tags`_ for valid values for ``<tag>``)


.. |downloads_sdm| image:: https://img.shields.io/conda/dn/bioconda/sdm.svg?style=flat
   :target: https://anaconda.org/bioconda/sdm
   :alt:   (downloads)
.. |docker_sdm| image:: https://quay.io/repository/biocontainers/sdm/status
   :target: https://quay.io/repository/biocontainers/sdm
.. _`sdm/tags`: https://quay.io/repository/biocontainers/sdm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sdm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sdm/README.html