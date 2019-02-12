:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133a.db'
.. highlight: bash

bioconductor-hgu133a.db
=======================

.. conda:recipe:: bioconductor-hgu133a.db
   :replaces_section_title:

   Affymetrix Human Genome U133 Set annotation data \(chip hgu133a\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgu133a.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu133a.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133a.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133a.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu133a.db

   |downloads_bioconductor-hgu133a.db| |docker_bioconductor-hgu133a.db|

   :versions: 3.2.3-4, 3.2.3-3, 3.2.3-1, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu133a.db

   and update with::

      conda update bioconductor-hgu133a.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hgu133a.db:<tag>

   (see `bioconductor-hgu133a.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133a.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133a.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hgu133a.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133a.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133a.db
.. _`bioconductor-hgu133a.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133a.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133a.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133a.db/README.html