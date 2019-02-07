.. title:: Package Recipe 'bioconductor-sigfeature'
.. highlight: bash


bioconductor-sigfeature
=======================

.. conda:recipe:: bioconductor-sigfeature
   :replaces_section_title:

   This package provides a novel feature selection algorithm for binary classification using support vector machine recursive feature elimination SVM\-RFE and t\-statistic. In this feature selection process\, the selected features are differentially significant between the two classes and also they are good classifier with higher degree of classification accuracy.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/sigFeature.html
   :license: GPL
   :recipe: /`bioconductor-sigfeature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigfeature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigfeature/meta.yaml>`_

   


.. conda:package:: bioconductor-sigfeature

   |downloads_bioconductor-sigfeature| |docker_bioconductor-sigfeature|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biocviews` >=1.50.0,<1.51.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-e1071`  :conda:package:`r-matrix`  :conda:package:`r-nlme`  :conda:package:`r-openxlsx`  :conda:package:`r-pheatmap`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-sparsem`  

   :required~by: |required_by_bioconductor-sigfeature|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigfeature

   and update with::

      conda update bioconductor-sigfeature

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sigfeature


.. |required_by_bioconductor-sigfeature| conda:required_by:: bioconductor-sigfeature
.. |downloads_bioconductor-sigfeature| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigfeature.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sigfeature| image:: https://quay.io/repository/biocontainers/bioconductor-sigfeature/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigfeature







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigfeature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigfeature/README.html

