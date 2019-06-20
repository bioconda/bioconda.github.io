:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dada2'
.. highlight: bash

bioconductor-dada2
==================

.. conda:recipe:: bioconductor-dada2
   :replaces_section_title:

   The dada2 package infers exact amplicon sequence variants \(ASVs\) from high\-throughput amplicon sequencing data\, replacing the coarser and less accurate OTU clustering approach. The dada2 pipeline takes as input demultiplexed fastq files\, and outputs the sequence variants and their sample\-wise abundances after removing substitution and chimera errors. Taxonomic classification is available via a native implementation of the RDP naive Bayesian classifier\, and species\-level assignment to 16S rRNA gene fragments by exact matching.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/dada2.html
   :license: LGPL-3
   :recipe: /`bioconductor-dada2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dada2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dada2/meta.yaml>`_
   :links: biotools: :biotools:`dada2`

   


.. conda:package:: bioconductor-dada2

   |downloads_bioconductor-dada2| |docker_bioconductor-dada2|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-1, 1.4-0, 1.4.0-0, 1.2-0, 1.0.3-0, 0.99.10-0, 0.10.4-0, 0.10.3-0, 0.10.1-0, 0.10.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-shortread: >=1.40.0,<1.41.0
   :depends bioconductor-xvector: >=0.22.0,<0.23.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: >=1.9.4
   :depends r-ggplot2: >=2.1.0
   :depends r-rcpp: >=0.11.2
   :depends r-rcppparallel: >=4.3.0
   :depends r-reshape2: >=1.4.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dada2

   and update with::

      conda update bioconductor-dada2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dada2:<tag>

   (see `bioconductor-dada2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dada2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dada2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dada2
   :alt:   (downloads)
.. |docker_bioconductor-dada2| image:: https://quay.io/repository/biocontainers/bioconductor-dada2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dada2
.. _`bioconductor-dada2/tags`: https://quay.io/repository/biocontainers/bioconductor-dada2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dada2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dada2/README.html