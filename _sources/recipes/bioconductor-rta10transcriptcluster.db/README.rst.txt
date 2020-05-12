:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rta10transcriptcluster.db'
.. highlight: bash

bioconductor-rta10transcriptcluster.db
======================================

.. conda:recipe:: bioconductor-rta10transcriptcluster.db
   :replaces_section_title:

   Affymetrix rta10 annotation data \(chip rta10transcriptcluster\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/rta10transcriptcluster.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rta10transcriptcluster.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rta10transcriptcluster.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rta10transcriptcluster.db/meta.yaml>`_

   Affymetrix rta10 annotation data \(chip rta10transcriptcluster\) assembled using data from public repositories


.. conda:package:: bioconductor-rta10transcriptcluster.db

   |downloads_bioconductor-rta10transcriptcluster.db| |docker_bioconductor-rta10transcriptcluster.db|

   :versions: 8.7.0-4, 8.7.0-3, 8.7.0-2, 8.7.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-org.rn.eg.db: >=3.11.0,<3.12.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rta10transcriptcluster.db

   and update with::

      conda update bioconductor-rta10transcriptcluster.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rta10transcriptcluster.db:<tag>

   (see `bioconductor-rta10transcriptcluster.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rta10transcriptcluster.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rta10transcriptcluster.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rta10transcriptcluster.db
   :alt:   (downloads)
.. |docker_bioconductor-rta10transcriptcluster.db| image:: https://quay.io/repository/biocontainers/bioconductor-rta10transcriptcluster.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rta10transcriptcluster.db
.. _`bioconductor-rta10transcriptcluster.db/tags`: https://quay.io/repository/biocontainers/bioconductor-rta10transcriptcluster.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rta10transcriptcluster.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rta10transcriptcluster.db/README.html