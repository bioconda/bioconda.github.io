:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathlinkr'
.. highlight: bash

bioconductor-pathlinkr
======================

.. conda:recipe:: bioconductor-pathlinkr
   :replaces_section_title:
   :noindex:

   Analyze and interpret RNA\-Seq results

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/pathlinkR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-pathlinkr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathlinkr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathlinkr/meta.yaml>`_

   pathlinkR is an R package designed to facilitate analysis of RNA\-Seq results. Specifically\, our aim with pathlinkR was to provide a number of tools which take a list of DE genes and perform different analyses on them\, aiding with the interpretation of results. Functions are included to perform pathway enrichment\, with muliplte databases supported\, and tools for visualizing these results. Genes can also be used to create and plot protein\-protein interaction networks\, all from inside of R.


.. conda:package:: bioconductor-pathlinkr

   |downloads_bioconductor-pathlinkr| |docker_bioconductor-pathlinkr|

   :versions:
      
      

      ``1.6.0-0``

      

   
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-fgsea: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-dplyr: 
   :depends on r-ggforce: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggraph: 
   :depends on r-ggrepel: 
   :depends on r-igraph: 
   :depends on r-purrr: 
   :depends on r-sigora: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidygraph: 
   :depends on r-tidyr: 
   :depends on r-vegan: 
   :depends on r-visnetwork: 

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

    pixi global install bioconductor-pathlinkr

to add into an existing workspace instead, run::

    pixi add bioconductor-pathlinkr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pathlinkr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pathlinkr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pathlinkr:<tag>

(see `bioconductor-pathlinkr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pathlinkr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathlinkr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathlinkr
   :alt:   (downloads)
.. |docker_bioconductor-pathlinkr| image:: https://quay.io/repository/biocontainers/bioconductor-pathlinkr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathlinkr
.. _`bioconductor-pathlinkr/tags`: https://quay.io/repository/biocontainers/bioconductor-pathlinkr?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-pathlinkr";
      var versions = ["1.6.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-pathlinkr"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-pathlinkr"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-pathlinkr"></div>



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
         
            // Build cdf plot for bioconductor-pathlinkr
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pathlinkr/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-pathlinkr', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-pathlinkr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pathlinkr/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-pathlinkr', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-pathlinkr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pathlinkr/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-pathlinkr', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathlinkr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathlinkr/README.html