:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vg'
.. highlight: bash

vg
==

.. conda:recipe:: vg
   :replaces_section_title:
   :noindex:

   Variation graph data structures\, interchange formats\, alignment\, genotyping\, and variant calling methods

   :homepage: https://github.com/vgteam/vg
   :license: MIT / MIT
   :recipe: /`vg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vg/meta.yaml>`_

   


.. conda:package:: vg

   |downloads_vg| |docker_vg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.73.0-0</code>,  <code>1.70.0-0</code>,  <code>1.67.0-0</code>,  <code>1.65.0-0</code>,  <code>1.63.1-0</code>,  <code>1.61.0-0</code>,  <code>1.60.0-0</code>,  <code>1.59.0-0</code>,  <code>1.56.0-1</code>,  </span></summary>
      

      ``1.73.0-0``,  ``1.70.0-0``,  ``1.67.0-0``,  ``1.65.0-0``,  ``1.63.1-0``,  ``1.61.0-0``,  ``1.60.0-0``,  ``1.59.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.55.0-0``,  ``1.54.0-0``,  ``1.53.0-0``,  ``1.52.0-0``,  ``1.51.0-0``,  ``1.50.1-0``,  ``1.50.0-0``,  ``1.49.0-0``,  ``1.48.0-0``,  ``1.47.0-0``,  ``1.46.0-0``,  ``1.45.0-0``,  ``1.44.0-0``,  ``1.43.0-0``,  ``1.42.0-0``,  ``1.41.0-0``,  ``1.40.0-0``,  ``1.39.0-0``,  ``1.38.0-0``,  ``1.37.0-0``,  ``1.36.0-0``,  ``1.35.0-0``,  ``1.34.0-0``,  ``1.33.0-0``,  ``1.32.0-0``,  ``1.31.0-1``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.29.0-0``,  ``1.28.0-0``,  ``1.27.1-0``,  ``1.27.0-0``,  ``1.26.1-0``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.23.0-0``

      
      .. raw:: html

         </details>
      

   

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      


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

    pixi global install vg

to add into an existing workspace instead, run::

    pixi add vg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vg

Alternatively, to install into a new environment, run::

    conda create -n envname vg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vg:<tag>

(see `vg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vg| image:: https://img.shields.io/conda/dn/bioconda/vg.svg?style=flat
   :target: https://anaconda.org/bioconda/vg
   :alt:   (downloads)
.. |docker_vg| image:: https://quay.io/repository/biocontainers/vg/status
   :target: https://quay.io/repository/biocontainers/vg
.. _`vg/tags`: https://quay.io/repository/biocontainers/vg?tab=tags


.. raw:: html

   <script>
      var package = "vg";
      var versions = ["1.73.0","1.70.0","1.67.0","1.65.0","1.63.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_vg"></div>
   <div style="width: 100%" id="platform_plot_vg"></div>
   <div style="width: 100%" id="cdf_plot_vg"></div>



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
         
            // Build cdf plot for vg
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vg/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_vg', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for vg
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vg/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_vg', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for vg
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vg/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_vg', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vg/README.html