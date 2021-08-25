:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mesh.dme.eg.db'
.. highlight: bash

bioconductor-mesh.dme.eg.db
===========================

.. conda:recipe:: bioconductor-mesh.dme.eg.db
   :replaces_section_title:
   :noindex:

   Mapping table for Drosophila melanogaster Gene ID to MeSH

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/MeSH.Dme.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.dme.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.dme.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.dme.eg.db/meta.yaml>`_

   Entrez Gene ID to MeSH ID table.


.. conda:package:: bioconductor-mesh.dme.eg.db

   |downloads_bioconductor-mesh.dme.eg.db| |docker_bioconductor-mesh.dme.eg.db|

   :versions:
      
      

      ``1.15.0-0``,  ``1.13.0-3``,  ``1.13.0-2``,  ``1.13.0-1``,  ``1.13.0-0``,  ``1.12.0-1``,  ``1.11.0-0``

      

   
   :depends bioconductor-meshdbi: ``>=1.28.0,<1.29.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.dme.eg.db

   and update with::

      conda update bioconductor-mesh.dme.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mesh.dme.eg.db:<tag>

   (see `bioconductor-mesh.dme.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mesh.dme.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.dme.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mesh.dme.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-mesh.dme.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.dme.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.dme.eg.db
.. _`bioconductor-mesh.dme.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mesh.dme.eg.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mesh.dme.eg.db";
        var versions = ["1.15.0","1.13.0","1.13.0","1.13.0","1.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.dme.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.dme.eg.db/README.html