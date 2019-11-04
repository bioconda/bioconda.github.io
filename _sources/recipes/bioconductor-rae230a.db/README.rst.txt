:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rae230a.db'
.. highlight: bash

bioconductor-rae230a.db
=======================

.. conda:recipe:: bioconductor-rae230a.db
   :replaces_section_title:

   Affymetrix Rat Expression Set 230 annotation data \(chip rae230a\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/rae230a.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rae230a.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rae230a.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rae230a.db/meta.yaml>`_

   


.. conda:package:: bioconductor-rae230a.db

   |downloads_bioconductor-rae230a.db| |docker_bioconductor-rae230a.db|

   :versions: 3.2.3-3, 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.rn.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rae230a.db

   and update with::

      conda update bioconductor-rae230a.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rae230a.db:<tag>

   (see `bioconductor-rae230a.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rae230a.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rae230a.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rae230a.db
   :alt:   (downloads)
.. |docker_bioconductor-rae230a.db| image:: https://quay.io/repository/biocontainers/bioconductor-rae230a.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rae230a.db
.. _`bioconductor-rae230a.db/tags`: https://quay.io/repository/biocontainers/bioconductor-rae230a.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rae230a.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rae230a.db/README.html