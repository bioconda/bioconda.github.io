:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylkit'
.. highlight: bash

bioconductor-methylkit
======================

.. conda:recipe:: bioconductor-methylkit
   :replaces_section_title:
   :noindex:

   DNA methylation analysis from high\-throughput bisulfite sequencing results

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/methylKit.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methylkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylkit/meta.yaml>`_
   :links: biotools: :biotools:`methylkit`

   methylKit is an R package for DNA methylation analysis and annotation from high\-throughput bisulfite sequencing. The package is designed to deal with sequencing data from RRBS and its variants\, but also target\-capture methods and whole genome bisulfite sequencing. It also has functions to analyze base\-pair resolution 5hmC data from experimental protocols such as oxBS\-Seq and TAB\-Seq. Methylation calling can be performed directly from Bismark aligned BAM files.


.. conda:package:: bioconductor-methylkit

   |downloads_bioconductor-methylkit| |docker_bioconductor-methylkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.1-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.6.3-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.4.0-0``,  ``1.2.4-0``,  ``1.0.0-0``,  ``0.99.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-fastseg: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-qvalue: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rhtslib: ``>=1.24.0,<1.25.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-zlibbioc: ``>=1.38.0,<1.39.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylkit

   and update with::

      conda update bioconductor-methylkit

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylkit:<tag>

   (see `bioconductor-methylkit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylkit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylkit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylkit
   :alt:   (downloads)
.. |docker_bioconductor-methylkit| image:: https://quay.io/repository/biocontainers/bioconductor-methylkit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylkit
.. _`bioconductor-methylkit/tags`: https://quay.io/repository/biocontainers/bioconductor-methylkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylkit/README.html