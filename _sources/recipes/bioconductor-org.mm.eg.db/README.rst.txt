:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.mm.eg.db'
.. highlight: bash

bioconductor-org.mm.eg.db
=========================

.. conda:recipe:: bioconductor-org.mm.eg.db
   :replaces_section_title:
   :noindex:

   Genome wide annotation for Mouse

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/org.Mm.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.mm.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.mm.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.mm.eg.db/meta.yaml>`_

   Genome wide annotation for Mouse\, primarily based on mapping using Entrez Gene identifiers.


.. conda:package:: bioconductor-org.mm.eg.db

   |downloads_bioconductor-org.mm.eg.db| |docker_bioconductor-org.mm.eg.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.14.0-1</code>,  <code>3.14.0-0</code>,  <code>3.13.0-0</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.11.4-1</code>,  <code>3.11.4-0</code>,  <code>3.11.1-0</code>,  <code>3.10.0-0</code>,  </span></summary>
      

      ``3.14.0-1``,  ``3.14.0-0``,  ``3.13.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.4-1``,  ``3.11.4-0``,  ``3.11.1-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.0-2``,  ``3.3.0-1``,  ``3.3.0-0``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.mm.eg.db

   and update with::

      conda update bioconductor-org.mm.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.mm.eg.db:<tag>

   (see `bioconductor-org.mm.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.mm.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.mm.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.mm.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-org.mm.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.mm.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.mm.eg.db
.. _`bioconductor-org.mm.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.mm.eg.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-org.mm.eg.db";
        var versions = ["3.14.0","3.14.0","3.13.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.mm.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.mm.eg.db/README.html