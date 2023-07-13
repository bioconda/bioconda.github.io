:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lapointe.db'
.. highlight: bash

bioconductor-lapointe.db
========================

.. conda:recipe:: bioconductor-lapointe.db
   :replaces_section_title:
   :noindex:

   A package containing metadata for LAPOINTE arrays

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/LAPOINTE.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lapointe.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lapointe.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lapointe.db/meta.yaml>`_

   A package containing metadata for LAPOINTE arrays assembled using data from public repositories


.. conda:package:: bioconductor-lapointe.db

   |downloads_bioconductor-lapointe.db| |docker_bioconductor-lapointe.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.3-12</code>,  <code>3.2.3-11</code>,  <code>3.2.3-10</code>,  <code>3.2.3-9</code>,  <code>3.2.3-8</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  </span></summary>
      

      ``3.2.3-12``,  ``3.2.3-11``,  ``3.2.3-10``,  ``3.2.3-9``,  ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-1``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lapointe.db

   and update with::

      conda update bioconductor-lapointe.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lapointe.db:<tag>

   (see `bioconductor-lapointe.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lapointe.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lapointe.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lapointe.db
   :alt:   (downloads)
.. |docker_bioconductor-lapointe.db| image:: https://quay.io/repository/biocontainers/bioconductor-lapointe.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lapointe.db
.. _`bioconductor-lapointe.db/tags`: https://quay.io/repository/biocontainers/bioconductor-lapointe.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lapointe.db";
        var versions = ["3.2.3","3.2.3","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lapointe.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lapointe.db/README.html