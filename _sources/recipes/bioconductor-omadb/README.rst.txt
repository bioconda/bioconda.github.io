:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omadb'
.. highlight: bash

bioconductor-omadb
==================

.. conda:recipe:: bioconductor-omadb
   :replaces_section_title:
   :noindex:

   R wrapper for the OMA REST API

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/OmaDB.html
   :license: GPL-3
   :recipe: /`bioconductor-omadb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omadb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omadb/meta.yaml>`_

   A package for the orthology prediction data download from OMA database.


.. conda:package:: bioconductor-omadb

   |downloads_bioconductor-omadb| |docker_bioconductor-omadb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.0-0</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-topgo: ``>=2.54.0,<2.55.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: ``>=1.2.1``
   :depends r-jsonlite: 
   :depends r-plyr: ``>=1.8.4``
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

      mamba install bioconductor-omadb

   and update with::

      mamba update bioconductor-omadb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-omadb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omadb:<tag>

   (see `bioconductor-omadb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omadb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omadb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omadb
   :alt:   (downloads)
.. |docker_bioconductor-omadb| image:: https://quay.io/repository/biocontainers/bioconductor-omadb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omadb
.. _`bioconductor-omadb/tags`: https://quay.io/repository/biocontainers/bioconductor-omadb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omadb";
        var versions = ["2.18.0","2.16.0","2.14.0","2.10.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omadb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omadb/README.html