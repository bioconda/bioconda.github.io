:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clust'
.. highlight: bash

clust
=====

.. conda:recipe:: clust
   :replaces_section_title:
   :noindex:

   Optimised consensus clustering of multiple heterogeneous datasets.

   :homepage: https://github.com/baselabujamous/clust
   :license: LGPL / LGPL-3.0
   :recipe: /`clust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clust/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-018-1536-8`

   


.. conda:package:: clust

   |downloads_clust| |docker_clust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.12-0</code>,  <code>1.10.10-0</code>,  <code>1.10.8-0</code>,  <code>1.10.7-0</code>,  <code>1.8.10-0</code>,  <code>1.8.9-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.17.0-0``,  ``1.12.0-0``,  ``1.10.12-0``,  ``1.10.10-0``,  ``1.10.8-0``,  ``1.10.7-0``,  ``1.8.10-0``,  ``1.8.9-0``,  ``1.8.7-0``,  ``1.8.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends joblib: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends portalocker: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install clust

   and update with::

      mamba update clust

  To create a new environment, run::

      mamba create --name myenvname clust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clust:<tag>

   (see `clust/tags`_ for valid values for ``<tag>``)


.. |downloads_clust| image:: https://img.shields.io/conda/dn/bioconda/clust.svg?style=flat
   :target: https://anaconda.org/bioconda/clust
   :alt:   (downloads)
.. |docker_clust| image:: https://quay.io/repository/biocontainers/clust/status
   :target: https://quay.io/repository/biocontainers/clust
.. _`clust/tags`: https://quay.io/repository/biocontainers/clust?tab=tags


.. raw:: html

    <script>
        var package = "clust";
        var versions = ["1.18.0","1.17.0","1.12.0","1.10.12","1.10.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clust/README.html