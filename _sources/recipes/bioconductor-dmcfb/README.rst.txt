:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmcfb'
.. highlight: bash

bioconductor-dmcfb
==================

.. conda:recipe:: bioconductor-dmcfb
   :replaces_section_title:
   :noindex:

   Differentially Methylated Cytosines via a Bayesian Functional Approach

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/DMCFB.html
   :license: GPL-3
   :recipe: /`bioconductor-dmcfb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmcfb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmcfb/meta.yaml>`_

   DMCFB is a pipeline for identifying differentially methylated cytosines using a Bayesian functional regression model in bisulfite sequencing data. By using a functional regression data model\, it tries to capture position\-specific\, group\-specific and other covariates\-specific methylation patterns as well as spatial correlation patterns and unknown underlying models of methylation data. It is robust and flexible with respect to the true underlying models and inclusion of any covariates\, and the missing values are imputed using spatial correlation between positions and samples. A Bayesian approach is adopted for estimation and inference in the proposed method.


.. conda:package:: bioconductor-dmcfb

   |downloads_bioconductor-dmcfb| |docker_bioconductor-dmcfb|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.22.0,<1.23.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.48.0,<1.49.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends r-arm: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-benchmarkme: 
   :depends r-data.table: 
   :depends r-fastdummies: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-speedglm: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dmcfb

   and update with::

      conda update bioconductor-dmcfb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmcfb:<tag>

   (see `bioconductor-dmcfb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmcfb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmcfb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmcfb
   :alt:   (downloads)
.. |docker_bioconductor-dmcfb| image:: https://quay.io/repository/biocontainers/bioconductor-dmcfb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmcfb
.. _`bioconductor-dmcfb/tags`: https://quay.io/repository/biocontainers/bioconductor-dmcfb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmcfb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmcfb/README.html