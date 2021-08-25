:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dada2'
.. highlight: bash

bioconductor-dada2
==================

.. conda:recipe:: bioconductor-dada2
   :replaces_section_title:
   :noindex:

   Accurate\, high\-resolution sample inference from amplicon sequencing data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/dada2.html
   :license: LGPL-2
   :recipe: /`bioconductor-dada2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dada2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dada2/meta.yaml>`_
   :links: biotools: :biotools:`dada2`

   The dada2 package infers exact amplicon sequence variants \(ASVs\) from high\-throughput amplicon sequencing data\, replacing the coarser and less accurate OTU clustering approach. The dada2 pipeline takes as input demultiplexed fastq files\, and outputs the sequence variants and their sample\-wise abundances after removing substitution and chimera errors. Taxonomic classification is available via a native implementation of the RDP naive Bayesian classifier\, and species\-level assignment to 16S rRNA gene fragments by exact matching.


.. conda:package:: bioconductor-dada2

   |downloads_bioconductor-dada2| |docker_bioconductor-dada2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4-0``,  ``1.4.0-0``,  ``1.2-0``,  ``1.0.3-0``,  ``0.99.10-0``,  ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.1-0``,  ``0.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-shortread: ``>=1.50.0,<1.51.0``
   :depends bioconductor-xvector: ``>=0.32.0,<0.33.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-rcpp: ``>=0.12.0``
   :depends r-rcppparallel: ``>=4.3.0``
   :depends r-reshape2: ``>=1.4.1``
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


.. raw:: html

    <script>
        var package = "bioconductor-dada2";
        var versions = ["1.20.0","1.18.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dada2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dada2/README.html