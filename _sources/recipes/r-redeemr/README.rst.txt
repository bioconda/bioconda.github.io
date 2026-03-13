:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-redeemr'
.. highlight: bash

r-redeemr
=========

.. conda:recipe:: r-redeemr
   :replaces_section_title:
   :noindex:

   R package for Regulatory multi\-omics with Deep Mitochondrial mutation profiling.

   :homepage: https://github.com/chenweng1991/redeemR
   :documentation: https://chenweng1991.github.io/redeemR
   
   :license: MIT / MIT
   :recipe: /`r-redeemr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-redeemr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-redeemr/meta.yaml>`_

   Introduce a new approach for single\-cell Regulatory multi\-omics \(transcriptomics and chromatin accessibility\) with Deep Mitochondrial mutation profiling \(\~10\-fold increase in detection rate\)\, or ReDeeM. redeemR is the R package that facilitates mutation refining\, lineage tracing\, as well multiomics integration analysis.


.. conda:package:: r-redeemr

   |downloads_r-redeemr| |docker_r-redeemr|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-ggtree: ``>=3.14.0,<3.15.0a0``
   :depends on bioconductor-ggtreeextra: ``>=1.16.0,<1.17.0a0``
   :depends on bioconductor-qvalue: ``>=2.38.0,<2.39.0a0``
   :depends on bioconductor-treeio: ``>=1.30.0,<1.31.0a0``
   :depends on libgcc: ``>=13``
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-domc: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggextra: 
   :depends on r-ggnewscale: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-phangorn: 
   :depends on r-phytools: 
   :depends on r-pryr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-scavenge: ``>=1.0.2,<1.1.0a0``
   :depends on r-seurat: 
   :depends on r-tibble: 
   :depends on r-tidytree: 

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

    pixi global install r-redeemr

to add into an existing workspace instead, run::

    pixi add r-redeemr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-redeemr

Alternatively, to install into a new environment, run::

    conda create -n envname r-redeemr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-redeemr:<tag>

(see `r-redeemr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-redeemr| image:: https://img.shields.io/conda/dn/bioconda/r-redeemr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-redeemr
   :alt:   (downloads)
.. |docker_r-redeemr| image:: https://quay.io/repository/biocontainers/r-redeemr/status
   :target: https://quay.io/repository/biocontainers/r-redeemr
.. _`r-redeemr/tags`: https://quay.io/repository/biocontainers/r-redeemr?tab=tags


.. raw:: html

    <script>
        var package = "r-redeemr";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-redeemr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-redeemr/README.html