:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-esatac'
.. highlight: bash

bioconductor-esatac
===================

.. conda:recipe:: bioconductor-esatac
   :replaces_section_title:
   :noindex:

   An Easy\-to\-use Systematic pipeline for ATACseq data analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/esATAC.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-esatac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-esatac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-esatac/meta.yaml>`_

   This package provides a framework and complete preset pipeline for quantification and analysis of ATAC\-seq Reads. It covers raw sequencing reads preprocessing \(FASTQ files\)\, reads alignment \(Rbowtie2\)\, aligned reads file operations \(SAM\, BAM\, and BED files\)\, peak calling \(F\-seq\)\, genome annotations \(Motif\, GO\, SNP analysis\) and quality control report. The package is managed by dataflow graph. It is easy for user to pass variables seamlessly between processes and understand the workflow. Users can process FASTQ files through end\-to\-end preset pipeline which produces a pretty HTML report for quality control and preliminary statistical results\, or customize workflow starting from any intermediate stages with esATAC functions easily and flexibly.


.. conda:package:: bioconductor-esatac

   |downloads_bioconductor-esatac| |docker_bioconductor-esatac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.6.1-0``,  ``1.4.3-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationdbi: ``>=1.64.1,<1.65.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-chipseeker: ``>=1.38.0,<1.39.0``
   :depends bioconductor-chipseeker: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-jaspar2018: ``>=1.1.0,<1.2.0``
   :depends bioconductor-jaspar2018: ``>=1.1.1,<1.2.0a0``
   :depends bioconductor-motifmatchr: ``>=1.24.0,<1.25.0``
   :depends bioconductor-motifmatchr: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-pipeframe: ``>=1.18.0,<1.19.0``
   :depends bioconductor-pipeframe: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-rbowtie2: ``>=2.8.0,<2.9.0``
   :depends bioconductor-rbowtie2: ``>=2.8.0,<2.9.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-shortread: ``>=1.60.0,<1.61.0``
   :depends bioconductor-shortread: ``>=1.60.0,<1.61.0a0``
   :depends bioconductor-tfbstools: ``>=1.40.0,<1.41.0``
   :depends bioconductor-tfbstools: ``>=1.40.0,<1.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=14``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-esatac

   and update with::

      mamba update bioconductor-esatac

  To create a new environment, run::

      mamba create --name myenvname bioconductor-esatac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.24.0","1.22.0","1.20.0","1.20.0","1.16.0"];
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