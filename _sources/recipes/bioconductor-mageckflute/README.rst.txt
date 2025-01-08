:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mageckflute'
.. highlight: bash

bioconductor-mageckflute
========================

.. conda:recipe:: bioconductor-mageckflute
   :replaces_section_title:
   :noindex:

   Integrative Analysis Pipeline for Pooled CRISPR Functional Genetic Screens

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MAGeCKFlute.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-mageckflute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mageckflute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mageckflute/meta.yaml>`_

   CRISPR \(clustered regularly interspaced short palindrome repeats\) coupled with nuclease Cas9 \(CRISPR\/Cas9\) screens represent a promising technology to systematically evaluate gene functions. Data analysis for CRISPR\/Cas9 screens is a critical process that includes identifying screen hits and exploring biological functions for these hits in downstream analysis. We have previously developed two algorithms\, MAGeCK and MAGeCK\-VISPR\, to analyze CRISPR\/Cas9 screen data in various scenarios. These two algorithms allow users to perform quality control\, read count generation and normalization\, and calculate beta score to evaluate gene selection performance. In downstream analysis\, the biological functional analysis is required for understanding biological functions of these identified genes with different screening purposes. Here\, We developed MAGeCKFlute for supporting downstream analysis. MAGeCKFlute provides several strategies to remove potential biases within sgRNA\-level read counts and gene\-level beta scores. The downstream analysis with the package includes identifying essential\, non\-essential\, and target\-associated genes\, and performing biological functional category analysis\, pathway enrichment analysis and protein complex enrichment analysis of these genes. The package also visualizes genes in multiple ways to benefit users exploring screening data. Collectively\, MAGeCKFlute enables accurate identification of essential\, non\-essential\, and targeted genes\, as well as their related biological functions. This vignette explains the use of the package and demonstrates typical workflows.


.. conda:package:: bioconductor-mageckflute

   |downloads_bioconductor-mageckflute| |docker_bioconductor-mageckflute|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``2.9.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``,  ``1.2.3-0``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-clusterprofiler: ``>=4.14.0,<4.15.0``
   :depends bioconductor-depmap: ``>=1.20.0,<1.21.0``
   :depends bioconductor-dose: ``>=4.0.0,<4.1.0``
   :depends bioconductor-enrichplot: ``>=1.26.0,<1.27.0``
   :depends bioconductor-pathview: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-msigdbr: 
   :depends r-reshape2: 
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

      mamba install bioconductor-mageckflute

   and update with::

      mamba update bioconductor-mageckflute

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mageckflute

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mageckflute:<tag>

   (see `bioconductor-mageckflute/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mageckflute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mageckflute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mageckflute
   :alt:   (downloads)
.. |docker_bioconductor-mageckflute| image:: https://quay.io/repository/biocontainers/bioconductor-mageckflute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mageckflute
.. _`bioconductor-mageckflute/tags`: https://quay.io/repository/biocontainers/bioconductor-mageckflute?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mageckflute";
        var versions = ["2.9.0","2.6.0","2.4.0","2.2.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mageckflute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mageckflute/README.html