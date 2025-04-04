:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-destiny'
.. highlight: bash

bioconductor-destiny
====================

.. conda:recipe:: bioconductor-destiny
   :replaces_section_title:
   :noindex:

   Creates diffusion maps

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/destiny.html
   :license: GPL-3
   :recipe: /`bioconductor-destiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-destiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-destiny/meta.yaml>`_

   Create and plot diffusion maps.


.. conda:package:: bioconductor-destiny

   |downloads_bioconductor-destiny| |docker_bioconductor-destiny|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.16.0-0</code>,  <code>3.14.0-0</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.8.1-1</code>,  <code>3.8.1-0</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.2.0-0</code>,  </span></summary>
      

      ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.8.1-1``,  ``3.8.1-0``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.2.0-0``,  ``2.15.0-0``,  ``2.14.0-1``,  ``2.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot.multistats: 
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-irlba: 
   :depends r-knn.covertree: 
   :depends r-matrix: 
   :depends r-proxy: 
   :depends r-rcpp: ``>=0.10.3``
   :depends r-rcppeigen: 
   :depends r-rcpphnsw: 
   :depends r-rspectra: ``>=0.14-0``
   :depends r-scales: 
   :depends r-scatterplot3d: 
   :depends r-smoother: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-vim: 
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

      mamba install bioconductor-destiny

   and update with::

      mamba update bioconductor-destiny

  To create a new environment, run::

      mamba create --name myenvname bioconductor-destiny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-destiny:<tag>

   (see `bioconductor-destiny/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-destiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-destiny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-destiny
   :alt:   (downloads)
.. |docker_bioconductor-destiny| image:: https://quay.io/repository/biocontainers/bioconductor-destiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-destiny
.. _`bioconductor-destiny/tags`: https://quay.io/repository/biocontainers/bioconductor-destiny?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-destiny";
        var versions = ["3.16.0","3.14.0","3.12.0","3.12.0","3.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-destiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-destiny/README.html