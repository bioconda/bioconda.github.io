:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epigrahmm'
.. highlight: bash

bioconductor-epigrahmm
======================

.. conda:recipe:: bioconductor-epigrahmm
   :replaces_section_title:
   :noindex:

   Epigenomic R\-based analysis with hidden Markov models

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/epigraHMM.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epigrahmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epigrahmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epigrahmm/meta.yaml>`_

   epigraHMM provides a set of tools for the analysis of epigenomic data based on hidden Markov Models. It contains two separate peak callers\, one for consensus peaks from biological or technical replicates\, and one for differential peaks from multi\-replicate multi\-condition experiments. In differential peak calling\, epigraHMM provides window\-specific posterior probabilities associated with every possible combinatorial pattern of read enrichment across conditions.


.. conda:package:: bioconductor-epigrahmm

   |downloads_bioconductor-epigrahmm| |docker_bioconductor-epigrahmm|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-bamsignals: ``>=1.30.0,<1.31.0``
   :depends bioconductor-csaw: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-greylistchip: ``>=1.30.0,<1.31.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-rhdf5: ``>=2.42.0,<2.43.0``
   :depends bioconductor-rhdf5lib: ``>=1.20.0,<1.21.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-pheatmap: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epigrahmm

   and update with::

      conda update bioconductor-epigrahmm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epigrahmm:<tag>

   (see `bioconductor-epigrahmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epigrahmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epigrahmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epigrahmm
   :alt:   (downloads)
.. |docker_bioconductor-epigrahmm| image:: https://quay.io/repository/biocontainers/bioconductor-epigrahmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epigrahmm
.. _`bioconductor-epigrahmm/tags`: https://quay.io/repository/biocontainers/bioconductor-epigrahmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epigrahmm";
        var versions = ["1.6.0","1.2.2","1.2.2","1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epigrahmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epigrahmm/README.html