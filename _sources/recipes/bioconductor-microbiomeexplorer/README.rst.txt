:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomeexplorer'
.. highlight: bash

bioconductor-microbiomeexplorer
===============================

.. conda:recipe:: bioconductor-microbiomeexplorer
   :replaces_section_title:
   :noindex:

   Microbiome Exploration App

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/microbiomeExplorer.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-microbiomeexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomeexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomeexplorer/meta.yaml>`_

   The MicrobiomeExplorer R package is designed to facilitate the analysis and visualization of marker\-gene survey feature data. It allows a user to perform and visualize typical microbiome analytical workflows either through the command line or an interactive Shiny application included with the package. In addition to applying common analytical workflows the application enables automated analysis report generation.


.. conda:package:: bioconductor-microbiomeexplorer

   |downloads_bioconductor-microbiomeexplorer| |docker_bioconductor-microbiomeexplorer|

   :versions:
      
      

      ``1.20.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biomformat: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-metagenomeseq: ``>=1.52.0,<1.53.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-broom: 
   :depends on r-car: 
   :depends on r-dplyr: 
   :depends on r-dt: ``>=0.12.0``
   :depends on r-forcats: 
   :depends on r-heatmaply: 
   :depends on r-knitr: 
   :depends on r-lubridate: 
   :depends on r-magrittr: 
   :depends on r-matrixstats: 
   :depends on r-plotly: ``>=4.9.1``
   :depends on r-purrr: 
   :depends on r-rcolorbrewer: 
   :depends on r-readr: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-rmarkdown: ``>=1.9.0``
   :depends on r-shiny: 
   :depends on r-shinycssloaders: 
   :depends on r-shinydashboard: 
   :depends on r-shinyjs: ``>=2.0.0``
   :depends on r-shinywidgets: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-vegan: 

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

    pixi global install bioconductor-microbiomeexplorer

to add into an existing workspace instead, run::

    pixi add bioconductor-microbiomeexplorer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-microbiomeexplorer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-microbiomeexplorer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-microbiomeexplorer:<tag>

(see `bioconductor-microbiomeexplorer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-microbiomeexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomeexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomeexplorer
   :alt:   (downloads)
.. |docker_bioconductor-microbiomeexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomeexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomeexplorer
.. _`bioconductor-microbiomeexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomeexplorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiomeexplorer";
        var versions = ["1.20.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomeexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomeexplorer/README.html