:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hu6800.db'
.. highlight: bash

bioconductor-hu6800.db
======================

.. conda:recipe:: bioconductor-hu6800.db
   :replaces_section_title:

   Affymetrix HuGeneFL Genome Array annotation data \(chip hu6800\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/hu6800.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hu6800.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hu6800.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hu6800.db/meta.yaml>`_

   Affymetrix HuGeneFL Genome Array annotation data \(chip hu6800\) assembled using data from public repositories


.. conda:package:: bioconductor-hu6800.db

   |downloads_bioconductor-hu6800.db| |docker_bioconductor-hu6800.db|

   :versions: 3.2.3-3, 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.hs.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hu6800.db

   and update with::

      conda update bioconductor-hu6800.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hu6800.db:<tag>

   (see `bioconductor-hu6800.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hu6800.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hu6800.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hu6800.db
   :alt:   (downloads)
.. |docker_bioconductor-hu6800.db| image:: https://quay.io/repository/biocontainers/bioconductor-hu6800.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hu6800.db
.. _`bioconductor-hu6800.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hu6800.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hu6800.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hu6800.db/README.html