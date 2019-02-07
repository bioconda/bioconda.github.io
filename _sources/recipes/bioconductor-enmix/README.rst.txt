.. title:: Package Recipe 'bioconductor-enmix'
.. highlight: bash


bioconductor-enmix
==================

.. conda:recipe:: bioconductor-enmix
   :replaces_section_title:

   The ENmix package provides a set of quality control and data pre\-processing tools for Illumina HumanMethylation450 and MethylationEPIC Beadchips. It includes ENmix background correction\, RELIC dye bias correction\, RCP probe\-type bias adjustment\, along with a number of additional tools. These functions can be used to remove unwanted experimental noise and thus to improve accuracy and reproducibility of methylation measures. ENmix functions are flexible and transparent. Users have option to choose a single pipeline command to finish all data pre\-processing steps \(including background correction\, dye\-bias adjustment\, inter\-array normalization and probe\-type bias correction\) or to use individual functions sequentially to perform data pre\-processing in a more customized manner. In addition the ENmix package has selectable complementary functions for efficient data visualization \(such as data distribution plots\)\; quality control \(identifing and filtering low quality data points\, samples\, probes\, and outliers\, along with imputation of missing values\)\; identification of probes with multimodal distributions due to SNPs or other factors\; exploration of data variance structure using principal component regression analysis plot\; preparation of experimental factors related surrogate control variables to be adjusted in downstream statistical analysis\; and an efficient algorithm oxBS\-MLE to estimate 5\-methylcytosine and 5\-hydroxymethylcytosine level.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ENmix.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-enmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enmix/meta.yaml>`_

   


.. conda:package:: bioconductor-enmix

   |downloads_bioconductor-enmix| |docker_bioconductor-enmix|

   :versions: 1.18.0

   :depends: :conda:package:`bioconductor-geneplotter` >=1.60.0,<1.61.0 :conda:package:`bioconductor-impute` >=1.56.0,<1.57.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`bioconductor-watermelon` >=1.26.0,<1.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-doparallel`  :conda:package:`r-foreach`  :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-enmix|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-enmix

   and update with::

      conda update bioconductor-enmix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-enmix


.. |required_by_bioconductor-enmix| conda:required_by:: bioconductor-enmix
.. |downloads_bioconductor-enmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enmix.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-enmix| image:: https://quay.io/repository/biocontainers/bioconductor-enmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enmix







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enmix/README.html

