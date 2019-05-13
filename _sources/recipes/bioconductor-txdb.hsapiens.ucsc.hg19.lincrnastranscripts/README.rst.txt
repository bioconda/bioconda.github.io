:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts'
.. highlight: bash

bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts
========================================================

.. conda:recipe:: bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts
   :replaces_section_title:

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/TxDb.Hsapiens.UCSC.hg19.lincRNAsTranscripts.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts/meta.yaml>`_

   


.. conda:package:: bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts

   |downloads_bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts| |docker_bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts|

   :versions: 3.2.2-6, 3.2.2-5, 3.2.2-3, 3.2.2-2
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts

   and update with::

      conda update bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts:<tag>

   (see `bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts
   :alt:   (downloads)
.. |docker_bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts
.. _`bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts/README.html