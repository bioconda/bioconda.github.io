:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bayesspace'
.. highlight: bash

bioconductor-bayesspace
=======================

.. conda:recipe:: bioconductor-bayesspace
   :replaces_section_title:
   :noindex:

   Clustering and Resolution Enhancement of Spatial Transcriptomes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BayesSpace.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-bayesspace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesspace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesspace/meta.yaml>`_

   Tools for clustering and enhancing the resolution of spatial gene expression experiments. BayesSpace clusters a low\-dimensional representation of the gene expression matrix\, incorporating a spatial prior to encourage neighboring spots to cluster together. The method can enhance the resolution of the low\-dimensional representation into \"sub\-spots\"\, for which features such as gene expression or cell type composition can be imputed.


.. conda:package:: bioconductor-bayesspace

   |downloads_bioconductor-bayesspace| |docker_bioconductor-bayesspace|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.1-1</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocfilecache: ``>=2.10.1,<2.11.0a0``
   :depends bioconductor-biocsingular: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biocsingular: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-scater: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scater: ``>=1.30.1,<1.31.0a0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0``
   :depends bioconductor-scran: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-coda: 
   :depends r-dirichletreg: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-mclust: 
   :depends r-purrr: 
   :depends r-rcpp: ``>=1.0.4.6``
   :depends r-rcpparmadillo: 
   :depends r-rcppdist: 
   :depends r-rcppprogress: 
   :depends r-rcurl: 
   :depends r-scales: 
   :depends r-xgboost: 
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

      mamba install bioconductor-bayesspace

   and update with::

      mamba update bioconductor-bayesspace

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bayesspace

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bayesspace:<tag>

   (see `bioconductor-bayesspace/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bayesspace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bayesspace.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bayesspace
   :alt:   (downloads)
.. |docker_bioconductor-bayesspace| image:: https://quay.io/repository/biocontainers/bioconductor-bayesspace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bayesspace
.. _`bioconductor-bayesspace/tags`: https://quay.io/repository/biocontainers/bioconductor-bayesspace?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bayesspace";
        var versions = ["1.12.0","1.10.1","1.8.0","1.8.0","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bayesspace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bayesspace/README.html