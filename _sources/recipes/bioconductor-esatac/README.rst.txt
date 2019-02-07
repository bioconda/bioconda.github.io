.. title:: Package Recipe 'bioconductor-esatac'
.. highlight: bash


bioconductor-esatac
===================

.. conda:recipe:: bioconductor-esatac
   :replaces_section_title:

   This package provides a framework and complete preset pipeline for quantification and analysis of ATAC\-seq Reads. It covers raw sequencing reads preprocessing \(FASTQ files\)\, reads alignment \(Rbowtie2\)\, aligned reads file operations \(SAM\, BAM\, and BED files\)\, peak calling \(F\-seq\)\, genome annotations \(Motif\, GO\, SNP analysis\) and quality control report. The package is managed by dataflow graph. It is easy for user to pass variables seamlessly between processes and understand the workflow. Users can process FASTQ files through end\-to\-end preset pipeline which produces a pretty HTML report for quality control and preliminary statistical results\, or customize workflow starting from any intermediate stages with esATAC functions easily and flexibly.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/esATAC.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-esatac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-esatac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-esatac/meta.yaml>`_

   


.. conda:package:: bioconductor-esatac

   |downloads_bioconductor-esatac| |docker_bioconductor-esatac|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-chipseeker` >=1.18.0,<1.19.0 :conda:package:`bioconductor-clusterprofiler` >=3.10.0,<3.11.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-jaspar2016` >=1.10.0,<1.11.0 :conda:package:`bioconductor-motifmatchr` >=1.4.0,<1.5.0 :conda:package:`bioconductor-rbowtie2` >=1.4.0,<1.5.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`bioconductor-tfbstools` >=1.20.0,<1.21.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  :conda:package:`r-corrplot`  :conda:package:`r-diagrammer`  :conda:package:`r-digest`  :conda:package:`r-ggplot2`  :conda:package:`r-igraph`  :conda:package:`r-knitr`  :conda:package:`r-magrittr`  :conda:package:`r-r.utils`  :conda:package:`r-rcpp` >=0.12.11 :conda:package:`r-rjava`  :conda:package:`r-rmarkdown`  :conda:package:`r-venndiagram`  

   :required~by: |required_by_bioconductor-esatac|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-esatac

   and update with::

      conda update bioconductor-esatac

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-esatac


.. |required_by_bioconductor-esatac| conda:required_by:: bioconductor-esatac
.. |downloads_bioconductor-esatac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-esatac.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-esatac| image:: https://quay.io/repository/biocontainers/bioconductor-esatac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-esatac







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-esatac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-esatac/README.html

