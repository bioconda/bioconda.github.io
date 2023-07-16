:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nxtirfcore'
.. highlight: bash

bioconductor-nxtirfcore
=======================

.. conda:recipe:: bioconductor-nxtirfcore
   :replaces_section_title:
   :noindex:

   Core Engine for NxtIRF\: a User\-Friendly Intron Retention and Alternative Splicing Analysis using the IRFinder Engine

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/NxtIRFcore.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-nxtirfcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nxtirfcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nxtirfcore/meta.yaml>`_

   Interactively analyses Intron Retention and Alternative Splicing Events \(ASE\) in RNA\-seq data. NxtIRF quantifies ASE events in BAM files aligned to the genome using a splice\-aware aligner such as STAR. The core quantitation algorithm relies on the IRFinder\/C\+\+ engine ported via Rcpp for multi\-platform compatibility. In addition\, NxtIRF provides convenient pipelines for downstream analysis and publication\-ready visualisation tools. Note that NxtIRFcore is now replaced by SpliceWiz in Bioconductor 3.16 onwards.


.. conda:package:: bioconductor-nxtirfcore

   |downloads_bioconductor-nxtirfcore| |docker_bioconductor-nxtirfcore|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.22.0,<1.23.0``
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-nxtirfdata: ``>=1.6.0,<1.7.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-zlibbioc: ``>=1.46.0,<1.47.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-fst: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-plotly: 
   :depends r-r.utils: 
   :depends r-rcpp: ``>=1.0.5``
   :depends r-rcppprogress: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nxtirfcore

   and update with::

      conda update bioconductor-nxtirfcore

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nxtirfcore:<tag>

   (see `bioconductor-nxtirfcore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nxtirfcore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nxtirfcore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nxtirfcore
   :alt:   (downloads)
.. |docker_bioconductor-nxtirfcore| image:: https://quay.io/repository/biocontainers/bioconductor-nxtirfcore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nxtirfcore
.. _`bioconductor-nxtirfcore/tags`: https://quay.io/repository/biocontainers/bioconductor-nxtirfcore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nxtirfcore";
        var versions = ["1.6.0","1.4.0","1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nxtirfcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nxtirfcore/README.html