:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ribocrypt'
.. highlight: bash

bioconductor-ribocrypt
======================

.. conda:recipe:: bioconductor-ribocrypt
   :replaces_section_title:
   :noindex:

   Interactive visualization in genomics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RiboCrypt.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ribocrypt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribocrypt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribocrypt/meta.yaml>`_

   R Package for interactive visualization and browsing NGS data. It contains a browser for both transcript and genomic coordinate view. In addition a QC and general metaplots are included\, among others differential translation plots and gene expression plots. The package is still under development.


.. conda:package:: bioconductor-ribocrypt

   |downloads_bioconductor-ribocrypt| |docker_bioconductor-ribocrypt|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-orfik: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bslib: 
   :depends on r-cowplot: 
   :depends on r-crosstalk: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-fst: 
   :depends on r-ggplot2: 
   :depends on r-htmlwidgets: 
   :depends on r-httr: 
   :depends on r-jsonlite: 
   :depends on r-knitr: 
   :depends on r-markdown: 
   :depends on r-nglviewer: 
   :depends on r-plotly: 
   :depends on r-rclipboard: 
   :depends on r-rcurl: 
   :depends on r-rlang: 
   :depends on r-shiny: 
   :depends on r-shinycssloaders: 
   :depends on r-shinyhelper: 
   :depends on r-shinyjqui: 
   :depends on r-shinyjs: 
   :depends on r-shinywidgets: 
   :depends on r-stringr: 
   :depends on r-writexl: 

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

    pixi global install bioconductor-ribocrypt

to add into an existing workspace instead, run::

    pixi add bioconductor-ribocrypt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ribocrypt

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ribocrypt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ribocrypt:<tag>

(see `bioconductor-ribocrypt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ribocrypt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ribocrypt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ribocrypt
   :alt:   (downloads)
.. |docker_bioconductor-ribocrypt| image:: https://quay.io/repository/biocontainers/bioconductor-ribocrypt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ribocrypt
.. _`bioconductor-ribocrypt/tags`: https://quay.io/repository/biocontainers/bioconductor-ribocrypt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ribocrypt";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ribocrypt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ribocrypt/README.html