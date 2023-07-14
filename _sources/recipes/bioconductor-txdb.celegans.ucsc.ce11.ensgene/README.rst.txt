:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.celegans.ucsc.ce11.ensgene'
.. highlight: bash

bioconductor-txdb.celegans.ucsc.ce11.ensgene
============================================

.. conda:recipe:: bioconductor-txdb.celegans.ucsc.ce11.ensgene
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/TxDb.Celegans.UCSC.ce11.ensGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.celegans.ucsc.ce11.ensgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.celegans.ucsc.ce11.ensgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.celegans.ucsc.ce11.ensgene/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.celegans.ucsc.ce11.ensgene

   |downloads_bioconductor-txdb.celegans.ucsc.ce11.ensgene| |docker_bioconductor-txdb.celegans.ucsc.ce11.ensgene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.15.0-1</code>,  <code>3.15.0-0</code>,  <code>3.12.0-4</code>,  <code>3.12.0-3</code>,  <code>3.12.0-2</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.11.0-0</code>,  <code>3.4.6-2</code>,  </span></summary>
      

      ``3.15.0-1``,  ``3.15.0-0``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.0-0``,  ``3.4.6-2``,  ``3.4.6-1``

      
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

      conda install bioconductor-txdb.celegans.ucsc.ce11.ensgene

   and update with::

      conda update bioconductor-txdb.celegans.ucsc.ce11.ensgene

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.celegans.ucsc.ce11.ensgene:<tag>

   (see `bioconductor-txdb.celegans.ucsc.ce11.ensgene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.celegans.ucsc.ce11.ensgene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.celegans.ucsc.ce11.ensgene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.celegans.ucsc.ce11.ensgene
   :alt:   (downloads)
.. |docker_bioconductor-txdb.celegans.ucsc.ce11.ensgene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.celegans.ucsc.ce11.ensgene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.celegans.ucsc.ce11.ensgene
.. _`bioconductor-txdb.celegans.ucsc.ce11.ensgene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.celegans.ucsc.ce11.ensgene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.celegans.ucsc.ce11.ensgene";
        var versions = ["3.15.0","3.15.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.celegans.ucsc.ce11.ensgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.celegans.ucsc.ce11.ensgene/README.html