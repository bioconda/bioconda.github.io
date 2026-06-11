:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rflomics'
.. highlight: bash

bioconductor-rflomics
=====================

.. conda:recipe:: bioconductor-rflomics
   :replaces_section_title:
   :noindex:

   Interactive web application for Omics\-data analysis

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/RFLOMICS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rflomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rflomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rflomics/meta.yaml>`_

   R\-package with shiny interface\, provides a framework for the analysis of transcriptomics\, proteomics and\/or metabolomics data. The interface offers a guided experience for the user\, from the definition of the experimental design to the integration of several omics table together. A report can be generated with all settings and analysis results.


.. conda:package:: bioconductor-rflomics

   |downloads_bioconductor-rflomics| |docker_bioconductor-rflomics|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-coseq: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-enrichplot: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-mixomics: ``>=6.34.0,<6.35.0``
   :depends on bioconductor-mofa2: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-org.at.tair.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-factominer: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggrepel: 
   :depends on r-htmltools: 
   :depends on r-httr: 
   :depends on r-knitr: 
   :depends on r-magrittr: 
   :depends on r-plotly: 
   :depends on r-purrr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-reticulate: 
   :depends on r-rmarkdown: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-shinydashboard: 
   :depends on r-shinywidgets: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 
   :depends on r-upsetr: 
   :depends on r-vroom: 

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

    pixi global install bioconductor-rflomics

to add into an existing workspace instead, run::

    pixi add bioconductor-rflomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rflomics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rflomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rflomics:<tag>

(see `bioconductor-rflomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rflomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rflomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rflomics
   :alt:   (downloads)
.. |docker_bioconductor-rflomics| image:: https://quay.io/repository/biocontainers/bioconductor-rflomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rflomics
.. _`bioconductor-rflomics/tags`: https://quay.io/repository/biocontainers/bioconductor-rflomics?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-rflomics";
      var versions = ["1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-rflomics"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-rflomics"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-rflomics"></div>



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
         
            // Build cdf plot for bioconductor-rflomics
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-rflomics/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-rflomics', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-rflomics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-rflomics/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-rflomics', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-rflomics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-rflomics/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-rflomics', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rflomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rflomics/README.html