:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tmixclust'
.. highlight: bash

bioconductor-tmixclust
======================

.. conda:recipe:: bioconductor-tmixclust
   :replaces_section_title:
   :noindex:

   Time Series Clustering of Gene Expression with Gaussian Mixed\-Effects Models and Smoothing Splines

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TMixClust.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-tmixclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tmixclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tmixclust/meta.yaml>`_

   Implementation of a clustering method for time series gene expression data based on mixed\-effects models with Gaussian variables and non\-parametric cubic splines estimation. The method can robustly account for the high levels of noise present in typical gene expression time series datasets.


.. conda:package:: bioconductor-tmixclust

   |downloads_bioconductor-tmixclust| |docker_bioconductor-tmixclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-spem: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-flexclust: 
   :depends r-gss: 
   :depends r-mvtnorm: 
   :depends r-zoo: 
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

      mamba install bioconductor-tmixclust

   and update with::

      mamba update bioconductor-tmixclust

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tmixclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tmixclust:<tag>

   (see `bioconductor-tmixclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tmixclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tmixclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tmixclust
   :alt:   (downloads)
.. |docker_bioconductor-tmixclust| image:: https://quay.io/repository/biocontainers/bioconductor-tmixclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tmixclust
.. _`bioconductor-tmixclust/tags`: https://quay.io/repository/biocontainers/bioconductor-tmixclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tmixclust";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tmixclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tmixclust/README.html