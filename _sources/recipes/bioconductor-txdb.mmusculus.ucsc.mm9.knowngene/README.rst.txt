:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.mmusculus.ucsc.mm9.knowngene'
.. highlight: bash

bioconductor-txdb.mmusculus.ucsc.mm9.knowngene
==============================================

.. conda:recipe:: bioconductor-txdb.mmusculus.ucsc.mm9.knowngene
   :replaces_section_title:

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/TxDb.Mmusculus.UCSC.mm9.knownGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.mmusculus.ucsc.mm9.knowngene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.mmusculus.ucsc.mm9.knowngene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.mmusculus.ucsc.mm9.knowngene/meta.yaml>`_

   


.. conda:package:: bioconductor-txdb.mmusculus.ucsc.mm9.knowngene

   |downloads_bioconductor-txdb.mmusculus.ucsc.mm9.knowngene| |docker_bioconductor-txdb.mmusculus.ucsc.mm9.knowngene|

   :versions: 3.2.2-4, 3.2.2-3, 3.2.2-1, 3.2.2-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-txdb.mmusculus.ucsc.mm9.knowngene

   and update with::

      conda update bioconductor-txdb.mmusculus.ucsc.mm9.knowngene

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm9.knowngene:<tag>

   (see `bioconductor-txdb.mmusculus.ucsc.mm9.knowngene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.mmusculus.ucsc.mm9.knowngene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.mmusculus.ucsc.mm9.knowngene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.mmusculus.ucsc.mm9.knowngene
   :alt:   (downloads)
.. |docker_bioconductor-txdb.mmusculus.ucsc.mm9.knowngene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm9.knowngene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm9.knowngene
.. _`bioconductor-txdb.mmusculus.ucsc.mm9.knowngene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm9.knowngene?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.mmusculus.ucsc.mm9.knowngene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.mmusculus.ucsc.mm9.knowngene/README.html