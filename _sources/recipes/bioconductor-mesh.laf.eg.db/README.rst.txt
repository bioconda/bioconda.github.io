:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.laf.eg.db'
.. highlight: bash

bioconductor-mesh.laf.eg.db
===========================

.. conda:recipe:: bioconductor-mesh.laf.eg.db
   :replaces_section_title:

   Entrez Gene ID to MeSH ID table.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/MeSH.Laf.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.laf.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.laf.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.laf.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mesh.laf.eg.db

   |downloads_bioconductor-mesh.laf.eg.db| |docker_bioconductor-mesh.laf.eg.db|

   :versions: 1.11.0-0
   
   :depends bioconductor-meshdbi: >=1.18.0,<1.19.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.laf.eg.db

   and update with::

      conda update bioconductor-mesh.laf.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mesh.laf.eg.db:<tag>

   (see `bioconductor-mesh.laf.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mesh.laf.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.laf.eg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mesh.laf.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.laf.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.laf.eg.db
.. _`bioconductor-mesh.laf.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mesh.laf.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.laf.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.laf.eg.db/README.html