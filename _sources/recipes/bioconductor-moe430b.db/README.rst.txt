:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moe430b.db'
.. highlight: bash

bioconductor-moe430b.db
=======================

.. conda:recipe:: bioconductor-moe430b.db
   :replaces_section_title:

   Affymetrix Mouse Expression Set 430 annotation data \(chip moe430b\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/moe430b.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-moe430b.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moe430b.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moe430b.db/meta.yaml>`_

   


.. conda:package:: bioconductor-moe430b.db

   |downloads_bioconductor-moe430b.db| |docker_bioconductor-moe430b.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.mm.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-moe430b.db

   and update with::

      conda update bioconductor-moe430b.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-moe430b.db:<tag>

   (see `bioconductor-moe430b.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-moe430b.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moe430b.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moe430b.db
   :alt:   (downloads)
.. |docker_bioconductor-moe430b.db| image:: https://quay.io/repository/biocontainers/bioconductor-moe430b.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moe430b.db
.. _`bioconductor-moe430b.db/tags`: https://quay.io/repository/biocontainers/bioconductor-moe430b.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moe430b.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moe430b.db/README.html