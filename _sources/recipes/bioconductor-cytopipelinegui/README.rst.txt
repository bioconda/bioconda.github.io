:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytopipelinegui'
.. highlight: bash

bioconductor-cytopipelinegui
============================

.. conda:recipe:: bioconductor-cytopipelinegui
   :replaces_section_title:
   :noindex:

   GUI\'s for visualization of flow cytometry data analysis pipelines

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/CytoPipelineGUI.html
   :license: GPL-3
   :recipe: /`bioconductor-cytopipelinegui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytopipelinegui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytopipelinegui/meta.yaml>`_

   This package is the companion of the \`CytoPipeline\` package. It provides GUI\'s \(shiny apps\) for the visualization of flow cytometry data analysis pipelines that are run with \`CytoPipeline\`. Two shiny applications are provided\, i.e. an interactive flow frame assessment and comparison tool and an interactive scale transformations visualization and adjustment tool.


.. conda:package:: bioconductor-cytopipelinegui

   |downloads_bioconductor-cytopipelinegui| |docker_bioconductor-cytopipelinegui|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-cytopipeline: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-plotly: 
   :depends on r-shiny: 

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

    pixi global install bioconductor-cytopipelinegui

to add into an existing workspace instead, run::

    pixi add bioconductor-cytopipelinegui

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cytopipelinegui

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cytopipelinegui

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cytopipelinegui:<tag>

(see `bioconductor-cytopipelinegui/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cytopipelinegui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytopipelinegui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytopipelinegui
   :alt:   (downloads)
.. |docker_bioconductor-cytopipelinegui| image:: https://quay.io/repository/biocontainers/bioconductor-cytopipelinegui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytopipelinegui
.. _`bioconductor-cytopipelinegui/tags`: https://quay.io/repository/biocontainers/bioconductor-cytopipelinegui?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-cytopipelinegui";
      var versions = ["1.8.0","1.4.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-cytopipelinegui"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-cytopipelinegui"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-cytopipelinegui"></div>



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
         
            // Build cdf plot for bioconductor-cytopipelinegui
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cytopipelinegui/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-cytopipelinegui', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-cytopipelinegui
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cytopipelinegui/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-cytopipelinegui', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-cytopipelinegui
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cytopipelinegui/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-cytopipelinegui', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytopipelinegui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytopipelinegui/README.html