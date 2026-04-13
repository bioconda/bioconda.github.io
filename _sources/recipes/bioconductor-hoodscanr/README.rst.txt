:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hoodscanr'
.. highlight: bash

bioconductor-hoodscanr
======================

.. conda:recipe:: bioconductor-hoodscanr
   :replaces_section_title:
   :noindex:

   Spatial cellular neighbourhood scanning in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hoodscanR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-hoodscanr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hoodscanr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hoodscanr/meta.yaml>`_

   hoodscanR is an user\-friendly R package providing functions to assist cellular neighborhood analysis of any spatial transcriptomics data with single\-cell resolution. All functions in the package are built based on the SpatialExperiment object\, allowing integration into various spatial transcriptomics\-related packages from Bioconductor. The package can result in cell\-level neighborhood annotation output\, along with funtions to perform neighborhood colocalization analysis and neighborhood\-based cell clustering.


.. conda:package:: bioconductor-hoodscanr

   |downloads_bioconductor-hoodscanr| |docker_bioconductor-hoodscanr|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.1,<2.27.0a0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-ggplot2: 
   :depends on r-knitr: 
   :depends on r-rann: 
   :depends on r-rcpp: ``>=1.0.9``
   :depends on r-rlang: 
   :depends on r-rmarkdown: 
   :depends on r-scico: 

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

    pixi global install bioconductor-hoodscanr

to add into an existing workspace instead, run::

    pixi add bioconductor-hoodscanr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hoodscanr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hoodscanr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hoodscanr:<tag>

(see `bioconductor-hoodscanr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hoodscanr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hoodscanr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hoodscanr
   :alt:   (downloads)
.. |docker_bioconductor-hoodscanr| image:: https://quay.io/repository/biocontainers/bioconductor-hoodscanr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hoodscanr
.. _`bioconductor-hoodscanr/tags`: https://quay.io/repository/biocontainers/bioconductor-hoodscanr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hoodscanr";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hoodscanr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hoodscanr/README.html