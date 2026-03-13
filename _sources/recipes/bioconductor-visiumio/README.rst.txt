:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-visiumio'
.. highlight: bash

bioconductor-visiumio
=====================

.. conda:recipe:: bioconductor-visiumio
   :replaces_section_title:
   :noindex:

   Import Visium data from the 10X Space Ranger pipeline

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VisiumIO.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-visiumio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-visiumio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-visiumio/meta.yaml>`_

   The package allows users to readily import spatial data obtained from either the 10X website or from the Space Ranger pipeline. Supported formats include tar.gz\, h5\, and mtx files. Multiple files can be imported at once with \*List type of functions. The package represents data mainly as SpatialExperiment objects.


.. conda:package:: bioconductor-visiumio

   |downloads_bioconductor-visiumio| |docker_bioconductor-visiumio|

   :versions:
      
      

      ``1.6.3-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocio: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-tenxio: ``>=1.12.0,<1.13.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-jsonlite: 

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

    pixi global install bioconductor-visiumio

to add into an existing workspace instead, run::

    pixi add bioconductor-visiumio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-visiumio

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-visiumio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-visiumio:<tag>

(see `bioconductor-visiumio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-visiumio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-visiumio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-visiumio
   :alt:   (downloads)
.. |docker_bioconductor-visiumio| image:: https://quay.io/repository/biocontainers/bioconductor-visiumio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-visiumio
.. _`bioconductor-visiumio/tags`: https://quay.io/repository/biocontainers/bioconductor-visiumio?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-visiumio";
        var versions = ["1.6.3","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-visiumio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-visiumio/README.html