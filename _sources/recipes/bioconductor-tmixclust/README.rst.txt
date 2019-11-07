:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tmixclust'
.. highlight: bash

bioconductor-tmixclust
======================

.. conda:recipe:: bioconductor-tmixclust
   :replaces_section_title:

   Time Series Clustering of Gene Expression with Gaussian Mixed\-Effects Models and Smoothing Splines

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/TMixClust.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-tmixclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tmixclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tmixclust/meta.yaml>`_

   Implementation of a clustering method for time series gene expression data based on mixed\-effects models with Gaussian variables and non\-parametric cubic splines estimation. The method can robustly account for the high levels of noise present in typical gene expression time series datasets.


.. conda:package:: bioconductor-tmixclust

   |downloads_bioconductor-tmixclust| |docker_bioconductor-tmixclust|

   :versions: 1.8.0-0, 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-spem: >=1.26.0,<1.27.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: 
   :depends r-flexclust: 
   :depends r-gss: 
   :depends r-mvtnorm: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tmixclust

   and update with::

      conda update bioconductor-tmixclust

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tmixclust:<tag>

   (see `bioconductor-tmixclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tmixclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tmixclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tmixclust
   :alt:   (downloads)
.. |docker_bioconductor-tmixclust| image:: https://quay.io/repository/biocontainers/bioconductor-tmixclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tmixclust
.. _`bioconductor-tmixclust/tags`: https://quay.io/repository/biocontainers/bioconductor-tmixclust?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tmixclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tmixclust/README.html