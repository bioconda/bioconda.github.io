.. title:: Package Recipe 'bioconductor-grridge'
.. highlight: bash


bioconductor-grridge
====================

.. conda:recipe:: bioconductor-grridge
   :replaces_section_title:

   This package allows the use of multiple sources of co\-data \(e.g. external p\-values\, gene lists\, annotation\) to improve prediction of binary\, continuous and survival response using \(logistic\, linear or Cox\) group\-regularized ridge regression. It also facilitates post\-hoc variable selection and prediction diagnostics by cross\-validation using ROC curves and AUC.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GRridge.html
   :license: GPL-3
   :recipe: /`bioconductor-grridge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grridge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grridge/meta.yaml>`_

   


.. conda:package:: bioconductor-grridge

   |downloads_bioconductor-grridge| |docker_bioconductor-grridge|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-glmnet`  :conda:package:`r-iso`  :conda:package:`r-mvtnorm`  :conda:package:`r-penalized`  :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-grridge|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-grridge

   and update with::

      conda update bioconductor-grridge

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-grridge


.. |required_by_bioconductor-grridge| conda:required_by:: bioconductor-grridge
.. |downloads_bioconductor-grridge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-grridge.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-grridge| image:: https://quay.io/repository/biocontainers/bioconductor-grridge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-grridge







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-grridge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-grridge/README.html

