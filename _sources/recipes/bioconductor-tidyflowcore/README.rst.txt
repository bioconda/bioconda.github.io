:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidyflowcore'
.. highlight: bash

bioconductor-tidyflowcore
=========================

.. conda:recipe:: bioconductor-tidyflowcore
   :replaces_section_title:
   :noindex:

   tidyFlowCore\: Bringing flowCore to the tidyverse

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/tidyFlowCore.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tidyflowcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidyflowcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidyflowcore/meta.yaml>`_

   tidyFlowCore bridges the gap between flow cytometry analysis using the flowCore Bioconductor package and the tidy data principles advocated by the tidyverse. It provides a suite of dplyr\-\, ggplot2\-\, and tidyr\-like verbs specifically designed for working with flowFrame and flowSet objects as if they were tibbles\; however\, your data remain flowCore data structures under this layer of abstraction. tidyFlowCore enables intuitive and streamlined analysis workflows that can leverage both the Bioconductor and tidyverse ecosystems for cytometry data.


.. conda:package:: bioconductor-tidyflowcore

   |downloads_bioconductor-tidyflowcore| |docker_bioconductor-tidyflowcore|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-purrr: 
   :depends on r-rlang: 
   :depends on r-stringr: 
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

    pixi global install bioconductor-tidyflowcore

to add into an existing workspace instead, run::

    pixi add bioconductor-tidyflowcore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tidyflowcore

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tidyflowcore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tidyflowcore:<tag>

(see `bioconductor-tidyflowcore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tidyflowcore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidyflowcore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidyflowcore
   :alt:   (downloads)
.. |docker_bioconductor-tidyflowcore| image:: https://quay.io/repository/biocontainers/bioconductor-tidyflowcore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidyflowcore
.. _`bioconductor-tidyflowcore/tags`: https://quay.io/repository/biocontainers/bioconductor-tidyflowcore?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-tidyflowcore";
      var versions = ["1.4.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-tidyflowcore"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-tidyflowcore"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-tidyflowcore"></div>



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
         
            // Build cdf plot for bioconductor-tidyflowcore
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-tidyflowcore/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-tidyflowcore', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-tidyflowcore
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-tidyflowcore/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-tidyflowcore', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-tidyflowcore
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-tidyflowcore/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-tidyflowcore', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidyflowcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidyflowcore/README.html