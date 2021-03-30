:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-weitrix'
.. highlight: bash

bioconductor-weitrix
====================

.. conda:recipe:: bioconductor-weitrix
   :replaces_section_title:
   :noindex:

   Tools for matrices with precision weights\, test and explore weighted or sparse data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/weitrix.html
   :license: LGPL-2.1 | file LICENSE
   :recipe: /`bioconductor-weitrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-weitrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-weitrix/meta.yaml>`_

   Data type and tools for working with matrices having precision weights and missing data. This package provides a common representation and tools that can be used with many types of high\-throughput data. The meaning of the weights is compatible with usage in the base R function \"lm\" and the package \"limma\". Calibrate weights to account for known predictors of precision. Find rows with excess variability. Perform differential testing and find rows with the largest confident differences. Find PCA\-like components of variation even with many missing values\, rotated so that individual components may be meaningfully interpreted. DelayedArray matrices and BiocParallel are supported.


.. conda:package:: bioconductor-weitrix

   |downloads_bioconductor-weitrix| |docker_bioconductor-weitrix|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-delayedarray: ``>=0.16.0,<0.17.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.12.0,<1.13.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-topconfects: ``>=1.6.0,<1.7.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ckmeans.1d.dp: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-glm2: 
   :depends r-purrr: 
   :depends r-reshape2: 
   :depends r-rhpcblasctl: 
   :depends r-rlang: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-weitrix

   and update with::

      conda update bioconductor-weitrix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-weitrix:<tag>

   (see `bioconductor-weitrix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-weitrix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-weitrix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-weitrix
   :alt:   (downloads)
.. |docker_bioconductor-weitrix| image:: https://quay.io/repository/biocontainers/bioconductor-weitrix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-weitrix
.. _`bioconductor-weitrix/tags`: https://quay.io/repository/biocontainers/bioconductor-weitrix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-weitrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-weitrix/README.html