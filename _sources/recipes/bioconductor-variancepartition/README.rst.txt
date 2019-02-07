.. title:: Package Recipe 'bioconductor-variancepartition'
.. highlight: bash


bioconductor-variancepartition
==============================

.. conda:recipe:: bioconductor-variancepartition
   :replaces_section_title:

   Quantify and interpret multiple sources of biological and technical variation in gene expression experiments. Uses a linear mixed model to quantify variation in gene expression attributable to individual\, tissue\, time point\, or technical variables.  Includes dream differential expression analysis for repeated measures.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/variancePartition.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-variancepartition <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variancepartition>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variancepartition/meta.yaml>`_
   :links: biotools: :biotools:`variancepartition`

   


.. conda:package:: bioconductor-variancepartition

   |downloads_bioconductor-variancepartition| |docker_bioconductor-variancepartition|

   :versions: 1.12.0, 1.10.4, 1.8.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-colorramps`  :conda:package:`r-doparallel`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-iterators`  :conda:package:`r-lme4` >=1.1-10 :conda:package:`r-lmertest`  :conda:package:`r-mass`  :conda:package:`r-pbkrtest` >=0.4-4 :conda:package:`r-reshape2`  :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-variancepartition|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-variancepartition

   and update with::

      conda update bioconductor-variancepartition

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-variancepartition


.. |required_by_bioconductor-variancepartition| conda:required_by:: bioconductor-variancepartition
.. |downloads_bioconductor-variancepartition| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-variancepartition.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-variancepartition| image:: https://quay.io/repository/biocontainers/bioconductor-variancepartition/status
   :target: https://quay.io/repository/biocontainers/bioconductor-variancepartition







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-variancepartition/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-variancepartition/README.html

