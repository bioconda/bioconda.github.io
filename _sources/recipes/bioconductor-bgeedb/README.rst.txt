:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bgeedb'
.. highlight: bash

bioconductor-bgeedb
===================

.. conda:recipe:: bioconductor-bgeedb
   :replaces_section_title:
   :noindex:

   Annotation and gene expression data retrieval from Bgee database. TopAnat\, an anatomical entities Enrichment Analysis tool for UBERON ontology

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BgeeDB.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-bgeedb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgeedb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgeedb/meta.yaml>`_
   :links: biotools: :biotools:`bgeedb`, doi: :doi:`10.12688/f1000research.9973.1`

   A package for the annotation and gene expression data download from Bgee database\, and TopAnat analysis\: GO\-like enrichment of anatomical terms\, mapped to genes by expression patterns.


.. conda:package:: bioconductor-bgeedb

   |downloads_bioconductor-bgeedb| |docker_bioconductor-bgeedb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-1</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  </span></summary>
      

      ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.8.0-0``,  ``2.6.2-0``,  ``2.4.0-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-topgo: ``>=2.54.0,<2.55.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-r.utils: 
   :depends r-rcurl: 
   :depends r-rsqlite: 
   :depends r-tidyr: 
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

      mamba install bioconductor-bgeedb

   and update with::

      mamba update bioconductor-bgeedb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bgeedb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bgeedb:<tag>

   (see `bioconductor-bgeedb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bgeedb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bgeedb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bgeedb
   :alt:   (downloads)
.. |docker_bioconductor-bgeedb| image:: https://quay.io/repository/biocontainers/bioconductor-bgeedb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bgeedb
.. _`bioconductor-bgeedb/tags`: https://quay.io/repository/biocontainers/bioconductor-bgeedb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bgeedb";
        var versions = ["2.28.0","2.26.0","2.24.0","2.20.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bgeedb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bgeedb/README.html