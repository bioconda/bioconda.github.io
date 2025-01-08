:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-matrixqcvis'
.. highlight: bash

bioconductor-matrixqcvis
========================

.. conda:recipe:: bioconductor-matrixqcvis
   :replaces_section_title:
   :noindex:

   Shiny\-based interactive data\-quality exploration for omics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MatrixQCvis.html
   :license: GPL-3
   :recipe: /`bioconductor-matrixqcvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixqcvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixqcvis/meta.yaml>`_

   Data quality assessment is an integral part of preparatory data analysis to ensure sound biological information retrieval. We present here the MatrixQCvis package\, which provides shiny\-based interactive visualization of data quality metrics at the per\-sample and per\-feature level. It is broadly applicable to quantitative omics data types that come in matrix\-like format \(features x samples\). It enables the detection of low\-quality samples\, drifts\, outliers and batch effects in data sets. Visualizations include amongst others bar\- and violin plots of the \(count\/intensity\) values\, mean vs standard deviation plots\, MA plots\, empirical cumulative distribution function \(ECDF\) plots\, visualizations of the distances between samples\, and multiple types of dimension reduction plots. Furthermore\, MatrixQCvis allows for differential expression analysis based on the limma \(moderated t\-tests\) and proDA \(Wald tests\) packages. MatrixQCvis builds upon the popular Bioconductor SummarizedExperiment S4 class and enables thus the facile integration into existing workflows. The package is especially tailored towards metabolomics and proteomics mass spectrometry data\, but also allows to assess the data quality of other data types that can be represented in a SummarizedExperiment object.


.. conda:package:: bioconductor-matrixqcvis

   |downloads_bioconductor-matrixqcvis| |docker_bioconductor-matrixqcvis|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-pcamethods: ``>=1.98.0,<1.99.0``
   :depends bioconductor-proda: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-sva: ``>=3.54.0,<3.55.0``
   :depends bioconductor-vsn: ``>=3.74.0,<3.75.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: ``>=1.0.5``
   :depends r-dt: ``>=0.33``
   :depends r-ggplot2: ``>=3.3.3``
   :depends r-hmisc: ``>=4.5-0``
   :depends r-htmlwidgets: ``>=1.5.3``
   :depends r-imputelcmd: ``>=2.0``
   :depends r-mass: ``>=7.3-58.1``
   :depends r-plotly: ``>=4.9.3``
   :depends r-rlang: ``>=0.4.10``
   :depends r-rmarkdown: ``>=2.7``
   :depends r-rtsne: ``>=0.15``
   :depends r-shiny: ``>=1.6.0``
   :depends r-shinydashboard: ``>=0.7.1``
   :depends r-shinyhelper: ``>=0.3.2``
   :depends r-shinyjs: ``>=2.0.0``
   :depends r-tibble: ``>=3.1.1``
   :depends r-tidyr: ``>=1.1.3``
   :depends r-umap: ``>=0.2.7.0``
   :depends r-upsetr: ``>=1.4.0``
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

      mamba install bioconductor-matrixqcvis

   and update with::

      mamba update bioconductor-matrixqcvis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-matrixqcvis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-matrixqcvis:<tag>

   (see `bioconductor-matrixqcvis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-matrixqcvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-matrixqcvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-matrixqcvis
   :alt:   (downloads)
.. |docker_bioconductor-matrixqcvis| image:: https://quay.io/repository/biocontainers/bioconductor-matrixqcvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-matrixqcvis
.. _`bioconductor-matrixqcvis/tags`: https://quay.io/repository/biocontainers/bioconductor-matrixqcvis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-matrixqcvis";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-matrixqcvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-matrixqcvis/README.html