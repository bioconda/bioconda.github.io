:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylumi'
.. highlight: bash

bioconductor-methylumi
======================

.. conda:recipe:: bioconductor-methylumi
   :replaces_section_title:

   This package provides classes for holding and manipulating Illumina methylation data.  Based on eSet\, it can contain MIAME information\, sample information\, feature information\, and multiple matrices of data.  An \"intelligent\" import function\, methylumiR can read the Illumina text files and create a MethyLumiSet. methylumIDAT can directly read raw IDAT files from HumanMethylation27 and HumanMethylation450 microarrays. Normalization\, background correction\, and quality control features for GoldenGate\, Infinium\, and Infinium HD arrays are also included.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/methylumi.html
   :license: GPL-2
   :recipe: /`bioconductor-methylumi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylumi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylumi/meta.yaml>`_
   :links: biotools: :biotools:`methylumi`, doi: :doi:`10.1186/1471-2164-14-293`

   


.. conda:package:: bioconductor-methylumi

   |downloads_bioconductor-methylumi| |docker_bioconductor-methylumi|

   :versions: 2.28.0-0, 2.26.0-0, 2.24.1-0, 2.22.0-1, 2.22.0-0
   
   :depends bioconductor-annotate: >=1.60.0,<1.61.0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-fdb.infiniummethylation.hg19: >=2.2.0,<2.3.0
   
   :depends bioconductor-genefilter: >=1.64.0,<1.65.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-illuminaio: >=0.24.0,<0.25.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-minfi: >=1.28.0,<1.29.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :depends r-lattice: 
   
   :depends r-matrixstats: 
   
   :depends r-reshape2: 
   
   :depends r-scales: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylumi

   and update with::

      conda update bioconductor-methylumi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-methylumi:<tag>

   (see `bioconductor-methylumi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylumi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylumi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-methylumi| image:: https://quay.io/repository/biocontainers/bioconductor-methylumi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylumi
.. _`bioconductor-methylumi/tags`: https://quay.io/repository/biocontainers/bioconductor-methylumi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylumi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylumi/README.html