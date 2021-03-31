:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanomethviz'
.. highlight: bash

bioconductor-nanomethviz
========================

.. conda:recipe:: bioconductor-nanomethviz
   :replaces_section_title:
   :noindex:

   Visualise methlation data from Oxford Nanopore sequencing

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/NanoMethViz.html
   :license: Apache License (>= 2.0)
   :recipe: /`bioconductor-nanomethviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanomethviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanomethviz/meta.yaml>`_

   NanoMethViz is a toolkit for visualising methylation data from Oxford Nanopore sequencing. It can be used to explore methylation patterns from reads derived from Oxford Nanopore direct DNA sequencing with methylation called by callers including nanopolish\, f5c and megalodon. The plots in this package allow the visualisation of methylation profiles aggregated over experimental groups and across classes of genomic features.


.. conda:package:: bioconductor-nanomethviz

   |downloads_bioconductor-nanomethviz| |docker_bioconductor-nanomethviz|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-bsseq: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-zlibbioc: ``>=1.36.0,<1.37.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-e1071: 
   :depends r-forcats: 
   :depends r-fs: 
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-glue: 
   :depends r-patchwork: 
   :depends r-purrr: 
   :depends r-rcpp: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-rsqlite: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nanomethviz

   and update with::

      conda update bioconductor-nanomethviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nanomethviz:<tag>

   (see `bioconductor-nanomethviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nanomethviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanomethviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanomethviz
   :alt:   (downloads)
.. |docker_bioconductor-nanomethviz| image:: https://quay.io/repository/biocontainers/bioconductor-nanomethviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanomethviz
.. _`bioconductor-nanomethviz/tags`: https://quay.io/repository/biocontainers/bioconductor-nanomethviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanomethviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanomethviz/README.html