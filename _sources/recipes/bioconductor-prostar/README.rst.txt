:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prostar'
.. highlight: bash

bioconductor-prostar
====================

.. conda:recipe:: bioconductor-prostar
   :replaces_section_title:
   :noindex:

   Provides a GUI for DAPAR

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Prostar.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prostar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostar/meta.yaml>`_

   This package provides a GUI interface for the DAPAR package. The package Prostar \(Proteomics statistical analysis with R\) is a Bioconductor distributed R package which provides all the necessary functions to analyze quantitative data from label\-free proteomics experiments. Contrarily to most other similar R packages\, it is endowed with rich and user\-friendly graphical interfaces\, so that no programming skill is required.


.. conda:package:: bioconductor-prostar

   |downloads_bioconductor-prostar| |docker_bioconductor-prostar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.3-0</code>,  <code>1.32.1-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.3-0</code>,  <code>1.22.8-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.34.3-0``,  ``1.32.1-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.3-0``,  ``1.22.8-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.7-0``,  ``1.14.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-dapar: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-dapardata: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-colourpicker: 
   :depends on r-data.table: 
   :depends on r-dt: 
   :depends on r-future: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-gtools: 
   :depends on r-highcharter: 
   :depends on r-htmlwidgets: 
   :depends on r-later: 
   :depends on r-markdown: 
   :depends on r-promises: 
   :depends on r-r.utils: 
   :depends on r-rclipboard: 
   :depends on r-rcolorbrewer: 
   :depends on r-rhandsontable: 
   :depends on r-sass: 
   :depends on r-shiny: 
   :depends on r-shinyace: 
   :depends on r-shinybs: 
   :depends on r-shinycssloaders: 
   :depends on r-shinyjqui: 
   :depends on r-shinyjs: 
   :depends on r-shinythemes: 
   :depends on r-shinytree: 
   :depends on r-shinywidgets: 
   :depends on r-tibble: 
   :depends on r-vioplot: 
   :depends on r-webshot: 
   :depends on r-xml: 

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

    pixi global install bioconductor-prostar

to add into an existing workspace instead, run::

    pixi add bioconductor-prostar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-prostar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-prostar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-prostar:<tag>

(see `bioconductor-prostar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-prostar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prostar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prostar
   :alt:   (downloads)
.. |docker_bioconductor-prostar| image:: https://quay.io/repository/biocontainers/bioconductor-prostar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prostar
.. _`bioconductor-prostar/tags`: https://quay.io/repository/biocontainers/bioconductor-prostar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prostar";
        var versions = ["1.42.0","1.38.0","1.34.3","1.32.1","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prostar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prostar/README.html