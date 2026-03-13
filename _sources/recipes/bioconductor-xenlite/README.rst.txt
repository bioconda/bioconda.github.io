:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xenlite'
.. highlight: bash

bioconductor-xenlite
====================

.. conda:recipe:: bioconductor-xenlite
   :replaces_section_title:
   :noindex:

   Simple classes and methods for managing Xenium datasets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/xenLite.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-xenlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xenlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xenlite/meta.yaml>`_

   Define a relatively light class for managing Xenium data using Bioconductor.  Address use of parquet for coordinates\, SpatialExperiment for assay and sample data.  Address serialization and use of cloud storage.


.. conda:package:: bioconductor-xenlite

   |downloads_bioconductor-xenlite| |docker_bioconductor-xenlite|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-tenxio: ``>=1.12.0,<1.13.0``
   :depends on r-arrow: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-matrix: 
   :depends on r-shiny: 

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

    pixi global install bioconductor-xenlite

to add into an existing workspace instead, run::

    pixi add bioconductor-xenlite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-xenlite

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-xenlite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-xenlite:<tag>

(see `bioconductor-xenlite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-xenlite| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xenlite.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xenlite
   :alt:   (downloads)
.. |docker_bioconductor-xenlite| image:: https://quay.io/repository/biocontainers/bioconductor-xenlite/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xenlite
.. _`bioconductor-xenlite/tags`: https://quay.io/repository/biocontainers/bioconductor-xenlite?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xenlite";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xenlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xenlite/README.html