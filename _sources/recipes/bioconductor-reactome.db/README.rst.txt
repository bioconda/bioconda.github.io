:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactome.db'
.. highlight: bash

bioconductor-reactome.db
========================

.. conda:recipe:: bioconductor-reactome.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps for reactome

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/reactome.db.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-reactome.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactome.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactome.db/meta.yaml>`_

   A set of annotation maps for reactome assembled using data from reactome


.. conda:package:: bioconductor-reactome.db

   |downloads_bioconductor-reactome.db| |docker_bioconductor-reactome.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.82.0-0</code>,  <code>1.77.0-1</code>,  <code>1.77.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-1</code>,  <code>1.74.0-0</code>,  <code>1.70.0-1</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  </span></summary>
      

      ``1.82.0-0``,  ``1.77.0-1``,  ``1.77.0-0``,  ``1.76.0-0``,  ``1.74.0-1``,  ``1.74.0-0``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reactome.db

   and update with::

      conda update bioconductor-reactome.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reactome.db:<tag>

   (see `bioconductor-reactome.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reactome.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactome.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactome.db
   :alt:   (downloads)
.. |docker_bioconductor-reactome.db| image:: https://quay.io/repository/biocontainers/bioconductor-reactome.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactome.db
.. _`bioconductor-reactome.db/tags`: https://quay.io/repository/biocontainers/bioconductor-reactome.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reactome.db";
        var versions = ["1.82.0","1.77.0","1.77.0","1.76.0","1.74.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactome.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactome.db/README.html