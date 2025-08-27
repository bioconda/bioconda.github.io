:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basics'
.. highlight: bash

bioconductor-basics
===================

.. conda:recipe:: bioconductor-basics
   :replaces_section_title:
   :noindex:

   Bayesian Analysis of Single\-Cell Sequencing data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BASiCS.html
   :license: GPL-3
   :recipe: /`bioconductor-basics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basics/meta.yaml>`_

   Single\-cell mRNA sequencing can uncover novel cell\-to\-cell heterogeneity in gene expression levels in seemingly homogeneous populations of cells. However\, these experiments are prone to high levels of technical noise\, creating new challenges for identifying genes that show genuine heterogeneous expression within the population of cells under study. BASiCS \(Bayesian Analysis of Single\-Cell Sequencing data\) is an integrated Bayesian hierarchical model to perform statistical analyses of single\-cell RNA sequencing datasets in the context of supervised experiments \(where the groups of cells of interest are known a priori\, e.g. experimental conditions or cell types\). BASiCS performs built\-in data normalisation \(global scaling\) and technical noise quantification \(based on spike\-in genes\). BASiCS provides an intuitive detection criterion for highly \(or lowly\) variable genes within a single group of cells. Additionally\, BASiCS can compare gene expression patterns between two or more pre\-specified groups of cells. Unlike traditional differential expression tools\, BASiCS quantifies changes in expression that lie beyond comparisons of means\, also allowing the study of changes in cell\-to\-cell heterogeneity. The latter can be quantified via a biological over\-dispersion parameter that measures the excess of variability that is observed with respect to Poisson sampling noise\, after normalisation and technical noise removal. Due to the strong mean\/over\-dispersion confounding that is typically observed for scRNA\-seq datasets\, BASiCS also tests for changes in residual over\-dispersion\, defined by residual values with respect to a global mean\/over\-dispersion trend.


.. conda:package:: bioconductor-basics

   |downloads_bioconductor-basics| |docker_bioconductor-basics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.3-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.6.0-2</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.14.0-0``,  ``2.12.3-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.2-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-scuttle: ``>=1.16.0,<1.17.0``
   :depends bioconductor-scuttle: ``>=1.16.0,<1.17.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-coda: 
   :depends r-cowplot: 
   :depends r-ggextra: 
   :depends r-ggplot2: 
   :depends r-hexbin: 
   :depends r-mass: 
   :depends r-matrix: ``>=1.5.0``
   :depends r-matrixstats: 
   :depends r-posterior: 
   :depends r-rcpp: ``>=0.11.3``
   :depends r-rcpparmadillo: 
   :depends r-reshape2: 
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

      mamba install bioconductor-basics

   and update with::

      mamba update bioconductor-basics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-basics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-basics:<tag>

   (see `bioconductor-basics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-basics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basics
   :alt:   (downloads)
.. |docker_bioconductor-basics| image:: https://quay.io/repository/biocontainers/bioconductor-basics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basics
.. _`bioconductor-basics/tags`: https://quay.io/repository/biocontainers/bioconductor-basics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basics";
        var versions = ["2.18.0","2.14.0","2.12.3","2.10.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basics/README.html