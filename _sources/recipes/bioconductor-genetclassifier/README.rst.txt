.. title:: Package Recipe 'bioconductor-genetclassifier'
.. highlight: bash


bioconductor-genetclassifier
============================

.. conda:recipe:: bioconductor-genetclassifier
   :replaces_section_title:

   Comprehensive package to automatically train and validate a multi\-class SVM classifier based on gene expression data. Provides transparent selection of gene markers\, their coexpression networks\, and an interface to query the classifier.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/geNetClassifier.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-genetclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genetclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genetclassifier/meta.yaml>`_
   :links: biotools: :biotools:`genetclassifier`

   


.. conda:package:: bioconductor-genetclassifier

   |downloads_bioconductor-genetclassifier| |docker_bioconductor-genetclassifier|

   :versions: 1.22.0, 1.20.0, 1.18.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-ebarrays` >=2.46.0,<2.47.0 :conda:package:`bioconductor-minet` >=3.40.0,<3.41.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-e1071`  

   :required~by: |required_by_bioconductor-genetclassifier|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genetclassifier

   and update with::

      conda update bioconductor-genetclassifier

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genetclassifier


.. |required_by_bioconductor-genetclassifier| conda:required_by:: bioconductor-genetclassifier
.. |downloads_bioconductor-genetclassifier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genetclassifier.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genetclassifier| image:: https://quay.io/repository/biocontainers/bioconductor-genetclassifier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genetclassifier







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genetclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genetclassifier/README.html

