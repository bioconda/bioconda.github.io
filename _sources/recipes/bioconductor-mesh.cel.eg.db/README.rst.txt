:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.cel.eg.db'
.. highlight: bash

bioconductor-mesh.cel.eg.db
===========================

.. conda:recipe:: bioconductor-mesh.cel.eg.db
   :replaces_section_title:

   Entrez Gene ID to MeSH ID table.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/MeSH.Cel.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.cel.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.cel.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.cel.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mesh.cel.eg.db

   |downloads_bioconductor-mesh.cel.eg.db| |docker_bioconductor-mesh.cel.eg.db|

   :versions: 1.12.0-1, 1.11.0-0
   
   :depends bioconductor-meshdbi: >=1.20.0,<1.21.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.cel.eg.db

   and update with::

      conda update bioconductor-mesh.cel.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mesh.cel.eg.db:<tag>

   (see `bioconductor-mesh.cel.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mesh.cel.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.cel.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mesh.cel.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-mesh.cel.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.cel.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.cel.eg.db
.. _`bioconductor-mesh.cel.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mesh.cel.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.cel.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.cel.eg.db/README.html