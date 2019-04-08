:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lrbase.gga.eg.db'
.. highlight: bash

bioconductor-lrbase.gga.eg.db
=============================

.. conda:recipe:: bioconductor-lrbase.gga.eg.db
   :replaces_section_title:

   Contains the LRBaseDb object to access data from several related annotation packages.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/LRBase.Gga.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lrbase.gga.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbase.gga.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbase.gga.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-lrbase.gga.eg.db

   |downloads_bioconductor-lrbase.gga.eg.db| |docker_bioconductor-lrbase.gga.eg.db|

   :versions: 0.99.1-0
   
   :depends bioconductor-lrbasedbi: >=1.0.0,<1.1.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rsqlite: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lrbase.gga.eg.db

   and update with::

      conda update bioconductor-lrbase.gga.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lrbase.gga.eg.db:<tag>

   (see `bioconductor-lrbase.gga.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lrbase.gga.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lrbase.gga.eg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lrbase.gga.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-lrbase.gga.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lrbase.gga.eg.db
.. _`bioconductor-lrbase.gga.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-lrbase.gga.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lrbase.gga.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lrbase.gga.eg.db/README.html