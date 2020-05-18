:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fdb.ucsc.snp135common.hg19'
.. highlight: bash

bioconductor-fdb.ucsc.snp135common.hg19
=======================================

.. conda:recipe:: bioconductor-fdb.ucsc.snp135common.hg19
   :replaces_section_title:

   UCSC common SNPs track for dbSNP build 135

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/FDb.UCSC.snp135common.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fdb.ucsc.snp135common.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.ucsc.snp135common.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.ucsc.snp135common.hg19/meta.yaml>`_

   makeFeatureDbFromUCSC cannot cope with this track\, hence a package


.. conda:package:: bioconductor-fdb.ucsc.snp135common.hg19

   |downloads_bioconductor-fdb.ucsc.snp135common.hg19| |docker_bioconductor-fdb.ucsc.snp135common.hg19|

   :versions: 1.0.0-4, 1.0.0-3, 1.0.0-2, 1.0.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-genomicfeatures: >=1.40.0,<1.41.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fdb.ucsc.snp135common.hg19

   and update with::

      conda update bioconductor-fdb.ucsc.snp135common.hg19

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fdb.ucsc.snp135common.hg19:<tag>

   (see `bioconductor-fdb.ucsc.snp135common.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fdb.ucsc.snp135common.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fdb.ucsc.snp135common.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fdb.ucsc.snp135common.hg19
   :alt:   (downloads)
.. |docker_bioconductor-fdb.ucsc.snp135common.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.snp135common.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.snp135common.hg19
.. _`bioconductor-fdb.ucsc.snp135common.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-fdb.ucsc.snp135common.hg19?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fdb.ucsc.snp135common.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fdb.ucsc.snp135common.hg19/README.html