:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccplotr'
.. highlight: bash

bioconductor-ccplotr
====================

.. conda:recipe:: bioconductor-ccplotr
   :replaces_section_title:
   :noindex:

   Plots For Visualising Cell\-Cell Interactions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CCPlotR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ccplotr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccplotr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccplotr/meta.yaml>`_

   CCPlotR is an R package for visualising results from tools that predict cell\-cell interactions from single\-cell RNA\-seq data. These plots are generic and can be used to visualise results from multiple tools such as Liana\, CellPhoneDB\, NATMI etc.


.. conda:package:: bioconductor-ccplotr

   |downloads_bioconductor-ccplotr| |docker_bioconductor-ccplotr|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-dplyr: 
   :depends on r-forcats: 
   :depends on r-ggbump: 
   :depends on r-ggh4x: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-ggtext: 
   :depends on r-igraph: 
   :depends on r-patchwork: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-scales: 
   :depends on r-scatterpie: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-ccplotr

to add into an existing workspace instead, run::

    pixi add bioconductor-ccplotr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ccplotr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ccplotr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ccplotr:<tag>

(see `bioconductor-ccplotr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ccplotr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccplotr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ccplotr
   :alt:   (downloads)
.. |docker_bioconductor-ccplotr| image:: https://quay.io/repository/biocontainers/bioconductor-ccplotr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccplotr
.. _`bioconductor-ccplotr/tags`: https://quay.io/repository/biocontainers/bioconductor-ccplotr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ccplotr";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccplotr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccplotr/README.html