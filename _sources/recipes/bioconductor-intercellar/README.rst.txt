:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-intercellar'
.. highlight: bash

bioconductor-intercellar
========================

.. conda:recipe:: bioconductor-intercellar
   :replaces_section_title:
   :noindex:

   InterCellar\: an R\-Shiny app for interactive analysis and exploration of cell\-cell communication in single\-cell transcriptomics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/InterCellar.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-intercellar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intercellar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intercellar/meta.yaml>`_

   InterCellar is implemented as an R\/Bioconductor Package containing a Shiny app that allows users to interactively analyze cell\-cell communication from scRNA\-seq data. Starting from precomputed ligand\-receptor interactions\, InterCellar provides filtering options\, annotations and multiple visualizations to explore clusters\, genes and functions. Finally\, based on functional annotation from Gene Ontology and pathway databases\, InterCellar implements data\-driven analyses to investigate cell\-cell communication in one or multiple conditions.


.. conda:package:: bioconductor-intercellar

   |downloads_bioconductor-intercellar| |docker_bioconductor-intercellar|

   :versions:
      
      

      ``2.16.0-0``,  ``2.12.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.0.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-colorspace: 
   :depends on r-colourpicker: 
   :depends on r-config: 
   :depends on r-data.table: 
   :depends on r-dendextend: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-factoextra: 
   :depends on r-fmsb: 
   :depends on r-fs: 
   :depends on r-ggplot2: 
   :depends on r-golem: 
   :depends on r-htmltools: 
   :depends on r-htmlwidgets: 
   :depends on r-igraph: 
   :depends on r-plotly: 
   :depends on r-plyr: 
   :depends on r-readxl: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-shiny: 
   :depends on r-shinyalert: 
   :depends on r-shinycssloaders: 
   :depends on r-shinydashboard: 
   :depends on r-shinyfeedback: 
   :depends on r-shinyfiles: 
   :depends on r-signal: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-umap: 
   :depends on r-visnetwork: 
   :depends on r-wordcloud2: 

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

    pixi global install bioconductor-intercellar

to add into an existing workspace instead, run::

    pixi add bioconductor-intercellar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-intercellar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-intercellar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-intercellar:<tag>

(see `bioconductor-intercellar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-intercellar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intercellar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-intercellar
   :alt:   (downloads)
.. |docker_bioconductor-intercellar| image:: https://quay.io/repository/biocontainers/bioconductor-intercellar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intercellar
.. _`bioconductor-intercellar/tags`: https://quay.io/repository/biocontainers/bioconductor-intercellar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-intercellar";
        var versions = ["2.16.0","2.12.0","2.8.0","2.6.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intercellar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intercellar/README.html