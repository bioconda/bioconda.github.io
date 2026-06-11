:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gedi'
.. highlight: bash

bioconductor-gedi
=================

.. conda:recipe:: bioconductor-gedi
   :replaces_section_title:
   :noindex:

   Defining and visualizing the distances between different genesets

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/GeDi.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gedi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gedi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gedi/meta.yaml>`_

   The package provides different distances measurements to calculate the difference between genesets. Based on these scores the genesets are clustered and visualized as graph. This is all presented in an interactive Shiny application for easy usage.


.. conda:package:: bioconductor-gedi

   |downloads_bioconductor-gedi| |docker_bioconductor-gedi|

   :versions:
      
      

      ``1.6.1-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-simona: ``>=1.8.0,<1.9.0``
   :depends on bioconductor-stringdb: ``>=2.22.0,<2.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bs4dash: 
   :depends on r-circlize: 
   :depends on r-cluster: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-expm: 
   :depends on r-fontawesome: 
   :depends on r-ggdendro: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-plotly: 
   :depends on r-proxyc: 
   :depends on r-rcolorbrewer: 
   :depends on r-readxl: 
   :depends on r-rintrojs: 
   :depends on r-scales: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-shinycssloaders: 
   :depends on r-shinywidgets: 
   :depends on r-tm: 
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

    pixi global install bioconductor-gedi

to add into an existing workspace instead, run::

    pixi add bioconductor-gedi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gedi

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gedi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gedi:<tag>

(see `bioconductor-gedi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gedi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gedi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gedi
   :alt:   (downloads)
.. |docker_bioconductor-gedi| image:: https://quay.io/repository/biocontainers/bioconductor-gedi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gedi
.. _`bioconductor-gedi/tags`: https://quay.io/repository/biocontainers/bioconductor-gedi?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-gedi";
      var versions = ["1.6.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-gedi"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-gedi"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-gedi"></div>



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
         
            // Build cdf plot for bioconductor-gedi
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gedi/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-gedi', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-gedi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gedi/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-gedi', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-gedi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gedi/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-gedi', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gedi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gedi/README.html