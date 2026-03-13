:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phemd'
.. highlight: bash

bioconductor-phemd
==================

.. conda:recipe:: bioconductor-phemd
   :replaces_section_title:
   :noindex:

   Phenotypic EMD for comparison of single\-cell samples

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/phemd.html
   :license: GPL-2
   :recipe: /`bioconductor-phemd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phemd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phemd/meta.yaml>`_

   Package for comparing and generating a low\-dimensional embedding of multiple single\-cell samples.


.. conda:package:: bioconductor-phemd

   |downloads_bioconductor-phemd| |docker_bioconductor-phemd|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.1.1-0``,  ``1.0.1-0``

      

   
   :depends on bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-destiny: ``>=3.16.0,<3.17.0``
   :depends on bioconductor-monocle: ``>=2.30.0,<2.31.0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cluster: 
   :depends on r-cowplot: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-maptree: 
   :depends on r-phater: 
   :depends on r-pheatmap: 
   :depends on r-pracma: 
   :depends on r-rann: 
   :depends on r-rcolorbrewer: 
   :depends on r-reticulate: 
   :depends on r-rtsne: 
   :depends on r-scatterplot3d: 
   :depends on r-seurat: 
   :depends on r-transport: 
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

    pixi global install bioconductor-phemd

to add into an existing workspace instead, run::

    pixi add bioconductor-phemd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-phemd

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-phemd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-phemd:<tag>

(see `bioconductor-phemd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-phemd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phemd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phemd
   :alt:   (downloads)
.. |docker_bioconductor-phemd| image:: https://quay.io/repository/biocontainers/bioconductor-phemd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phemd
.. _`bioconductor-phemd/tags`: https://quay.io/repository/biocontainers/bioconductor-phemd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phemd";
        var versions = ["1.18.0","1.16.0","1.6.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phemd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phemd/README.html