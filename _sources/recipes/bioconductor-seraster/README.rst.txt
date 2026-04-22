:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seraster'
.. highlight: bash

bioconductor-seraster
=====================

.. conda:recipe:: bioconductor-seraster
   :replaces_section_title:
   :noindex:

   Rasterization Preprocessing Framework for Scalable Spatial Omics Data Analysis

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/SEraster.html
   :license: GPL-3
   :recipe: /`bioconductor-seraster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seraster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seraster/meta.yaml>`_

   SEraster is a rasterization preprocessing framework that aggregates cellular information into spatial pixels to reduce resource requirements for spatial omics data analysis. SEraster reduces the number of spatial points in spatial omics datasets for downstream analysis through a process of rasterization where single cells’ gene expression or cell\-type labels are aggregated into equally sized pixels based on a user\-defined resolution. SEraster is built on an R\/Bioconductor S4 class called SpatialExperiment. SEraster can be incorporated with other packages to conduct downstream analyses for spatial omics datasets\, such as detecting spatially variable genes.


.. conda:package:: bioconductor-seraster

   |downloads_bioconductor-seraster| |docker_bioconductor-seraster|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-matrix: 
   :depends on r-rearrr: 
   :depends on r-sf: 

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

    pixi global install bioconductor-seraster

to add into an existing workspace instead, run::

    pixi add bioconductor-seraster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-seraster

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-seraster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-seraster:<tag>

(see `bioconductor-seraster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-seraster| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seraster.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seraster
   :alt:   (downloads)
.. |docker_bioconductor-seraster| image:: https://quay.io/repository/biocontainers/bioconductor-seraster/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seraster
.. _`bioconductor-seraster/tags`: https://quay.io/repository/biocontainers/bioconductor-seraster?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seraster";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seraster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seraster/README.html