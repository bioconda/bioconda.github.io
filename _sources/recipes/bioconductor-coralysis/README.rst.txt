:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coralysis'
.. highlight: bash

bioconductor-coralysis
======================

.. conda:recipe:: bioconductor-coralysis
   :replaces_section_title:
   :noindex:

   Coralysis sensitive identification of imbalanced cell types and states in single\-cell data via multi\-level integration

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/Coralysis.html
   :license: GPL-3
   :recipe: /`bioconductor-coralysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coralysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coralysis/meta.yaml>`_

   Coralysis is an R package featuring a multi\-level integration algorithm for sensitive integration\, reference\-mapping\, and cell\-state identification in single\-cell data. The multi\-level integration algorithm is inspired by the process of assembling a puzzle \- where one begins by grouping pieces based on low\-to high\-level features\, such as color and shading\, before looking into shape and patterns. This approach progressively blends the batch effects and separates cell types across multiple rounds of divisive clustering.


.. conda:package:: bioconductor-coralysis

   |downloads_bioconductor-coralysis| |docker_bioconductor-coralysis|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-sparsematrixstats: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-aricode: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-class: 
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-flexclust: 
   :depends on r-ggplot2: 
   :depends on r-ggrastr: 
   :depends on r-ggrepel: 
   :depends on r-irlba: 
   :depends on r-liblinear: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-pheatmap: 
   :depends on r-rann: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rspectra: 
   :depends on r-rtsne: 
   :depends on r-scatterpie: 
   :depends on r-sparsem: 
   :depends on r-tidyr: 
   :depends on r-umap: 
   :depends on r-uwot: 
   :depends on r-withr: 

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

    pixi global install bioconductor-coralysis

to add into an existing workspace instead, run::

    pixi add bioconductor-coralysis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-coralysis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-coralysis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-coralysis:<tag>

(see `bioconductor-coralysis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-coralysis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coralysis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-coralysis
   :alt:   (downloads)
.. |docker_bioconductor-coralysis| image:: https://quay.io/repository/biocontainers/bioconductor-coralysis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coralysis
.. _`bioconductor-coralysis/tags`: https://quay.io/repository/biocontainers/bioconductor-coralysis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-coralysis";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coralysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coralysis/README.html