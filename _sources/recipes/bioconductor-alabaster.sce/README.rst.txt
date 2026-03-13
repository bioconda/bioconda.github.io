:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.sce'
.. highlight: bash

bioconductor-alabaster.sce
==========================

.. conda:recipe:: bioconductor-alabaster.sce
   :replaces_section_title:
   :noindex:

   Load and Save SingleCellExperiment from File

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/alabaster.sce.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.sce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.sce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.sce/meta.yaml>`_

   Save SingleCellExperiment into file artifacts\, and load them back into memory. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.sce

   |downloads_bioconductor-alabaster.sce| |docker_bioconductor-alabaster.sce|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-alabaster.base: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.se: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
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

    pixi global install bioconductor-alabaster.sce

to add into an existing workspace instead, run::

    pixi add bioconductor-alabaster.sce

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-alabaster.sce

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-alabaster.sce

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-alabaster.sce:<tag>

(see `bioconductor-alabaster.sce/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-alabaster.sce| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.sce.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.sce
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.sce| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.sce/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.sce
.. _`bioconductor-alabaster.sce/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.sce?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.sce";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.sce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.sce/README.html