:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lrbase.ath.eg.db'
.. highlight: bash

bioconductor-lrbase.ath.eg.db
=============================

.. conda:recipe:: bioconductor-lrbase.ath.eg.db
   :replaces_section_title:

   An annotation package for the LRBaseDb object

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/LRBase.Ath.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lrbase.ath.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbase.ath.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbase.ath.eg.db/meta.yaml>`_

   Contains the LRBaseDb object to access data from several related annotation packages.


.. conda:package:: bioconductor-lrbase.ath.eg.db

   |downloads_bioconductor-lrbase.ath.eg.db| |docker_bioconductor-lrbase.ath.eg.db|

   :versions: 1.2.0-0, 1.1.0-0, 0.99.1-0
   
   :depends bioconductor-lrbasedbi: >=1.4.0,<1.5.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lrbase.ath.eg.db

   and update with::

      conda update bioconductor-lrbase.ath.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lrbase.ath.eg.db:<tag>

   (see `bioconductor-lrbase.ath.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lrbase.ath.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lrbase.ath.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lrbase.ath.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-lrbase.ath.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-lrbase.ath.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lrbase.ath.eg.db
.. _`bioconductor-lrbase.ath.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-lrbase.ath.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lrbase.ath.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lrbase.ath.eg.db/README.html