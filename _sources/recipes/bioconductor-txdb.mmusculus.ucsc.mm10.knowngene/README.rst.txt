:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.mmusculus.ucsc.mm10.knowngene'
.. highlight: bash

bioconductor-txdb.mmusculus.ucsc.mm10.knowngene
===============================================

.. conda:recipe:: bioconductor-txdb.mmusculus.ucsc.mm10.knowngene
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/TxDb.Mmusculus.UCSC.mm10.knownGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.mmusculus.ucsc.mm10.knowngene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.mmusculus.ucsc.mm10.knowngene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.mmusculus.ucsc.mm10.knowngene/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.mmusculus.ucsc.mm10.knowngene

   |downloads_bioconductor-txdb.mmusculus.ucsc.mm10.knowngene| |docker_bioconductor-txdb.mmusculus.ucsc.mm10.knowngene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.10.0-4</code>,  <code>3.10.0-3</code>,  <code>3.10.0-2</code>,  <code>3.10.0-1</code>,  <code>3.10.0-0</code>,  <code>3.4.7-1</code>,  <code>3.4.4-0</code>,  <code>3.4.0-3</code>,  <code>3.4.0-1</code>,  </span></summary>
      

      ``3.10.0-4``,  ``3.10.0-3``,  ``3.10.0-2``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.4.7-1``,  ``3.4.4-0``,  ``3.4.0-3``,  ``3.4.0-1``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfeatures: ``>=1.44.0,<1.45.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-txdb.mmusculus.ucsc.mm10.knowngene

   and update with::

      conda update bioconductor-txdb.mmusculus.ucsc.mm10.knowngene

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm10.knowngene:<tag>

   (see `bioconductor-txdb.mmusculus.ucsc.mm10.knowngene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.mmusculus.ucsc.mm10.knowngene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.mmusculus.ucsc.mm10.knowngene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.mmusculus.ucsc.mm10.knowngene
   :alt:   (downloads)
.. |docker_bioconductor-txdb.mmusculus.ucsc.mm10.knowngene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm10.knowngene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm10.knowngene
.. _`bioconductor-txdb.mmusculus.ucsc.mm10.knowngene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm10.knowngene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.mmusculus.ucsc.mm10.knowngene";
        var versions = ["3.10.0","3.10.0","3.10.0","3.10.0","3.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.mmusculus.ucsc.mm10.knowngene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.mmusculus.ucsc.mm10.knowngene/README.html