.. title:: Package Recipe 'bioconductor-tmixclust'
.. highlight: bash


bioconductor-tmixclust
======================

.. conda:recipe:: bioconductor-tmixclust
   :replaces_section_title:

   Implementation of a clustering method for time series gene expression data based on mixed\-effects models with Gaussian variables and non\-parametric cubic splines estimation. The method can robustly account for the high levels of noise present in typical gene expression time series datasets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TMixClust.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-tmixclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tmixclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tmixclust/meta.yaml>`_

   


.. conda:package:: bioconductor-tmixclust

   |downloads_bioconductor-tmixclust| |docker_bioconductor-tmixclust|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-spem` >=1.22.0,<1.23.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-flexclust`  :conda:package:`r-gss`  :conda:package:`r-mvtnorm`  :conda:package:`r-zoo`  

   :required~by: |required_by_bioconductor-tmixclust|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tmixclust

   and update with::

      conda update bioconductor-tmixclust

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tmixclust


.. |required_by_bioconductor-tmixclust| conda:required_by:: bioconductor-tmixclust
.. |downloads_bioconductor-tmixclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tmixclust.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tmixclust| image:: https://quay.io/repository/biocontainers/bioconductor-tmixclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tmixclust







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tmixclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tmixclust/README.html

