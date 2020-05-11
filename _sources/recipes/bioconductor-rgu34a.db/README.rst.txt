:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgu34a.db'
.. highlight: bash

bioconductor-rgu34a.db
======================

.. conda:recipe:: bioconductor-rgu34a.db
   :replaces_section_title:

   Affymetrix Rat Genome U34 Set annotation data \(chip rgu34a\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/rgu34a.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgu34a.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgu34a.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgu34a.db/meta.yaml>`_

   Affymetrix Rat Genome U34 Set annotation data \(chip rgu34a\) assembled using data from public repositories


.. conda:package:: bioconductor-rgu34a.db

   |downloads_bioconductor-rgu34a.db| |docker_bioconductor-rgu34a.db|

   :versions: 3.2.3-4, 3.2.3-3, 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-org.rn.eg.db: >=3.11.0,<3.12.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgu34a.db

   and update with::

      conda update bioconductor-rgu34a.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgu34a.db:<tag>

   (see `bioconductor-rgu34a.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgu34a.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgu34a.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgu34a.db
   :alt:   (downloads)
.. |docker_bioconductor-rgu34a.db| image:: https://quay.io/repository/biocontainers/bioconductor-rgu34a.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgu34a.db
.. _`bioconductor-rgu34a.db/tags`: https://quay.io/repository/biocontainers/bioconductor-rgu34a.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgu34a.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgu34a.db/README.html