:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hugene11sttranscriptcluster.db'
.. highlight: bash

bioconductor-hugene11sttranscriptcluster.db
===========================================

.. conda:recipe:: bioconductor-hugene11sttranscriptcluster.db
   :replaces_section_title:
   :noindex:

   Affymetrix hugene11 annotation data \(chip hugene11sttranscriptcluster\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/hugene11sttranscriptcluster.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hugene11sttranscriptcluster.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hugene11sttranscriptcluster.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hugene11sttranscriptcluster.db/meta.yaml>`_

   Affymetrix hugene11 annotation data \(chip hugene11sttranscriptcluster\) assembled using data from public repositories


.. conda:package:: bioconductor-hugene11sttranscriptcluster.db

   |downloads_bioconductor-hugene11sttranscriptcluster.db| |docker_bioconductor-hugene11sttranscriptcluster.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.8.0-2</code>,  <code>8.8.0-1</code>,  <code>8.8.0-0</code>,  <code>8.7.0-8</code>,  <code>8.7.0-7</code>,  <code>8.7.0-6</code>,  <code>8.7.0-5</code>,  <code>8.7.0-4</code>,  <code>8.7.0-3</code>,  </span></summary>
      

      ``8.8.0-2``,  ``8.8.0-1``,  ``8.8.0-0``,  ``8.7.0-8``,  ``8.7.0-7``,  ``8.7.0-6``,  ``8.7.0-5``,  ``8.7.0-4``,  ``8.7.0-3``,  ``8.7.0-1``,  ``8.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hugene11sttranscriptcluster.db

   and update with::

      conda update bioconductor-hugene11sttranscriptcluster.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hugene11sttranscriptcluster.db:<tag>

   (see `bioconductor-hugene11sttranscriptcluster.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hugene11sttranscriptcluster.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hugene11sttranscriptcluster.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hugene11sttranscriptcluster.db
   :alt:   (downloads)
.. |docker_bioconductor-hugene11sttranscriptcluster.db| image:: https://quay.io/repository/biocontainers/bioconductor-hugene11sttranscriptcluster.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hugene11sttranscriptcluster.db
.. _`bioconductor-hugene11sttranscriptcluster.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hugene11sttranscriptcluster.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hugene11sttranscriptcluster.db";
        var versions = ["8.8.0","8.8.0","8.8.0","8.7.0","8.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hugene11sttranscriptcluster.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hugene11sttranscriptcluster.db/README.html