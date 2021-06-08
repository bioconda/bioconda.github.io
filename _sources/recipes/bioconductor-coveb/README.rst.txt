:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coveb'
.. highlight: bash

bioconductor-coveb
==================

.. conda:recipe:: bioconductor-coveb
   :replaces_section_title:
   :noindex:

   Empirical Bayes estimate of block diagonal covariance matrices

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/covEB.html
   :license: GPL-3
   :recipe: /`bioconductor-coveb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coveb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coveb/meta.yaml>`_

   Using bayesian methods to estimate correlation matrices assuming that they can be written and estimated as block diagonal matrices. These block diagonal matrices are determined using shrinkage parameters that values below this parameter to zero.


.. conda:package:: bioconductor-coveb

   |downloads_bioconductor-coveb| |docker_bioconductor-coveb|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.8.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gsl: 
   :depends r-igraph: 
   :depends r-laplacesdemon: 
   :depends r-matrix: 
   :depends r-mvtnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-coveb

   and update with::

      conda update bioconductor-coveb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-coveb:<tag>

   (see `bioconductor-coveb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-coveb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coveb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-coveb
   :alt:   (downloads)
.. |docker_bioconductor-coveb| image:: https://quay.io/repository/biocontainers/bioconductor-coveb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coveb
.. _`bioconductor-coveb/tags`: https://quay.io/repository/biocontainers/bioconductor-coveb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coveb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coveb/README.html