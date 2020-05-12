:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-huo22.db'
.. highlight: bash

bioconductor-huo22.db
=====================

.. conda:recipe:: bioconductor-huo22.db
   :replaces_section_title:

   FHCRC Genomics Shared Resource HuO22 Annotation Data \(HuO22\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/HuO22.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-huo22.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huo22.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huo22.db/meta.yaml>`_

   FHCRC Genomics Shared Resource HuO22 Annotation Data \(HuO22\) assembled using data from public repositories


.. conda:package:: bioconductor-huo22.db

   |downloads_bioconductor-huo22.db| |docker_bioconductor-huo22.db|

   :versions: 3.2.3-4, 3.2.3-3, 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-org.hs.eg.db: >=3.11.0,<3.12.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-huo22.db

   and update with::

      conda update bioconductor-huo22.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-huo22.db:<tag>

   (see `bioconductor-huo22.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-huo22.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-huo22.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-huo22.db
   :alt:   (downloads)
.. |docker_bioconductor-huo22.db| image:: https://quay.io/repository/biocontainers/bioconductor-huo22.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-huo22.db
.. _`bioconductor-huo22.db/tags`: https://quay.io/repository/biocontainers/bioconductor-huo22.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-huo22.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-huo22.db/README.html