:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-catscradle'
.. highlight: bash

bioconductor-catscradle
=======================

.. conda:recipe:: bioconductor-catscradle
   :replaces_section_title:
   :noindex:

   This package provides methods for analysing spatial transcriptomics data and for discovering gene clusters

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/CatsCradle.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-catscradle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catscradle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-catscradle/meta.yaml>`_

   This package addresses two broad areas.  It allows for in\-depth analysis of spatial transcriptomic data by identifying tissue neighbourhoods.  These are contiguous regions of tissue surrounding individual cells.  \'CatsCradle\' allows for the categorisation of neighbourhoods by the cell types contained in them and the genes expressed in them.  In particular\, it produces Seurat objects whose individual elements are neighbourhoods rather than cells.  In addition\, it enables the categorisation and annotation of genes by producing Seurat objects whose elements are genes.


.. conda:package:: bioconductor-catscradle

   |downloads_bioconductor-catscradle| |docker_bioconductor-catscradle|

   :versions:
      
      

      ``1.4.2-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-abind: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-geometry: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-msigdbr: 
   :depends on r-networkd3: 
   :depends on r-pheatmap: 
   :depends on r-pracma: 
   :depends on r-rdist: 
   :depends on r-reshape2: 
   :depends on r-rfast: 
   :depends on r-seurat: ``>=5.0.1``
   :depends on r-seuratobject: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-catscradle

to add into an existing workspace instead, run::

    pixi add bioconductor-catscradle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-catscradle

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-catscradle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-catscradle:<tag>

(see `bioconductor-catscradle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-catscradle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-catscradle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-catscradle
   :alt:   (downloads)
.. |docker_bioconductor-catscradle| image:: https://quay.io/repository/biocontainers/bioconductor-catscradle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-catscradle
.. _`bioconductor-catscradle/tags`: https://quay.io/repository/biocontainers/bioconductor-catscradle?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-catscradle";
      var versions = ["1.4.2","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-catscradle"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-catscradle"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-catscradle"></div>



   ..
      Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for bioconductor-catscradle
            try {
               const cdf_spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/cdf.vl.json")
               if (!cdf_spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_spec_resp.status}.`);
               }
               const cdf_spec = await cdf_spec_resp.json();
               const cdf_data_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cdf.json")
               if (!cdf_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_data_resp.status}.`);
               }
               const cdf_plot_data = await cdf_data_resp.json();
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-catscradle/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-catscradle', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-catscradle
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-catscradle/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-catscradle', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-catscradle
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-catscradle/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-catscradle', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-catscradle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-catscradle/README.html