.. title:: Package Recipe 'bioconductor-txdb.hsapiens.ucsc.hg18.knowngene'
.. highlight: bash


bioconductor-txdb.hsapiens.ucsc.hg18.knowngene
==============================================

.. conda:recipe:: bioconductor-txdb.hsapiens.ucsc.hg18.knowngene
   :replaces_section_title:

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/TxDb.Hsapiens.UCSC.hg18.knownGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.hsapiens.ucsc.hg18.knowngene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene/meta.yaml>`_

   


.. conda:package:: bioconductor-txdb.hsapiens.ucsc.hg18.knowngene

   |downloads_bioconductor-txdb.hsapiens.ucsc.hg18.knowngene| |docker_bioconductor-txdb.hsapiens.ucsc.hg18.knowngene|

   :versions: 3.2.2

   :depends: :conda:package:`bioconductor-annotationdbi`  :conda:package:`bioconductor-genomicfeatures` >=1.21.30 :conda:package:`r-base` 3.3.2* :conda:package:`wget`  

   :required~by: |required_by_bioconductor-txdb.hsapiens.ucsc.hg18.knowngene|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-txdb.hsapiens.ucsc.hg18.knowngene

   and update with::

      conda update bioconductor-txdb.hsapiens.ucsc.hg18.knowngene

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene


.. |required_by_bioconductor-txdb.hsapiens.ucsc.hg18.knowngene| conda:required_by:: bioconductor-txdb.hsapiens.ucsc.hg18.knowngene
.. |downloads_bioconductor-txdb.hsapiens.ucsc.hg18.knowngene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-txdb.hsapiens.ucsc.hg18.knowngene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene/README.html

