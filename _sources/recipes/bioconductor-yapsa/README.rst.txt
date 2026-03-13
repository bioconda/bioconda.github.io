:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yapsa'
.. highlight: bash

bioconductor-yapsa
==================

.. conda:recipe:: bioconductor-yapsa
   :replaces_section_title:
   :noindex:

   Yet Another Package for Signature Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/YAPSA.html
   :license: GPL-3
   :recipe: /`bioconductor-yapsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yapsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yapsa/meta.yaml>`_
   :links: biotools: :biotools:`yapsa`, doi: :doi:`10.1038/nmeth.3252`

   This package provides functions and routines for supervised analyses of mutational signatures \(i.e.\, the signatures have to be known\, cf. L. Alexandrov et al.\, Nature 2013 and L. Alexandrov et al.\, Bioaxiv 2018\). In particular\, the family of functions LCD \(LCD \= linear combination decomposition\) can use optimal signature\-specific cutoffs which takes care of different detectability of the different signatures. Moreover\, the package provides different sets of mutational signatures\, including the COSMIC and PCAWG SNV signatures and the PCAWG Indel signatures\; the latter infering that with YAPSA\, the concept of supervised analysis of mutational signatures is extended to Indel signatures. YAPSA also provides confidence intervals as computed by profile likelihoods and can perform signature analysis on a stratified mutational catalogue \(SMC \= stratify mutational catalogue\) in order to analyze enrichment and depletion patterns for the signatures in different strata.


.. conda:package:: bioconductor-yapsa

   |downloads_bioconductor-yapsa| |docker_bioconductor-yapsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.1-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.24.0-0</code>,  <code>1.19.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.36.1-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-gtrellis: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-keggrest: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-somaticsignatures: ``>=2.46.0,<2.47.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-corrplot: 
   :depends on r-dendextend: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-getoptlong: 
   :depends on r-ggbeeswarm: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-limsolve: 
   :depends on r-magrittr: 
   :depends on r-pmcmrplus: 
   :depends on r-pracma: 
   :depends on r-reshape2: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-yapsa

to add into an existing workspace instead, run::

    pixi add bioconductor-yapsa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-yapsa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-yapsa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-yapsa:<tag>

(see `bioconductor-yapsa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-yapsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yapsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yapsa
   :alt:   (downloads)
.. |docker_bioconductor-yapsa| image:: https://quay.io/repository/biocontainers/bioconductor-yapsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yapsa
.. _`bioconductor-yapsa/tags`: https://quay.io/repository/biocontainers/bioconductor-yapsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-yapsa";
        var versions = ["1.36.1","1.28.0","1.25.0","1.24.0","1.19.0"];
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