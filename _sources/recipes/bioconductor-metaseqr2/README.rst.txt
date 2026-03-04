:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaseqr2'
.. highlight: bash

bioconductor-metaseqr2
======================

.. conda:recipe:: bioconductor-metaseqr2
   :replaces_section_title:
   :noindex:

   An R package for the analysis and result reporting of RNA\-Seq data by combining multiple statistical algorithms

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/metaseqR2.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-metaseqr2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseqr2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseqr2/meta.yaml>`_

   Provides an interface to several normalization and statistical testing packages for RNA\-Seq gene expression data. Additionally\, it creates several diagnostic plots\, performs meta\-analysis by combinining the results of several statistical tests and reports the results in an interactive way.


.. conda:package:: bioconductor-metaseqr2

   |downloads_bioconductor-metaseqr2| |docker_bioconductor-metaseqr2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.1-1</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-absseq: ``>=1.64.0,<1.65.0``
   :depends bioconductor-absseq: ``>=1.64.0,<1.65.0a0``
   :depends bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biomart: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends bioconductor-deseq2: ``>=1.50.2,<1.51.0a0``
   :depends bioconductor-dss: ``>=2.58.0,<2.59.0``
   :depends bioconductor-dss: ``>=2.58.0,<2.59.0a0``
   :depends bioconductor-edaseq: ``>=2.44.0,<2.45.0``
   :depends bioconductor-edaseq: ``>=2.44.0,<2.45.0a0``
   :depends bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends bioconductor-edger: ``>=4.8.2,<4.9.0a0``
   :depends bioconductor-genefilter: ``>=1.92.0,<1.93.0``
   :depends bioconductor-genefilter: ``>=1.92.0,<1.93.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.46.2,<1.47.0a0``
   :depends bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicalignments: ``>=1.46.0,<1.47.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends bioconductor-qvalue: ``>=2.42.0,<2.43.0a0``
   :depends bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.26.0,<2.27.0a0``
   :depends bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-survcomp: ``>=1.60.0,<1.61.0``
   :depends bioconductor-survcomp: ``>=1.60.0,<1.61.0a0``
   :depends bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends bioconductor-txdbmaker: ``>=1.6.2,<1.7.0a0``
   :depends bioconductor-vsn: ``>=3.78.0,<3.79.0``
   :depends bioconductor-vsn: ``>=3.78.1,<3.79.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=14``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
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

      mamba install bioconductor-metaseqr2

   and update with::

      mamba update bioconductor-metaseqr2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metaseqr2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.22.0","1.18.0","1.10.0","1.10.0","1.6.1"];
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