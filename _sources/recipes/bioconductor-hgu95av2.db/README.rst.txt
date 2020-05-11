:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95av2.db'
.. highlight: bash

bioconductor-hgu95av2.db
========================

.. conda:recipe:: bioconductor-hgu95av2.db
   :replaces_section_title:

   Affymetrix Human Genome U95 Set annotation data \(chip hgu95av2\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/hgu95av2.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu95av2.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95av2.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95av2.db/meta.yaml>`_

   Affymetrix Human Genome U95 Set annotation data \(chip hgu95av2\) assembled using data from public repositories


.. conda:package:: bioconductor-hgu95av2.db

   |downloads_bioconductor-hgu95av2.db| |docker_bioconductor-hgu95av2.db|

   :versions: 3.2.3-7, 3.2.3-6, 3.2.3-5, 3.2.3-3, 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-org.hs.eg.db: >=3.11.0,<3.12.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95av2.db

   and update with::

      conda update bioconductor-hgu95av2.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu95av2.db:<tag>

   (see `bioconductor-hgu95av2.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95av2.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95av2.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu95av2.db
   :alt:   (downloads)
.. |docker_bioconductor-hgu95av2.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95av2.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95av2.db
.. _`bioconductor-hgu95av2.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95av2.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95av2.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95av2.db/README.html