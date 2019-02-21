:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.mga.eg.db'
.. highlight: bash

bioconductor-mesh.mga.eg.db
===========================

.. conda:recipe:: bioconductor-mesh.mga.eg.db
   :replaces_section_title:

   Entrez Gene ID to MeSH ID table.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/MeSH.Mga.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.mga.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.mga.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.mga.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mesh.mga.eg.db

   |downloads_bioconductor-mesh.mga.eg.db| |docker_bioconductor-mesh.mga.eg.db|

   :versions: 1.11.0-0
   
   :depends bioconductor-meshdbi: >=1.18.0,<1.19.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.mga.eg.db

   and update with::

      conda update bioconductor-mesh.mga.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mesh.mga.eg.db:<tag>

   (see `bioconductor-mesh.mga.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mesh.mga.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.mga.eg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mesh.mga.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.mga.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.mga.eg.db
.. _`bioconductor-mesh.mga.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mesh.mga.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.mga.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.mga.eg.db/README.html