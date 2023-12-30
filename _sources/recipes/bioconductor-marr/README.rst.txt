:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-marr'
.. highlight: bash

bioconductor-marr
=================

.. conda:recipe:: bioconductor-marr
   :replaces_section_title:
   :noindex:

   Maximum rank reproducibility

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/marr.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-marr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-marr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-marr/meta.yaml>`_

   marr \(Maximum Rank Reproducibility\) is a nonparametric approach that detects reproducible signals using a maximal rank statistic for high\-dimensional biological data. In this R package\, we implement functions that measures the reproducibility of features per sample pair and sample pairs per feature in high\-dimensional biological replicate experiments. The user\-friendly plot functions in this package also plot histograms of the reproducibility of features per sample pair and sample pairs per feature. Furthermore\, our approach also allows the users to select optimal filtering threshold values for the identification of reproducible features and sample pairs based on output visualization checks \(histograms\). This package also provides the subset of data filtered by reproducible features and\/or sample pairs.


.. conda:package:: bioconductor-marr

   |downloads_bioconductor-marr| |docker_bioconductor-marr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  <code>1.00.02-0</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.00.02-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rcpp: 
   :depends r-rlang: 
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

      mamba install bioconductor-marr

   and update with::

      mamba update bioconductor-marr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-marr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-marr:<tag>

   (see `bioconductor-marr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-marr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-marr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-marr
   :alt:   (downloads)
.. |docker_bioconductor-marr| image:: https://quay.io/repository/biocontainers/bioconductor-marr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-marr
.. _`bioconductor-marr/tags`: https://quay.io/repository/biocontainers/bioconductor-marr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-marr";
        var versions = ["1.12.0","1.10.0","1.8.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-marr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-marr/README.html