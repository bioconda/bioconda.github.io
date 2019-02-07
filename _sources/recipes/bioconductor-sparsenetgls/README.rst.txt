.. title:: Package Recipe 'bioconductor-sparsenetgls'
.. highlight: bash


bioconductor-sparsenetgls
=========================

.. conda:recipe:: bioconductor-sparsenetgls
   :replaces_section_title:

   The package provides methods of combining the graph structure learning and generalized least squares regression to improve the regression estimation. The main function sparsenetgls\(\) provides solutions for multivariate regression with Gaussian distributed dependant variables and explanatory variables utlizing multiple well\-known graph structure learning approaches to estimating the precision matrix\, and uses a penalized variance covariance matrix with a distance tuning parameter of the graph structure in deriving the sandwich estimators in generalized least squares \(gls\) regression. This package also provides functions for assessing a Gaussian graphical model which uses the penalized approach. It uses Receiver Operative Characteristics curve as a visualization tool in the assessment.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/sparsenetgls.html
   :license: GPL-3
   :recipe: /`bioconductor-sparsenetgls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsenetgls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsenetgls/meta.yaml>`_

   


.. conda:package:: bioconductor-sparsenetgls

   |downloads_bioconductor-sparsenetgls| |docker_bioconductor-sparsenetgls|

   :versions: 1.0.1

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-glmnet`  :conda:package:`r-huge`  :conda:package:`r-mass`  :conda:package:`r-matrix`  :conda:package:`r-parcor`  

   :required~by: |required_by_bioconductor-sparsenetgls|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sparsenetgls

   and update with::

      conda update bioconductor-sparsenetgls

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sparsenetgls


.. |required_by_bioconductor-sparsenetgls| conda:required_by:: bioconductor-sparsenetgls
.. |downloads_bioconductor-sparsenetgls| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparsenetgls.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sparsenetgls| image:: https://quay.io/repository/biocontainers/bioconductor-sparsenetgls/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparsenetgls







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparsenetgls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparsenetgls/README.html

