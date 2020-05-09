:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-graper'
.. highlight: bash

bioconductor-graper
===================

.. conda:recipe:: bioconductor-graper
   :replaces_section_title:

   Adaptive penalization in high\-dimensional regression and classification with external covariates using variational Bayes

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/graper.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-graper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graper/meta.yaml>`_

   This package enables regression and classification on high\-dimensional data with different relative strengths of penalization for different feature groups\, such as different assays or omic types. The optimal relative strengths are chosen adaptively. Optimisation is performed using a variational Bayes approach.


.. conda:package:: bioconductor-graper

   |downloads_bioconductor-graper| |docker_bioconductor-graper|

   :versions: 1.4.0-0, 1.2.0-0, 1.0.0-1
   
   :depends libblas: >=3.8.0,<4.0a0
   :depends libcxx: >=9.0.1
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-bh: 
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-graper

   and update with::

      conda update bioconductor-graper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-graper:<tag>

   (see `bioconductor-graper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-graper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-graper
   :alt:   (downloads)
.. |docker_bioconductor-graper| image:: https://quay.io/repository/biocontainers/bioconductor-graper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graper
.. _`bioconductor-graper/tags`: https://quay.io/repository/biocontainers/bioconductor-graper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graper/README.html