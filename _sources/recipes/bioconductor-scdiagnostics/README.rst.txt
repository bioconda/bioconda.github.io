:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdiagnostics'
.. highlight: bash

bioconductor-scdiagnostics
==========================

.. conda:recipe:: bioconductor-scdiagnostics
   :replaces_section_title:
   :noindex:

   Cell type annotation diagnostics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scDiagnostics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scdiagnostics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdiagnostics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdiagnostics/meta.yaml>`_

   The scDiagnostics package provides diagnostic plots to assess the quality of cell type assignments from single cell gene expression profiles. The implemented functionality allows to assess the reliability of cell type annotations\, investigate gene expression patterns\, and explore relationships between different cell types in query and reference datasets allowing users to detect potential misalignments between reference and query datasets. The package also provides visualization capabilities for diagnostics purposes.


.. conda:package:: bioconductor-scdiagnostics

   |downloads_bioconductor-scdiagnostics| |docker_bioconductor-scdiagnostics|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-bluster: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cramer: 
   :depends on r-fnn: 
   :depends on r-ggally: 
   :depends on r-ggplot2: 
   :depends on r-ggridges: 
   :depends on r-igraph: 
   :depends on r-isotree: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-ranger: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-stringr: 
   :depends on r-transport: 

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

    pixi global install bioconductor-scdiagnostics

to add into an existing workspace instead, run::

    pixi add bioconductor-scdiagnostics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scdiagnostics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scdiagnostics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scdiagnostics:<tag>

(see `bioconductor-scdiagnostics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scdiagnostics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdiagnostics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdiagnostics
   :alt:   (downloads)
.. |docker_bioconductor-scdiagnostics| image:: https://quay.io/repository/biocontainers/bioconductor-scdiagnostics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdiagnostics
.. _`bioconductor-scdiagnostics/tags`: https://quay.io/repository/biocontainers/bioconductor-scdiagnostics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scdiagnostics";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdiagnostics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdiagnostics/README.html