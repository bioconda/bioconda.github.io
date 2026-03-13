:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pedixplorer'
.. highlight: bash

bioconductor-pedixplorer
========================

.. conda:recipe:: bioconductor-pedixplorer
   :replaces_section_title:
   :noindex:

   Pedigree Functions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Pedixplorer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pedixplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pedixplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pedixplorer/meta.yaml>`_

   Routines to handle family data with a Pedigree object. The initial purpose was to create correlation structures that describe family relationships such as kinship and identity\-by\-descent\, which can be used to model family data in mixed effects models\, such as in the coxme function. Also includes a tool for Pedigree drawing which is focused on producing compact layouts without intervention. Recent additions include utilities to trim the Pedigree object with various criteria\, and kinship for the X chromosome.


.. conda:package:: bioconductor-pedixplorer

   |downloads_bioconductor-pedixplorer| |docker_bioconductor-pedixplorer|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-colourpicker: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-htmlwidgets: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-plotly: 
   :depends on r-plyr: 
   :depends on r-quadprog: 
   :depends on r-readxl: 
   :depends on r-shiny: 
   :depends on r-shinycssloaders: 
   :depends on r-shinyhelper: 
   :depends on r-shinyjqui: 
   :depends on r-shinyjs: 
   :depends on r-shinytoastr: 
   :depends on r-shinywidgets: 
   :depends on r-stringr: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-pedixplorer

to add into an existing workspace instead, run::

    pixi add bioconductor-pedixplorer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pedixplorer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pedixplorer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pedixplorer:<tag>

(see `bioconductor-pedixplorer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pedixplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pedixplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pedixplorer
   :alt:   (downloads)
.. |docker_bioconductor-pedixplorer| image:: https://quay.io/repository/biocontainers/bioconductor-pedixplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pedixplorer
.. _`bioconductor-pedixplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-pedixplorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pedixplorer";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pedixplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pedixplorer/README.html