:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ensdb.hsapiens.v75'
.. highlight: bash

bioconductor-ensdb.hsapiens.v75
===============================

.. conda:recipe:: bioconductor-ensdb.hsapiens.v75
   :replaces_section_title:
   :noindex:

   Ensembl based annotation package

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/EnsDb.Hsapiens.v75.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ensdb.hsapiens.v75 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensdb.hsapiens.v75>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensdb.hsapiens.v75/meta.yaml>`_

   Exposes an annotation databases generated from Ensembl.


.. conda:package:: bioconductor-ensdb.hsapiens.v75

   |downloads_bioconductor-ensdb.hsapiens.v75| |docker_bioconductor-ensdb.hsapiens.v75|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.99.0-13</code>,  <code>2.99.0-12</code>,  <code>2.99.0-11</code>,  <code>2.99.0-10</code>,  <code>2.99.0-9</code>,  <code>2.99.0-8</code>,  <code>2.99.0-7</code>,  <code>2.99.0-6</code>,  <code>2.99.0-5</code>,  </span></summary>
      

      ``2.99.0-13``,  ``2.99.0-12``,  ``2.99.0-11``,  ``2.99.0-10``,  ``2.99.0-9``,  ``2.99.0-8``,  ``2.99.0-7``,  ``2.99.0-6``,  ``2.99.0-5``,  ``2.99.0-3``,  ``2.99.0-2``,  ``2.99.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221102``
   :depends bioconductor-ensembldb: ``>=2.22.0,<2.23.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ensdb.hsapiens.v75

   and update with::

      conda update bioconductor-ensdb.hsapiens.v75

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ensdb.hsapiens.v75:<tag>

   (see `bioconductor-ensdb.hsapiens.v75/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ensdb.hsapiens.v75| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ensdb.hsapiens.v75.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ensdb.hsapiens.v75
   :alt:   (downloads)
.. |docker_bioconductor-ensdb.hsapiens.v75| image:: https://quay.io/repository/biocontainers/bioconductor-ensdb.hsapiens.v75/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ensdb.hsapiens.v75
.. _`bioconductor-ensdb.hsapiens.v75/tags`: https://quay.io/repository/biocontainers/bioconductor-ensdb.hsapiens.v75?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ensdb.hsapiens.v75";
        var versions = ["2.99.0","2.99.0","2.99.0","2.99.0","2.99.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ensdb.hsapiens.v75/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ensdb.hsapiens.v75/README.html