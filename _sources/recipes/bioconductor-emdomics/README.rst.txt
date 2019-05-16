:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-emdomics'
.. highlight: bash

bioconductor-emdomics
=====================

.. conda:recipe:: bioconductor-emdomics
   :replaces_section_title:

   The EMDomics algorithm is used to perform a supervised multi\-class analysis to measure the magnitude and statistical significance of observed continuous genomics data between groups. Usually the data will be gene expression values from array\-based or sequence\-based experiments\, but data from other types of experiments can also be analyzed \(e.g. copy number variation\). Traditional methods like Significance Analysis of Microarrays \(SAM\) and Linear Models for Microarray Data \(LIMMA\) use significance tests based on summary statistics \(mean and standard deviation\) of the distributions. This approach lacks power to identify expression differences between groups that show high levels of intra\-group heterogeneity. The Earth Mover\'s Distance \(EMD\) algorithm instead computes the \"work\" needed to transform one distribution into another\, thus providing a metric of the overall difference in shape between two distributions. Permutation of sample labels is used to generate q\-values for the observed EMD scores. This package also incorporates the Komolgorov\-Smirnov \(K\-S\) test and the Cramer von Mises test \(CVM\)\, which are both common distribution comparison tests.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/EMDomics.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-emdomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-emdomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-emdomics/meta.yaml>`_

   


.. conda:package:: bioconductor-emdomics

   |downloads_bioconductor-emdomics| |docker_bioconductor-emdomics|

   :versions: 2.14.0-0, 2.12.0-1, 2.12.0-0
   
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-preprocesscore: >=1.46.0,<1.47.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cdft: 
   :depends r-emdist: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-emdomics

   and update with::

      conda update bioconductor-emdomics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-emdomics:<tag>

   (see `bioconductor-emdomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-emdomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-emdomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-emdomics
   :alt:   (downloads)
.. |docker_bioconductor-emdomics| image:: https://quay.io/repository/biocontainers/bioconductor-emdomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-emdomics
.. _`bioconductor-emdomics/tags`: https://quay.io/repository/biocontainers/bioconductor-emdomics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-emdomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-emdomics/README.html