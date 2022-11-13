:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.mmusculus.ucsc.mm10.ensgene'
.. highlight: bash

bioconductor-txdb.mmusculus.ucsc.mm10.ensgene
=============================================

.. conda:recipe:: bioconductor-txdb.mmusculus.ucsc.mm10.ensgene
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/TxDb.Mmusculus.UCSC.mm10.ensGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.mmusculus.ucsc.mm10.ensgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.mmusculus.ucsc.mm10.ensgene

   |downloads_bioconductor-txdb.mmusculus.ucsc.mm10.ensgene| |docker_bioconductor-txdb.mmusculus.ucsc.mm10.ensgene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-15</code>,  <code>3.4.0-14</code>,  <code>3.4.0-13</code>,  <code>3.4.0-12</code>,  <code>3.4.0-11</code>,  <code>3.4.0-10</code>,  <code>3.4.0-9</code>,  <code>3.4.0-8</code>,  <code>3.4.0-7</code>,  </span></summary>
      

      ``3.4.0-15``,  ``3.4.0-14``,  ``3.4.0-13``,  ``3.4.0-12``,  ``3.4.0-11``,  ``3.4.0-10``,  ``3.4.0-9``,  ``3.4.0-8``,  ``3.4.0-7``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-txdb.mmusculus.ucsc.mm10.ensgene

   and update with::

      conda update bioconductor-txdb.mmusculus.ucsc.mm10.ensgene

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene:<tag>

   (see `bioconductor-txdb.mmusculus.ucsc.mm10.ensgene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.mmusculus.ucsc.mm10.ensgene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene
   :alt:   (downloads)
.. |docker_bioconductor-txdb.mmusculus.ucsc.mm10.ensgene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene
.. _`bioconductor-txdb.mmusculus.ucsc.mm10.ensgene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.mmusculus.ucsc.mm10.ensgene";
        var versions = ["3.4.0","3.4.0","3.4.0","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.mmusculus.ucsc.mm10.ensgene/README.html