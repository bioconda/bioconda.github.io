:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-variancepartition'
.. highlight: bash

bioconductor-variancepartition
==============================

.. conda:recipe:: bioconductor-variancepartition
   :replaces_section_title:
   :noindex:

   Quantify and interpret divers of variation in multilevel gene expression experiments

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/variancePartition.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-variancepartition <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variancepartition>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variancepartition/meta.yaml>`_
   :links: biotools: :biotools:`variancepartition`

   Quantify and interpret multiple sources of biological and technical variation in gene expression experiments. Uses a linear mixed model to quantify variation in gene expression attributable to individual\, tissue\, time point\, or technical variables.  Includes dream differential expression analysis for repeated measures.


.. conda:package:: bioconductor-variancepartition

   |downloads_bioconductor-variancepartition| |docker_bioconductor-variancepartition|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-1``,  ``1.12.3-0``,  ``1.12.0-0``,  ``1.10.4-0``,  ``1.8.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-colorramps: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-iterators: 
   :depends r-lme4: ``>=1.1-10``
   :depends r-lmertest: 
   :depends r-mass: 
   :depends r-pbkrtest: ``>=0.4-4``
   :depends r-progress: 
   :depends r-reshape2: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-variancepartition

   and update with::

      conda update bioconductor-variancepartition

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-variancepartition:<tag>

   (see `bioconductor-variancepartition/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-variancepartition| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-variancepartition.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-variancepartition
   :alt:   (downloads)
.. |docker_bioconductor-variancepartition| image:: https://quay.io/repository/biocontainers/bioconductor-variancepartition/status
   :target: https://quay.io/repository/biocontainers/bioconductor-variancepartition
.. _`bioconductor-variancepartition/tags`: https://quay.io/repository/biocontainers/bioconductor-variancepartition?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-variancepartition/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-variancepartition/README.html