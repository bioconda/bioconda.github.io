:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mztosqlite'
.. highlight: bash

mztosqlite
==========

.. conda:recipe:: mztosqlite
   :replaces_section_title:
   :noindex:

   Convert proteomics data files into a SQLite database.

   :homepage: https://github.com/galaxyproteomics/mzToSQLite
   :license: GPL, Version 2.0
   :recipe: /`mztosqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mztosqlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mztosqlite/meta.yaml>`_

   


.. conda:package:: mztosqlite

   |downloads_mztosqlite| |docker_mztosqlite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.4-3</code>,  <code>2.0.4-2</code>,  <code>2.0.4-1</code>,  <code>2.0.4-0</code>,  <code>2.0.2-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.2.0-4</code>,  <code>1.2.0-3</code>,  </span></summary>
      

      ``2.0.4-3``,  ``2.0.4-2``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.2-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mztosqlite

   and update with::

      conda update mztosqlite

   or use the docker container::

      docker pull quay.io/biocontainers/mztosqlite:<tag>

   (see `mztosqlite/tags`_ for valid values for ``<tag>``)


.. |downloads_mztosqlite| image:: https://img.shields.io/conda/dn/bioconda/mztosqlite.svg?style=flat
   :target: https://anaconda.org/bioconda/mztosqlite
   :alt:   (downloads)
.. |docker_mztosqlite| image:: https://quay.io/repository/biocontainers/mztosqlite/status
   :target: https://quay.io/repository/biocontainers/mztosqlite
.. _`mztosqlite/tags`: https://quay.io/repository/biocontainers/mztosqlite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mztosqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mztosqlite/README.html