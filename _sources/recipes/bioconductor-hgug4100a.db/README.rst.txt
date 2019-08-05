:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgug4100a.db'
.. highlight: bash

bioconductor-hgug4100a.db
=========================

.. conda:recipe:: bioconductor-hgug4100a.db
   :replaces_section_title:

   Agilent Human 1 cDNA Microarray Kit annotation data \(chip hgug4100a\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/hgug4100a.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgug4100a.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgug4100a.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgug4100a.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hgug4100a.db

   |downloads_bioconductor-hgug4100a.db| |docker_bioconductor-hgug4100a.db|

   :versions: 3.2.3-3, 3.2.3-1, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-org.hs.eg.db: >=3.8.0,<3.9.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgug4100a.db

   and update with::

      conda update bioconductor-hgug4100a.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgug4100a.db:<tag>

   (see `bioconductor-hgug4100a.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgug4100a.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgug4100a.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgug4100a.db
   :alt:   (downloads)
.. |docker_bioconductor-hgug4100a.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgug4100a.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgug4100a.db
.. _`bioconductor-hgug4100a.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgug4100a.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgug4100a.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgug4100a.db/README.html