:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.ana.eg.db'
.. highlight: bash

bioconductor-mesh.ana.eg.db
===========================

.. conda:recipe:: bioconductor-mesh.ana.eg.db
   :replaces_section_title:

   Mapping table for Filamentos cyanobacteria Gene ID to MeSH

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/MeSH.Ana.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.ana.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.ana.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.ana.eg.db/meta.yaml>`_

   Entrez Gene ID to MeSH ID table.


.. conda:package:: bioconductor-mesh.ana.eg.db

   |downloads_bioconductor-mesh.ana.eg.db| |docker_bioconductor-mesh.ana.eg.db|

   :versions: 1.13.0-1, 1.13.0-0, 1.12.0-1, 1.11.0-0
   
   :depends bioconductor-meshdbi: >=1.24.0,<1.25.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.ana.eg.db

   and update with::

      conda update bioconductor-mesh.ana.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mesh.ana.eg.db:<tag>

   (see `bioconductor-mesh.ana.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mesh.ana.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.ana.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mesh.ana.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-mesh.ana.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.ana.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.ana.eg.db
.. _`bioconductor-mesh.ana.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mesh.ana.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.ana.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.ana.eg.db/README.html