:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rguatlas4k.db'
.. highlight: bash

bioconductor-rguatlas4k.db
==========================

.. conda:recipe:: bioconductor-rguatlas4k.db
   :replaces_section_title:

   Clontech BD Atlas Long Oligos Rat 4K annotation data \(chip rguatlas4k\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/rguatlas4k.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rguatlas4k.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rguatlas4k.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rguatlas4k.db/meta.yaml>`_

   


.. conda:package:: bioconductor-rguatlas4k.db

   |downloads_bioconductor-rguatlas4k.db| |docker_bioconductor-rguatlas4k.db|

   :versions: 3.2.3-1, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-org.rn.eg.db: >=3.7.0,<3.8.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rguatlas4k.db

   and update with::

      conda update bioconductor-rguatlas4k.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rguatlas4k.db:<tag>

   (see `bioconductor-rguatlas4k.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rguatlas4k.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rguatlas4k.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rguatlas4k.db| image:: https://quay.io/repository/biocontainers/bioconductor-rguatlas4k.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rguatlas4k.db
.. _`bioconductor-rguatlas4k.db/tags`: https://quay.io/repository/biocontainers/bioconductor-rguatlas4k.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rguatlas4k.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rguatlas4k.db/README.html