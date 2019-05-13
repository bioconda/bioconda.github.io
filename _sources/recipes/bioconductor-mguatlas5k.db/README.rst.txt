:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mguatlas5k.db'
.. highlight: bash

bioconductor-mguatlas5k.db
==========================

.. conda:recipe:: bioconductor-mguatlas5k.db
   :replaces_section_title:

   Clontech BD Atlas Long Oligos Mouse 5K annotation data \(chip mguatlas5k\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/mguatlas5k.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mguatlas5k.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mguatlas5k.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mguatlas5k.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mguatlas5k.db

   |downloads_bioconductor-mguatlas5k.db| |docker_bioconductor-mguatlas5k.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.mm.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mguatlas5k.db

   and update with::

      conda update bioconductor-mguatlas5k.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mguatlas5k.db:<tag>

   (see `bioconductor-mguatlas5k.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mguatlas5k.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mguatlas5k.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mguatlas5k.db
   :alt:   (downloads)
.. |docker_bioconductor-mguatlas5k.db| image:: https://quay.io/repository/biocontainers/bioconductor-mguatlas5k.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mguatlas5k.db
.. _`bioconductor-mguatlas5k.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mguatlas5k.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mguatlas5k.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mguatlas5k.db/README.html