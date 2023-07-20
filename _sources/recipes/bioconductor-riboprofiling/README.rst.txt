:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-riboprofiling'
.. highlight: bash

bioconductor-riboprofiling
==========================

.. conda:recipe:: bioconductor-riboprofiling
   :replaces_section_title:
   :noindex:

   Ribosome Profiling Data Analysis\: from BAM to Data Representation and Interpretation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RiboProfiling.html
   :license: GPL-3
   :recipe: /`bioconductor-riboprofiling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-riboprofiling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-riboprofiling/meta.yaml>`_
   :links: biotools: :biotools:`riboprofiling`, doi: :doi:`10.12688/f1000research.8964.1`

   Starting with a BAM file\, this package provides the necessary functions for quality assessment\, read start position recalibration\, the counting of reads on CDS\, 3\'UTR\, and 5\'UTR\, plotting of count data\: pairs\, log fold\-change\, codon frequency and coverage assessment\, principal component analysis on codon coverage.


.. conda:package:: bioconductor-riboprofiling

   |downloads_bioconductor-riboprofiling| |docker_bioconductor-riboprofiling|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.7.1-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-ggbio: ``>=1.48.0,<1.49.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-sqldf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-riboprofiling

   and update with::

      conda update bioconductor-riboprofiling

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-riboprofiling:<tag>

   (see `bioconductor-riboprofiling/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-riboprofiling| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-riboprofiling.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-riboprofiling
   :alt:   (downloads)
.. |docker_bioconductor-riboprofiling| image:: https://quay.io/repository/biocontainers/bioconductor-riboprofiling/status
   :target: https://quay.io/repository/biocontainers/bioconductor-riboprofiling
.. _`bioconductor-riboprofiling/tags`: https://quay.io/repository/biocontainers/bioconductor-riboprofiling?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-riboprofiling";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-riboprofiling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-riboprofiling/README.html