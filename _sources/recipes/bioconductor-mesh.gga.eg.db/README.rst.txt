:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.gga.eg.db'
.. highlight: bash

bioconductor-mesh.gga.eg.db
===========================

.. conda:recipe:: bioconductor-mesh.gga.eg.db
   :replaces_section_title:

   Entrez Gene ID to MeSH ID table.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/MeSH.Gga.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.gga.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.gga.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.gga.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mesh.gga.eg.db

   |downloads_bioconductor-mesh.gga.eg.db| |docker_bioconductor-mesh.gga.eg.db|

   :versions: 1.11.0-0
   
   :depends bioconductor-meshdbi: >=1.18.0,<1.19.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.gga.eg.db

   and update with::

      conda update bioconductor-mesh.gga.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mesh.gga.eg.db:<tag>

   (see `bioconductor-mesh.gga.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mesh.gga.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.gga.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mesh.gga.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-mesh.gga.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.gga.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.gga.eg.db
.. _`bioconductor-mesh.gga.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mesh.gga.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.gga.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.gga.eg.db/README.html