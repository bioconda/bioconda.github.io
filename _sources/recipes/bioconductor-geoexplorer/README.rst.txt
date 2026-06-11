:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geoexplorer'
.. highlight: bash

bioconductor-geoexplorer
========================

.. conda:recipe:: bioconductor-geoexplorer
   :replaces_section_title:
   :noindex:

   GEOexplorer\: a webserver for gene expression analysis and visualisation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GEOexplorer.html
   :license: GPL-3
   :recipe: /`bioconductor-geoexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geoexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geoexplorer/meta.yaml>`_

   GEOexplorer is a webserver and R\/Bioconductor package and web application that enables users to perform gene expression analysis. The development of GEOexplorer was made possible because of the excellent code provided by GEO2R \(https\: \/\/www.ncbi.nlm.nih.gov\/geo\/geo2r\/\).


.. conda:package:: bioconductor-geoexplorer

   |downloads_bioconductor-geoexplorer| |docker_bioconductor-geoexplorer|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-geoquery: ``>=2.74.0,<2.75.0``
   :depends on bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends on bioconductor-sva: ``>=3.54.0,<3.55.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-car: 
   :depends on r-dt: 
   :depends on r-enrichr: 
   :depends on r-factoextra: 
   :depends on r-ggplot2: 
   :depends on r-heatmaply: 
   :depends on r-htmltools: 
   :depends on r-httr: 
   :depends on r-knitr: 
   :depends on r-markdown: 
   :depends on r-pheatmap: 
   :depends on r-plotly: 
   :depends on r-r.utils: 
   :depends on r-readxl: 
   :depends on r-scales: 
   :depends on r-shiny: 
   :depends on r-shinybusy: 
   :depends on r-shinycssloaders: 
   :depends on r-shinyheatmaply: 
   :depends on r-stringr: 
   :depends on r-umap: 
   :depends on r-xfun: 
   :depends on r-xml: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-geoexplorer

to add into an existing workspace instead, run::

    pixi add bioconductor-geoexplorer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-geoexplorer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-geoexplorer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-geoexplorer:<tag>

(see `bioconductor-geoexplorer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-geoexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geoexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geoexplorer
   :alt:   (downloads)
.. |docker_bioconductor-geoexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-geoexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geoexplorer
.. _`bioconductor-geoexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-geoexplorer?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-geoexplorer";
      var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-geoexplorer"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-geoexplorer"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-geoexplorer"></div>



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
         
            // Build cdf plot for bioconductor-geoexplorer
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-geoexplorer/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-geoexplorer', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-geoexplorer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-geoexplorer/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-geoexplorer', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-geoexplorer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-geoexplorer/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-geoexplorer', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geoexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geoexplorer/README.html