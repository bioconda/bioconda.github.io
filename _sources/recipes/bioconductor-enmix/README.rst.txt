.. _`bioconductor-enmix`:

bioconductor-enmix
==================

|downloads|

The ENmix package provides a set of quality control and data pre\-processing tools for Illumina HumanMethylation450 and MethylationEPIC Beadchips. It includes ENmix background correction\, RELIC dye bias correction\, RCP probe\-type bias adjustment\, along with a number of additional tools. These functions can be used to remove unwanted experimental noise and thus to improve accuracy and reproducibility of methylation measures. ENmix functions are flexible and transparent. Users have option to choose a single pipeline command to finish all data pre\-processing steps \(including background correction\, dye\-bias adjustment\, inter\-array normalization and probe\-type bias correction\) or to use individual functions sequentially to perform data pre\-processing in a more customized manner. In addition the ENmix package has selectable complementary functions for efficient data visualization \(such as data distribution plots\)\; quality control \(identifing and filtering low quality data points\, samples\, probes\, and outliers\, along with imputation of missing values\)\; identification of probes with multimodal distributions due to SNPs or other factors\; exploration of data variance structure using principal component regression analysis plot\; preparation of experimental factors related surrogate control variables to be adjusted in downstream statistical analysis\; and an efficient algorithm oxBS\-MLE to estimate 5\-methylcytosine and 5\-hydroxymethylcytosine level.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/ENmix.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-enmix/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-enmix

and update with::

   conda update bioconductor-enmix



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-enmix.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-enmix/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-enmix/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-enmix/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-enmix
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-enmix/status
                :target: https://quay.io/repository/biocontainers/bioconductor-enmix

