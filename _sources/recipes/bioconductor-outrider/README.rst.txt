:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-outrider'
.. highlight: bash

bioconductor-outrider
=====================

.. conda:recipe:: bioconductor-outrider
   :replaces_section_title:
   :noindex:

   OUTRIDER \- OUTlier in RNA\-Seq fInDER

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/OUTRIDER.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-outrider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-outrider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-outrider/meta.yaml>`_

   Identification of aberrant gene expression in RNA\-seq data. Read count expectations are modeled by an autoencoder to control for confounders in the data. Given these expectations\, the RNA\-seq read counts are assumed to follow a negative binomial distribution with a gene\-specific dispersion. Outliers are then identified as read counts that significantly deviate from this distribution. Furthermore\, OUTRIDER provides useful plotting functions to analyze and visualize the results.


.. conda:package:: bioconductor-outrider

   |downloads_bioconductor-outrider| |docker_bioconductor-outrider|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bbmisc: 
   :depends r-data.table: 
   :depends r-generics: 
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-matrixstats: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-prroc: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-reshape2: 
   :depends r-scales: 
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

      mamba install bioconductor-outrider

   and update with::

      mamba update bioconductor-outrider

  To create a new environment, run::

      mamba create --name myenvname bioconductor-outrider

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-outrider:<tag>

   (see `bioconductor-outrider/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-outrider| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-outrider.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-outrider
   :alt:   (downloads)
.. |docker_bioconductor-outrider| image:: https://quay.io/repository/biocontainers/bioconductor-outrider/status
   :target: https://quay.io/repository/biocontainers/bioconductor-outrider
.. _`bioconductor-outrider/tags`: https://quay.io/repository/biocontainers/bioconductor-outrider?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-outrider";
        var versions = ["1.20.0","1.18.1","1.16.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-outrider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-outrider/README.html