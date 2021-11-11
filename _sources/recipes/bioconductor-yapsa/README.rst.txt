:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yapsa'
.. highlight: bash

bioconductor-yapsa
==================

.. conda:recipe:: bioconductor-yapsa
   :replaces_section_title:
   :noindex:

   Yet Another Package for Signature Analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/YAPSA.html
   :license: GPL-3
   :recipe: /`bioconductor-yapsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yapsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yapsa/meta.yaml>`_
   :links: biotools: :biotools:`yapsa`, doi: :doi:`10.1038/nmeth.3252`

   This package provides functions and routines for supervised analyses of mutational signatures \(i.e.\, the signatures have to be known\, cf. L. Alexandrov et al.\, Nature 2013 and L. Alexandrov et al.\, Bioaxiv 2018\). In particular\, the family of functions LCD \(LCD \= linear combination decomposition\) can use optimal signature\-specific cutoffs which takes care of different detectability of the different signatures. Moreover\, the package provides different sets of mutational signatures\, including the COSMIC and PCAWG SNV signatures and the PCAWG Indel signatures\; the latter infering that with YAPSA\, the concept of supervised analysis of mutational signatures is extended to Indel signatures. YAPSA also provides confidence intervals as computed by profile likelihoods and can perform signature analysis on a stratified mutational catalogue \(SMC \= stratify mutational catalogue\) in order to analyze enrichment and depletion patterns for the signatures in different strata.


.. conda:package:: bioconductor-yapsa

   |downloads_bioconductor-yapsa| |docker_bioconductor-yapsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.19.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-complexheatmap: ``>=2.10.0,<2.11.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-gtrellis: ``>=1.26.0,<1.27.0``
   :depends bioconductor-keggrest: ``>=1.34.0,<1.35.0``
   :depends bioconductor-somaticsignatures: ``>=2.30.0,<2.31.0``
   :depends bioconductor-variantannotation: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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
   :depends r-pmcmr: 
   :depends r-pracma: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yapsa

   and update with::

      conda update bioconductor-yapsa

   or use the docker container::

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
        var versions = ["1.19.0","1.18.0","1.16.0","1.16.0","1.14.0"];
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