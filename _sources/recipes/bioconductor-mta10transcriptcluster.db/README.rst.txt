:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mta10transcriptcluster.db'
.. highlight: bash

bioconductor-mta10transcriptcluster.db
======================================

.. conda:recipe:: bioconductor-mta10transcriptcluster.db
   :replaces_section_title:

   Affymetrix mta10 annotation data \(chip mta10transcriptcluster\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/mta10transcriptcluster.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mta10transcriptcluster.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mta10transcriptcluster.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mta10transcriptcluster.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mta10transcriptcluster.db

   |downloads_bioconductor-mta10transcriptcluster.db| |docker_bioconductor-mta10transcriptcluster.db|

   :versions: 8.7.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.mm.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mta10transcriptcluster.db

   and update with::

      conda update bioconductor-mta10transcriptcluster.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mta10transcriptcluster.db:<tag>

   (see `bioconductor-mta10transcriptcluster.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mta10transcriptcluster.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mta10transcriptcluster.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mta10transcriptcluster.db| image:: https://quay.io/repository/biocontainers/bioconductor-mta10transcriptcluster.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mta10transcriptcluster.db
.. _`bioconductor-mta10transcriptcluster.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mta10transcriptcluster.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mta10transcriptcluster.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mta10transcriptcluster.db/README.html