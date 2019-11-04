:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-porcine.db'
.. highlight: bash

bioconductor-porcine.db
=======================

.. conda:recipe:: bioconductor-porcine.db
   :replaces_section_title:

   Affymetrix porcine annotation data \(chip porcine\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/porcine.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-porcine.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-porcine.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-porcine.db/meta.yaml>`_

   


.. conda:package:: bioconductor-porcine.db

   |downloads_bioconductor-porcine.db| |docker_bioconductor-porcine.db|

   :versions: 3.2.3-4, 3.2.3-3, 3.2.3-1, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.ss.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-porcine.db

   and update with::

      conda update bioconductor-porcine.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-porcine.db:<tag>

   (see `bioconductor-porcine.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-porcine.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-porcine.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-porcine.db
   :alt:   (downloads)
.. |docker_bioconductor-porcine.db| image:: https://quay.io/repository/biocontainers/bioconductor-porcine.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-porcine.db
.. _`bioconductor-porcine.db/tags`: https://quay.io/repository/biocontainers/bioconductor-porcine.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-porcine.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-porcine.db/README.html