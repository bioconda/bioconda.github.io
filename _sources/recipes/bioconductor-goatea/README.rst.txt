:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-goatea'
.. highlight: bash

bioconductor-goatea
===================

.. conda:recipe:: bioconductor-goatea
   :replaces_section_title:
   :noindex:

   Interactive Exploration of GSEA by the GOAT Method

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/goatea.html
   :license: Apache License (>= 2)
   :recipe: /`bioconductor-goatea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goatea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goatea/meta.yaml>`_

   Geneset Ordinal Association Test Enrichment Analysis \(GOATEA\) provides a \'Shiny\' interface with interactive visualizations and utility functions for performing and exploring automated gene set enrichment analysis using the \'GOAT\' package. \'GOATEA\' is designed to support large\-scale and user\-friendly enrichment workflows across multiple gene lists and comparisons\, with flexible plotting and output options. Visualizations pre\-enrichment include interactive \'Volcano\' and \'UpSet\' \(overlap\) plots. Visualizations post\-enrichment include interactive geneset dotplot\, geneset treeplot\, gene\-effectsize heatmap\, gene\-geneset heatmap and \'STRING\' database of protein\-protein\-interactions network graph. \'GOAT\' reference\: Frank Koopmans \(2024\) \<doi\:10.1038\/s42003\-024\-06454\-5\>.


.. conda:package:: bioconductor-goatea

   |downloads_bioconductor-goatea| |docker_bioconductor-goatea|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-enhancedvolcano: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-enrichplot: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-interactivecomplexheatmap: ``>=1.18.0,<1.19.0``
   :depends on r-arrow: ``>=18.1.0.1``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=1.1.4``
   :depends on r-dt: ``>=0.33``
   :depends on r-ggplot2: ``>=3.5.1``
   :depends on r-goat: ``>=1.0``
   :depends on r-htmltools: ``>=0.5.8.1``
   :depends on r-igraph: ``>=2.1.4``
   :depends on r-openxlsx: ``>=4.2.7.1``
   :depends on r-plotly: ``>=4.10.4``
   :depends on r-plyr: ``>=1.8.9``
   :depends on r-purrr: ``>=1.0.2``
   :depends on r-rlang: ``>=1.1.6``
   :depends on r-shiny: ``>=1.10.0``
   :depends on r-shinydashboard: ``>=0.7.2``
   :depends on r-shinyjqui: ``>=0.4.1``
   :depends on r-shinyjs: ``>=2.1.0``
   :depends on r-tibble: ``>=3.2.1``
   :depends on r-tidyr: ``>=1.3.1``
   :depends on r-upsetjs: ``>=1.11.1``
   :depends on r-visnetwork: ``>=2.1.2``

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

    pixi global install bioconductor-goatea

to add into an existing workspace instead, run::

    pixi add bioconductor-goatea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-goatea

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-goatea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-goatea:<tag>

(see `bioconductor-goatea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-goatea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-goatea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-goatea
   :alt:   (downloads)
.. |docker_bioconductor-goatea| image:: https://quay.io/repository/biocontainers/bioconductor-goatea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-goatea
.. _`bioconductor-goatea/tags`: https://quay.io/repository/biocontainers/bioconductor-goatea?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-goatea";
      var versions = ["1.0.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-goatea"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-goatea"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-goatea"></div>



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
         
            // Build cdf plot for bioconductor-goatea
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-goatea/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-goatea', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-goatea
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-goatea/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-goatea', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-goatea
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-goatea/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-goatea', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-goatea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-goatea/README.html