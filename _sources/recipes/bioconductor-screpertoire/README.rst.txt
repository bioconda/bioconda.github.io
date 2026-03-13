:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-screpertoire'
.. highlight: bash

bioconductor-screpertoire
=========================

.. conda:recipe:: bioconductor-screpertoire
   :replaces_section_title:
   :noindex:

   A toolkit for single\-cell immune receptor profiling

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scRepertoire.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-screpertoire <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screpertoire>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screpertoire/meta.yaml>`_

   scRepertoire is a toolkit for processing and analyzing single\-cell T\-cell receptor \(TCR\) and immunoglobulin \(Ig\). The scRepertoire framework supports use of 10x\, AIRR\, BD\, MiXCR\, Omniscope\, TRUST4\, and WAT3R single\-cell formats. The functionality includes basic clonal analyses\, repertoire summaries\, distance\-based clustering and interaction with the popular Seurat and SingleCellExperiment\/Bioconductor R workflows.


.. conda:package:: bioconductor-screpertoire

   |downloads_bioconductor-screpertoire| |docker_bioconductor-screpertoire|

   :versions:
      
      

      ``2.2.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cubature: 
   :depends on r-dplyr: 
   :depends on r-evmix: 
   :depends on r-ggalluvial: 
   :depends on r-ggdendro: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-hash: 
   :depends on r-igraph: 
   :depends on r-inext: 
   :depends on r-plyr: 
   :depends on r-quantreg: 
   :depends on r-rcpp: 
   :depends on r-reshape2: 
   :depends on r-rjson: 
   :depends on r-rlang: 
   :depends on r-seuratobject: 
   :depends on r-stringdist: 
   :depends on r-stringr: 
   :depends on r-tidygraph: 
   :depends on r-truncdist: 
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

    pixi global install bioconductor-screpertoire

to add into an existing workspace instead, run::

    pixi add bioconductor-screpertoire

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-screpertoire

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-screpertoire

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-screpertoire:<tag>

(see `bioconductor-screpertoire/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-screpertoire| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-screpertoire.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-screpertoire
   :alt:   (downloads)
.. |docker_bioconductor-screpertoire| image:: https://quay.io/repository/biocontainers/bioconductor-screpertoire/status
   :target: https://quay.io/repository/biocontainers/bioconductor-screpertoire
.. _`bioconductor-screpertoire/tags`: https://quay.io/repository/biocontainers/bioconductor-screpertoire?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-screpertoire";
        var versions = ["2.2.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-screpertoire/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-screpertoire/README.html