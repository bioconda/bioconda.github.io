.. title:: Package Recipe 'bioconductor-mesh.sil.eg.db'
.. highlight: bash


bioconductor-mesh.sil.eg.db
===========================

.. conda:recipe:: bioconductor-mesh.sil.eg.db
   :replaces_section_title:

   Entrez Gene ID to MeSH ID table.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/MeSH.Sil.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mesh.sil.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.sil.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mesh.sil.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mesh.sil.eg.db

   |downloads_bioconductor-mesh.sil.eg.db| |docker_bioconductor-mesh.sil.eg.db|

   :versions: 1.11.0

   :depends: :conda:package:`bioconductor-meshdbi` >=1.18.0,<1.19.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mesh.sil.eg.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mesh.sil.eg.db

   and update with::

      conda update bioconductor-mesh.sil.eg.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mesh.sil.eg.db


.. |required_by_bioconductor-mesh.sil.eg.db| conda:required_by:: bioconductor-mesh.sil.eg.db
.. |downloads_bioconductor-mesh.sil.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mesh.sil.eg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mesh.sil.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-mesh.sil.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mesh.sil.eg.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mesh.sil.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mesh.sil.eg.db/README.html

