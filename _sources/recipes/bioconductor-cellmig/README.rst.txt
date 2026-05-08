:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellmig'
.. highlight: bash

bioconductor-cellmig
====================

.. conda:recipe:: bioconductor-cellmig
   :replaces_section_title:
   :noindex:

   Uncertainty\-aware quantitative analysis of high\-throughput live cell migration data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/cellmig.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-cellmig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmig/meta.yaml>`_

   High\-throughput cell imaging facilitates the analysis of cell migration across many wells treated under different biological conditions. These workflows generate considerable technical noise and biological variability\, and therefore technical and biological replicates are necessary\, leading to large\, hierarchically structured datasets\, i.e.\, cells are nested within technical replicates that are nested within biological replicates. Current statistical analyses of such data usually ignore the hierarchical structure of the data and fail to explicitly quantify uncertainty arising from technical or biological variability. To address this gap\, we present cellmig\, an R package implementing Bayesian hierarchical models for migration analysis. cellmig quantifies condition\- specific velocity changes \(e.g.\, drug effects\) while modeling nested data structures and technical artifacts. It further enables synthetic data generation for experimental design optimization.


.. conda:package:: bioconductor-cellmig

   |downloads_bioconductor-cellmig| |docker_bioconductor-cellmig|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-ggtree: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-ggtree: ``>=4.0.4,<4.1.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=19``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: ``>=1.66.0``
   :depends on r-ggforce: 
   :depends on r-ggplot2: 
   :depends on r-patchwork: 
   :depends on r-rcpp: ``>=0.12.0``
   :depends on r-rcppeigen: ``>=0.3.3.3.0``
   :depends on r-rcppparallel: ``>=5.0.1``
   :depends on r-reshape2: 
   :depends on r-rstan: ``>=2.18.1``
   :depends on r-rstantools: ``>=2.4.0``
   :depends on r-scales: 
   :depends on r-stanheaders: ``>=2.18.0``
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

    pixi global install bioconductor-cellmig

to add into an existing workspace instead, run::

    pixi add bioconductor-cellmig

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cellmig

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cellmig

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cellmig:<tag>

(see `bioconductor-cellmig/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cellmig| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellmig.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellmig
   :alt:   (downloads)
.. |docker_bioconductor-cellmig| image:: https://quay.io/repository/biocontainers/bioconductor-cellmig/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellmig
.. _`bioconductor-cellmig/tags`: https://quay.io/repository/biocontainers/bioconductor-cellmig?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellmig";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellmig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellmig/README.html