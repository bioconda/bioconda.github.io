:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sqldataframe'
.. highlight: bash

bioconductor-sqldataframe
=========================

.. conda:recipe:: bioconductor-sqldataframe
   :replaces_section_title:
   :noindex:

   Representation of SQL tables in DataFrame metaphor

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SQLDataFrame.html
   :license: LGPL (>= 3); File LICENSE
   :recipe: /`bioconductor-sqldataframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sqldataframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sqldataframe/meta.yaml>`_

   Implements bindings for SQL tables that are compatible with Bioconductor S4 data structures\, namely the DataFrame and DelayedArray. This allows SQL\-derived data to be easily used inside other Bioconductor objects \(e.g.\, SummarizedExperiments\) while keeping everything on disk.


.. conda:package:: bioconductor-sqldataframe

   |downloads_bioconductor-sqldataframe| |docker_bioconductor-sqldataframe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.2-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-duckdb: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-sqldataframe

   and update with::

      mamba update bioconductor-sqldataframe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sqldataframe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sqldataframe:<tag>

   (see `bioconductor-sqldataframe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sqldataframe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sqldataframe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sqldataframe
   :alt:   (downloads)
.. |docker_bioconductor-sqldataframe| image:: https://quay.io/repository/biocontainers/bioconductor-sqldataframe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sqldataframe
.. _`bioconductor-sqldataframe/tags`: https://quay.io/repository/biocontainers/bioconductor-sqldataframe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sqldataframe";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sqldataframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sqldataframe/README.html