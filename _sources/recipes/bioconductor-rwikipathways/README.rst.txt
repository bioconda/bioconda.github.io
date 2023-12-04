:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rwikipathways'
.. highlight: bash

bioconductor-rwikipathways
==========================

.. conda:recipe:: bioconductor-rwikipathways
   :replaces_section_title:
   :noindex:

   rWikiPathways \- R client library for the WikiPathways API

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/rWikiPathways.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rwikipathways <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rwikipathways>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rwikipathways/meta.yaml>`_

   Use this package to interface with the WikiPathways API. It provides programmatic access to WikiPathways content in multiple data and image formats\, including official monthly release files and convenient GMT read\/write functions.


.. conda:package:: bioconductor-rwikipathways

   |downloads_bioconductor-rwikipathways| |docker_bioconductor-rwikipathways|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.1-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.2-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.2-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-lubridate: 
   :depends r-purrr: 
   :depends r-rcurl: 
   :depends r-readr: 
   :depends r-rjson: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rwikipathways

   and update with::

      mamba update bioconductor-rwikipathways

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rwikipathways

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rwikipathways:<tag>

   (see `bioconductor-rwikipathways/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rwikipathways| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rwikipathways.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rwikipathways
   :alt:   (downloads)
.. |docker_bioconductor-rwikipathways| image:: https://quay.io/repository/biocontainers/bioconductor-rwikipathways/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rwikipathways
.. _`bioconductor-rwikipathways/tags`: https://quay.io/repository/biocontainers/bioconductor-rwikipathways?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rwikipathways";
        var versions = ["1.22.1","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rwikipathways/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rwikipathways/README.html