:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.mga.eg.db'
.. highlight: bash

bioconductor-mesh.mga.eg.db
===========================

.. conda:recipe:: bioconductor-mesh.mga.eg.db
   :replaces_section_title:
   :noindex:

   Mapping table for Meleagris gallopavo Gene ID to MeSH

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/MeSH.Mga.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.mga.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.mga.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.mga.eg.db/meta.yaml>`_

   Entrez Gene ID to MeSH ID table.


.. conda:package:: bioconductor-mesh.mga.eg.db

   |downloads_bioconductor-mesh.mga.eg.db| |docker_bioconductor-mesh.mga.eg.db|

   :versions:
      
      

      ``1.13.0-3``,  ``1.13.0-2``,  ``1.13.0-1``,  ``1.13.0-0``,  ``1.12.0-1``,  ``1.11.0-0``

      

   
   :depends bioconductor-meshdbi: ``>=1.26.0,<1.27.0``
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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
   :target: https://anaconda.org/bioconda/bioconductor-mesh.mga.eg.db
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