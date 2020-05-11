:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanwgdaslv3.db'
.. highlight: bash

bioconductor-illuminahumanwgdaslv3.db
=====================================

.. conda:recipe:: bioconductor-illuminahumanwgdaslv3.db
   :replaces_section_title:

   Illumina HumanHT12WGDASLv3 annotation data \(chip illuminaHumanWGDASLv3\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/illuminaHumanWGDASLv3.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanwgdaslv3.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanwgdaslv3.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanwgdaslv3.db/meta.yaml>`_

   Illumina HumanHT12WGDASLv3 annotation data \(chip illuminaHumanWGDASLv3\) assembled using data from public repositories


.. conda:package:: bioconductor-illuminahumanwgdaslv3.db

   |downloads_bioconductor-illuminahumanwgdaslv3.db| |docker_bioconductor-illuminahumanwgdaslv3.db|

   :versions: 1.26.0-4, 1.26.0-3, 1.26.0-2, 1.26.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-org.hs.eg.db: >=3.11.0,<3.12.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illuminahumanwgdaslv3.db

   and update with::

      conda update bioconductor-illuminahumanwgdaslv3.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanwgdaslv3.db:<tag>

   (see `bioconductor-illuminahumanwgdaslv3.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanwgdaslv3.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanwgdaslv3.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanwgdaslv3.db
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanwgdaslv3.db| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanwgdaslv3.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanwgdaslv3.db
.. _`bioconductor-illuminahumanwgdaslv3.db/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanwgdaslv3.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanwgdaslv3.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanwgdaslv3.db/README.html