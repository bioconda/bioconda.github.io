.. title:: Package Recipe 'bioconductor-outrider'
.. highlight: bash


bioconductor-outrider
=====================

.. conda:recipe:: bioconductor-outrider
   :replaces_section_title:

   Identification of aberrant gene expression in RNA\-seq data. Read count expectations are modeled by an autoencoder to control for confounders in the data. Given these expectations\, the RNA\-seq read counts are assumed to follow a negative binomial distribution with a gene\-specific dispersion. Outliers are then identified as read counts that significantly deviate from this distribution. Furthermore\, OUTRIDER provides useful plotting functions to analyze and visualize the results.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/OUTRIDER.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-outrider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-outrider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-outrider/meta.yaml>`_

   


.. conda:package:: bioconductor-outrider

   |downloads_bioconductor-outrider| |docker_bioconductor-outrider|

   :versions: 1.0.2, 1.0.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-pcamethods` >=1.74.0,<1.75.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bbmisc`  :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-ggpubr`  :conda:package:`r-gplots`  :conda:package:`r-matrixstats`  :conda:package:`r-plotly`  :conda:package:`r-plyr`  :conda:package:`r-prroc`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcpp`  :conda:package:`r-rcpparmadillo`  :conda:package:`r-reticulate`  :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-outrider|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-outrider

   and update with::

      conda update bioconductor-outrider

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-outrider


.. |required_by_bioconductor-outrider| conda:required_by:: bioconductor-outrider
.. |downloads_bioconductor-outrider| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-outrider.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-outrider| image:: https://quay.io/repository/biocontainers/bioconductor-outrider/status
   :target: https://quay.io/repository/biocontainers/bioconductor-outrider







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-outrider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-outrider/README.html

