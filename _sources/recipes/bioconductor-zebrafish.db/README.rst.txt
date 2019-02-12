:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zebrafish.db'
.. highlight: bash

bioconductor-zebrafish.db
=========================

.. conda:recipe:: bioconductor-zebrafish.db
   :replaces_section_title:

   Affymetrix zebrafish annotation data \(chip zebrafish\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/zebrafish.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-zebrafish.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zebrafish.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zebrafish.db/meta.yaml>`_

   


.. conda:package:: bioconductor-zebrafish.db

   |downloads_bioconductor-zebrafish.db| |docker_bioconductor-zebrafish.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-org.dr.eg.db: >=3.7.0,<3.8.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-zebrafish.db

   and update with::

      conda update bioconductor-zebrafish.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-zebrafish.db:<tag>

   (see `bioconductor-zebrafish.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-zebrafish.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zebrafish.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-zebrafish.db| image:: https://quay.io/repository/biocontainers/bioconductor-zebrafish.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zebrafish.db
.. _`bioconductor-zebrafish.db/tags`: https://quay.io/repository/biocontainers/bioconductor-zebrafish.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zebrafish.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zebrafish.db/README.html