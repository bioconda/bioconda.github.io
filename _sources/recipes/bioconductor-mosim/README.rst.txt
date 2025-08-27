:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mosim'
.. highlight: bash

bioconductor-mosim
==================

.. conda:recipe:: bioconductor-mosim
   :replaces_section_title:
   :noindex:

   Multi\-Omics Simulation \(MOSim\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MOSim.html
   :license: GPL-3
   :recipe: /`bioconductor-mosim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosim/meta.yaml>`_

   MOSim package simulates multi\-omic experiments that mimic regulatory mechanisms within the cell\, allowing flexible experimental design including time course and multiple groups.


.. conda:package:: bioconductor-mosim

   |downloads_bioconductor-mosim| |docker_bioconductor-mosim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``2.2.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cpp11: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hiddenmarkov: 
   :depends r-lazyeval: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-seurat: 
   :depends r-signac: ``>=1.14.0,<2.0a0``
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-zoo: 
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

      mamba install bioconductor-mosim

   and update with::

      mamba update bioconductor-mosim

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mosim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mosim:<tag>

   (see `bioconductor-mosim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mosim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mosim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mosim
   :alt:   (downloads)
.. |docker_bioconductor-mosim| image:: https://quay.io/repository/biocontainers/bioconductor-mosim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mosim
.. _`bioconductor-mosim/tags`: https://quay.io/repository/biocontainers/bioconductor-mosim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mosim";
        var versions = ["2.2.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mosim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mosim/README.html