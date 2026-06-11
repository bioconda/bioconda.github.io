:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowgate'
.. highlight: bash

bioconductor-flowgate
=====================

.. conda:recipe:: bioconductor-flowgate
   :replaces_section_title:
   :noindex:

   Interactive Cytometry Gating in R

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/flowGate.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-flowgate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowgate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowgate/meta.yaml>`_

   flowGate adds an interactive Shiny app to allow manual GUI\-based gating of flow cytometry data in R. Using flowGate\, you can draw 1D and 2D span\/rectangle gates\, quadrant gates\, and polygon gates on flow cytometry data by interactively drawing the gates on a plot of your data\, rather than by specifying gate coordinates. This package is especially geared toward wet\-lab cytometerists looking to take advantage of R for cytometry analysis\, without necessarily having a lot of R experience.


.. conda:package:: bioconductor-flowgate

   |downloads_bioconductor-flowgate| |docker_bioconductor-flowgate|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-flowworkspace: ``>=4.22.0,<4.23.0``
   :depends on bioconductor-ggcyto: ``>=1.38.0,<1.39.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biocmanager: ``>=1.30.10``
   :depends on r-dplyr: ``>=1.0.0``
   :depends on r-ggplot2: ``>=3.3.2``
   :depends on r-purrr: 
   :depends on r-rlang: ``>=0.4.7``
   :depends on r-shiny: ``>=1.5.0``
   :depends on r-tibble: 

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

    pixi global install bioconductor-flowgate

to add into an existing workspace instead, run::

    pixi add bioconductor-flowgate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowgate

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowgate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowgate:<tag>

(see `bioconductor-flowgate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowgate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowgate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowgate
   :alt:   (downloads)
.. |docker_bioconductor-flowgate| image:: https://quay.io/repository/biocontainers/bioconductor-flowgate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowgate
.. _`bioconductor-flowgate/tags`: https://quay.io/repository/biocontainers/bioconductor-flowgate?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-flowgate";
      var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-flowgate"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-flowgate"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-flowgate"></div>



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
         
            // Build cdf plot for bioconductor-flowgate
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-flowgate/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-flowgate', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-flowgate
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-flowgate/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-flowgate', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-flowgate
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-flowgate/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-flowgate', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowgate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowgate/README.html