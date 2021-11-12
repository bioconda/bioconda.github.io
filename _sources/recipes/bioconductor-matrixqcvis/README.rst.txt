:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-matrixqcvis'
.. highlight: bash

bioconductor-matrixqcvis
========================

.. conda:recipe:: bioconductor-matrixqcvis
   :replaces_section_title:
   :noindex:

   Shiny\-based interactive data\-quality exploration for omics data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MatrixQCvis.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-matrixqcvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixqcvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixqcvis/meta.yaml>`_

   Data quality assessment is an integral part of preparatory data analysis to ensure sound biological information retrieval. We present here the MatrixQCvis package\, which provides shiny\-based interactive visualization of data quality metrics at the per\-sample and per\-feature level. It is broadly applicable to quantitative omics data types that come in matrix\-like format \(features x samples\). It enables the detection of low\-quality samples\, drifts\, outliers and batch effects in data sets. Visualizations include amongst others bar\- and violin plots of the \(count\/intensity\) values\, mean vs standard deviation plots\, MA plots\, empirical cumulative distribution function \(ECDF\) plots\, visualizations of the distances between samples\, and multiple types of dimension reduction plots. Furthermore\, MatrixQCvis allows for differential expression analysis based on the limma \(moderated t\-tests\) and proDA \(Wald tests\) packages. MatrixQCvis builds upon the popular Bioconductor SummarizedExperiment S4 class and enables thus the facile integration into existing workflows. The package is especially tailored towards metabolomics and proteomics mass spectrometry data\, but also allows to assess the data quality of other data types that can be represented in a SummarizedExperiment object.


.. conda:package:: bioconductor-matrixqcvis

   |downloads_bioconductor-matrixqcvis| |docker_bioconductor-matrixqcvis|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.10.0,<2.11.0``
   :depends bioconductor-impute: ``>=1.68.0,<1.69.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-pcamethods: ``>=1.86.0,<1.87.0``
   :depends bioconductor-proda: ``>=1.8.0,<1.9.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-vsn: ``>=3.62.0,<3.63.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: ``>=1.0.5``
   :depends r-ggplot2: ``>=3.3.3``
   :depends r-hmisc: ``>=4.5-0``
   :depends r-htmlwidgets: ``>=1.5.3``
   :depends r-imputelcmd: ``>=2.0``
   :depends r-openxlsx: ``>=4.2.3``
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
   :depends r-vegan: ``>=2.5-7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-matrixqcvis

   and update with::

      conda update bioconductor-matrixqcvis

   or use the docker container::

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
        var versions = ["1.2.0","1.0.0"];
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