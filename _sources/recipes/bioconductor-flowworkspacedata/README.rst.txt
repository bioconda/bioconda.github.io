:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowworkspacedata'
.. highlight: bash

bioconductor-flowworkspacedata
==============================

.. conda:recipe:: bioconductor-flowworkspacedata
   :replaces_section_title:
   :noindex:

   A data package containing two flowJo\, one diva xml workspace and the associated fcs files as well as three GatingSets for testing the flowWorkspace\, openCyto and CytoML packages.

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/flowWorkspaceData.html
   :license: GPL-2
   :recipe: /`bioconductor-flowworkspacedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspacedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspacedata/meta.yaml>`_

   The necessary external data to run the flowWorkspace and openCyto vignette is found in this package.


.. conda:package:: bioconductor-flowworkspacedata

   |downloads_bioconductor-flowworkspacedata| |docker_bioconductor-flowworkspacedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.22.0-0</code>,  <code>3.18.0-0</code>,  <code>3.14.0-0</code>,  <code>3.12.0-0</code>,  <code>3.9.0-0</code>,  <code>3.6.0-1</code>,  <code>3.6.0-0</code>,  <code>3.4.0-0</code>,  <code>3.2.0-1</code>,  </span></summary>
      

      ``3.22.0-0``,  ``3.18.0-0``,  ``3.14.0-0``,  ``3.12.0-0``,  ``3.9.0-0``,  ``3.6.0-1``,  ``3.6.0-0``,  ``3.4.0-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-flowworkspacedata

to add into an existing workspace instead, run::

    pixi add bioconductor-flowworkspacedata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowworkspacedata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowworkspacedata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowworkspacedata:<tag>

(see `bioconductor-flowworkspacedata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowworkspacedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowworkspacedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowworkspacedata
   :alt:   (downloads)
.. |docker_bioconductor-flowworkspacedata| image:: https://quay.io/repository/biocontainers/bioconductor-flowworkspacedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowworkspacedata
.. _`bioconductor-flowworkspacedata/tags`: https://quay.io/repository/biocontainers/bioconductor-flowworkspacedata?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-flowworkspacedata";
      var versions = ["3.22.0","3.18.0","3.14.0","3.12.0","3.9.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-flowworkspacedata"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-flowworkspacedata"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-flowworkspacedata"></div>



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
         
            // Build cdf plot for bioconductor-flowworkspacedata
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-flowworkspacedata/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-flowworkspacedata', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-flowworkspacedata
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-flowworkspacedata/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-flowworkspacedata', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-flowworkspacedata
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-flowworkspacedata/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-flowworkspacedata', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowworkspacedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowworkspacedata/README.html