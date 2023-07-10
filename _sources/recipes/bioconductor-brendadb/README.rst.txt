:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brendadb'
.. highlight: bash

bioconductor-brendadb
=====================

.. conda:recipe:: bioconductor-brendadb
   :replaces_section_title:
   :noindex:

   The BRENDA Enzyme Database

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/brendaDb.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-brendadb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brendadb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brendadb/meta.yaml>`_

   R interface for importing and analyzing enzyme information from the BRENDA database.


.. conda:package:: bioconductor-brendadb

   |downloads_bioconductor-brendadb| |docker_bioconductor-brendadb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.11.0-1</code>,  <code>1.11.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.11.0-1``,  ``1.11.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rappdirs: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brendadb

   and update with::

      conda update bioconductor-brendadb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-brendadb:<tag>

   (see `bioconductor-brendadb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-brendadb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brendadb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brendadb
   :alt:   (downloads)
.. |docker_bioconductor-brendadb| image:: https://quay.io/repository/biocontainers/bioconductor-brendadb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brendadb
.. _`bioconductor-brendadb/tags`: https://quay.io/repository/biocontainers/bioconductor-brendadb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-brendadb";
        var versions = ["1.14.0","1.11.0","1.11.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brendadb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brendadb/README.html