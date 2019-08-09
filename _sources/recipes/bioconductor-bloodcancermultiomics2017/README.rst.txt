:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bloodcancermultiomics2017'
.. highlight: bash

bioconductor-bloodcancermultiomics2017
======================================

.. conda:recipe:: bioconductor-bloodcancermultiomics2017
   :replaces_section_title:

   The package contains data of the Primary Blood Cancer Encyclopedia \(PACE\) project together with a complete executable transcript of the statistical analysis and reproduces figures presented in the paper \"Drug\-perturbation\-based stratification of blood cancer\" by Dietrich S\, Oles M\, Lu J et al.\, J. Clin. Invest. \(2018\) 128\(1\)\:427\-445. doi\:10.1172\/JCI93801.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/BloodCancerMultiOmics2017.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-bloodcancermultiomics2017 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bloodcancermultiomics2017>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bloodcancermultiomics2017/meta.yaml>`_

   


.. conda:package:: bioconductor-bloodcancermultiomics2017

   |downloads_bioconductor-bloodcancermultiomics2017| |docker_bioconductor-bloodcancermultiomics2017|

   :versions: 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-deseq2: >=1.24.0,<1.25.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-beeswarm: 
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-gtable: 
   :depends r-ipflasso: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-survival: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bloodcancermultiomics2017

   and update with::

      conda update bioconductor-bloodcancermultiomics2017

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bloodcancermultiomics2017:<tag>

   (see `bioconductor-bloodcancermultiomics2017/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bloodcancermultiomics2017| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bloodcancermultiomics2017.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bloodcancermultiomics2017
   :alt:   (downloads)
.. |docker_bioconductor-bloodcancermultiomics2017| image:: https://quay.io/repository/biocontainers/bioconductor-bloodcancermultiomics2017/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bloodcancermultiomics2017
.. _`bioconductor-bloodcancermultiomics2017/tags`: https://quay.io/repository/biocontainers/bioconductor-bloodcancermultiomics2017?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bloodcancermultiomics2017/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bloodcancermultiomics2017/README.html