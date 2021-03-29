:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaseqr2'
.. highlight: bash

bioconductor-metaseqr2
======================

.. conda:recipe:: bioconductor-metaseqr2
   :replaces_section_title:
   :noindex:

   An R package for the analysis and result reporting of RNA\-Seq data by combining multiple statistical algorithms

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/metaseqR2.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-metaseqr2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseqr2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseqr2/meta.yaml>`_

   Provides an interface to several normalization and statistical testing packages for RNA\-Seq gene expression data. Additionally\, it creates several diagnostic plots\, performs meta\-analysis by combinining the results of several statistical tests and reports the results in an interactive way.


.. conda:package:: bioconductor-metaseqr2

   |downloads_bioconductor-metaseqr2| |docker_bioconductor-metaseqr2|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.11-0``

      

   
   :depends bioconductor-absseq: ``>=1.44.0,<1.45.0``
   :depends bioconductor-bayseq: ``>=2.24.0,<2.25.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-dss: ``>=2.38.0,<2.39.0``
   :depends bioconductor-edaseq: ``>=2.24.0,<2.25.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-genefilter: ``>=1.72.0,<1.73.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-qvalue: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-survcomp: ``>=1.40.0,<1.41.0``
   :depends bioconductor-vsn: ``>=3.58.0,<3.59.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-corrplot: 
   :depends r-dt: 
   :depends r-gplots: 
   :depends r-harmonicmeanp: 
   :depends r-heatmaply: 
   :depends r-htmltools: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-lattice: 
   :depends r-locfit: 
   :depends r-log4r: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-nbpseq: 
   :depends r-pander: 
   :depends r-rmarkdown: 
   :depends r-rmdformats: 
   :depends r-rsqlite: 
   :depends r-stringr: 
   :depends r-venndiagram: 
   :depends r-yaml: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metaseqr2

   and update with::

      conda update bioconductor-metaseqr2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metaseqr2:<tag>

   (see `bioconductor-metaseqr2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metaseqr2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaseqr2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metaseqr2
   :alt:   (downloads)
.. |docker_bioconductor-metaseqr2| image:: https://quay.io/repository/biocontainers/bioconductor-metaseqr2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaseqr2
.. _`bioconductor-metaseqr2/tags`: https://quay.io/repository/biocontainers/bioconductor-metaseqr2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaseqr2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaseqr2/README.html