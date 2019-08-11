:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-outrider'
.. highlight: bash

bioconductor-outrider
=====================

.. conda:recipe:: bioconductor-outrider
   :replaces_section_title:

   Identification of aberrant gene expression in RNA\-seq data. Read count expectations are modeled by an autoencoder to control for confounders in the data. Given these expectations\, the RNA\-seq read counts are assumed to follow a negative binomial distribution with a gene\-specific dispersion. Outliers are then identified as read counts that significantly deviate from this distribution. Furthermore\, OUTRIDER provides useful plotting functions to analyze and visualize the results.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/OUTRIDER.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-outrider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-outrider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-outrider/meta.yaml>`_

   


.. conda:package:: bioconductor-outrider

   |downloads_bioconductor-outrider| |docker_bioconductor-outrider|

   :versions: 1.2.0-1, 1.0.2-0, 1.0.1-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-deseq2: >=1.24.0,<1.25.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-pcamethods: >=1.76.0,<1.77.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bbmisc: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gplots: 
   :depends r-matrixstats: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-prroc: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-reticulate: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-outrider

   and update with::

      conda update bioconductor-outrider

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-outrider:<tag>

   (see `bioconductor-outrider/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-outrider| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-outrider.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-outrider
   :alt:   (downloads)
.. |docker_bioconductor-outrider| image:: https://quay.io/repository/biocontainers/bioconductor-outrider/status
   :target: https://quay.io/repository/biocontainers/bioconductor-outrider
.. _`bioconductor-outrider/tags`: https://quay.io/repository/biocontainers/bioconductor-outrider?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-outrider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-outrider/README.html