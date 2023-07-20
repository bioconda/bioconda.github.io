:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celegans.db'
.. highlight: bash

bioconductor-celegans.db
========================

.. conda:recipe:: bioconductor-celegans.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix Celegans Array annotation data \(chip celegans\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/celegans.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-celegans.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celegans.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celegans.db/meta.yaml>`_

   Affymetrix Affymetrix Celegans Array annotation data \(chip celegans\) assembled using data from public repositories


.. conda:package:: bioconductor-celegans.db

   |downloads_bioconductor-celegans.db| |docker_bioconductor-celegans.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13.0-3</code>,  <code>3.13.0-2</code>,  <code>3.13.0-1</code>,  <code>3.13.0-0</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  <code>3.2.3-3</code>,  </span></summary>
      

      ``3.13.0-3``,  ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-org.ce.eg.db: ``>=3.17.0,<3.18.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-celegans.db

   and update with::

      conda update bioconductor-celegans.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celegans.db:<tag>

   (see `bioconductor-celegans.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celegans.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celegans.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celegans.db
   :alt:   (downloads)
.. |docker_bioconductor-celegans.db| image:: https://quay.io/repository/biocontainers/bioconductor-celegans.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celegans.db
.. _`bioconductor-celegans.db/tags`: https://quay.io/repository/biocontainers/bioconductor-celegans.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-celegans.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.13.0","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celegans.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celegans.db/README.html