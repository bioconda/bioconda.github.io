:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.dmo.eg.db'
.. highlight: bash

bioconductor-mesh.dmo.eg.db
===========================

.. conda:recipe:: bioconductor-mesh.dmo.eg.db
   :replaces_section_title:

   Entrez Gene ID to MeSH ID table.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/MeSH.Dmo.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.dmo.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.dmo.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.dmo.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mesh.dmo.eg.db

   |downloads_bioconductor-mesh.dmo.eg.db| |docker_bioconductor-mesh.dmo.eg.db|

   :versions: 1.11.0-0
   
   :depends bioconductor-meshdbi: >=1.18.0,<1.19.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.dmo.eg.db

   and update with::

      conda update bioconductor-mesh.dmo.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mesh.dmo.eg.db:<tag>

   (see `bioconductor-mesh.dmo.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mesh.dmo.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.dmo.eg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mesh.dmo.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.dmo.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.dmo.eg.db
.. _`bioconductor-mesh.dmo.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mesh.dmo.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.dmo.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.dmo.eg.db/README.html