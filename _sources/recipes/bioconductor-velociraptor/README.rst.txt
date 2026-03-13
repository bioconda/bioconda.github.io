:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-velociraptor'
.. highlight: bash

bioconductor-velociraptor
=========================

.. conda:recipe:: bioconductor-velociraptor
   :replaces_section_title:
   :noindex:

   Toolkit for Single\-Cell Velocity

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/velociraptor.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-velociraptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-velociraptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-velociraptor/meta.yaml>`_

   This package provides Bioconductor\-friendly wrappers for RNA velocity calculations in single\-cell RNA\-seq data. We use the basilisk package to manage Conda environments\, and the zellkonverter package to convert data structures between SingleCellExperiment \(R\) and AnnData \(Python\). The information produced by the velocity methods is stored in the various components of the SingleCellExperiment class.


.. conda:package:: bioconductor-velociraptor

   |downloads_bioconductor-velociraptor| |docker_bioconductor-velociraptor|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocsingular: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scuttle: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-zellkonverter: ``>=1.20.0,<1.21.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-reticulate: 

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

    pixi global install bioconductor-velociraptor

to add into an existing workspace instead, run::

    pixi add bioconductor-velociraptor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-velociraptor

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-velociraptor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-velociraptor:<tag>

(see `bioconductor-velociraptor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-velociraptor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-velociraptor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-velociraptor
   :alt:   (downloads)
.. |docker_bioconductor-velociraptor| image:: https://quay.io/repository/biocontainers/bioconductor-velociraptor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-velociraptor
.. _`bioconductor-velociraptor/tags`: https://quay.io/repository/biocontainers/bioconductor-velociraptor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-velociraptor";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-velociraptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-velociraptor/README.html