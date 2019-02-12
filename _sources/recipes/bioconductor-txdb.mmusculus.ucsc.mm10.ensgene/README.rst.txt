:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.mmusculus.ucsc.mm10.ensgene'
.. highlight: bash

bioconductor-txdb.mmusculus.ucsc.mm10.ensgene
=============================================

.. conda:recipe:: bioconductor-txdb.mmusculus.ucsc.mm10.ensgene
   :replaces_section_title:

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/TxDb.Mmusculus.UCSC.mm10.ensGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.mmusculus.ucsc.mm10.ensgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene/meta.yaml>`_

   


.. conda:package:: bioconductor-txdb.mmusculus.ucsc.mm10.ensgene

   |downloads_bioconductor-txdb.mmusculus.ucsc.mm10.ensgene| |docker_bioconductor-txdb.mmusculus.ucsc.mm10.ensgene|

   :versions: 3.4.0-4, 3.4.0-3, 3.4.0-1, 3.4.0-0, 3.2.2-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-txdb.mmusculus.ucsc.mm10.ensgene

   and update with::

      conda update bioconductor-txdb.mmusculus.ucsc.mm10.ensgene

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene:<tag>

   (see `bioconductor-txdb.mmusculus.ucsc.mm10.ensgene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.mmusculus.ucsc.mm10.ensgene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-txdb.mmusculus.ucsc.mm10.ensgene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene
.. _`bioconductor-txdb.mmusculus.ucsc.mm10.ensgene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene/README.html