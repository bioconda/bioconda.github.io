:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hu6800.db'
.. highlight: bash

bioconductor-hu6800.db
======================

.. conda:recipe:: bioconductor-hu6800.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix Hu6800 Array annotation data \(chip hu6800\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/hu6800.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hu6800.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hu6800.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hu6800.db/meta.yaml>`_

   Affymetrix Affymetrix Hu6800 Array annotation data \(chip hu6800\) assembled using data from public repositories


.. conda:package:: bioconductor-hu6800.db

   |downloads_bioconductor-hu6800.db| |docker_bioconductor-hu6800.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13.0-3</code>,  <code>3.13.0-2</code>,  <code>3.13.0-1</code>,  <code>3.13.0-0</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  <code>3.2.3-3</code>,  </span></summary>
      

      ``3.13.0-3``,  ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
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

      conda install bioconductor-hu6800.db

   and update with::

      conda update bioconductor-hu6800.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hu6800.db:<tag>

   (see `bioconductor-hu6800.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hu6800.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hu6800.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hu6800.db
   :alt:   (downloads)
.. |docker_bioconductor-hu6800.db| image:: https://quay.io/repository/biocontainers/bioconductor-hu6800.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hu6800.db
.. _`bioconductor-hu6800.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hu6800.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hu6800.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.13.0","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hu6800.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hu6800.db/README.html