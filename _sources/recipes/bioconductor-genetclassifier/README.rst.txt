:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genetclassifier'
.. highlight: bash

bioconductor-genetclassifier
============================

.. conda:recipe:: bioconductor-genetclassifier
   :replaces_section_title:

   Comprehensive package to automatically train and validate a multi\-class SVM classifier based on gene expression data. Provides transparent selection of gene markers\, their coexpression networks\, and an interface to query the classifier.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/geNetClassifier.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-genetclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genetclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genetclassifier/meta.yaml>`_
   :links: biotools: :biotools:`genetclassifier`

   


.. conda:package:: bioconductor-genetclassifier

   |downloads_bioconductor-genetclassifier| |docker_bioconductor-genetclassifier|

   :versions: 1.26.0-0, 1.24.0-1, 1.22.0-0, 1.20.0-0, 1.18.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-ebarrays: >=2.50.0,<2.51.0
   :depends bioconductor-minet: >=3.44.0,<3.45.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-e1071: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genetclassifier

   and update with::

      conda update bioconductor-genetclassifier

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genetclassifier:<tag>

   (see `bioconductor-genetclassifier/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genetclassifier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genetclassifier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genetclassifier
   :alt:   (downloads)
.. |docker_bioconductor-genetclassifier| image:: https://quay.io/repository/biocontainers/bioconductor-genetclassifier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genetclassifier
.. _`bioconductor-genetclassifier/tags`: https://quay.io/repository/biocontainers/bioconductor-genetclassifier?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genetclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genetclassifier/README.html