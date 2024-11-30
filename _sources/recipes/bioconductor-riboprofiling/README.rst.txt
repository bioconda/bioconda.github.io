:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-riboprofiling'
.. highlight: bash

bioconductor-riboprofiling
==========================

.. conda:recipe:: bioconductor-riboprofiling
   :replaces_section_title:
   :noindex:

   Ribosome Profiling Data Analysis\: from BAM to Data Representation and Interpretation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RiboProfiling.html
   :license: GPL-3
   :recipe: /`bioconductor-riboprofiling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-riboprofiling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-riboprofiling/meta.yaml>`_
   :links: biotools: :biotools:`riboprofiling`, doi: :doi:`10.12688/f1000research.8964.1`

   Starting with a BAM file\, this package provides the necessary functions for quality assessment\, read start position recalibration\, the counting of reads on CDS\, 3\'UTR\, and 5\'UTR\, plotting of count data\: pairs\, log fold\-change\, codon frequency and coverage assessment\, principal component analysis on codon coverage.


.. conda:package:: bioconductor-riboprofiling

   |downloads_bioconductor-riboprofiling| |docker_bioconductor-riboprofiling|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.7.1-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-ggbio: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-sqldf: 
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

      mamba install bioconductor-riboprofiling

   and update with::

      mamba update bioconductor-riboprofiling

  To create a new environment, run::

      mamba create --name myenvname bioconductor-riboprofiling

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.22.0"];
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