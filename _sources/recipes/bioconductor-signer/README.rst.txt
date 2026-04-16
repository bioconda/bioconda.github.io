:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signer'
.. highlight: bash

bioconductor-signer
===================

.. conda:recipe:: bioconductor-signer
   :replaces_section_title:
   :noindex:

   Empirical Bayesian approach to mutational signature discovery

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/signeR.html
   :license: GPL-3
   :recipe: /`bioconductor-signer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signer/meta.yaml>`_
   :links: biotools: :biotools:`signer`

   The signeR package provides an empirical Bayesian approach to mutational signature discovery. It is designed to analyze single nucleotide variation \(SNV\) counts in cancer genomes\, but can also be applied to other features as well. Functionalities to characterize signatures or genome samples according to exposure patterns are also provided.


.. conda:package:: bioconductor-signer

   |downloads_bioconductor-signer| |docker_bioconductor-signer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0a0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.2,<1.47.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-ada: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-broom: 
   :depends on r-bsplus: 
   :depends on r-class: 
   :depends on r-clue: 
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-e1071: 
   :depends on r-future: 
   :depends on r-future.apply: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-glmnet: 
   :depends on r-kknn: 
   :depends on r-listenv: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-maxstat: 
   :depends on r-nloptr: 
   :depends on r-nmf: 
   :depends on r-pheatmap: 
   :depends on r-pmcmrplus: 
   :depends on r-ppclust: 
   :depends on r-proc: 
   :depends on r-proxy: 
   :depends on r-pvclust: 
   :depends on r-randomforest: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: ``>=0.7.100``
   :depends on r-readr: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-shiny: 
   :depends on r-shinycssloaders: 
   :depends on r-shinydashboard: 
   :depends on r-shinywidgets: 
   :depends on r-survival: 
   :depends on r-survminer: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-vgam: 

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

    pixi global install bioconductor-signer

to add into an existing workspace instead, run::

    pixi add bioconductor-signer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-signer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-signer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-signer:<tag>

(see `bioconductor-signer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-signer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-signer
   :alt:   (downloads)
.. |docker_bioconductor-signer| image:: https://quay.io/repository/biocontainers/bioconductor-signer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signer
.. _`bioconductor-signer/tags`: https://quay.io/repository/biocontainers/bioconductor-signer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-signer";
        var versions = ["2.12.0","2.8.0","2.4.0","2.2.1","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signer/README.html