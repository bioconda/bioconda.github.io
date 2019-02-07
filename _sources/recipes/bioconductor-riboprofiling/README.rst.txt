.. title:: Package Recipe 'bioconductor-riboprofiling'
.. highlight: bash


bioconductor-riboprofiling
==========================

.. conda:recipe:: bioconductor-riboprofiling
   :replaces_section_title:

   Starting with a BAM file\, this package provides the necessary functions for quality assessment\, read start position recalibration\, the counting of reads on CDS\, 3\'UTR\, and 5\'UTR\, plotting of count data\: pairs\, log fold\-change\, codon frequency and coverage assessment\, principal component analysis on codon coverage.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RiboProfiling.html
   :license: GPL-3
   :recipe: /`bioconductor-riboprofiling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-riboprofiling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-riboprofiling/meta.yaml>`_
   :links: biotools: :biotools:`riboprofiling`, doi: :doi:`10.12688/f1000research.8964.1`

   


.. conda:package:: bioconductor-riboprofiling

   |downloads_bioconductor-riboprofiling| |docker_bioconductor-riboprofiling|

   :versions: 1.12.0, 1.10.0, 1.7.1, 1.6.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-ggbio` >=1.30.0,<1.31.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-plyr`  :conda:package:`r-reshape2`  :conda:package:`r-sqldf`  

   :required~by: |required_by_bioconductor-riboprofiling|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-riboprofiling

   and update with::

      conda update bioconductor-riboprofiling

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-riboprofiling


.. |required_by_bioconductor-riboprofiling| conda:required_by:: bioconductor-riboprofiling
.. |downloads_bioconductor-riboprofiling| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-riboprofiling.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-riboprofiling| image:: https://quay.io/repository/biocontainers/bioconductor-riboprofiling/status
   :target: https://quay.io/repository/biocontainers/bioconductor-riboprofiling







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-riboprofiling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-riboprofiling/README.html

