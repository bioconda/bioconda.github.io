.. title:: Package Recipe 'bioconductor-hiccompare'
.. highlight: bash


bioconductor-hiccompare
=======================

.. conda:recipe:: bioconductor-hiccompare
   :replaces_section_title:

   HiCcompare provides functions for joint normalization and difference detection in multiple Hi\-C datasets. HiCcompare operates on processed Hi\-C data in the form of chromosome\-specific chromatin interaction matrices. It accepts three\-column tab\-separated text files storing chromatin interaction matrices in a sparse matrix format which are available from several sources. HiCcompare is designed to give the user the ability to perform a comparative analysis on the 3\-Dimensional structure of the genomes of cells in different biological states.\`HiCcompare\` differs from other packages that attempt to compare Hi\-C data in that it works on processed data in chromatin interaction matrix format instead of pre\-processed sequencing data. In addition\, \`HiCcompare\` provides a non\-parametric method for the joint normalization and removal of biases between two Hi\-C datasets for the purpose of comparative analysis. \`HiCcompare\` also provides a simple yet robust method for detecting differences between Hi\-C datasets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/HiCcompare.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hiccompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiccompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiccompare/meta.yaml>`_
   :links: biotools: :biotools:`HiCcompare`, doi: :doi:`10.1186/s12859-018-2288-x`

   


.. conda:package:: bioconductor-hiccompare

   |downloads_bioconductor-hiccompare| |docker_bioconductor-hiccompare|

   :versions: 1.4.0, 1.2.0, 1.0.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-interactionset` >=1.10.0,<1.11.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-qdnaseq` >=1.18.0,<1.19.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-gtools`  :conda:package:`r-kernsmooth`  :conda:package:`r-mgcv`  :conda:package:`r-pheatmap`  

   :required~by: |required_by_bioconductor-hiccompare|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hiccompare

   and update with::

      conda update bioconductor-hiccompare

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hiccompare


.. |required_by_bioconductor-hiccompare| conda:required_by:: bioconductor-hiccompare
.. |downloads_bioconductor-hiccompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hiccompare.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hiccompare| image:: https://quay.io/repository/biocontainers/bioconductor-hiccompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hiccompare







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hiccompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hiccompare/README.html

