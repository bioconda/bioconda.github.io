:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mu19ksubb.db'
.. highlight: bash

bioconductor-mu19ksubb.db
=========================

.. conda:recipe:: bioconductor-mu19ksubb.db
   :replaces_section_title:

   Affymetrix Murine Genome 19k Set annotation data \(chip mu19ksubb\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/mu19ksubb.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mu19ksubb.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu19ksubb.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu19ksubb.db/meta.yaml>`_

   Affymetrix Murine Genome 19k Set annotation data \(chip mu19ksubb\) assembled using data from public repositories


.. conda:package:: bioconductor-mu19ksubb.db

   |downloads_bioconductor-mu19ksubb.db| |docker_bioconductor-mu19ksubb.db|

   :versions: 3.2.3-3, 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.mm.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mu19ksubb.db

   and update with::

      conda update bioconductor-mu19ksubb.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mu19ksubb.db:<tag>

   (see `bioconductor-mu19ksubb.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mu19ksubb.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mu19ksubb.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mu19ksubb.db
   :alt:   (downloads)
.. |docker_bioconductor-mu19ksubb.db| image:: https://quay.io/repository/biocontainers/bioconductor-mu19ksubb.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mu19ksubb.db
.. _`bioconductor-mu19ksubb.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mu19ksubb.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mu19ksubb.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mu19ksubb.db/README.html