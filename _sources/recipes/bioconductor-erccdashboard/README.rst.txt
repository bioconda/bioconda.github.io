:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-erccdashboard'
.. highlight: bash

bioconductor-erccdashboard
==========================

.. conda:recipe:: bioconductor-erccdashboard
   :replaces_section_title:
   :noindex:

   Assess Differential Gene Expression Experiments with ERCC Controls

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/erccdashboard.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-erccdashboard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-erccdashboard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-erccdashboard/meta.yaml>`_

   Technical performance metrics for differential gene expression experiments using External RNA Controls Consortium \(ERCC\) spike\-in ratio mixtures.


.. conda:package:: bioconductor-erccdashboard

   |downloads_bioconductor-erccdashboard| |docker_bioconductor-erccdashboard|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: ``>=2.1.0``
   :depends on r-gplots: 
   :depends on r-gridextra: ``>=2.0.0``
   :depends on r-gtools: 
   :depends on r-knitr: 
   :depends on r-locfit: 
   :depends on r-mass: 
   :depends on r-plyr: 
   :depends on r-reshape2: 
   :depends on r-rocr: 
   :depends on r-scales: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-erccdashboard

to add into an existing workspace instead, run::

    pixi add bioconductor-erccdashboard

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-erccdashboard

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-erccdashboard

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-erccdashboard:<tag>

(see `bioconductor-erccdashboard/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-erccdashboard| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-erccdashboard.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-erccdashboard
   :alt:   (downloads)
.. |docker_bioconductor-erccdashboard| image:: https://quay.io/repository/biocontainers/bioconductor-erccdashboard/status
   :target: https://quay.io/repository/biocontainers/bioconductor-erccdashboard
.. _`bioconductor-erccdashboard/tags`: https://quay.io/repository/biocontainers/bioconductor-erccdashboard?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-erccdashboard";
      var versions = ["1.44.0","1.40.0","1.36.0","1.34.0","1.32.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-erccdashboard"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-erccdashboard"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-erccdashboard"></div>



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
         
            // Build cdf plot for bioconductor-erccdashboard
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-erccdashboard/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-erccdashboard', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-erccdashboard
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-erccdashboard/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-erccdashboard', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-erccdashboard
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-erccdashboard/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-erccdashboard', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-erccdashboard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-erccdashboard/README.html