.. title:: Package Recipe 'bioconductor-macpet'
.. highlight: bash


bioconductor-macpet
===================

.. conda:recipe:: bioconductor-macpet
   :replaces_section_title:

   The MACPET package can be used for complete interaction analysis for ChIA\-PET data. MACPET reads ChIA\-PET data in BAM or SAM format and separates the data into Self\-ligated\, Intra\- and Inter\-chromosomal PETs. Furthermore\, MACPET breaks the genome into regions and applies 2D mixture models for identifying candidate peaks\/binding sites using skewed generalized students\-t distributions \(SGT\). It then uses a local poisson model for finding significant binding sites. Finally it runs an additive interaction\-analysis model for calling for significant interactions between those peaks. MACPET is mainly written in C\+\+\, and it also supports the BiocParallel package.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MACPET.html
   :license: GPL-3
   :recipe: /`bioconductor-macpet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macpet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macpet/meta.yaml>`_

   


.. conda:package:: bioconductor-macpet

   |downloads_bioconductor-macpet| |docker_bioconductor-macpet|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-geoquery` >=2.50.0,<2.51.0 :conda:package:`bioconductor-interactionset` >=1.10.0,<1.11.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rbowtie` >=1.22.0,<1.23.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bh` >=1.66.0.1 :conda:package:`r-bigmemory` >=4.5.33 :conda:package:`r-futile.logger` >=1.4.3 :conda:package:`r-gtools` >=3.8.1 :conda:package:`r-intervals` >=0.15.1 :conda:package:`r-knitr` >=1.20 :conda:package:`r-plyr` >=1.8.4 :conda:package:`r-rbamtools` >=2.16.11 :conda:package:`r-rcpp` >=0.12.17 

   :required~by: |required_by_bioconductor-macpet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-macpet

   and update with::

      conda update bioconductor-macpet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-macpet


.. |required_by_bioconductor-macpet| conda:required_by:: bioconductor-macpet
.. |downloads_bioconductor-macpet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macpet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-macpet| image:: https://quay.io/repository/biocontainers/bioconductor-macpet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macpet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macpet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macpet/README.html

