.. title:: Package Recipe 'bioconductor-emdomics'
.. highlight: bash


bioconductor-emdomics
=====================

.. conda:recipe:: bioconductor-emdomics
   :replaces_section_title:

   The EMDomics algorithm is used to perform a supervised multi\-class analysis to measure the magnitude and statistical significance of observed continuous genomics data between groups. Usually the data will be gene expression values from array\-based or sequence\-based experiments\, but data from other types of experiments can also be analyzed \(e.g. copy number variation\). Traditional methods like Significance Analysis of Microarrays \(SAM\) and Linear Models for Microarray Data \(LIMMA\) use significance tests based on summary statistics \(mean and standard deviation\) of the distributions. This approach lacks power to identify expression differences between groups that show high levels of intra\-group heterogeneity. The Earth Mover\'s Distance \(EMD\) algorithm instead computes the \"work\" needed to transform one distribution into another\, thus providing a metric of the overall difference in shape between two distributions. Permutation of sample labels is used to generate q\-values for the observed EMD scores. This package also incorporates the Komolgorov\-Smirnov \(K\-S\) test and the Cramer von Mises test \(CVM\)\, which are both common distribution comparison tests.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/EMDomics.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-emdomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-emdomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-emdomics/meta.yaml>`_

   


.. conda:package:: bioconductor-emdomics

   |downloads_bioconductor-emdomics| |docker_bioconductor-emdomics|

   :versions: 2.12.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cdft`  :conda:package:`r-emdist`  :conda:package:`r-ggplot2`  :conda:package:`r-matrixstats`  

   :required~by: |required_by_bioconductor-emdomics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-emdomics

   and update with::

      conda update bioconductor-emdomics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-emdomics


.. |required_by_bioconductor-emdomics| conda:required_by:: bioconductor-emdomics
.. |downloads_bioconductor-emdomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-emdomics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-emdomics| image:: https://quay.io/repository/biocontainers/bioconductor-emdomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-emdomics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-emdomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-emdomics/README.html

