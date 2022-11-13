:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rta10probeset.db'
.. highlight: bash

bioconductor-rta10probeset.db
=============================

.. conda:recipe:: bioconductor-rta10probeset.db
   :replaces_section_title:
   :noindex:

   Affymetrix rta10 annotation data \(chip rta10probeset\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/rta10probeset.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rta10probeset.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rta10probeset.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rta10probeset.db/meta.yaml>`_

   Affymetrix rta10 annotation data \(chip rta10probeset\) assembled using data from public repositories


.. conda:package:: bioconductor-rta10probeset.db

   |downloads_bioconductor-rta10probeset.db| |docker_bioconductor-rta10probeset.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.8.0-2</code>,  <code>8.8.0-1</code>,  <code>8.8.0-0</code>,  <code>8.7.0-7</code>,  <code>8.7.0-6</code>,  <code>8.7.0-5</code>,  <code>8.7.0-4</code>,  <code>8.7.0-3</code>,  <code>8.7.0-2</code>,  </span></summary>
      

      ``8.8.0-2``,  ``8.8.0-1``,  ``8.8.0-0``,  ``8.7.0-7``,  ``8.7.0-6``,  ``8.7.0-5``,  ``8.7.0-4``,  ``8.7.0-3``,  ``8.7.0-2``,  ``8.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends bioconductor-org.rn.eg.db: ``>=3.16.0,<3.17.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rta10probeset.db

   and update with::

      conda update bioconductor-rta10probeset.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rta10probeset.db:<tag>

   (see `bioconductor-rta10probeset.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rta10probeset.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rta10probeset.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rta10probeset.db
   :alt:   (downloads)
.. |docker_bioconductor-rta10probeset.db| image:: https://quay.io/repository/biocontainers/bioconductor-rta10probeset.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rta10probeset.db
.. _`bioconductor-rta10probeset.db/tags`: https://quay.io/repository/biocontainers/bioconductor-rta10probeset.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rta10probeset.db";
        var versions = ["8.8.0","8.8.0","8.8.0","8.7.0","8.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rta10probeset.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rta10probeset.db/README.html