:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialfeatureexperiment'
.. highlight: bash

bioconductor-spatialfeatureexperiment
=====================================

.. conda:recipe:: bioconductor-spatialfeatureexperiment
   :replaces_section_title:
   :noindex:

   Integrating SpatialExperiment with Simple Features in sf

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SpatialFeatureExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spatialfeatureexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialfeatureexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialfeatureexperiment/meta.yaml>`_

   A new S4 class integrating Simple Features with the R package sf to bring geospatial data analysis methods based on vector data to spatial transcriptomics. Also implements management of spatial neighborhood graphs and geometric operations. This pakage builds upon SpatialExperiment and SingleCellExperiment\, hence methods for these parent classes can still be used.


.. conda:package:: bioconductor-spatialfeatureexperiment

   |downloads_bioconductor-spatialfeatureexperiment| |docker_bioconductor-spatialfeatureexperiment|

   :versions:
      
      

      ``1.12.1-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-dropletutils: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-lifecycle: 
   :depends on r-matrix: 
   :depends on r-rjson: 
   :depends on r-rlang: 
   :depends on r-sf: 
   :depends on r-sfheaders: 
   :depends on r-spatialreg: 
   :depends on r-spdep: ``>=1.1-7``
   :depends on r-terra: 
   :depends on r-zeallot: 

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

    pixi global install bioconductor-spatialfeatureexperiment

to add into an existing workspace instead, run::

    pixi add bioconductor-spatialfeatureexperiment

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spatialfeatureexperiment

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spatialfeatureexperiment

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spatialfeatureexperiment:<tag>

(see `bioconductor-spatialfeatureexperiment/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spatialfeatureexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialfeatureexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialfeatureexperiment
   :alt:   (downloads)
.. |docker_bioconductor-spatialfeatureexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-spatialfeatureexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialfeatureexperiment
.. _`bioconductor-spatialfeatureexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialfeatureexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialfeatureexperiment";
        var versions = ["1.12.1","1.8.0","1.4.0","1.2.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialfeatureexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialfeatureexperiment/README.html