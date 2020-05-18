:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brendadb'
.. highlight: bash

bioconductor-brendadb
=====================

.. conda:recipe:: bioconductor-brendadb
   :replaces_section_title:

   The BRENDA Enzyme Database

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/brendaDb.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-brendadb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brendadb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brendadb/meta.yaml>`_

   R interface for importing and analyzing enzyme information from the BRENDA database.


.. conda:package:: bioconductor-brendadb

   |downloads_bioconductor-brendadb| |docker_bioconductor-brendadb|

   :versions: 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-biocfilecache: >=1.12.0,<1.13.0
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-crayon: 
   :depends r-curl: 
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rappdirs: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-xml2: 
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







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brendadb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brendadb/README.html