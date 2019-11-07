:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hta20transcriptcluster.db'
.. highlight: bash

bioconductor-hta20transcriptcluster.db
======================================

.. conda:recipe:: bioconductor-hta20transcriptcluster.db
   :replaces_section_title:

   Affymetrix hta20 annotation data \(chip hta20transcriptcluster\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/hta20transcriptcluster.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hta20transcriptcluster.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hta20transcriptcluster.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hta20transcriptcluster.db/meta.yaml>`_

   Affymetrix hta20 annotation data \(chip hta20transcriptcluster\) assembled using data from public repositories


.. conda:package:: bioconductor-hta20transcriptcluster.db

   |downloads_bioconductor-hta20transcriptcluster.db| |docker_bioconductor-hta20transcriptcluster.db|

   :versions: 8.7.0-3, 8.7.0-2, 8.7.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.hs.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hta20transcriptcluster.db

   and update with::

      conda update bioconductor-hta20transcriptcluster.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hta20transcriptcluster.db:<tag>

   (see `bioconductor-hta20transcriptcluster.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hta20transcriptcluster.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hta20transcriptcluster.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hta20transcriptcluster.db
   :alt:   (downloads)
.. |docker_bioconductor-hta20transcriptcluster.db| image:: https://quay.io/repository/biocontainers/bioconductor-hta20transcriptcluster.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hta20transcriptcluster.db
.. _`bioconductor-hta20transcriptcluster.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hta20transcriptcluster.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hta20transcriptcluster.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hta20transcriptcluster.db/README.html