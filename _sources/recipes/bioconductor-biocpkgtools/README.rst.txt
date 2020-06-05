:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocpkgtools'
.. highlight: bash

bioconductor-biocpkgtools
=========================

.. conda:recipe:: bioconductor-biocpkgtools
   :replaces_section_title:
   :noindex:

   Collection of simple tools for learning about Bioc Packages

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/BiocPkgTools.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biocpkgtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocpkgtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocpkgtools/meta.yaml>`_

   Bioconductor has a rich ecosystem of metadata around packages\, usage\, and build status. This package is a simple collection of functions to access that metadata from R. The goal is to expose metadata for data mining and value\-added functionality such as package searching\, text mining\, and analytics on packages.


.. conda:package:: bioconductor-biocpkgtools

   |downloads_bioconductor-biocpkgtools| |docker_bioconductor-biocpkgtools|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.2-0``

      

   
   :depends bioconductor-biocfilecache: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocviews: ``>=1.56.0,<1.57.0``
   :depends bioconductor-graph: ``>=1.66.0,<1.67.0``
   :depends bioconductor-rbgl: ``>=1.64.0,<1.65.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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
   :depends r-rappdirs: 
   :depends r-readr: 
   :depends r-rex: 
   :depends r-rlang: 
   :depends r-rvest: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
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







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocpkgtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocpkgtools/README.html