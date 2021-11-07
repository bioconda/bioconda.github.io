:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cn.mops'
.. highlight: bash

bioconductor-cn.mops
====================

.. conda:recipe:: bioconductor-cn.mops
   :replaces_section_title:
   :noindex:

   cn.mops \- Mixture of Poissons for CNV detection in NGS data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/cn.mops.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-cn.mops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.mops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.mops/meta.yaml>`_
   :links: biotools: :biotools:`cn.mops`

   cn.mops \(Copy Number estimation by a Mixture Of PoissonS\) is a data processing pipeline for copy number variations and aberrations \(CNVs and CNAs\) from next generation sequencing \(NGS\) data. The package supplies functions to convert BAM files into read count matrices or genomic ranges objects\, which are the input objects for cn.mops. cn.mops models the depths of coverage across samples at each genomic position. Therefore\, it does not suffer from read count biases along chromosomes. Using a Bayesian approach\, cn.mops decomposes read variations across samples into integer copy numbers and noise by its mixture components and Poisson distributions\, respectively. cn.mops guarantees a low FDR because wrong detections are indicated by high noise and filtered out. cn.mops is very fast and written in C\+\+.


.. conda:package:: bioconductor-cn.mops

   |downloads_bioconductor-cn.mops| |docker_bioconductor-cn.mops|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-exomecopy: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cn.mops

   and update with::

      conda update bioconductor-cn.mops

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cn.mops:<tag>

   (see `bioconductor-cn.mops/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cn.mops| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cn.mops.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cn.mops
   :alt:   (downloads)
.. |docker_bioconductor-cn.mops| image:: https://quay.io/repository/biocontainers/bioconductor-cn.mops/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cn.mops
.. _`bioconductor-cn.mops/tags`: https://quay.io/repository/biocontainers/bioconductor-cn.mops?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cn.mops";
        var versions = ["1.40.0","1.38.0","1.36.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cn.mops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cn.mops/README.html