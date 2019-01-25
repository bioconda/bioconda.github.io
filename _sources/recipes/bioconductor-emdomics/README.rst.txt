.. _`bioconductor-emdomics`:

bioconductor-emdomics
=====================

|downloads|

The EMDomics algorithm is used to perform a supervised multi\-class analysis to measure the magnitude and statistical significance of observed continuous genomics data between groups. Usually the data will be gene expression values from array\-based or sequence\-based experiments\, but data from other types of experiments can also be analyzed \(e.g. copy number variation\). Traditional methods like Significance Analysis of Microarrays \(SAM\) and Linear Models for Microarray Data \(LIMMA\) use significance tests based on summary statistics \(mean and standard deviation\) of the distributions. This approach lacks power to identify expression differences between groups that show high levels of intra\-group heterogeneity. The Earth Mover\'s Distance \(EMD\) algorithm instead computes the \"work\" needed to transform one distribution into another\, thus providing a metric of the overall difference in shape between two distributions. Permutation of sample labels is used to generate q\-values for the observed EMD scores. This package also incorporates the Komolgorov\-Smirnov \(K\-S\) test and the Cramer von Mises test \(CVM\)\, which are both common distribution comparison tests.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/EMDomics.html
Versions      
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-emdomics/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-emdomics

and update with::

   conda update bioconductor-emdomics



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-emdomics.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-emdomics/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-emdomics/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-emdomics/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-emdomics
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-emdomics/status
                :target: https://quay.io/repository/biocontainers/bioconductor-emdomics

