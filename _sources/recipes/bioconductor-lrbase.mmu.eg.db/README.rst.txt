:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lrbase.mmu.eg.db'
.. highlight: bash

bioconductor-lrbase.mmu.eg.db
=============================

.. conda:recipe:: bioconductor-lrbase.mmu.eg.db
   :replaces_section_title:

   An annotation package for the LRBaseDb object

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/LRBase.Mmu.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lrbase.mmu.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbase.mmu.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbase.mmu.eg.db/meta.yaml>`_

   Contains the LRBaseDb object to access data from several related annotation packages.


.. conda:package:: bioconductor-lrbase.mmu.eg.db

   |downloads_bioconductor-lrbase.mmu.eg.db| |docker_bioconductor-lrbase.mmu.eg.db|

   :versions: 1.2.0-0, 1.1.0-0, 0.99.1-0
   
   :depends bioconductor-lrbasedbi: >=1.4.0,<1.5.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lrbase.mmu.eg.db

   and update with::

      conda update bioconductor-lrbase.mmu.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lrbase.mmu.eg.db:<tag>

   (see `bioconductor-lrbase.mmu.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lrbase.mmu.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lrbase.mmu.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lrbase.mmu.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-lrbase.mmu.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-lrbase.mmu.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lrbase.mmu.eg.db
.. _`bioconductor-lrbase.mmu.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-lrbase.mmu.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lrbase.mmu.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lrbase.mmu.eg.db/README.html