:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-busparse'
.. highlight: bash

bioconductor-busparse
=====================

.. conda:recipe:: bioconductor-busparse
   :replaces_section_title:
   :noindex:

   kallisto \| bustools R utilities

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BUSpaRse.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-busparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-busparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-busparse/meta.yaml>`_

   The kallisto \| bustools pipeline is a fast and modular set of tools to convert single cell RNA\-seq reads in fastq files into gene count or transcript compatibility counts \(TCC\) matrices for downstream analysis. Central to this pipeline is the barcode\, UMI\, and set \(BUS\) file format. This package serves the following purposes\: First\, this package allows users to manipulate BUS format files as data frames in R and then convert them into gene count or TCC matrices. Furthermore\, since R and Rcpp code is easier to handle than pure C\+\+ code\, users are encouraged to tweak the source code of this package to experiment with new uses of BUS format and different ways to convert the BUS file into gene count matrix. Second\, this package can conveniently generate files required to generate gene count matrices for spliced and unspliced transcripts for RNA velocity. Here biotypes can be filtered and scaffolds and haplotypes can be removed\, and the filtered transcriptome can be extracted and written to disk. Third\, this package implements utility functions to get transcripts and associated genes required to convert BUS files to gene count matrices\, to write the transcript to gene information in the format required by bustools\, and to read output of bustools into R as sparses matrices.


.. conda:package:: bioconductor-busparse

   |downloads_bioconductor-busparse| |docker_bioconductor-busparse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.5.3-0</code>,  <code>1.4.2-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.5.3-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationdbi: ``>=1.64.1,<1.65.0a0``
   :depends bioconductor-annotationfilter: ``>=1.26.0,<1.27.0``
   :depends bioconductor-annotationfilter: ``>=1.26.0,<1.27.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0a0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-ensembldb: ``>=2.26.0,<2.27.0``
   :depends bioconductor-ensembldb: ``>=2.26.0,<2.27.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-plyranges: ``>=1.22.0,<1.23.0``
   :depends bioconductor-plyranges: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-busparse

   and update with::

      mamba update bioconductor-busparse

  To create a new environment, run::

      mamba create --name myenvname bioconductor-busparse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-busparse:<tag>

   (see `bioconductor-busparse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-busparse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-busparse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-busparse
   :alt:   (downloads)
.. |docker_bioconductor-busparse| image:: https://quay.io/repository/biocontainers/bioconductor-busparse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-busparse
.. _`bioconductor-busparse/tags`: https://quay.io/repository/biocontainers/bioconductor-busparse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-busparse";
        var versions = ["1.16.0","1.14.1","1.12.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-busparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-busparse/README.html