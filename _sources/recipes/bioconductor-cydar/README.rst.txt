:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cydar'
.. highlight: bash

bioconductor-cydar
==================

.. conda:recipe:: bioconductor-cydar
   :replaces_section_title:
   :noindex:

   Using Mass Cytometry for Differential Abundance Analyses

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cydar.html
   :license: GPL-3
   :recipe: /`bioconductor-cydar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cydar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cydar/meta.yaml>`_

   Identifies differentially abundant populations between samples and groups in mass cytometry data. Provides methods for counting cells into hyperspheres\, controlling the spatial false discovery rate\, and visualizing changes in abundance in the high\-dimensional marker space.


.. conda:package:: bioconductor-cydar

   |downloads_bioconductor-cydar| |docker_bioconductor-cydar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.18.0-2</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-2</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocneighbors: ``>=1.20.0,<1.21.0``
   :depends bioconductor-biocneighbors: ``>=1.20.0,<1.21.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0``
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcpp: 
   :depends r-shiny: 
   :depends r-viridis: 
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

      mamba install bioconductor-cydar

   and update with::

      mamba update bioconductor-cydar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cydar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cydar:<tag>

   (see `bioconductor-cydar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cydar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cydar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cydar
   :alt:   (downloads)
.. |docker_bioconductor-cydar| image:: https://quay.io/repository/biocontainers/bioconductor-cydar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cydar
.. _`bioconductor-cydar/tags`: https://quay.io/repository/biocontainers/bioconductor-cydar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cydar";
        var versions = ["1.26.0","1.24.0","1.22.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cydar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cydar/README.html