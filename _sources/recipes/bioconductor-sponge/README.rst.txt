:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sponge'
.. highlight: bash

bioconductor-sponge
===================

.. conda:recipe:: bioconductor-sponge
   :replaces_section_title:
   :noindex:

   Sparse Partial Correlations On Gene Expression

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SPONGE.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-sponge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sponge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sponge/meta.yaml>`_

   This package provides methods to efficiently detect competitive endogeneous RNA interactions between two genes. Such interactions are mediated by one or several miRNAs such that both gene and miRNA expression data for a larger number of samples is needed as input. The SPONGE package now also includes spongEffects\: ceRNA modules offer patient\-specific insights into the miRNA regulatory landscape.


.. conda:package:: bioconductor-sponge

   |downloads_bioconductor-sponge| |docker_bioconductor-sponge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-caret: 
   :depends on r-cvms: 
   :depends on r-data.table: 
   :depends on r-dorng: 
   :depends on r-dplyr: 
   :depends on r-expm: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggridges: 
   :depends on r-glmnet: 
   :depends on r-grbase: 
   :depends on r-igraph: 
   :depends on r-iterators: 
   :depends on r-logging: 
   :depends on r-mass: 
   :depends on r-metbrewer: 
   :depends on r-ppcor: 
   :depends on r-randomforest: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tidyr: 
   :depends on r-tidyverse: 
   :depends on r-tnet: 

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

    pixi global install bioconductor-sponge

to add into an existing workspace instead, run::

    pixi add bioconductor-sponge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sponge

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sponge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sponge:<tag>

(see `bioconductor-sponge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sponge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sponge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sponge
   :alt:   (downloads)
.. |docker_bioconductor-sponge| image:: https://quay.io/repository/biocontainers/bioconductor-sponge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sponge
.. _`bioconductor-sponge/tags`: https://quay.io/repository/biocontainers/bioconductor-sponge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sponge";
        var versions = ["1.32.0","1.28.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sponge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sponge/README.html