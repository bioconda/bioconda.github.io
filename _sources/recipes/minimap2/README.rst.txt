:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minimap2'
.. highlight: bash

minimap2
========

.. conda:recipe:: minimap2
   :replaces_section_title:
   :noindex:

   A versatile pairwise aligner for genomic and spliced nucleotide sequences.

   :homepage: https://github.com/lh3/minimap2
   :license: MIT
   :recipe: /`minimap2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap2/meta.yaml>`_

   


.. conda:package:: minimap2

   |downloads_minimap2| |docker_minimap2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.17-2</code>,  <code>2.17-1</code>,  <code>2.17-0</code>,  <code>2.16-1</code>,  <code>2.16-0</code>,  <code>2.15-1</code>,  <code>2.15-0</code>,  <code>2.14-0</code>,  <code>2.13-0</code>,  </span></summary>
      

      ``2.17-2``,  ``2.17-1``,  ``2.17-0``,  ``2.16-1``,  ``2.16-0``,  ``2.15-1``,  ``2.15-0``,  ``2.14-0``,  ``2.13-0``,  ``2.12-0``,  ``2.11-0``,  ``2.10-1``,  ``2.9-1``,  ``2.8-1``,  ``2.8-0``,  ``2.7-1``,  ``2.7-0``,  ``2.6.1-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.1.1-0``,  ``2.1.r311-0``,  ``2.0.r191-0``

      
      .. raw:: html

         </details>
      

   
   :depends k8: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minimap2

   and update with::

      conda update minimap2

   or use the docker container::

      docker pull quay.io/biocontainers/minimap2:<tag>

   (see `minimap2/tags`_ for valid values for ``<tag>``)


.. |downloads_minimap2| image:: https://img.shields.io/conda/dn/bioconda/minimap2.svg?style=flat
   :target: https://anaconda.org/bioconda/minimap2
   :alt:   (downloads)
.. |docker_minimap2| image:: https://quay.io/repository/biocontainers/minimap2/status
   :target: https://quay.io/repository/biocontainers/minimap2
.. _`minimap2/tags`: https://quay.io/repository/biocontainers/minimap2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minimap2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minimap2/README.html