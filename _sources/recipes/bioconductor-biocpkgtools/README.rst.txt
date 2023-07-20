:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocpkgtools'
.. highlight: bash

bioconductor-biocpkgtools
=========================

.. conda:recipe:: bioconductor-biocpkgtools
   :replaces_section_title:
   :noindex:

   Collection of simple tools for learning about Bioconductor Packages

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BiocPkgTools.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biocpkgtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocpkgtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocpkgtools/meta.yaml>`_

   Bioconductor has a rich ecosystem of metadata around packages\, usage\, and build status. This package is a simple collection of functions to access that metadata from R. The goal is to expose metadata for data mining and value\-added functionality such as package searching\, text mining\, and analytics on packages.


.. conda:package:: bioconductor-biocpkgtools

   |downloads_bioconductor-biocpkgtools| |docker_bioconductor-biocpkgtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.2-0</code>,  <code>1.10.1-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.2-0``,  ``1.10.1-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocviews: ``>=1.68.0,<1.69.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-rbgl: ``>=1.76.0,<1.77.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-gh: 
   :depends r-htmltools: 
   :depends r-htmlwidgets: 
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-rorcid: 
   :depends r-rvest: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocpkgtools

   and update with::

      conda update bioconductor-biocpkgtools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocpkgtools:<tag>

   (see `bioconductor-biocpkgtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocpkgtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocpkgtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocpkgtools
   :alt:   (downloads)
.. |docker_bioconductor-biocpkgtools| image:: https://quay.io/repository/biocontainers/bioconductor-biocpkgtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocpkgtools
.. _`bioconductor-biocpkgtools/tags`: https://quay.io/repository/biocontainers/bioconductor-biocpkgtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocpkgtools";
        var versions = ["1.18.0","1.16.0","1.12.2","1.10.1","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocpkgtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocpkgtools/README.html