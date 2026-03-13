:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmet'
.. highlight: bash

bioconductor-scmet
==================

.. conda:recipe:: bioconductor-scmet
   :replaces_section_title:
   :noindex:

   Bayesian modelling of cell\-to\-cell DNA methylation heterogeneity

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scMET.html
   :license: GPL-3
   :recipe: /`bioconductor-scmet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmet/meta.yaml>`_

   High\-throughput single\-cell measurements of DNA methylomes can quantify methylation heterogeneity and uncover its role in gene regulation. However\, technical limitations and sparse coverage can preclude this task. scMET is a hierarchical Bayesian model which overcomes sparsity\, sharing information across cells and genomic features to robustly quantify genuine biological heterogeneity. scMET can identify highly variable features that drive epigenetic heterogeneity\, and perform differential methylation and variability analyses. We illustrate how scMET facilitates the characterization of epigenetically distinct cell populations and how it enables the formulation of novel hypotheses on the epigenetic regulation of gene expression.


.. conda:package:: bioconductor-scmet

   |downloads_bioconductor-scmet| |docker_bioconductor-scmet|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0``
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: ``>=1.66.0``
   :depends on r-coda: 
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-logitnorm: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-rcpp: ``>=1.0.0``
   :depends on r-rcppeigen: ``>=0.3.3.3.0``
   :depends on r-rcppparallel: ``>=5.0.1``
   :depends on r-rstan: ``>=2.21.3``
   :depends on r-rstantools: ``>=2.1.0``
   :depends on r-stanheaders: ``>=2.21.0.7``
   :depends on r-vgam: 
   :depends on r-viridis: 
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bioconductor-scmet

to add into an existing workspace instead, run::

    pixi add bioconductor-scmet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scmet

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scmet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scmet:<tag>

(see `bioconductor-scmet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scmet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmet
   :alt:   (downloads)
.. |docker_bioconductor-scmet| image:: https://quay.io/repository/biocontainers/bioconductor-scmet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmet
.. _`bioconductor-scmet/tags`: https://quay.io/repository/biocontainers/bioconductor-scmet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmet";
        var versions = ["1.12.0","1.8.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmet/README.html