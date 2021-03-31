:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kegg.db'
.. highlight: bash

bioconductor-kegg.db
====================

.. conda:recipe:: bioconductor-kegg.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps for KEGG

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/KEGG.db.html
   :license: file LICENSE
   :recipe: /`bioconductor-kegg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kegg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kegg.db/meta.yaml>`_

   A set of annotation maps for KEGG assembled using data from KEGG


.. conda:package:: bioconductor-kegg.db

   |downloads_bioconductor-kegg.db| |docker_bioconductor-kegg.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.4-2</code>,  <code>3.2.4-1</code>,  <code>3.2.4-0</code>,  <code>3.2.3-8</code>,  <code>3.2.3-7</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  <code>3.2.3-3</code>,  <code>3.2.3-1</code>,  </span></summary>
      

      ``3.2.4-2``,  ``3.2.4-1``,  ``3.2.4-0``,  ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-1``,  ``3.2.3-0``,  ``3.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-kegg.db

   and update with::

      conda update bioconductor-kegg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kegg.db:<tag>

   (see `bioconductor-kegg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kegg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kegg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kegg.db
   :alt:   (downloads)
.. |docker_bioconductor-kegg.db| image:: https://quay.io/repository/biocontainers/bioconductor-kegg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kegg.db
.. _`bioconductor-kegg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-kegg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kegg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kegg.db/README.html