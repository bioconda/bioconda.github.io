:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdesign3'
.. highlight: bash

bioconductor-scdesign3
======================

.. conda:recipe:: bioconductor-scdesign3
   :replaces_section_title:
   :noindex:

   A unified framework of realistic in silico data generation and statistical model inference for single\-cell and spatial omics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scDesign3.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scdesign3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdesign3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdesign3/meta.yaml>`_

   We present a statistical simulator\, scDesign3\, to generate realistic single\-cell and spatial omics data\, including various cell states\, experimental designs\, and feature modalities\, by learning interpretable parameters from real data. Using a unified probabilistic model for single\-cell and spatial omics data\, scDesign3 infers biologically meaningful parameters\; assesses the goodness\-of\-fit of inferred cell clusters\, trajectories\, and spatial locations\; and generates in silico negative and positive controls for benchmarking computational tools.


.. conda:package:: bioconductor-scdesign3

   |downloads_bioconductor-scdesign3| |docker_bioconductor-scdesign3|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-coop: 
   :depends on r-dplyr: 
   :depends on r-gamlss: 
   :depends on r-gamlss.dist: 
   :depends on r-ggplot2: 
   :depends on r-irlba: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-mclust: 
   :depends on r-mgcv: 
   :depends on r-mvtnorm: 
   :depends on r-pbmcapply: 
   :depends on r-sparsemvn: 
   :depends on r-tibble: 
   :depends on r-umap: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-scdesign3

to add into an existing workspace instead, run::

    pixi add bioconductor-scdesign3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scdesign3

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scdesign3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scdesign3:<tag>

(see `bioconductor-scdesign3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scdesign3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdesign3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdesign3
   :alt:   (downloads)
.. |docker_bioconductor-scdesign3| image:: https://quay.io/repository/biocontainers/bioconductor-scdesign3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdesign3
.. _`bioconductor-scdesign3/tags`: https://quay.io/repository/biocontainers/bioconductor-scdesign3?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scdesign3";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdesign3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdesign3/README.html