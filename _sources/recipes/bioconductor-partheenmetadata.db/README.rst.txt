:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-partheenmetadata.db'
.. highlight: bash

bioconductor-partheenmetadata.db
================================

.. conda:recipe:: bioconductor-partheenmetadata.db
   :replaces_section_title:

   PartheenMetaData http\:\/\/swegene.onk.lu.se Annotation Data \(PartheenMetaData\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/PartheenMetaData.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-partheenmetadata.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-partheenmetadata.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-partheenmetadata.db/meta.yaml>`_

   


.. conda:package:: bioconductor-partheenmetadata.db

   |downloads_bioconductor-partheenmetadata.db| |docker_bioconductor-partheenmetadata.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-partheenmetadata.db

   and update with::

      conda update bioconductor-partheenmetadata.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-partheenmetadata.db:<tag>

   (see `bioconductor-partheenmetadata.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-partheenmetadata.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-partheenmetadata.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-partheenmetadata.db
   :alt:   (downloads)
.. |docker_bioconductor-partheenmetadata.db| image:: https://quay.io/repository/biocontainers/bioconductor-partheenmetadata.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-partheenmetadata.db
.. _`bioconductor-partheenmetadata.db/tags`: https://quay.io/repository/biocontainers/bioconductor-partheenmetadata.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-partheenmetadata.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-partheenmetadata.db/README.html