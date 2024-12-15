:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-m3c'
.. highlight: bash

bioconductor-m3c
================

.. conda:recipe:: bioconductor-m3c
   :replaces_section_title:
   :noindex:

   Monte Carlo Reference\-based Consensus Clustering

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/M3C.html
   :license: AGPL-3
   :recipe: /`bioconductor-m3c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3c/meta.yaml>`_

   M3C is a consensus clustering algorithm that uses a Monte Carlo simulation to eliminate overestimation of K and can reject the null hypothesis K\=1.


.. conda:package:: bioconductor-m3c

   |downloads_bioconductor-m3c| |docker_bioconductor-m3c|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-corpcor: 
   :depends r-doparallel: 
   :depends r-dosnow: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-matrixcalc: 
   :depends r-rtsne: 
   :depends r-umap: 
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

      mamba install bioconductor-m3c

   and update with::

      mamba update bioconductor-m3c

  To create a new environment, run::

      mamba create --name myenvname bioconductor-m3c

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-m3c:<tag>

   (see `bioconductor-m3c/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-m3c| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-m3c.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-m3c
   :alt:   (downloads)
.. |docker_bioconductor-m3c| image:: https://quay.io/repository/biocontainers/bioconductor-m3c/status
   :target: https://quay.io/repository/biocontainers/bioconductor-m3c
.. _`bioconductor-m3c/tags`: https://quay.io/repository/biocontainers/bioconductor-m3c?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-m3c";
        var versions = ["1.28.0","1.24.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-m3c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-m3c/README.html