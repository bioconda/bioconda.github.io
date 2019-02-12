:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.ecsakai.eg.db'
.. highlight: bash

bioconductor-org.ecsakai.eg.db
==============================

.. conda:recipe:: bioconductor-org.ecsakai.eg.db
   :replaces_section_title:

   Genome wide annotation for E coli strain Sakai\, primarily based on mapping using Entrez Gene identifiers.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/org.EcSakai.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.ecsakai.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.ecsakai.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.ecsakai.eg.db/meta.yaml>`_

   


.. conda:package:: bioconductor-org.ecsakai.eg.db

   |downloads_bioconductor-org.ecsakai.eg.db| |docker_bioconductor-org.ecsakai.eg.db|

   :versions: 3.7.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.ecsakai.eg.db

   and update with::

      conda update bioconductor-org.ecsakai.eg.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-org.ecsakai.eg.db:<tag>

   (see `bioconductor-org.ecsakai.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.ecsakai.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.ecsakai.eg.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-org.ecsakai.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.ecsakai.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.ecsakai.eg.db
.. _`bioconductor-org.ecsakai.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.ecsakai.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.ecsakai.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.ecsakai.eg.db/README.html