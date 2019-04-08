:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mi16cod.db'
.. highlight: bash

bioconductor-mi16cod.db
=======================

.. conda:recipe:: bioconductor-mi16cod.db
   :replaces_section_title:

   Codelink Mouse Inflammation 16 Bioarray annotation data \(chip mi16cod\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/mi16cod.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mi16cod.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mi16cod.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mi16cod.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mi16cod.db

   |downloads_bioconductor-mi16cod.db| |docker_bioconductor-mi16cod.db|

   :versions: 3.4.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.mm.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mi16cod.db

   and update with::

      conda update bioconductor-mi16cod.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mi16cod.db:<tag>

   (see `bioconductor-mi16cod.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mi16cod.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mi16cod.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mi16cod.db| image:: https://quay.io/repository/biocontainers/bioconductor-mi16cod.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mi16cod.db
.. _`bioconductor-mi16cod.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mi16cod.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mi16cod.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mi16cod.db/README.html