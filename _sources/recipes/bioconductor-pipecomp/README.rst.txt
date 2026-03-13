:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pipecomp'
.. highlight: bash

bioconductor-pipecomp
=====================

.. conda:recipe:: bioconductor-pipecomp
   :replaces_section_title:
   :noindex:

   pipeComp pipeline benchmarking framework

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pipeComp.html
   :license: GPL
   :recipe: /`bioconductor-pipecomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pipecomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pipecomp/meta.yaml>`_

   A simple framework to facilitate the comparison of pipelines involving various steps and parameters. The \`pipelineDefinition\` class represents pipelines as\, minimally\, a set of functions consecutively executed on the output of the previous one\, and optionally accompanied by step\-wise evaluation and aggregation functions. Given such an object\, a set of alternative parameters\/methods\, and benchmark datasets\, the \`runPipeline\` function then proceeds through all combinations arguments\, avoiding recomputing the same step twice and compiling evaluations on the fly to avoid storing potentially large intermediate data.


.. conda:package:: bioconductor-pipecomp

   |downloads_bioconductor-pipecomp| |docker_bioconductor-pipecomp|

   :versions:
      
      

      ``1.20.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-aricode: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-clue: 
   :depends on r-cluster: 
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-intrinsicdimension: 
   :depends on r-knitr: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-randomcolor: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rtsne: 
   :depends on r-scales: 
   :depends on r-seurat: 
   :depends on r-uwot: 
   :depends on r-viridislite: 

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

    pixi global install bioconductor-pipecomp

to add into an existing workspace instead, run::

    pixi add bioconductor-pipecomp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pipecomp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pipecomp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pipecomp:<tag>

(see `bioconductor-pipecomp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pipecomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pipecomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pipecomp
   :alt:   (downloads)
.. |docker_bioconductor-pipecomp| image:: https://quay.io/repository/biocontainers/bioconductor-pipecomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pipecomp
.. _`bioconductor-pipecomp/tags`: https://quay.io/repository/biocontainers/bioconductor-pipecomp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pipecomp";
        var versions = ["1.20.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pipecomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pipecomp/README.html