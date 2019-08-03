:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-u133x3p.db'
.. highlight: bash

bioconductor-u133x3p.db
=======================

.. conda:recipe:: bioconductor-u133x3p.db
   :replaces_section_title:

   Affymetrix Human X3P Array annotation data \(chip u133x3p\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/u133x3p.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-u133x3p.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-u133x3p.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-u133x3p.db/meta.yaml>`_

   


.. conda:package:: bioconductor-u133x3p.db

   |downloads_bioconductor-u133x3p.db| |docker_bioconductor-u133x3p.db|

   :versions: 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-org.hs.eg.db: >=3.8.0,<3.9.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-u133x3p.db

   and update with::

      conda update bioconductor-u133x3p.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-u133x3p.db:<tag>

   (see `bioconductor-u133x3p.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-u133x3p.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-u133x3p.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-u133x3p.db
   :alt:   (downloads)
.. |docker_bioconductor-u133x3p.db| image:: https://quay.io/repository/biocontainers/bioconductor-u133x3p.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-u133x3p.db
.. _`bioconductor-u133x3p.db/tags`: https://quay.io/repository/biocontainers/bioconductor-u133x3p.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-u133x3p.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-u133x3p.db/README.html