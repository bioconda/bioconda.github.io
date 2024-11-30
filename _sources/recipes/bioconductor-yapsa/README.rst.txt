:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yapsa'
.. highlight: bash

bioconductor-yapsa
==================

.. conda:recipe:: bioconductor-yapsa
   :replaces_section_title:
   :noindex:

   Yet Another Package for Signature Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/YAPSA.html
   :license: GPL-3
   :recipe: /`bioconductor-yapsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yapsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yapsa/meta.yaml>`_
   :links: biotools: :biotools:`yapsa`, doi: :doi:`10.1038/nmeth.3252`

   This package provides functions and routines for supervised analyses of mutational signatures \(i.e.\, the signatures have to be known\, cf. L. Alexandrov et al.\, Nature 2013 and L. Alexandrov et al.\, Bioaxiv 2018\). In particular\, the family of functions LCD \(LCD \= linear combination decomposition\) can use optimal signature\-specific cutoffs which takes care of different detectability of the different signatures. Moreover\, the package provides different sets of mutational signatures\, including the COSMIC and PCAWG SNV signatures and the PCAWG Indel signatures\; the latter infering that with YAPSA\, the concept of supervised analysis of mutational signatures is extended to Indel signatures. YAPSA also provides confidence intervals as computed by profile likelihoods and can perform signature analysis on a stratified mutational catalogue \(SMC \= stratify mutational catalogue\) in order to analyze enrichment and depletion patterns for the signatures in different strata.


.. conda:package:: bioconductor-yapsa

   |downloads_bioconductor-yapsa| |docker_bioconductor-yapsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.24.0-0</code>,  <code>1.19.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gtrellis: ``>=1.34.0,<1.35.0``
   :depends bioconductor-keggrest: ``>=1.42.0,<1.43.0``
   :depends bioconductor-somaticsignatures: ``>=2.38.0,<2.39.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-corrplot: 
   :depends r-dendextend: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-getoptlong: 
   :depends r-ggbeeswarm: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-limsolve: 
   :depends r-magrittr: 
   :depends r-pmcmrplus: 
   :depends r-pracma: 
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

      mamba install bioconductor-yapsa

   and update with::

      mamba update bioconductor-yapsa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-yapsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yapsa:<tag>

   (see `bioconductor-yapsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yapsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yapsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yapsa
   :alt:   (downloads)
.. |docker_bioconductor-yapsa| image:: https://quay.io/repository/biocontainers/bioconductor-yapsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yapsa
.. _`bioconductor-yapsa/tags`: https://quay.io/repository/biocontainers/bioconductor-yapsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-yapsa";
        var versions = ["1.28.0","1.25.0","1.24.0","1.19.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yapsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yapsa/README.html