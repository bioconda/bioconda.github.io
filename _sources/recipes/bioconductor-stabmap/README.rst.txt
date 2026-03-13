:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stabmap'
.. highlight: bash

bioconductor-stabmap
====================

.. conda:recipe:: bioconductor-stabmap
   :replaces_section_title:
   :noindex:

   Stabilised mosaic single cell data integration using unshared features

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/StabMap.html
   :license: GPL-2
   :recipe: /`bioconductor-stabmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stabmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stabmap/meta.yaml>`_

   StabMap performs single cell mosaic data integration by first building a mosaic data topology\, and for each reference dataset\, traverses the topology to project and predict data onto a common embedding. Mosaic data should be provided in a list format\, with all relevant features included in the data matrices within each list object. The output of stabMap is a joint low\-dimensional embedding taking into account all available relevant features. Expression imputation can also be performed using the StabMap embedding and any of the original data matrices for given reference and query cell lists.


.. conda:package:: bioconductor-stabmap

   |downloads_bioconductor-stabmap| |docker_bioconductor-stabmap|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocsingular: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-abind: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-igraph: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-slam: 

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

    pixi global install bioconductor-stabmap

to add into an existing workspace instead, run::

    pixi add bioconductor-stabmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-stabmap

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-stabmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-stabmap:<tag>

(see `bioconductor-stabmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-stabmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stabmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stabmap
   :alt:   (downloads)
.. |docker_bioconductor-stabmap| image:: https://quay.io/repository/biocontainers/bioconductor-stabmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stabmap
.. _`bioconductor-stabmap/tags`: https://quay.io/repository/biocontainers/bioconductor-stabmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stabmap";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stabmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stabmap/README.html