:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-muscat'
.. highlight: bash

bioconductor-muscat
===================

.. conda:recipe:: bioconductor-muscat
   :replaces_section_title:
   :noindex:

   Multi\-sample multi\-group scRNA\-seq data analysis tools

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/muscat.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-muscat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscat/meta.yaml>`_

   \`muscat\` provides various methods and visualization tools for DS analysis in multi\-sample\, multi\-group\, multi\-\(cell\-\)subpopulation scRNA\-seq data\, including cell\-level mixed models and methods based on aggregated “pseudobulk” data\, as well as a flexible simulation platform that mimics both single and multi\-sample scRNA\-seq data.


.. conda:package:: bioconductor-muscat

   |downloads_bioconductor-muscat| |docker_bioconductor-muscat|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-scater: ``>=1.20.0,<1.21.0``
   :depends bioconductor-scuttle: ``>=1.2.0,<1.3.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-variancepartition: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-blme: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-glmmtmb: 
   :depends r-lme4: 
   :depends r-lmertest: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-scales: 
   :depends r-sctransform: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-muscat

   and update with::

      conda update bioconductor-muscat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-muscat:<tag>

   (see `bioconductor-muscat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-muscat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-muscat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-muscat
   :alt:   (downloads)
.. |docker_bioconductor-muscat| image:: https://quay.io/repository/biocontainers/bioconductor-muscat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-muscat
.. _`bioconductor-muscat/tags`: https://quay.io/repository/biocontainers/bioconductor-muscat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-muscat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-muscat/README.html