:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sangeranalyser'
.. highlight: bash

bioconductor-sangeranalyser
===========================

.. conda:recipe:: bioconductor-sangeranalyser
   :replaces_section_title:
   :noindex:

   sangeranalyseR\: a suite of functions for the analysis of Sanger sequence data in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sangeranalyseR.html
   :license: GPL-2
   :recipe: /`bioconductor-sangeranalyser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sangeranalyser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sangeranalyser/meta.yaml>`_

   This package builds on sangerseqR to allow users to create contigs from collections of Sanger sequencing reads. It provides a wide range of options for a number of commonly\-performed actions including read trimming\, detecting secondary peaks\, and detecting indels using a reference sequence. All parameters can be adjusted interactively either in R or in the associated Shiny applications. There is extensive online documentation\, and the package can outputs detailed HTML reports\, including chromatograms.


.. conda:package:: bioconductor-sangeranalyser

   |downloads_bioconductor-sangeranalyser| |docker_bioconductor-sangeranalyser|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-decipher: ``>=3.6.0,<3.7.0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-sangerseqr: ``>=1.46.0,<1.47.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dt: 
   :depends on r-excelr: 
   :depends on r-ggdendro: 
   :depends on r-gridextra: 
   :depends on r-knitr: ``>=1.33``
   :depends on r-logger: 
   :depends on r-openxlsx: 
   :depends on r-plotly: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: ``>=2.9``
   :depends on r-seqinr: 
   :depends on r-shiny: 
   :depends on r-shinycssloaders: 
   :depends on r-shinydashboard: 
   :depends on r-shinyjs: 
   :depends on r-shinywidgets: 
   :depends on r-stringr: 
   :depends on r-zeallot: 

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

    pixi global install bioconductor-sangeranalyser

to add into an existing workspace instead, run::

    pixi add bioconductor-sangeranalyser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sangeranalyser

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sangeranalyser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sangeranalyser:<tag>

(see `bioconductor-sangeranalyser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sangeranalyser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sangeranalyser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sangeranalyser
   :alt:   (downloads)
.. |docker_bioconductor-sangeranalyser| image:: https://quay.io/repository/biocontainers/bioconductor-sangeranalyser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sangeranalyser
.. _`bioconductor-sangeranalyser/tags`: https://quay.io/repository/biocontainers/bioconductor-sangeranalyser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sangeranalyser";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sangeranalyser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sangeranalyser/README.html