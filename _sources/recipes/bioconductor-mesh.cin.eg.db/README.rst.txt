:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.cin.eg.db'
.. highlight: bash

bioconductor-mesh.cin.eg.db
===========================

.. conda:recipe:: bioconductor-mesh.cin.eg.db
   :replaces_section_title:

   Entrez Gene ID to MeSH ID table.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/MeSH.Cin.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.cin.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.cin.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.cin.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mesh.cin.eg.db

   |downloads_bioconductor-mesh.cin.eg.db| |docker_bioconductor-mesh.cin.eg.db|

   :versions: 1.12.0-1, 1.11.0-0
   
   :depends bioconductor-meshdbi: >=1.20.0,<1.21.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.cin.eg.db

   and update with::

      conda update bioconductor-mesh.cin.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mesh.cin.eg.db:<tag>

   (see `bioconductor-mesh.cin.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mesh.cin.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.cin.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mesh.cin.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-mesh.cin.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.cin.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.cin.eg.db
.. _`bioconductor-mesh.cin.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mesh.cin.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.cin.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.cin.eg.db/README.html