:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-busparse'
.. highlight: bash

bioconductor-busparse
=====================

.. conda:recipe:: bioconductor-busparse
   :replaces_section_title:

   kallisto \| bustools R utilities

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/BUSpaRse.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-busparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-busparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-busparse/meta.yaml>`_

   The kallisto \| bustools pipeline is a fast and modular set of tools to convert single cell RNA\-seq reads in fastq files into gene count or transcript compatibility counts \(TCC\) matrices for downstream analysis. Central to this pipeline is the barcode\, UMI\, and set \(BUS\) file format. This package serves the following purposes\: First\, this package allows users to manipulate BUS format files as data frames in R and then convert them into gene count or TCC matrices. Furthermore\, since R and Rcpp code is easier to handle than pure C\+\+ code\, users are encouraged to tweak the source code of this package to experiment with new uses of BUS format and different ways to convert the BUS file into gene count matrix. Second\, this package can conveniently generate files required to generate gene count matrices for spliced and unspliced transcripts for RNA velocity. Third\, this package implements utility functions to get transcripts and associated genes required to convert BUS files to gene count matrices\, to write the transcript to gene information in the format required by bustools\, and to read output of bustools into R as sparses matrices.


.. conda:package:: bioconductor-busparse

   |downloads_bioconductor-busparse| |docker_bioconductor-busparse|

   :versions: 1.2.1-0, 1.0.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-annotationfilter: >=1.12.0,<1.13.0
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-bsgenome: >=1.56.0,<1.57.0
   :depends bioconductor-ensembldb: >=2.12.0,<2.13.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicfeatures: >=1.40.0,<1.41.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-plyranges: >=1.8.0,<1.9.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-bh: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppprogress: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-zeallot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-busparse

   and update with::

      conda update bioconductor-busparse

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-busparse:<tag>

   (see `bioconductor-busparse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-busparse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-busparse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-busparse
   :alt:   (downloads)
.. |docker_bioconductor-busparse| image:: https://quay.io/repository/biocontainers/bioconductor-busparse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-busparse
.. _`bioconductor-busparse/tags`: https://quay.io/repository/biocontainers/bioconductor-busparse?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-busparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-busparse/README.html