:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-airpart'
.. highlight: bash

bioconductor-airpart
====================

.. conda:recipe:: bioconductor-airpart
   :replaces_section_title:
   :noindex:

   Differential cell\-type\-specific allelic imbalance

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/airpart.html
   :license: GPL-2
   :recipe: /`bioconductor-airpart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-airpart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-airpart/meta.yaml>`_

   Airpart identifies sets of genes displaying differential cell\-type\-specific allelic imbalance across cell types or states\, utilizing single\-cell allelic counts. It makes use of a generalized fused lasso with binomial observations of allelic counts to partition cell types by their allelic imbalance. Alternatively\, a nonparametric method for partitioning cell types is offered. The package includes a number of visualizations and quality control functions for examining single cell allelic imbalance datasets.


.. conda:package:: bioconductor-airpart

   |downloads_bioconductor-airpart| |docker_bioconductor-airpart|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-apeglm: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-clue: 
   :depends on r-dplyr: 
   :depends on r-dynamictreecut: 
   :depends on r-emdbook: 
   :depends on r-forestplot: 
   :depends on r-ggplot2: 
   :depends on r-lpsolve: 
   :depends on r-matrixstats: 
   :depends on r-mclust: 
   :depends on r-pbapply: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-rlang: 
   :depends on r-smurf: 

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

    pixi global install bioconductor-airpart

to add into an existing workspace instead, run::

    pixi add bioconductor-airpart

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-airpart

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-airpart

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-airpart:<tag>

(see `bioconductor-airpart/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-airpart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-airpart.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-airpart
   :alt:   (downloads)
.. |docker_bioconductor-airpart| image:: https://quay.io/repository/biocontainers/bioconductor-airpart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-airpart
.. _`bioconductor-airpart/tags`: https://quay.io/repository/biocontainers/bioconductor-airpart?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-airpart";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-airpart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-airpart/README.html