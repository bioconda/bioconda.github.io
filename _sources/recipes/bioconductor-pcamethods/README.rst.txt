.. title:: Package Recipe 'bioconductor-pcamethods'
.. highlight: bash


bioconductor-pcamethods
=======================

.. conda:recipe:: bioconductor-pcamethods
   :replaces_section_title:

   Provides Bayesian PCA\, Probabilistic PCA\, Nipals PCA\, Inverse Non\-Linear PCA and the conventional SVD PCA. A cluster based method for missing value estimation is included for comparison. BPCA\, PPCA and NipalsPCA may be used to perform PCA on incomplete data as well as for accurate missing value estimation. A set of methods for printing and plotting the results is also provided. All PCA methods make use of the same data structure \(pcaRes\) to provide a common interface to the PCA results. Initiated at the Max\-Planck Institute for Molecular Plant Physiology\, Golm\, Germany.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pcaMethods.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-pcamethods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcamethods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcamethods/meta.yaml>`_
   :links: biotools: :biotools:`pcamethods`, doi: :doi:`10.1093/bioinformatics/btm069`

   


.. conda:package:: bioconductor-pcamethods

   |downloads_bioconductor-pcamethods| |docker_bioconductor-pcamethods|

   :versions: 1.74.0, 1.72.0, 1.70.0, 1.68.0, 1.64.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  :conda:package:`r-rcpp` >=0.11.3 

   :required~by: |required_by_bioconductor-pcamethods|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pcamethods

   and update with::

      conda update bioconductor-pcamethods

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pcamethods


.. |required_by_bioconductor-pcamethods| conda:required_by:: bioconductor-pcamethods
.. |downloads_bioconductor-pcamethods| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcamethods.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pcamethods| image:: https://quay.io/repository/biocontainers/bioconductor-pcamethods/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcamethods







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcamethods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcamethods/README.html

