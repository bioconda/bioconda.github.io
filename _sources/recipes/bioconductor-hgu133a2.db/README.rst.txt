:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133a2.db'
.. highlight: bash

bioconductor-hgu133a2.db
========================

.. conda:recipe:: bioconductor-hgu133a2.db
   :replaces_section_title:

   Affymetrix Human Genome U133A 2.0 Array annotation data \(chip hgu133a2\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/hgu133a2.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu133a2.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133a2.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133a2.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu133a2.db

   |downloads_bioconductor-hgu133a2.db| |docker_bioconductor-hgu133a2.db|

   :versions: 3.2.3-5, 3.2.3-3, 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-org.hs.eg.db: >=3.8.0,<3.9.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu133a2.db

   and update with::

      conda update bioconductor-hgu133a2.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133a2.db:<tag>

   (see `bioconductor-hgu133a2.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133a2.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133a2.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133a2.db
   :alt:   (downloads)
.. |docker_bioconductor-hgu133a2.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133a2.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133a2.db
.. _`bioconductor-hgu133a2.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133a2.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133a2.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133a2.db/README.html