:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgubeta7.db'
.. highlight: bash

bioconductor-hgubeta7.db
========================

.. conda:recipe:: bioconductor-hgubeta7.db
   :replaces_section_title:

   Unknown annotation data \(chip hgubeta7\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/hgubeta7.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgubeta7.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgubeta7.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgubeta7.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hgubeta7.db

   |downloads_bioconductor-hgubeta7.db| |docker_bioconductor-hgubeta7.db|

   :versions: 3.2.3-3, 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.hs.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgubeta7.db

   and update with::

      conda update bioconductor-hgubeta7.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgubeta7.db:<tag>

   (see `bioconductor-hgubeta7.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgubeta7.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgubeta7.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgubeta7.db
   :alt:   (downloads)
.. |docker_bioconductor-hgubeta7.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgubeta7.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgubeta7.db
.. _`bioconductor-hgubeta7.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgubeta7.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgubeta7.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgubeta7.db/README.html