:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmap'
.. highlight: bash

bioconductor-scmap
==================

.. conda:recipe:: bioconductor-scmap
   :replaces_section_title:
   :noindex:

   A tool for unsupervised projection of single cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scmap.html
   :license: GPL-3
   :recipe: /`bioconductor-scmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmap/meta.yaml>`_

   Single\-cell RNA\-seq \(scRNA\-seq\) is widely used to investigate the composition of complex tissues since the technology allows researchers to define cell\-types using unsupervised clustering of the transcriptome. However\, due to differences in experimental methods and computational analyses\, it is often challenging to directly compare the cells identified in two different experiments. scmap is a method for projecting cells from a scRNA\-seq experiment on to the cell\-types or individual cells identified in a different experiment.


.. conda:package:: bioconductor-scmap

   |downloads_bioconductor-scmap| |docker_bioconductor-scmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.3-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.3-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-googlevis: 
   :depends r-matrixstats: 
   :depends r-proxy: 
   :depends r-randomforest: 
   :depends r-rcpp: ``>=0.12.12``
   :depends r-rcpparmadillo: 
   :depends r-reshape2: 
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

      mamba install bioconductor-scmap

   and update with::

      mamba update bioconductor-scmap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scmap:<tag>

   (see `bioconductor-scmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmap
   :alt:   (downloads)
.. |docker_bioconductor-scmap| image:: https://quay.io/repository/biocontainers/bioconductor-scmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmap
.. _`bioconductor-scmap/tags`: https://quay.io/repository/biocontainers/bioconductor-scmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmap";
        var versions = ["1.24.0","1.22.3","1.20.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmap/README.html