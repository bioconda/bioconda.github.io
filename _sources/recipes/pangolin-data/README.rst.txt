:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangolin-data'
.. highlight: bash

pangolin-data
=============

.. conda:recipe:: pangolin-data
   :replaces_section_title:
   :noindex:

   Repository for storing latest model\, protobuf\, designation hash and alias files for pangolin assignments

   :homepage: https://github.com/cov-lineages/pangolin-data
   :license: GPL3 / GPL-3.0-only
   :recipe: /`pangolin-data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin-data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin-data/meta.yaml>`_

   


.. conda:package:: pangolin-data

   |downloads_pangolin-data| |docker_pangolin-data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38-0</code>,  <code>1.37.1-0</code>,  <code>1.37-0</code>,  <code>1.36-0</code>,  <code>1.35-0</code>,  <code>1.34-0</code>,  <code>1.33-0</code>,  <code>1.32-0</code>,  <code>1.31-0</code>,  </span></summary>
      

      ``1.38-0``,  ``1.37.1-0``,  ``1.37-0``,  ``1.36-0``,  ``1.35-0``,  ``1.34-0``,  ``1.33-0``,  ``1.32-0``,  ``1.31-0``,  ``1.30-0``,  ``1.29-0``,  ``1.28.1-0``,  ``1.28-0``,  ``1.27-0``,  ``1.26-0``,  ``1.25.1-0``,  ``1.25-0``,  ``1.24-0``,  ``1.23.1-0``,  ``1.23-0``,  ``1.22-0``,  ``1.21-0``,  ``1.20-0``,  ``1.19-0``,  ``1.18.1.1-0``,  ``1.18.1-0``,  ``1.18-0``,  ``1.17-0``,  ``1.16-0``,  ``1.15.1-0``,  ``1.14-0``,  ``1.13-1``,  ``1.13-0``,  ``1.12-0``,  ``1.11-0``,  ``1.9-0``,  ``1.8-0``,  ``1.6-0``,  ``1.3-0``,  ``1.2.133.2-0``,  ``1.2.133-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: 

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

    pixi global install pangolin-data

to add into an existing workspace instead, run::

    pixi add pangolin-data

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pangolin-data

Alternatively, to install into a new environment, run::

    conda create -n envname pangolin-data

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pangolin-data:<tag>

(see `pangolin-data/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pangolin-data| image:: https://img.shields.io/conda/dn/bioconda/pangolin-data.svg?style=flat
   :target: https://anaconda.org/bioconda/pangolin-data
   :alt:   (downloads)
.. |docker_pangolin-data| image:: https://quay.io/repository/biocontainers/pangolin-data/status
   :target: https://quay.io/repository/biocontainers/pangolin-data
.. _`pangolin-data/tags`: https://quay.io/repository/biocontainers/pangolin-data?tab=tags


.. raw:: html

   <script>
      var package = "pangolin-data";
      var versions = ["1.38","1.37.1","1.37","1.36","1.35"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_pangolin-data"></div>
   <div style="width: 100%" id="platform_plot_pangolin-data"></div>
   <div style="width: 100%" id="cdf_plot_pangolin-data"></div>



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
         
            // Build cdf plot for pangolin-data
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pangolin-data/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_pangolin-data', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for pangolin-data
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pangolin-data/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_pangolin-data', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for pangolin-data
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pangolin-data/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_pangolin-data', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangolin-data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangolin-data/README.html