:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.dr.eg.db'
.. highlight: bash

bioconductor-org.dr.eg.db
=========================

.. conda:recipe:: bioconductor-org.dr.eg.db
   :replaces_section_title:
   :noindex:

   Genome wide annotation for Zebrafish

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/org.Dr.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.dr.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.dr.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.dr.eg.db/meta.yaml>`_

   Genome wide annotation for Zebrafish\, primarily based on mapping using Entrez Gene identifiers.


.. conda:package:: bioconductor-org.dr.eg.db

   |downloads_bioconductor-org.dr.eg.db| |docker_bioconductor-org.dr.eg.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.14.0-0</code>,  <code>3.13.0-0</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.11.1-0</code>,  <code>3.10.0-0</code>,  <code>3.8.2-1</code>,  <code>3.7.0-1</code>,  <code>3.7.0-0</code>,  </span></summary>
      

      ``3.14.0-0``,  ``3.13.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.1-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.0-1``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.4.2-0``,  ``3.4.1-1``,  ``3.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.dr.eg.db

   and update with::

      conda update bioconductor-org.dr.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.dr.eg.db:<tag>

   (see `bioconductor-org.dr.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.dr.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.dr.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.dr.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-org.dr.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.dr.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.dr.eg.db
.. _`bioconductor-org.dr.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.dr.eg.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-org.dr.eg.db";
        var versions = ["3.14.0","3.13.0","3.12.0","3.12.0","3.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.dr.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.dr.eg.db/README.html