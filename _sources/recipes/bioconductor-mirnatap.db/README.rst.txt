:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirnatap.db'
.. highlight: bash

bioconductor-mirnatap.db
========================

.. conda:recipe:: bioconductor-mirnatap.db
   :replaces_section_title:
   :noindex:

   Data for miRNAtap

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/miRNAtap.db.html
   :license: GPL-2
   :recipe: /`bioconductor-mirnatap.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatap.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatap.db/meta.yaml>`_

   This package holds the database for miRNAtap.


.. conda:package:: bioconductor-mirnatap.db

   |downloads_bioconductor-mirnatap.db| |docker_bioconductor-mirnatap.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.10-13</code>,  <code>0.99.10-12</code>,  <code>0.99.10-11</code>,  <code>0.99.10-10</code>,  <code>0.99.10-9</code>,  <code>0.99.10-8</code>,  <code>0.99.10-7</code>,  <code>0.99.10-6</code>,  <code>0.99.10-5</code>,  </span></summary>
      

      ``0.99.10-13``,  ``0.99.10-12``,  ``0.99.10-11``,  ``0.99.10-10``,  ``0.99.10-9``,  ``0.99.10-8``,  ``0.99.10-7``,  ``0.99.10-6``,  ``0.99.10-5``,  ``0.99.10-3``,  ``0.99.10-2``,  ``0.99.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends bioconductor-mirnatap: ``>=1.32.0,<1.33.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dbi: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirnatap.db

   and update with::

      conda update bioconductor-mirnatap.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirnatap.db:<tag>

   (see `bioconductor-mirnatap.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirnatap.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnatap.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirnatap.db
   :alt:   (downloads)
.. |docker_bioconductor-mirnatap.db| image:: https://quay.io/repository/biocontainers/bioconductor-mirnatap.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnatap.db
.. _`bioconductor-mirnatap.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mirnatap.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirnatap.db";
        var versions = ["0.99.10","0.99.10","0.99.10","0.99.10","0.99.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnatap.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnatap.db/README.html