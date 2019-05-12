:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicsmarker'
.. highlight: bash

bioconductor-omicsmarker
========================

.. conda:recipe:: bioconductor-omicsmarker
   :replaces_section_title:

   Tools for classification and feature selection for \'omics\' level datasets.  It is a tool to provide multiple multivariate classification and feature selection techniques complete with multiple stability metrics and aggregation techniques.  It is primarily designed for analysis of metabolomics datasets but potentially extendable to proteomics and transcriptomics applications.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/OmicsMarkeR.html
   :license: GPL-3
   :recipe: /`bioconductor-omicsmarker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicsmarker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicsmarker/meta.yaml>`_

   


.. conda:package:: bioconductor-omicsmarker

   |downloads_bioconductor-omicsmarker| |docker_bioconductor-omicsmarker|

   :versions: 1.16.0-0, 1.14.0-0
   
   :depends r-assertive: >=0.3-0
   :depends r-assertive.base: >=0.0-1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-caret: >=6.0-37
   :depends r-catools: >=1.14
   :depends r-data.table: >=1.9.4
   :depends r-discriminer: >=0.1-29
   :depends r-e1071: >=1.6-1
   :depends r-foreach: >=1.4.1
   :depends r-gbm: >=2.1
   :depends r-glmnet: >=1.9-5
   :depends r-pamr: >=1.54.1
   :depends r-permute: >=0.7-0
   :depends r-plyr: >=1.8
   :depends r-randomforest: >=4.6-10
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omicsmarker

   and update with::

      conda update bioconductor-omicsmarker

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicsmarker:<tag>

   (see `bioconductor-omicsmarker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicsmarker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicsmarker.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-omicsmarker| image:: https://quay.io/repository/biocontainers/bioconductor-omicsmarker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicsmarker
.. _`bioconductor-omicsmarker/tags`: https://quay.io/repository/biocontainers/bioconductor-omicsmarker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicsmarker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicsmarker/README.html