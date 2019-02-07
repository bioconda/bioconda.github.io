.. title:: Package Recipe 'bioconductor-genesis'
.. highlight: bash


bioconductor-genesis
====================

.. conda:recipe:: bioconductor-genesis
   :replaces_section_title:

   The GENESIS package provides methodology for estimating\, inferring\, and accounting for population and pedigree structure in genetic analyses.  The current implementation provides functions to perform PC\-AiR \(Conomos et al.\, 2015\, Gen Epi\) and PC\-Relate \(Conomos et al.\, 2016\, AJHG\). PC\-AiR performs a Principal Components Analysis on genome\-wide SNP data for the detection of population structure in a sample that may contain known or cryptic relatedness. Unlike standard PCA\, PC\-AiR accounts for relatedness in the sample to provide accurate ancestry inference that is not confounded by family structure. PC\-Relate uses ancestry representative principal components to adjust for population structure\/ancestry and accurately estimate measures of recent genetic relatedness such as kinship coefficients\, IBD sharing probabilities\, and inbreeding coefficients. Additionally\, functions are provided to perform efficient variance component estimation and mixed model association testing for both quantitative and binary phenotypes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GENESIS.html
   :license: GPL-3
   :recipe: /`bioconductor-genesis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genesis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genesis/meta.yaml>`_

   


.. conda:package:: bioconductor-genesis

   |downloads_bioconductor-genesis| |docker_bioconductor-genesis|

   :versions: 2.12.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-gdsfmt` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gwastools` >=1.28.0,<1.29.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-seqarray` >=1.22.0,<1.23.0 :conda:package:`bioconductor-seqvartools` >=1.20.0,<1.21.0 :conda:package:`bioconductor-snprelate` >=1.16.0,<1.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-foreach`  :conda:package:`r-igraph`  :conda:package:`r-matrix`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-genesis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genesis

   and update with::

      conda update bioconductor-genesis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genesis


.. |required_by_bioconductor-genesis| conda:required_by:: bioconductor-genesis
.. |downloads_bioconductor-genesis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genesis.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genesis| image:: https://quay.io/repository/biocontainers/bioconductor-genesis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genesis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genesis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genesis/README.html

