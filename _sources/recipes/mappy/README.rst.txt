:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mappy'
.. highlight: bash

mappy
=====

.. conda:recipe:: mappy
   :replaces_section_title:
   :noindex:

   Minimap2 Python binding

   :homepage: https://github.com/lh3/minimap2
   :license: MIT
   :recipe: /`mappy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mappy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mappy/meta.yaml>`_

   


.. conda:package:: mappy

   |downloads_mappy| |docker_mappy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.17-3</code>,  <code>2.17-2</code>,  <code>2.17-1</code>,  <code>2.17-0</code>,  <code>2.16-0</code>,  <code>2.15-0</code>,  <code>2.14-0</code>,  <code>2.13-0</code>,  <code>2.12-0</code>,  </span></summary>
      

      ``2.17-3``,  ``2.17-2``,  ``2.17-1``,  ``2.17-0``,  ``2.16-0``,  ``2.15-0``,  ``2.14-0``,  ``2.13-0``,  ``2.12-0``,  ``2.11-0``,  ``2.10-1``,  ``2.9-1``,  ``2.8-1``,  ``2.8-0``,  ``2.7-1``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4-0``,  ``2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mappy

   and update with::

      conda update mappy

   or use the docker container::

      docker pull quay.io/biocontainers/mappy:<tag>

   (see `mappy/tags`_ for valid values for ``<tag>``)


.. |downloads_mappy| image:: https://img.shields.io/conda/dn/bioconda/mappy.svg?style=flat
   :target: https://anaconda.org/bioconda/mappy
   :alt:   (downloads)
.. |docker_mappy| image:: https://quay.io/repository/biocontainers/mappy/status
   :target: https://quay.io/repository/biocontainers/mappy
.. _`mappy/tags`: https://quay.io/repository/biocontainers/mappy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mappy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mappy/README.html