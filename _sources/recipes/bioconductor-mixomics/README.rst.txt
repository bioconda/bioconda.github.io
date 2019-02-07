.. title:: Package Recipe 'bioconductor-mixomics'
.. highlight: bash


bioconductor-mixomics
=====================

.. conda:recipe:: bioconductor-mixomics
   :replaces_section_title:

   Multivariate methods are well suited to large omics data sets where the number of variables \(e.g. genes\, proteins\, metabolites\) is much larger than the number of samples \(patients\, cells\, mice\). They have the appealing properties of reducing the dimension of the data by using instrumental variables \(components\)\, which are defined as combinations of all variables. Those components are then used to produce useful graphical outputs that enable better understanding of the relationships and correlation structures between the different data sets that are integrated. mixOmics offers a wide range of multivariate methods for the exploration and integration of biological datasets with a particular focus on variable selection. The package proposes several sparse multivariate models we have developed to identify the key variables that are highly correlated\, and\/or explain the biological outcome of interest. The data that can be analysed with mixOmics may come from high throughput sequencing technologies\, such as omics data \(transcriptomics\, metabolomics\, proteomics\, metagenomics etc\) but also beyond the realm of omics \(e.g. spectral imaging\). The methods implemented in mixOmics can also handle missing values without having to delete entire rows with missing data. A non exhaustive list of methods include variants of generalised Canonical Correlation Analysis\, sparse Partial Least Squares and sparse Discriminant Analysis. Recently we implemented integrative methods to combine multiple data sets\: N\-integration with variants of Generalised Canonical Correlation Analysis and P\-integration with variants of multi\-group Partial Least Squares.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/mixOmics.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mixomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mixomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mixomics/meta.yaml>`_

   


.. conda:package:: bioconductor-mixomics

   |downloads_bioconductor-mixomics| |docker_bioconductor-mixomics|

   :versions: 6.6.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-corpcor`  :conda:package:`r-dplyr`  :conda:package:`r-ellipse`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-igraph`  :conda:package:`r-lattice`  :conda:package:`r-mass`  :conda:package:`r-matrixstats`  :conda:package:`r-rarpack`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-mixomics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mixomics

   and update with::

      conda update bioconductor-mixomics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mixomics


.. |required_by_bioconductor-mixomics| conda:required_by:: bioconductor-mixomics
.. |downloads_bioconductor-mixomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mixomics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mixomics| image:: https://quay.io/repository/biocontainers/bioconductor-mixomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mixomics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mixomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mixomics/README.html

