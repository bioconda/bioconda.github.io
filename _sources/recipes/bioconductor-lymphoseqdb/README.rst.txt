:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lymphoseqdb'
.. highlight: bash

bioconductor-lymphoseqdb
========================

.. conda:recipe:: bioconductor-lymphoseqdb
   :replaces_section_title:
   :noindex:

   LymphoSeq annotation databases

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/LymphoSeqDB.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lymphoseqdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lymphoseqdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lymphoseqdb/meta.yaml>`_

   This package provides annotation databases that support the package LymphoSeq.


.. conda:package:: bioconductor-lymphoseqdb

   |downloads_bioconductor-lymphoseqdb| |docker_bioconductor-lymphoseqdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.2-10</code>,  <code>0.99.2-9</code>,  <code>0.99.2-8</code>,  <code>0.99.2-7</code>,  <code>0.99.2-6</code>,  <code>0.99.2-5</code>,  <code>0.99.2-4</code>,  <code>0.99.2-3</code>,  <code>0.99.2-2</code>,  </span></summary>
      

      ``0.99.2-10``,  ``0.99.2-9``,  ``0.99.2-8``,  ``0.99.2-7``,  ``0.99.2-6``,  ``0.99.2-5``,  ``0.99.2-4``,  ``0.99.2-3``,  ``0.99.2-2``,  ``0.99.2-1``,  ``0.99.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lymphoseqdb

   and update with::

      conda update bioconductor-lymphoseqdb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lymphoseqdb:<tag>

   (see `bioconductor-lymphoseqdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lymphoseqdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lymphoseqdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lymphoseqdb
   :alt:   (downloads)
.. |docker_bioconductor-lymphoseqdb| image:: https://quay.io/repository/biocontainers/bioconductor-lymphoseqdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lymphoseqdb
.. _`bioconductor-lymphoseqdb/tags`: https://quay.io/repository/biocontainers/bioconductor-lymphoseqdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lymphoseqdb";
        var versions = ["0.99.2","0.99.2","0.99.2","0.99.2","0.99.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lymphoseqdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lymphoseqdb/README.html