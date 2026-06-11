:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ampvis2'
.. highlight: bash

r-ampvis2
=========

.. conda:recipe:: r-ampvis2
   :replaces_section_title:
   :noindex:

   Tools for visualising amplicon data

   :homepage: https://github.com/MadsAlbertsen/ampvis2
   :license: AGPL-3.0-only
   :recipe: /`r-ampvis2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ampvis2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ampvis2/meta.yaml>`_

   


.. conda:package:: r-ampvis2

   |downloads_r-ampvis2| |docker_r-ampvis2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.11-0</code>,  <code>2.8.10-0</code>,  <code>2.8.9-1</code>,  <code>2.8.9-0</code>,  <code>2.8.6-0</code>,  <code>2.7.32-2</code>,  <code>2.7.32-1</code>,  <code>2.7.32-0</code>,  <code>2.7.29-1</code>,  </span></summary>
      

      ``2.8.11-0``,  ``2.8.10-0``,  ``2.8.9-1``,  ``2.8.9-0``,  ``2.8.6-0``,  ``2.7.32-2``,  ``2.7.32-1``,  ``2.7.32-0``,  ``2.7.29-1``,  ``2.7.29-0``,  ``2.7.27-0``,  ``2.7.26-0``,  ``2.7.24-0``,  ``2.7.22-0``,  ``2.7.21-0``,  ``2.7.17-1``,  ``2.7.17-0``,  ``2.7.12-1``,  ``2.7.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biomformat: 
   :depends on parallel: 
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cli: 
   :depends on r-crayon: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggally: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-lubridate: 
   :depends on r-magrittr: 
   :depends on r-network: 
   :depends on r-patchwork: 
   :depends on r-plotly: 
   :depends on r-plyr: 
   :depends on r-purrr: 
   :depends on r-r.utils: 
   :depends on r-rcolorbrewer: 
   :depends on r-scales: 
   :depends on r-sna: 
   :depends on r-stringr: 
   :depends on r-svglite: 
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

    pixi global install r-ampvis2

to add into an existing workspace instead, run::

    pixi add r-ampvis2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-ampvis2

Alternatively, to install into a new environment, run::

    conda create -n envname r-ampvis2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-ampvis2:<tag>

(see `r-ampvis2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-ampvis2| image:: https://img.shields.io/conda/dn/bioconda/r-ampvis2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ampvis2
   :alt:   (downloads)
.. |docker_r-ampvis2| image:: https://quay.io/repository/biocontainers/r-ampvis2/status
   :target: https://quay.io/repository/biocontainers/r-ampvis2
.. _`r-ampvis2/tags`: https://quay.io/repository/biocontainers/r-ampvis2?tab=tags


.. raw:: html

   <script>
      var package = "r-ampvis2";
      var versions = ["2.8.11","2.8.10","2.8.9","2.8.9","2.8.6"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-ampvis2"></div>
   <div style="width: 100%" id="platform_plot_r-ampvis2"></div>
   <div style="width: 100%" id="cdf_plot_r-ampvis2"></div>



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
         
            // Build cdf plot for r-ampvis2
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-ampvis2/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-ampvis2', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-ampvis2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-ampvis2/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-ampvis2', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-ampvis2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-ampvis2/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-ampvis2', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ampvis2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ampvis2/README.html