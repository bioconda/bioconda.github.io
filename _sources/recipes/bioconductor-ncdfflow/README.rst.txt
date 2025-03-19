:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ncdfflow'
.. highlight: bash

bioconductor-ncdfflow
=====================

.. conda:recipe:: bioconductor-ncdfflow
   :replaces_section_title:
   :noindex:

   ncdfFlow\: A package that provides HDF5 based storage for flow cytometry data.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ncdfFlow.html
   :license: AGPL-3.0-only
   :recipe: /`bioconductor-ncdfflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncdfflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncdfflow/meta.yaml>`_
   :links: biotools: :biotools:`ncdfflow`, doi: :doi:`10.1016/j.copbio.2012.09.003`

   Provides HDF5 storage based methods and functions for manipulation of flow cytometry data.


.. conda:package:: bioconductor-ncdfflow

   |downloads_bioconductor-ncdfflow| |docker_bioconductor-ncdfflow|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.52.0-1</code>,  <code>2.52.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-1</code>,  <code>2.44.0-0</code>,  <code>2.40.0-2</code>,  <code>2.40.0-1</code>,  <code>2.40.0-0</code>,  </span></summary>
      

      ``2.52.0-1``,  ``2.52.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-1``,  ``2.44.0-0``,  ``2.40.0-2``,  ``2.40.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-2``,  ``2.36.0-1``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.1-0``,  ``2.28.1-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.2-0``,  ``2.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-rhdf5lib: ``>=1.28.0,<1.29.0``
   :depends bioconductor-rhdf5lib: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: 
   :depends r-cpp11: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-ncdfflow

   and update with::

      mamba update bioconductor-ncdfflow

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ncdfflow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ncdfflow:<tag>

   (see `bioconductor-ncdfflow/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ncdfflow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ncdfflow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ncdfflow
   :alt:   (downloads)
.. |docker_bioconductor-ncdfflow| image:: https://quay.io/repository/biocontainers/bioconductor-ncdfflow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ncdfflow
.. _`bioconductor-ncdfflow/tags`: https://quay.io/repository/biocontainers/bioconductor-ncdfflow?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ncdfflow";
        var versions = ["2.52.0","2.52.0","2.48.0","2.46.0","2.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ncdfflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ncdfflow/README.html