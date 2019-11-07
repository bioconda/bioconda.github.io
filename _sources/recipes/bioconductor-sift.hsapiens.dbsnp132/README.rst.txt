:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sift.hsapiens.dbsnp132'
.. highlight: bash

bioconductor-sift.hsapiens.dbsnp132
===================================

.. conda:recipe:: bioconductor-sift.hsapiens.dbsnp132
   :replaces_section_title:

   SIFT Predictions for Homo sapiens dbSNP build 132

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/SIFT.Hsapiens.dbSNP132.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sift.hsapiens.dbsnp132 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sift.hsapiens.dbsnp132>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sift.hsapiens.dbsnp132/meta.yaml>`_

   Database of SIFT predictions for Homo sapiens dbSNP build 132


.. conda:package:: bioconductor-sift.hsapiens.dbsnp132

   |downloads_bioconductor-sift.hsapiens.dbsnp132| |docker_bioconductor-sift.hsapiens.dbsnp132|

   :versions: 1.0.2-3, 1.0.2-2, 1.0.2-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-variantannotation: >=1.32.0,<1.33.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rsqlite: >=0.11.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sift.hsapiens.dbsnp132

   and update with::

      conda update bioconductor-sift.hsapiens.dbsnp132

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sift.hsapiens.dbsnp132:<tag>

   (see `bioconductor-sift.hsapiens.dbsnp132/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sift.hsapiens.dbsnp132| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sift.hsapiens.dbsnp132.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sift.hsapiens.dbsnp132
   :alt:   (downloads)
.. |docker_bioconductor-sift.hsapiens.dbsnp132| image:: https://quay.io/repository/biocontainers/bioconductor-sift.hsapiens.dbsnp132/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sift.hsapiens.dbsnp132
.. _`bioconductor-sift.hsapiens.dbsnp132/tags`: https://quay.io/repository/biocontainers/bioconductor-sift.hsapiens.dbsnp132?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sift.hsapiens.dbsnp132/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sift.hsapiens.dbsnp132/README.html