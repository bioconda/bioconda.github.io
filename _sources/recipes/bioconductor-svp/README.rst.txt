:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-svp'
.. highlight: bash

bioconductor-svp
================

.. conda:recipe:: bioconductor-svp
   :replaces_section_title:
   :noindex:

   Predicting cell states and their variability in single\-cell or spatial omics data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/SVP.html
   :license: GPL-3
   :recipe: /`bioconductor-svp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svp/meta.yaml>`_

   SVP uses the distance between cells and cells\, features and features\, cells and features in the space of MCA to build nearest neighbor graph\, then uses random walk with restart algorithm to calculate the activity score of gene sets \(such as cell marker genes\, kegg pathway\, go ontology\, gene modules\, transcription factor or miRNA target sets\, reactome pathway\, ...\)\, which is then further weighted using the hypergeometric test results from the original expression matrix. To detect the spatially or single cell variable gene sets or \(other features\) and the spatial colocalization between the features accurately\, SVP provides some global and local spatial autocorrelation method to identify the spatial variable features. SVP is developed based on SingleCellExperiment class\, which can be interoperable with the existing computing ecosystem.


.. conda:package:: bioconductor-svp

   |downloads_bioconductor-svp| |docker_bioconductor-svp|

   :versions:
      
      

      ``1.2.1-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-ggtree: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-ggtree: ``>=4.0.4,<4.1.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-deldir: 
   :depends on r-dplyr: 
   :depends on r-dqrng: 
   :depends on r-fastmatch: 
   :depends on r-ggfun: 
   :depends on r-ggplot2: 
   :depends on r-ggstar: 
   :depends on r-matrix: 
   :depends on r-pracma: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: ``>=14.0``
   :depends on r-rcppeigen: 
   :depends on r-rcppparallel: 
   :depends on r-rlang: 
   :depends on r-withr: 
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

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

    pixi global install bioconductor-svp

to add into an existing workspace instead, run::

    pixi add bioconductor-svp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-svp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-svp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-svp:<tag>

(see `bioconductor-svp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-svp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-svp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-svp
   :alt:   (downloads)
.. |docker_bioconductor-svp| image:: https://quay.io/repository/biocontainers/bioconductor-svp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-svp
.. _`bioconductor-svp/tags`: https://quay.io/repository/biocontainers/bioconductor-svp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-svp";
        var versions = ["1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-svp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-svp/README.html