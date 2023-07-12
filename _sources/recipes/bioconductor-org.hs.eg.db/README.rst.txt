:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.hs.eg.db'
.. highlight: bash

bioconductor-org.hs.eg.db
=========================

.. conda:recipe:: bioconductor-org.hs.eg.db
   :replaces_section_title:
   :noindex:

   Genome wide annotation for Human

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/org.Hs.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.hs.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.hs.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.hs.eg.db/meta.yaml>`_

   Genome wide annotation for Human\, primarily based on mapping using Entrez Gene identifiers.


.. conda:package:: bioconductor-org.hs.eg.db

   |downloads_bioconductor-org.hs.eg.db| |docker_bioconductor-org.hs.eg.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.17.0-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-1</code>,  <code>3.14.0-0</code>,  <code>3.13.0-0</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.11.4-1</code>,  <code>3.11.4-0</code>,  </span></summary>
      

      ``3.17.0-0``,  ``3.16.0-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.13.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.4-1``,  ``3.11.4-0``,  ``3.11.1-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.3.0-2``,  ``3.3.0-1``,  ``3.3.0-0``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.hs.eg.db

   and update with::

      conda update bioconductor-org.hs.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.hs.eg.db:<tag>

   (see `bioconductor-org.hs.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.hs.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.hs.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.hs.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-org.hs.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.hs.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.hs.eg.db
.. _`bioconductor-org.hs.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.hs.eg.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-org.hs.eg.db";
        var versions = ["3.17.0","3.16.0","3.14.0","3.14.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.hs.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.hs.eg.db/README.html