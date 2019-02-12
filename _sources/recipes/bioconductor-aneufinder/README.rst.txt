.. title:: Package Recipe 'bioconductor-aneufinder'
.. highlight: bash


bioconductor-aneufinder
=======================

.. conda:recipe:: bioconductor-aneufinder
   :replaces_section_title:

   AneuFinder implements functions for copy\-number detection\, breakpoint detection\, and karyotype and heterogeneity analysis in single\-cell whole genome sequencing and strand\-seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/AneuFinder.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-aneufinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aneufinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aneufinder/meta.yaml>`_

   


.. conda:package:: bioconductor-aneufinder

   |downloads_bioconductor-aneufinder| |docker_bioconductor-aneufinder|

   :versions: 1.10.1

   :depends: :conda:package:`bioconductor-aneufinderdata` >=1.10.0,<1.11.0 :conda:package:`bioconductor-bamsignals` >=1.14.0,<1.15.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cowplot`  :conda:package:`r-doparallel`  :conda:package:`r-ecp`  :conda:package:`r-foreach`  :conda:package:`r-ggdendro`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-mclust`  :conda:package:`r-reordercluster`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-aneufinder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aneufinder

   and update with::

      conda update bioconductor-aneufinder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-aneufinder


.. |required_by_bioconductor-aneufinder| conda:required_by:: bioconductor-aneufinder
.. |downloads_bioconductor-aneufinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aneufinder.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-aneufinder| image:: https://quay.io/repository/biocontainers/bioconductor-aneufinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aneufinder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aneufinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aneufinder/README.html

