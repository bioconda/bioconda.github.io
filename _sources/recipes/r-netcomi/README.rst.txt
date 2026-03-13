:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-netcomi'
.. highlight: bash

r-netcomi
=========

.. conda:recipe:: r-netcomi
   :replaces_section_title:
   :noindex:

   Network Construction and Comparison for Microbiome Data

   :homepage: https://github.com/stefpeschel/NetCoMi
   :license: GPL-3.0-only
   :recipe: /`r-netcomi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-netcomi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-netcomi/meta.yaml>`_

   NetCoMi offers functions for constructing\, analyzing\, and comparing microbial association networks as well as dissimilarity\-based networks for microbial compositional data. It also includes functionality for constructing differential association networks.


.. conda:package:: r-netcomi

   |downloads_r-netcomi| |docker_r-netcomi|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends on bioconductor-biobase: 
   :depends on bioconductor-phyloseq: 
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-corrplot: 
   :depends on r-dosnow: 
   :depends on r-fdrtool: 
   :depends on r-filematrix: 
   :depends on r-foreach: 
   :depends on r-gtools: 
   :depends on r-huge: 
   :depends on r-igraph: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-mixedcca: ``>=1.6.2``
   :depends on r-orca: 
   :depends on r-pulsar: 
   :depends on r-qgraph: 
   :depends on r-rdpack: 
   :depends on r-snow: 
   :depends on r-spieceasi: ``>=1.0.6``
   :depends on r-spring: 
   :depends on r-vegan: 
   :depends on r-wgcna: 

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

    pixi global install r-netcomi

to add into an existing workspace instead, run::

    pixi add r-netcomi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-netcomi

Alternatively, to install into a new environment, run::

    conda create -n envname r-netcomi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-netcomi:<tag>

(see `r-netcomi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-netcomi| image:: https://img.shields.io/conda/dn/bioconda/r-netcomi.svg?style=flat
   :target: https://anaconda.org/bioconda/r-netcomi
   :alt:   (downloads)
.. |docker_r-netcomi| image:: https://quay.io/repository/biocontainers/r-netcomi/status
   :target: https://quay.io/repository/biocontainers/r-netcomi
.. _`r-netcomi/tags`: https://quay.io/repository/biocontainers/r-netcomi?tab=tags


.. raw:: html

    <script>
        var package = "r-netcomi";
        var versions = ["1.1.0","1.1.0","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-netcomi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-netcomi/README.html