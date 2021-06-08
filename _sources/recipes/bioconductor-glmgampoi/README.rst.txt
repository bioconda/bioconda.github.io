:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-glmgampoi'
.. highlight: bash

bioconductor-glmgampoi
======================

.. conda:recipe:: bioconductor-glmgampoi
   :replaces_section_title:
   :noindex:

   Fit a Gamma\-Poisson Generalized Linear Model

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/glmGamPoi.html
   :license: GPL-3
   :recipe: /`bioconductor-glmgampoi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glmgampoi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glmgampoi/meta.yaml>`_

   Fit linear models to overdispersed count data. The package can estimate the overdispersion and fit repeated models for matrix input. It is designed to handle large input datasets as they typically occur in single cell RNA\-seq experiments.


.. conda:package:: bioconductor-glmgampoi

   |downloads_bioconductor-glmgampoi| |docker_bioconductor-glmgampoi|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-beachmat: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.14.0,<1.15.0``
   :depends bioconductor-hdf5array: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-glmgampoi

   and update with::

      conda update bioconductor-glmgampoi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-glmgampoi:<tag>

   (see `bioconductor-glmgampoi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-glmgampoi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-glmgampoi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-glmgampoi
   :alt:   (downloads)
.. |docker_bioconductor-glmgampoi| image:: https://quay.io/repository/biocontainers/bioconductor-glmgampoi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-glmgampoi
.. _`bioconductor-glmgampoi/tags`: https://quay.io/repository/biocontainers/bioconductor-glmgampoi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-glmgampoi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-glmgampoi/README.html