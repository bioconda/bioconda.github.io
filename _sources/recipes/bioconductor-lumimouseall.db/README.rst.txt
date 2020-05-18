:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumimouseall.db'
.. highlight: bash

bioconductor-lumimouseall.db
============================

.. conda:recipe:: bioconductor-lumimouseall.db
   :replaces_section_title:

   Illumina Mouse Illumina expression annotation data \(chip lumiMouseAll\)

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/lumiMouseAll.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lumimouseall.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumimouseall.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumimouseall.db/meta.yaml>`_

   Illumina Mouse Illumina expression annotation data \(chip lumiMouseAll\) assembled using data from public repositories


.. conda:package:: bioconductor-lumimouseall.db

   |downloads_bioconductor-lumimouseall.db| |docker_bioconductor-lumimouseall.db|

   :versions: 1.22.0-4, 1.22.0-3, 1.22.0-2, 1.22.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-org.mm.eg.db: >=3.11.0,<3.12.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lumimouseall.db

   and update with::

      conda update bioconductor-lumimouseall.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumimouseall.db:<tag>

   (see `bioconductor-lumimouseall.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumimouseall.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumimouseall.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumimouseall.db
   :alt:   (downloads)
.. |docker_bioconductor-lumimouseall.db| image:: https://quay.io/repository/biocontainers/bioconductor-lumimouseall.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumimouseall.db
.. _`bioconductor-lumimouseall.db/tags`: https://quay.io/repository/biocontainers/bioconductor-lumimouseall.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumimouseall.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumimouseall.db/README.html