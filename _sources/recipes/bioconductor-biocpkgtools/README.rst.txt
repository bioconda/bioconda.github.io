.. title:: Package Recipe 'bioconductor-biocpkgtools'
.. highlight: bash


bioconductor-biocpkgtools
=========================

.. conda:recipe:: bioconductor-biocpkgtools
   :replaces_section_title:

   Bioconductor has a rich ecosystem of metadata around packages\, usage\, and build status. This package is a simple collection of functions to access that metadata from R. The goal is to expose metadata for data mining and value\-added functionality such as package searching\, text mining\, and analytics on packages.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiocPkgTools.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biocpkgtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocpkgtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocpkgtools/meta.yaml>`_

   


.. conda:package:: bioconductor-biocpkgtools

   |downloads_bioconductor-biocpkgtools| |docker_bioconductor-biocpkgtools|

   :versions: 1.0.2

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  :conda:package:`r-dplyr`  :conda:package:`r-dt`  :conda:package:`r-htmltools`  :conda:package:`r-htmlwidgets`  :conda:package:`r-httr`  :conda:package:`r-igraph`  :conda:package:`r-jsonlite`  :conda:package:`r-readr`  :conda:package:`r-rex`  :conda:package:`r-rvest`  :conda:package:`r-stringr`  :conda:package:`r-tibble`  :conda:package:`r-tidyr`  :conda:package:`r-xml2`  

   :required~by: |required_by_bioconductor-biocpkgtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocpkgtools

   and update with::

      conda update bioconductor-biocpkgtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biocpkgtools


.. |required_by_bioconductor-biocpkgtools| conda:required_by:: bioconductor-biocpkgtools
.. |downloads_bioconductor-biocpkgtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocpkgtools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biocpkgtools| image:: https://quay.io/repository/biocontainers/bioconductor-biocpkgtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocpkgtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocpkgtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocpkgtools/README.html

