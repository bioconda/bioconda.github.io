.. title:: Package Recipe 'bioconductor-migsa'
.. highlight: bash


bioconductor-migsa
==================

.. conda:recipe:: bioconductor-migsa
   :replaces_section_title:

   Massive and Integrative Gene Set Analysis. The MIGSA package allows to perform a massive and integrative gene set analysis over several expression and gene sets simultaneously. It provides a common gene expression analytic framework that grants a comprehensive and coherent analysis. Only a minimal user parameter setting is required to perform both singular and gene set enrichment analyses in an integrative manner by means of the best available methods\, i.e. dEnricher and mGSZ respectively. The greatest strengths of this big omics data tool are the availability of several functions to explore\, analyze and visualize its results in order to facilitate the data mining task over huge information sources. MIGSA package also provides several functions that allow to easily load the most updated gene sets from several repositories.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MIGSA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-migsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-migsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-migsa/meta.yaml>`_

   


.. conda:package:: bioconductor-migsa

   |downloads_bioconductor-migsa| |docker_bioconductor-migsa|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-gostats` >=2.48.0,<2.49.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-rbgl` >=1.58.0,<1.59.0 :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-futile.logger`  :conda:package:`r-ggdendro`  :conda:package:`r-ggplot2`  :conda:package:`r-ismev`  :conda:package:`r-matrixstats`  :conda:package:`r-reshape2`  :conda:package:`r-rjsonio`  :conda:package:`r-vegan`  

   :required~by: |required_by_bioconductor-migsa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-migsa

   and update with::

      conda update bioconductor-migsa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-migsa


.. |required_by_bioconductor-migsa| conda:required_by:: bioconductor-migsa
.. |downloads_bioconductor-migsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-migsa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-migsa| image:: https://quay.io/repository/biocontainers/bioconductor-migsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-migsa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-migsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-migsa/README.html

