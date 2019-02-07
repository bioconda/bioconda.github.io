.. title:: Package Recipe 'bioconductor-mineica'
.. highlight: bash


bioconductor-mineica
====================

.. conda:recipe:: bioconductor-mineica
   :replaces_section_title:

   The goal of MineICA is to perform Independent Component Analysis \(ICA\) on multiple transcriptome datasets\, integrating additional data \(e.g molecular\, clinical and pathological\). This Integrative ICA helps the biological interpretation of the components by studying their association with variables \(e.g sample annotations\) and gene sets\, and enables the comparison of components from different datasets using correlation\-based graph.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MineICA.html
   :license: GPL-2
   :recipe: /`bioconductor-mineica <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mineica>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mineica/meta.yaml>`_
   :links: biotools: :biotools:`mineica`, doi: :doi:`10.1155/2014/213656`

   


.. conda:package:: bioconductor-mineica

   |downloads_bioconductor-mineica| |docker_bioconductor-mineica|

   :versions: 1.22.0, 1.18.0

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-gostats` >=2.48.0,<2.49.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-lumi` >=2.34.0,<2.35.0 :conda:package:`bioconductor-lumihumanall.db` >=1.22.0,<1.23.0 :conda:package:`bioconductor-marray` >=1.60.0,<1.61.0 :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-colorspace`  :conda:package:`r-fastica`  :conda:package:`r-foreach`  :conda:package:`r-fpc`  :conda:package:`r-ggplot2`  :conda:package:`r-gtools`  :conda:package:`r-hmisc`  :conda:package:`r-igraph`  :conda:package:`r-jade`  :conda:package:`r-mclust`  :conda:package:`r-plyr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-scales`  :conda:package:`r-xtable`  

   :required~by: |required_by_bioconductor-mineica|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mineica

   and update with::

      conda update bioconductor-mineica

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mineica


.. |required_by_bioconductor-mineica| conda:required_by:: bioconductor-mineica
.. |downloads_bioconductor-mineica| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mineica.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mineica| image:: https://quay.io/repository/biocontainers/bioconductor-mineica/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mineica







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mineica/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mineica/README.html

