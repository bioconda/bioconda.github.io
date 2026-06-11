:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tidyheatmap'
.. highlight: bash

r-tidyheatmap
=============

.. conda:recipe:: r-tidyheatmap
   :replaces_section_title:
   :noindex:

   This is a tidy implementation for heatmap.  At the moment it is based on the \(great\) package \'ComplexHeatmap\'.  The goal of this package is to interface a tidy data frame with this powerful tool.  Some of the advantages are\: Row and\/or columns colour annotations are easy to integrate just specifying one parameter \(column names\).  Custom grouping of rows is easy to specify providing a grouped tbl. For example\: df \%\>\% group\_by\(...\).  Labels size adjusted by row and column total number.  Default use of Brewer and Viridis palettes.

   :homepage: https://github.com/stemangiola/tidyHeatmap
   :documentation: https://stemangiola.github.io/tidyHeatmap/articles/introduction.html
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-tidyheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tidyheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tidyheatmap/meta.yaml>`_

   


.. conda:package:: r-tidyheatmap

   |downloads_r-tidyheatmap| |docker_r-tidyheatmap|

   :versions:
      
      

      ``1.13.1-1``,  ``1.13.1-0``,  ``1.12.2-0``,  ``1.11.6-0``,  ``1.11.4-0``,  ``1.8.1-3``,  ``1.8.1-2``,  ``1.8.1-1``,  ``1.8.1-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.2.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: ``>=0.4.8``
   :depends on r-dendextend: 
   :depends on r-dplyr: ``>=0.8.5``
   :depends on r-lifecycle: ``>=0.2.0``
   :depends on r-magrittr: ``>=1.5``
   :depends on r-patchwork: 
   :depends on r-purrr: ``>=0.3.3``
   :depends on r-rcolorbrewer: ``>=1.1``
   :depends on r-rlang: ``>=0.4.5``
   :depends on r-tibble: 
   :depends on r-tidyr: ``>=1.0.3``
   :depends on r-viridis: ``>=0.5.1``

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

    pixi global install r-tidyheatmap

to add into an existing workspace instead, run::

    pixi add r-tidyheatmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-tidyheatmap

Alternatively, to install into a new environment, run::

    conda create -n envname r-tidyheatmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-tidyheatmap:<tag>

(see `r-tidyheatmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-tidyheatmap| image:: https://img.shields.io/conda/dn/bioconda/r-tidyheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tidyheatmap
   :alt:   (downloads)
.. |docker_r-tidyheatmap| image:: https://quay.io/repository/biocontainers/r-tidyheatmap/status
   :target: https://quay.io/repository/biocontainers/r-tidyheatmap
.. _`r-tidyheatmap/tags`: https://quay.io/repository/biocontainers/r-tidyheatmap?tab=tags


.. raw:: html

   <script>
      var package = "r-tidyheatmap";
      var versions = ["1.13.1","1.13.1","1.12.2","1.11.6","1.11.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-tidyheatmap"></div>
   <div style="width: 100%" id="platform_plot_r-tidyheatmap"></div>
   <div style="width: 100%" id="cdf_plot_r-tidyheatmap"></div>



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
         
            // Build cdf plot for r-tidyheatmap
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-tidyheatmap/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-tidyheatmap', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-tidyheatmap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-tidyheatmap/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-tidyheatmap', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-tidyheatmap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-tidyheatmap/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-tidyheatmap', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tidyheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tidyheatmap/README.html