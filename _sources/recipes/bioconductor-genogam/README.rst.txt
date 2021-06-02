:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genogam'
.. highlight: bash

bioconductor-genogam
====================

.. conda:recipe:: bioconductor-genogam
   :replaces_section_title:
   :noindex:

   A GAM based framework for analysis of ChIP\-Seq data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GenoGAM.html
   :license: GPL-2
   :recipe: /`bioconductor-genogam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genogam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genogam/meta.yaml>`_
   :links: biotools: :biotools:`genogam`, doi: :doi:`10.1093/bioinformatics/btx150`

   This package allows statistical analysis of genome\-wide data with smooth functions using generalized additive models based on the implementation from the R\-package \'mgcv\'. It provides methods for the statistical analysis of ChIP\-Seq data including inference of protein occupancy\, and pointwise and region\-wise differential analysis. Estimation of dispersion and smoothing parameters is performed by cross\-validation. Scaling of generalized additive model fitting to whole chromosomes is achieved by parallelization over overlapping genomic intervals.


.. conda:package:: bioconductor-genogam

   |downloads_bioconductor-genogam| |docker_bioconductor-genogam|

   :versions:
      
      

      ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.0.2-0``,  ``1.8.0-0``,  ``1.6.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-hdf5array: ``>=1.20.0,<1.21.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rhdf5: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: ``>=1.9.4``
   :depends r-futile.logger: ``>=1.4.1``
   :depends r-matrix: ``>=1.2-8``
   :depends r-rcpp: ``>=0.12.14``
   :depends r-rcpparmadillo: 
   :depends r-sparseinv: ``>=0.1.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genogam

   and update with::

      conda update bioconductor-genogam

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genogam:<tag>

   (see `bioconductor-genogam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genogam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genogam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genogam
   :alt:   (downloads)
.. |docker_bioconductor-genogam| image:: https://quay.io/repository/biocontainers/bioconductor-genogam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genogam
.. _`bioconductor-genogam/tags`: https://quay.io/repository/biocontainers/bioconductor-genogam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genogam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genogam/README.html