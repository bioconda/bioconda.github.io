:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-esatac'
.. highlight: bash

bioconductor-esatac
===================

.. conda:recipe:: bioconductor-esatac
   :replaces_section_title:
   :noindex:

   An Easy\-to\-use Systematic pipeline for ATACseq data analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/esATAC.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-esatac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-esatac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-esatac/meta.yaml>`_

   This package provides a framework and complete preset pipeline for quantification and analysis of ATAC\-seq Reads. It covers raw sequencing reads preprocessing \(FASTQ files\)\, reads alignment \(Rbowtie2\)\, aligned reads file operations \(SAM\, BAM\, and BED files\)\, peak calling \(F\-seq\)\, genome annotations \(Motif\, GO\, SNP analysis\) and quality control report. The package is managed by dataflow graph. It is easy for user to pass variables seamlessly between processes and understand the workflow. Users can process FASTQ files through end\-to\-end preset pipeline which produces a pretty HTML report for quality control and preliminary statistical results\, or customize workflow starting from any intermediate stages with esATAC functions easily and flexibly.


.. conda:package:: bioconductor-esatac

   |downloads_bioconductor-esatac| |docker_bioconductor-esatac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.6.1-0``,  ``1.4.3-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-chipseeker: ``>=1.34.0,<1.35.0``
   :depends bioconductor-clusterprofiler: ``>=4.6.0,<4.7.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-jaspar2018: ``>=1.1.0,<1.2.0``
   :depends bioconductor-motifmatchr: ``>=1.20.0,<1.21.0``
   :depends bioconductor-pipeframe: ``>=1.14.0,<1.15.0``
   :depends bioconductor-rbowtie2: ``>=2.4.0,<2.5.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-shortread: ``>=1.56.0,<1.57.0``
   :depends bioconductor-tfbstools: ``>=1.36.0,<1.37.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-biocmanager: 
   :depends r-corrplot: 
   :depends r-digest: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-r.utils: 
   :depends r-rcpp: ``>=0.12.11``
   :depends r-rjava: 
   :depends r-rmarkdown: 
   :depends r-venndiagram: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-esatac

   and update with::

      conda update bioconductor-esatac

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-esatac:<tag>

   (see `bioconductor-esatac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-esatac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-esatac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-esatac
   :alt:   (downloads)
.. |docker_bioconductor-esatac| image:: https://quay.io/repository/biocontainers/bioconductor-esatac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-esatac
.. _`bioconductor-esatac/tags`: https://quay.io/repository/biocontainers/bioconductor-esatac?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-esatac";
        var versions = ["1.20.0","1.20.0","1.16.0","1.16.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-esatac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-esatac/README.html