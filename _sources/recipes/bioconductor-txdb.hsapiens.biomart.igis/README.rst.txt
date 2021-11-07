:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.hsapiens.biomart.igis'
.. highlight: bash

bioconductor-txdb.hsapiens.biomart.igis
=======================================

.. conda:recipe:: bioconductor-txdb.hsapiens.biomart.igis
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/TxDb.Hsapiens.BioMart.igis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.hsapiens.biomart.igis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.hsapiens.biomart.igis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.hsapiens.biomart.igis/meta.yaml>`_

   Exposes an annotation databases generated from BioMart by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.hsapiens.biomart.igis

   |downloads_bioconductor-txdb.hsapiens.biomart.igis| |docker_bioconductor-txdb.hsapiens.biomart.igis|

   :versions:
      
      

      ``2.3.2-9``,  ``2.3.2-8``,  ``2.3.2-7``,  ``2.3.2-6``,  ``2.3.2-5``,  ``2.3.2-4``,  ``2.3.2-3``,  ``2.3.2-1``,  ``2.3.2-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-txdb.hsapiens.biomart.igis

   and update with::

      conda update bioconductor-txdb.hsapiens.biomart.igis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.hsapiens.biomart.igis:<tag>

   (see `bioconductor-txdb.hsapiens.biomart.igis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.hsapiens.biomart.igis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.hsapiens.biomart.igis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.hsapiens.biomart.igis
   :alt:   (downloads)
.. |docker_bioconductor-txdb.hsapiens.biomart.igis| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.biomart.igis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.biomart.igis
.. _`bioconductor-txdb.hsapiens.biomart.igis/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.biomart.igis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.hsapiens.biomart.igis";
        var versions = ["2.3.2","2.3.2","2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.hsapiens.biomart.igis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.hsapiens.biomart.igis/README.html