:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mta10probeset.db'
.. highlight: bash

bioconductor-mta10probeset.db
=============================

.. conda:recipe:: bioconductor-mta10probeset.db
   :replaces_section_title:

   Affymetrix mta10 annotation data \(chip mta10probeset\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/mta10probeset.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mta10probeset.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mta10probeset.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mta10probeset.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mta10probeset.db

   |downloads_bioconductor-mta10probeset.db| |docker_bioconductor-mta10probeset.db|

   :versions: 8.7.0-3, 8.7.0-2, 8.7.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.mm.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mta10probeset.db

   and update with::

      conda update bioconductor-mta10probeset.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mta10probeset.db:<tag>

   (see `bioconductor-mta10probeset.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mta10probeset.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mta10probeset.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mta10probeset.db
   :alt:   (downloads)
.. |docker_bioconductor-mta10probeset.db| image:: https://quay.io/repository/biocontainers/bioconductor-mta10probeset.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mta10probeset.db
.. _`bioconductor-mta10probeset.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mta10probeset.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mta10probeset.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mta10probeset.db/README.html