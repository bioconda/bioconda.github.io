:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocpkgtools'
.. highlight: bash

bioconductor-biocpkgtools
=========================

.. conda:recipe:: bioconductor-biocpkgtools
   :replaces_section_title:
   :noindex:

   Collection of simple tools for learning about Bioconductor Packages

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiocPkgTools.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biocpkgtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocpkgtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocpkgtools/meta.yaml>`_

   Bioconductor has a rich ecosystem of metadata around packages\, usage\, and build status. This package is a simple collection of functions to access that metadata from R. The goal is to expose metadata for data mining and value\-added functionality such as package searching\, text mining\, and analytics on packages.


.. conda:package:: bioconductor-biocpkgtools

   |downloads_bioconductor-biocpkgtools| |docker_bioconductor-biocpkgtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.27.12-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.2-0</code>,  <code>1.10.1-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.27.12-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.2-0``,  ``1.10.1-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends bioconductor-biocviews: ``>=1.78.0,<1.79.0``
   :depends bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends bioconductor-rbgl: ``>=1.86.0,<1.87.0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-biocmanager: 
   :depends r-curl: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-gh: 
   :depends r-glue: 
   :depends r-htmltools: 
   :depends r-htmlwidgets: 
   :depends r-httr: 
   :depends r-httr2: 
   :depends r-igraph: ``>=2.0.0``
   :depends r-jsonlite: 
   :depends r-lubridate: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-rvest: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-xml2: 
   :depends r-yaml: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-biocpkgtools

   and update with::

      mamba update bioconductor-biocpkgtools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocpkgtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.27.12","1.24.0","1.20.0","1.18.0","1.16.0"];
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