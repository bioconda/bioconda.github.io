:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialexperimentio'
.. highlight: bash

bioconductor-spatialexperimentio
================================

.. conda:recipe:: bioconductor-spatialexperimentio
   :replaces_section_title:
   :noindex:

   Read in Xenium\, CosMx\, MERSCOPE or STARmapPLUS data as SpatialExperiment object

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/SpatialExperimentIO.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spatialexperimentio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialexperimentio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialexperimentio/meta.yaml>`_

   Read in imaging\-based spatial transcriptomics technology data. Current available modules are for Xenium by 10X Genomics\, CosMx by Nanostring\, MERSCOPE by Vizgen\, or STARmapPLUS from Broad Institute. You can choose to read the data in as a SpatialExperiment or a SingleCellExperiment object.


.. conda:package:: bioconductor-spatialexperimentio

   |downloads_bioconductor-spatialexperimentio| |docker_bioconductor-spatialexperimentio|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-dropletutils: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on r-arrow: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-purrr: 

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

    pixi global install bioconductor-spatialexperimentio

to add into an existing workspace instead, run::

    pixi add bioconductor-spatialexperimentio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spatialexperimentio

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spatialexperimentio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spatialexperimentio:<tag>

(see `bioconductor-spatialexperimentio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spatialexperimentio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialexperimentio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialexperimentio
   :alt:   (downloads)
.. |docker_bioconductor-spatialexperimentio| image:: https://quay.io/repository/biocontainers/bioconductor-spatialexperimentio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialexperimentio
.. _`bioconductor-spatialexperimentio/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialexperimentio?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialexperimentio";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialexperimentio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialexperimentio/README.html