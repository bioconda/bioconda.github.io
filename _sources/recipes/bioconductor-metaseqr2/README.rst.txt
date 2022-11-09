:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaseqr2'
.. highlight: bash

bioconductor-metaseqr2
======================

.. conda:recipe:: bioconductor-metaseqr2
   :replaces_section_title:
   :noindex:

   An R package for the analysis and result reporting of RNA\-Seq data by combining multiple statistical algorithms

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/metaseqR2.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-metaseqr2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseqr2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseqr2/meta.yaml>`_

   Provides an interface to several normalization and statistical testing packages for RNA\-Seq gene expression data. Additionally\, it creates several diagnostic plots\, performs meta\-analysis by combinining the results of several statistical tests and reports the results in an interactive way.


.. conda:package:: bioconductor-metaseqr2

   |downloads_bioconductor-metaseqr2| |docker_bioconductor-metaseqr2|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.11-0``

      

   
   :depends bioconductor-absseq: ``>=1.52.0,<1.53.0``
   :depends bioconductor-bayseq: ``>=2.31.0,<2.32.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biomart: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-deseq2: ``>=1.38.0,<1.39.0``
   :depends bioconductor-dss: ``>=2.46.0,<2.47.0``
   :depends bioconductor-edaseq: ``>=2.32.0,<2.33.0``
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends bioconductor-genefilter: ``>=1.80.0,<1.81.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-qvalue: ``>=2.30.0,<2.31.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-survcomp: ``>=1.48.0,<1.49.0``
   :depends bioconductor-vsn: ``>=3.66.0,<3.67.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
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


.. raw:: html

    <script>
        var package = "bioconductor-metaseqr2";
        var versions = ["1.10.0","1.6.1","1.6.1","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaseqr2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaseqr2/README.html