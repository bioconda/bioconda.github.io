:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparsenetgls'
.. highlight: bash

bioconductor-sparsenetgls
=========================

.. conda:recipe:: bioconductor-sparsenetgls
   :replaces_section_title:
   :noindex:

   Using Gaussian graphical structue learning estimation in generalized least squared regression for multivariate normal regression

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/sparsenetgls.html
   :license: GPL-3
   :recipe: /`bioconductor-sparsenetgls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsenetgls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsenetgls/meta.yaml>`_

   The package provides methods of combining the graph structure learning and generalized least squares regression to improve the regression estimation. The main function sparsenetgls\(\) provides solutions for multivariate regression with Gaussian distributed dependant variables and explanatory variables utlizing multiple well\-known graph structure learning approaches to estimating the precision matrix\, and uses a penalized variance covariance matrix with a distance tuning parameter of the graph structure in deriving the sandwich estimators in generalized least squares \(gls\) regression. This package also provides functions for assessing a Gaussian graphical model which uses the penalized approach. It uses Receiver Operative Characteristics curve as a visualization tool in the assessment.


.. conda:package:: bioconductor-sparsenetgls

   |downloads_bioconductor-sparsenetgls| |docker_bioconductor-sparsenetgls|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-glmnet: 
   :depends r-huge: 
   :depends r-mass: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sparsenetgls

   and update with::

      conda update bioconductor-sparsenetgls

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sparsenetgls:<tag>

   (see `bioconductor-sparsenetgls/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sparsenetgls| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparsenetgls.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sparsenetgls
   :alt:   (downloads)
.. |docker_bioconductor-sparsenetgls| image:: https://quay.io/repository/biocontainers/bioconductor-sparsenetgls/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparsenetgls
.. _`bioconductor-sparsenetgls/tags`: https://quay.io/repository/biocontainers/bioconductor-sparsenetgls?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparsenetgls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparsenetgls/README.html