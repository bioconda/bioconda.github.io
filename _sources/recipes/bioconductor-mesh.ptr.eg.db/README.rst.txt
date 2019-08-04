:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.ptr.eg.db'
.. highlight: bash

bioconductor-mesh.ptr.eg.db
===========================

.. conda:recipe:: bioconductor-mesh.ptr.eg.db
   :replaces_section_title:

   Entrez Gene ID to MeSH ID table.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/MeSH.Ptr.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.ptr.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.ptr.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.ptr.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mesh.ptr.eg.db

   |downloads_bioconductor-mesh.ptr.eg.db| |docker_bioconductor-mesh.ptr.eg.db|

   :versions: 1.12.0-1, 1.11.0-1, 1.11.0-0
   
   :depends bioconductor-meshdbi: >=1.20.0,<1.21.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.ptr.eg.db

   and update with::

      conda update bioconductor-mesh.ptr.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mesh.ptr.eg.db:<tag>

   (see `bioconductor-mesh.ptr.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mesh.ptr.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.ptr.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mesh.ptr.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-mesh.ptr.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.ptr.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.ptr.eg.db
.. _`bioconductor-mesh.ptr.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mesh.ptr.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.ptr.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.ptr.eg.db/README.html