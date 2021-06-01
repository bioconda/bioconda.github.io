:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-grridge'
.. highlight: bash

bioconductor-grridge
====================

.. conda:recipe:: bioconductor-grridge
   :replaces_section_title:
   :noindex:

   Better prediction by use of co\-data\: Adaptive group\-regularized ridge regression

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GRridge.html
   :license: GPL-3
   :recipe: /`bioconductor-grridge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grridge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grridge/meta.yaml>`_

   This package allows the use of multiple sources of co\-data \(e.g. external p\-values\, gene lists\, annotation\) to improve prediction of binary\, continuous and survival response using \(logistic\, linear or Cox\) group\-regularized ridge regression. It also facilitates post\-hoc variable selection and prediction diagnostics by cross\-validation using ROC curves and AUC.


.. conda:package:: bioconductor-grridge

   |downloads_bioconductor-grridge| |docker_bioconductor-grridge|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-graph: ``>=1.70.0,<1.71.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-glmnet: 
   :depends r-iso: 
   :depends r-mvtnorm: 
   :depends r-penalized: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-grridge

   and update with::

      conda update bioconductor-grridge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-grridge:<tag>

   (see `bioconductor-grridge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-grridge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-grridge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-grridge
   :alt:   (downloads)
.. |docker_bioconductor-grridge| image:: https://quay.io/repository/biocontainers/bioconductor-grridge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-grridge
.. _`bioconductor-grridge/tags`: https://quay.io/repository/biocontainers/bioconductor-grridge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-grridge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-grridge/README.html