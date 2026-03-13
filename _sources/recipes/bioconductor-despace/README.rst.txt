:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-despace'
.. highlight: bash

bioconductor-despace
====================

.. conda:recipe:: bioconductor-despace
   :replaces_section_title:
   :noindex:

   DESpace\: a framework to discover spatially variable genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DESpace.html
   :license: GPL-3
   :recipe: /`bioconductor-despace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-despace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-despace/meta.yaml>`_

   Intuitive framework for identifying spatially variable genes \(SVGs\) via edgeR\, a popular method for performing differential expression analyses. Based on pre\-annotated spatial clusters as summarized spatial information\, DESpace models gene expression using a negative binomial \(NB\)\, via edgeR\, with spatial clusters as covariates. SVGs are then identified by testing the significance of spatial clusters. The method is flexible and robust\, and is faster than the most SV methods. Furthermore\, to the best of our knowledge\, it is the only SV approach that allows\: \- performing a SV test on each individual spatial cluster\, hence identifying the key regions of the tissue affected by spatial variability\; \- jointly fitting multiple samples\, targeting genes with consistent spatial patterns across replicates.


.. conda:package:: bioconductor-despace

   |downloads_bioconductor-despace| |docker_bioconductor-despace|

   :versions:
      
      

      ``2.2.2-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scuttle: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggforce: 
   :depends on r-ggnewscale: 
   :depends on r-ggplot2: 
   :depends on r-matrix: 
   :depends on r-patchwork: 
   :depends on r-scales: 
   :depends on r-sf: 
   :depends on r-spatstat.explore: 
   :depends on r-spatstat.geom: 
   :depends on r-terra: 

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

    pixi global install bioconductor-despace

to add into an existing workspace instead, run::

    pixi add bioconductor-despace

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-despace

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-despace

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-despace:<tag>

(see `bioconductor-despace/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-despace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-despace.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-despace
   :alt:   (downloads)
.. |docker_bioconductor-despace| image:: https://quay.io/repository/biocontainers/bioconductor-despace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-despace
.. _`bioconductor-despace/tags`: https://quay.io/repository/biocontainers/bioconductor-despace?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-despace";
        var versions = ["2.2.2","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-despace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-despace/README.html