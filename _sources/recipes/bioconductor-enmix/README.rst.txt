:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enmix'
.. highlight: bash

bioconductor-enmix
==================

.. conda:recipe:: bioconductor-enmix
   :replaces_section_title:
   :noindex:

   Data preprocessing and quality control for Illumina HumanMethylation450 and MethylationEPIC BeadChip

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ENmix.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-enmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enmix/meta.yaml>`_

   The ENmix package provides a set of quality control and data pre\-processing tools for Illumina HumanMethylation450 and MethylationEPIC Beadchips. It includes ENmix background correction\, RELIC dye bias correction\, RCP probe\-type bias adjustment\, along with a number of additional tools. These functions can be used to remove unwanted experimental noise and thus to improve accuracy and reproducibility of methylation measures. ENmix functions are flexible and transparent. Users have option to choose a single pipeline command to finish all data pre\-processing steps \(including background correction\, dye\-bias adjustment\, inter\-array normalization and probe\-type bias correction\) or to use individual functions sequentially to perform data pre\-processing in a more customized manner. In addition the ENmix package has selectable complementary functions for efficient data visualization \(such as data distribution plots\)\; quality control \(identifing and filtering low quality data points\, samples\, probes\, and outliers\, along with imputation of missing values\)\; identification of probes with multimodal distributions due to SNPs or other factors\; exploration of data variance structure using principal component regression analysis plot\; preparation of experimental factors related surrogate control variables to be adjusted in downstream statistical analysis\; an efficient algorithm oxBS\-MLE to estimate 5\-methylcytosine and 5\-hydroxymethylcytosine level\; estimation of celltype proporitons\; methlation age calculation and differentially methylated region \(DMR\) analysis.


.. conda:package:: bioconductor-enmix

   |downloads_bioconductor-enmix| |docker_bioconductor-enmix|

   :versions:
      
      

      ``1.25.1-0``,  ``1.22.0-0``,  ``1.20.3-0``,  ``1.18.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=2.20.0,<2.21.0``
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-experimenthub: ``>=1.14.0,<1.15.0``
   :depends bioconductor-genefilter: ``>=1.70.0,<1.71.0``
   :depends bioconductor-geneplotter: ``>=1.66.0,<1.67.0``
   :depends bioconductor-illuminaio: ``>=0.30.0,<0.31.0``
   :depends bioconductor-impute: ``>=1.62.0,<1.63.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-minfi: ``>=1.34.0,<1.35.0``
   :depends bioconductor-preprocesscore: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-doparallel: 
   :depends r-dynamictreecut: 
   :depends r-foreach: 
   :depends r-gplots: 
   :depends r-irr: 
   :depends r-matrixstats: 
   :depends r-quadprog: 
   :depends r-rpmm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-enmix

   and update with::

      conda update bioconductor-enmix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enmix:<tag>

   (see `bioconductor-enmix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enmix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enmix
   :alt:   (downloads)
.. |docker_bioconductor-enmix| image:: https://quay.io/repository/biocontainers/bioconductor-enmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enmix
.. _`bioconductor-enmix/tags`: https://quay.io/repository/biocontainers/bioconductor-enmix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enmix/README.html