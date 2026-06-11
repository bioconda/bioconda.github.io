:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isanalytics'
.. highlight: bash

bioconductor-isanalytics
========================

.. conda:recipe:: bioconductor-isanalytics
   :replaces_section_title:
   :noindex:

   Analyze gene therapy vector insertion sites data identified from genomics next generation sequencing reads for clonal tracking studies

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/ISAnalytics.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-isanalytics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isanalytics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isanalytics/meta.yaml>`_

   In gene therapy\, stem cells are modified using viral vectors to deliver the therapeutic transgene and replace functional properties since the genetic modification is stable and inherited in all cell progeny. The retrieval and mapping of the sequences flanking the virus\-host DNA junctions allows the identification of insertion sites \(IS\)\, essential for monitoring the evolution of genetically modified cells in vivo. A comprehensive toolkit for the analysis of IS is required to foster clonal trackign studies and supporting the assessment of safety and long term efficacy in vivo. This package is aimed at \(1\) supporting automation of IS workflow\, \(2\) performing base and advance analysis for IS tracking \(clonal abundance\, clonal expansions and statistics for insertional mutagenesis\, etc.\)\, \(3\) providing basic biology insights of transduced stem cells in vivo.


.. conda:package:: bioconductor-isanalytics

   |downloads_bioconductor-isanalytics| |docker_bioconductor-isanalytics|

   :versions:
      
      

      ``1.20.1-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bslib: 
   :depends on r-data.table: 
   :depends on r-datamods: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-forcats: 
   :depends on r-fs: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-glue: 
   :depends on r-lifecycle: 
   :depends on r-lubridate: 
   :depends on r-purrr: 
   :depends on r-readr: 
   :depends on r-readxl: 
   :depends on r-rlang: 
   :depends on r-shiny: 
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

    pixi global install bioconductor-isanalytics

to add into an existing workspace instead, run::

    pixi add bioconductor-isanalytics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-isanalytics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-isanalytics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-isanalytics:<tag>

(see `bioconductor-isanalytics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-isanalytics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isanalytics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isanalytics
   :alt:   (downloads)
.. |docker_bioconductor-isanalytics| image:: https://quay.io/repository/biocontainers/bioconductor-isanalytics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isanalytics
.. _`bioconductor-isanalytics/tags`: https://quay.io/repository/biocontainers/bioconductor-isanalytics?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-isanalytics";
      var versions = ["1.20.1","1.12.0","1.10.1","1.8.0","1.4.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-isanalytics"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-isanalytics"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-isanalytics"></div>



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
         
            // Build cdf plot for bioconductor-isanalytics
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-isanalytics/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-isanalytics', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-isanalytics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-isanalytics/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-isanalytics', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-isanalytics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-isanalytics/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-isanalytics', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isanalytics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isanalytics/README.html