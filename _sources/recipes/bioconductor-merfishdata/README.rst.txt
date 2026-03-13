:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-merfishdata'
.. highlight: bash

bioconductor-merfishdata
========================

.. conda:recipe:: bioconductor-merfishdata
   :replaces_section_title:
   :noindex:

   Collection of public MERFISH datasets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/MerfishData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-merfishdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-merfishdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-merfishdata/meta.yaml>`_

   MerfishData is an ExperimentHub package that serves publicly available datasets obtained with Multiplexed Error\-Robust Fluorescence in situ Hybridization \(MERFISH\). MERFISH is a massively multiplexed single\-molecule imaging technology capable of simultaneously measuring the copy number and spatial distribution of hundreds to tens of thousands of RNA species in individual cells. The scope of the package is to provide MERFISH data for benchmarking and analysis.


.. conda:package:: bioconductor-merfishdata

   |downloads_bioconductor-merfishdata| |docker_bioconductor-merfishdata|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-bumpymatrix: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-merfishdata

to add into an existing workspace instead, run::

    pixi add bioconductor-merfishdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-merfishdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-merfishdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-merfishdata:<tag>

(see `bioconductor-merfishdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-merfishdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-merfishdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-merfishdata
   :alt:   (downloads)
.. |docker_bioconductor-merfishdata| image:: https://quay.io/repository/biocontainers/bioconductor-merfishdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-merfishdata
.. _`bioconductor-merfishdata/tags`: https://quay.io/repository/biocontainers/bioconductor-merfishdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-merfishdata";
        var versions = ["1.12.0","1.8.0","1.4.1","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-merfishdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-merfishdata/README.html