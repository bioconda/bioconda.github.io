:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.gg.eg.db'
.. highlight: bash

bioconductor-org.gg.eg.db
=========================

.. conda:recipe:: bioconductor-org.gg.eg.db
   :replaces_section_title:
   :noindex:

   Genome wide annotation for Chicken

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/org.Gg.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.gg.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.gg.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.gg.eg.db/meta.yaml>`_

   Genome wide annotation for Chicken\, primarily based on mapping using Entrez Gene identifiers.


.. conda:package:: bioconductor-org.gg.eg.db

   |downloads_bioconductor-org.gg.eg.db| |docker_bioconductor-org.gg.eg.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-0</code>,  <code>3.11.1-0</code>,  <code>3.10.0-0</code>,  <code>3.8.2-1</code>,  <code>3.7.0-0</code>,  <code>3.6.0-0</code>,  <code>3.5.0-1</code>,  <code>3.5.0-0</code>,  <code>3.4.2-0</code>,  </span></summary>
      

      ``3.12.0-0``,  ``3.11.1-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.4.2-0``,  ``3.4.1-1``,  ``3.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.gg.eg.db

   and update with::

      conda update bioconductor-org.gg.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.gg.eg.db:<tag>

   (see `bioconductor-org.gg.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.gg.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.gg.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.gg.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-org.gg.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.gg.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.gg.eg.db
.. _`bioconductor-org.gg.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.gg.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.gg.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.gg.eg.db/README.html