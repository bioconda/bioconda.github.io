:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133b.db'
.. highlight: bash

bioconductor-hgu133b.db
=======================

.. conda:recipe:: bioconductor-hgu133b.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix HG\-U133B Array annotation data \(chip hgu133b\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/hgu133b.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu133b.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133b.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133b.db/meta.yaml>`_

   Affymetrix Affymetrix HG\-U133B Array annotation data \(chip hgu133b\) assembled using data from public repositories


.. conda:package:: bioconductor-hgu133b.db

   |downloads_bioconductor-hgu133b.db| |docker_bioconductor-hgu133b.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13.0-2</code>,  <code>3.13.0-1</code>,  <code>3.13.0-0</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  <code>3.2.3-3</code>,  <code>3.2.3-2</code>,  </span></summary>
      

      ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu133b.db

   and update with::

      conda update bioconductor-hgu133b.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133b.db:<tag>

   (see `bioconductor-hgu133b.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133b.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133b.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133b.db
   :alt:   (downloads)
.. |docker_bioconductor-hgu133b.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133b.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133b.db
.. _`bioconductor-hgu133b.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133b.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu133b.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133b.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133b.db/README.html