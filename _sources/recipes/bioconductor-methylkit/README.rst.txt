:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylkit'
.. highlight: bash

bioconductor-methylkit
======================

.. conda:recipe:: bioconductor-methylkit
   :replaces_section_title:
   :noindex:

   DNA methylation analysis from high\-throughput bisulfite sequencing results

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/methylKit.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methylkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylkit/meta.yaml>`_
   :links: biotools: :biotools:`methylkit`

   methylKit is an R package for DNA methylation analysis and annotation from high\-throughput bisulfite sequencing. The package is designed to deal with sequencing data from RRBS and its variants\, but also target\-capture methods and whole genome bisulfite sequencing. It also has functions to analyze base\-pair resolution 5hmC data from experimental protocols such as oxBS\-Seq and TAB\-Seq. Methylation calling can be performed directly from Bismark aligned BAM files.


.. conda:package:: bioconductor-methylkit

   |downloads_bioconductor-methylkit| |docker_bioconductor-methylkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.1-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.4.0-0``,  ``1.2.4-0``,  ``1.0.0-0``,  ``0.99.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-fastseg: ``>=1.48.0,<1.49.0``
   :depends bioconductor-fastseg: ``>=1.48.0,<1.49.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0``
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0a0``
   :depends bioconductor-rhtslib: ``>=2.4.0,<2.5.0``
   :depends bioconductor-rhtslib: ``>=2.4.0,<2.5.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.9.6``
   :depends r-emdbook: 
   :depends r-gtools: 
   :depends r-kernsmooth: 
   :depends r-mclust: 
   :depends r-mgcv: 
   :depends r-r.utils: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-methylkit

   and update with::

      mamba update bioconductor-methylkit

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methylkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylkit:<tag>

   (see `bioconductor-methylkit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylkit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylkit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylkit
   :alt:   (downloads)
.. |docker_bioconductor-methylkit| image:: https://quay.io/repository/biocontainers/bioconductor-methylkit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylkit
.. _`bioconductor-methylkit/tags`: https://quay.io/repository/biocontainers/bioconductor-methylkit?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylkit";
        var versions = ["1.28.0","1.26.0","1.24.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylkit/README.html