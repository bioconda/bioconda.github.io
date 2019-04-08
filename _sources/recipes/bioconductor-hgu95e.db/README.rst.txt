:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95e.db'
.. highlight: bash

bioconductor-hgu95e.db
======================

.. conda:recipe:: bioconductor-hgu95e.db
   :replaces_section_title:

   Affymetrix Human Genome U95 Set annotation data \(chip hgu95e\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgu95e.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu95e.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95e.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95e.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu95e.db

   |downloads_bioconductor-hgu95e.db| |docker_bioconductor-hgu95e.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95e.db

   and update with::

      conda update bioconductor-hgu95e.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu95e.db:<tag>

   (see `bioconductor-hgu95e.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95e.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95e.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hgu95e.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95e.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95e.db
.. _`bioconductor-hgu95e.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95e.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95e.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95e.db/README.html