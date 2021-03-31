:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lrbase.hsa.eg.db'
.. highlight: bash

bioconductor-lrbase.hsa.eg.db
=============================

.. conda:recipe:: bioconductor-lrbase.hsa.eg.db
   :replaces_section_title:
   :noindex:

   An annotation package for the LRBaseDb object

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/LRBase.Hsa.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lrbase.hsa.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbase.hsa.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbase.hsa.eg.db/meta.yaml>`_

   Contains the LRBaseDb object to access data from several related annotation packages.


.. conda:package:: bioconductor-lrbase.hsa.eg.db

   |downloads_bioconductor-lrbase.hsa.eg.db| |docker_bioconductor-lrbase.hsa.eg.db|

   :versions:
      
      

      ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``0.99.1-0``

      

   
   :depends bioconductor-lrbasedbi: ``>=2.0.0,<2.1.0``
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lrbase.hsa.eg.db

   and update with::

      conda update bioconductor-lrbase.hsa.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lrbase.hsa.eg.db:<tag>

   (see `bioconductor-lrbase.hsa.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lrbase.hsa.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lrbase.hsa.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lrbase.hsa.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-lrbase.hsa.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-lrbase.hsa.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lrbase.hsa.eg.db
.. _`bioconductor-lrbase.hsa.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-lrbase.hsa.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lrbase.hsa.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lrbase.hsa.eg.db/README.html