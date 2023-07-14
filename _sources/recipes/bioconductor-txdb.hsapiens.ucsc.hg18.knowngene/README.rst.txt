:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.hsapiens.ucsc.hg18.knowngene'
.. highlight: bash

bioconductor-txdb.hsapiens.ucsc.hg18.knowngene
==============================================

.. conda:recipe:: bioconductor-txdb.hsapiens.ucsc.hg18.knowngene
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/TxDb.Hsapiens.UCSC.hg18.knownGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.hsapiens.ucsc.hg18.knowngene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.hsapiens.ucsc.hg18.knowngene

   |downloads_bioconductor-txdb.hsapiens.ucsc.hg18.knowngene| |docker_bioconductor-txdb.hsapiens.ucsc.hg18.knowngene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.2-15</code>,  <code>3.2.2-14</code>,  <code>3.2.2-13</code>,  <code>3.2.2-12</code>,  <code>3.2.2-11</code>,  <code>3.2.2-10</code>,  <code>3.2.2-9</code>,  <code>3.2.2-8</code>,  <code>3.2.2-7</code>,  </span></summary>
      

      ``3.2.2-15``,  ``3.2.2-14``,  ``3.2.2-13``,  ``3.2.2-12``,  ``3.2.2-11``,  ``3.2.2-10``,  ``3.2.2-9``,  ``3.2.2-8``,  ``3.2.2-7``,  ``3.2.2-6``,  ``3.2.2-4``,  ``3.2.2-3``,  ``3.2.2-1``,  ``3.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-txdb.hsapiens.ucsc.hg18.knowngene

   and update with::

      conda update bioconductor-txdb.hsapiens.ucsc.hg18.knowngene

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene:<tag>

   (see `bioconductor-txdb.hsapiens.ucsc.hg18.knowngene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.hsapiens.ucsc.hg18.knowngene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene
   :alt:   (downloads)
.. |docker_bioconductor-txdb.hsapiens.ucsc.hg18.knowngene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene
.. _`bioconductor-txdb.hsapiens.ucsc.hg18.knowngene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.hsapiens.ucsc.hg18.knowngene";
        var versions = ["3.2.2","3.2.2","3.2.2","3.2.2","3.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.hsapiens.ucsc.hg18.knowngene/README.html