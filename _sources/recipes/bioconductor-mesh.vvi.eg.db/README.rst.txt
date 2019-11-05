:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.vvi.eg.db'
.. highlight: bash

bioconductor-mesh.vvi.eg.db
===========================

.. conda:recipe:: bioconductor-mesh.vvi.eg.db
   :replaces_section_title:

   Entrez Gene ID to MeSH ID table.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/MeSH.Vvi.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.vvi.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.vvi.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.vvi.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mesh.vvi.eg.db

   |downloads_bioconductor-mesh.vvi.eg.db| |docker_bioconductor-mesh.vvi.eg.db|

   :versions: 1.13.0-0, 1.12.0-1, 1.11.0-1, 1.11.0-0
   
   :depends bioconductor-meshdbi: >=1.22.0,<1.23.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.vvi.eg.db

   and update with::

      conda update bioconductor-mesh.vvi.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mesh.vvi.eg.db:<tag>

   (see `bioconductor-mesh.vvi.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mesh.vvi.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.vvi.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mesh.vvi.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-mesh.vvi.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.vvi.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.vvi.eg.db
.. _`bioconductor-mesh.vvi.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mesh.vvi.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.vvi.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.vvi.eg.db/README.html