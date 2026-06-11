:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialcpie'
.. highlight: bash

bioconductor-spatialcpie
========================

.. conda:recipe:: bioconductor-spatialcpie
   :replaces_section_title:
   :noindex:

   Cluster analysis of Spatial Transcriptomics data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/SpatialCPie.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spatialcpie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialcpie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialcpie/meta.yaml>`_

   SpatialCPie is an R package designed to facilitate cluster evaluation for spatial transcriptomics data by providing intuitive visualizations that display the relationships between clusters in order to guide the user during cluster identification and other downstream applications. The package is built around a shiny \"gadget\" to allow the exploration of the data with multiple plots in parallel and an interactive UI. The user can easily toggle between different cluster resolutions in order to choose the most appropriate visual cues.


.. conda:package:: bioconductor-spatialcpie

   |downloads_bioconductor-spatialcpie| |docker_bioconductor-spatialcpie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-colorspace: ``>=1.3-2``
   :depends on r-data.table: ``>=1.12.2``
   :depends on r-digest: ``>=0.6.21``
   :depends on r-dplyr: ``>=0.7.6``
   :depends on r-ggforce: ``>=0.3.0``
   :depends on r-ggiraph: ``>=0.5.0``
   :depends on r-ggplot2: ``>=3.0.0``
   :depends on r-ggrepel: ``>=0.8.0``
   :depends on r-igraph: ``>=1.2.2``
   :depends on r-lpsolve: ``>=5.6.13``
   :depends on r-purrr: ``>=0.2.5``
   :depends on r-readr: ``>=1.1.1``
   :depends on r-rlang: ``>=0.2.2``
   :depends on r-shiny: ``>=1.1.0``
   :depends on r-shinycssloaders: ``>=0.2.0``
   :depends on r-shinyjs: ``>=1.0``
   :depends on r-shinywidgets: ``>=0.4.8``
   :depends on r-tibble: ``>=1.4.2``
   :depends on r-tidyr: ``>=0.8.1``
   :depends on r-tidyselect: ``>=0.2.4``
   :depends on r-zeallot: ``>=0.1.0``

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

    pixi global install bioconductor-spatialcpie

to add into an existing workspace instead, run::

    pixi add bioconductor-spatialcpie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spatialcpie

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spatialcpie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spatialcpie:<tag>

(see `bioconductor-spatialcpie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spatialcpie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialcpie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialcpie
   :alt:   (downloads)
.. |docker_bioconductor-spatialcpie| image:: https://quay.io/repository/biocontainers/bioconductor-spatialcpie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialcpie
.. _`bioconductor-spatialcpie/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialcpie?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-spatialcpie";
      var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-spatialcpie"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-spatialcpie"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-spatialcpie"></div>



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
         
            // Build cdf plot for bioconductor-spatialcpie
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-spatialcpie/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-spatialcpie', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-spatialcpie
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-spatialcpie/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-spatialcpie', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-spatialcpie
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-spatialcpie/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-spatialcpie', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialcpie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialcpie/README.html