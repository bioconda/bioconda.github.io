:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ensdb.hsapiens.v75'
.. highlight: bash

bioconductor-ensdb.hsapiens.v75
===============================

.. conda:recipe:: bioconductor-ensdb.hsapiens.v75
   :replaces_section_title:

   Ensembl based annotation package

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/EnsDb.Hsapiens.v75.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ensdb.hsapiens.v75 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensdb.hsapiens.v75>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensdb.hsapiens.v75/meta.yaml>`_

   Exposes an annotation databases generated from Ensembl.


.. conda:package:: bioconductor-ensdb.hsapiens.v75

   |downloads_bioconductor-ensdb.hsapiens.v75| |docker_bioconductor-ensdb.hsapiens.v75|

   :versions: 2.99.0-7, 2.99.0-6, 2.99.0-5, 2.99.0-3, 2.99.0-2, 2.99.0-0
   
   :depends bioconductor-ensembldb: >=2.12.0,<2.13.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ensdb.hsapiens.v75

   and update with::

      conda update bioconductor-ensdb.hsapiens.v75

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ensdb.hsapiens.v75:<tag>

   (see `bioconductor-ensdb.hsapiens.v75/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ensdb.hsapiens.v75| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ensdb.hsapiens.v75.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ensdb.hsapiens.v75
   :alt:   (downloads)
.. |docker_bioconductor-ensdb.hsapiens.v75| image:: https://quay.io/repository/biocontainers/bioconductor-ensdb.hsapiens.v75/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ensdb.hsapiens.v75
.. _`bioconductor-ensdb.hsapiens.v75/tags`: https://quay.io/repository/biocontainers/bioconductor-ensdb.hsapiens.v75?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ensdb.hsapiens.v75/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ensdb.hsapiens.v75/README.html