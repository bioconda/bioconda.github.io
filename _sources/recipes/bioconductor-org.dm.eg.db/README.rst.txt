:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.dm.eg.db'
.. highlight: bash

bioconductor-org.dm.eg.db
=========================

.. conda:recipe:: bioconductor-org.dm.eg.db
   :replaces_section_title:
   :noindex:

   Genome wide annotation for Fly

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/org.Dm.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.dm.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.dm.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.dm.eg.db/meta.yaml>`_

   Genome wide annotation for Fly\, primarily based on mapping using Entrez Gene identifiers.


.. conda:package:: bioconductor-org.dm.eg.db

   |downloads_bioconductor-org.dm.eg.db| |docker_bioconductor-org.dm.eg.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-0</code>,  <code>3.11.1-0</code>,  <code>3.10.0-0</code>,  <code>3.8.2-1</code>,  <code>3.7.0-1</code>,  <code>3.7.0-0</code>,  <code>3.6.0-0</code>,  <code>3.5.0-1</code>,  <code>3.5.0-0</code>,  </span></summary>
      

      ``3.12.0-0``,  ``3.11.1-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.0-1``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-2``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.dm.eg.db

   and update with::

      conda update bioconductor-org.dm.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.dm.eg.db:<tag>

   (see `bioconductor-org.dm.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.dm.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.dm.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.dm.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-org.dm.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.dm.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.dm.eg.db
.. _`bioconductor-org.dm.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.dm.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.dm.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.dm.eg.db/README.html