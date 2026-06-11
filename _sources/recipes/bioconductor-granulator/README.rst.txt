:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-granulator'
.. highlight: bash

bioconductor-granulator
=======================

.. conda:recipe:: bioconductor-granulator
   :replaces_section_title:
   :noindex:

   Rapid benchmarking of methods for \*in silico\* deconvolution of bulk RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/granulator.html
   :license: GPL-3
   :recipe: /`bioconductor-granulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-granulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-granulator/meta.yaml>`_

   granulator is an R package for the cell type deconvolution of heterogeneous tissues based on bulk RNA\-seq data or single cell RNA\-seq expression profiles. The package provides a unified testing interface to rapidly run and benchmark multiple state\-of\-the\-art deconvolution methods. Data for the deconvolution of peripheral blood mononuclear cells \(PBMCs\) into individual immune cell types is provided as well.


.. conda:package:: bioconductor-granulator

   |downloads_bioconductor-granulator| |docker_bioconductor-granulator|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-dtangle: 
   :depends on r-e1071: 
   :depends on r-epir: 
   :depends on r-ggplot2: 
   :depends on r-ggplotify: 
   :depends on r-limsolve: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-nnls: 
   :depends on r-pheatmap: 
   :depends on r-purrr: 
   :depends on r-rlang: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-granulator

to add into an existing workspace instead, run::

    pixi add bioconductor-granulator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-granulator

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-granulator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-granulator:<tag>

(see `bioconductor-granulator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-granulator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-granulator.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-granulator
   :alt:   (downloads)
.. |docker_bioconductor-granulator| image:: https://quay.io/repository/biocontainers/bioconductor-granulator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-granulator
.. _`bioconductor-granulator/tags`: https://quay.io/repository/biocontainers/bioconductor-granulator?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-granulator";
      var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-granulator"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-granulator"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-granulator"></div>



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
         
            // Build cdf plot for bioconductor-granulator
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-granulator/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-granulator', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-granulator
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-granulator/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-granulator', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-granulator
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-granulator/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-granulator', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-granulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-granulator/README.html