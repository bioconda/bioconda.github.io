:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bandage_ng'
.. highlight: bash

bandage_ng
==========

.. conda:recipe:: bandage_ng
   :replaces_section_title:
   :noindex:

   Bandage \- a Bioinformatics Application for Navigating De novo Assembly Graphs Easily.

   :homepage: https://github.com/asl/BandageNG
   :documentation: https://github.com/asl/BandageNG/blob/v2026.6.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bandage_ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage_ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage_ng/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv383`

   


.. conda:package:: bandage_ng

   |downloads_bandage_ng| |docker_bandage_ng|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2026.6.1-0</code>,  <code>2026.4.1-0</code>,  <code>2026.2.1-0</code>,  <code>2026.1.1-0</code>,  <code>2025.12.3-0</code>,  <code>2025.12.2-0</code>,  <code>2025.12.1-0</code>,  <code>2025.6.1-0</code>,  <code>2025.5.1-0</code>,  </span></summary>
      

      ``2026.6.1-0``,  ``2026.4.1-0``,  ``2026.2.1-0``,  ``2026.1.1-0``,  ``2025.12.3-0``,  ``2025.12.2-0``,  ``2025.12.1-0``,  ``2025.6.1-0``,  ``2025.5.1-0``,  ``2025.4.1-0``,  ``2022.09-4``,  ``2022.09-3``,  ``2022.09-2``,  ``2022.09-1``,  ``2022.09-0``

      
      .. raw:: html

         </details>
      

   
   :depends on fonts-conda-ecosystem: 
   :depends on libcxx: ``>=19``
   :depends on libvulkan-loader: ``>=1.4.341.0,<2.0a0``
   :depends on qt6-main: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


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

    pixi global install bandage_ng

to add into an existing workspace instead, run::

    pixi add bandage_ng

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bandage_ng

Alternatively, to install into a new environment, run::

    conda create -n envname bandage_ng

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bandage_ng:<tag>

(see `bandage_ng/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bandage_ng| image:: https://img.shields.io/conda/dn/bioconda/bandage_ng.svg?style=flat
   :target: https://anaconda.org/bioconda/bandage_ng
   :alt:   (downloads)
.. |docker_bandage_ng| image:: https://quay.io/repository/biocontainers/bandage_ng/status
   :target: https://quay.io/repository/biocontainers/bandage_ng
.. _`bandage_ng/tags`: https://quay.io/repository/biocontainers/bandage_ng?tab=tags


.. raw:: html

   <script>
      var package = "bandage_ng";
      var versions = ["2026.6.1","2026.4.1","2026.2.1","2026.1.1","2025.12.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bandage_ng"></div>
   <div style="width: 100%" id="platform_plot_bandage_ng"></div>
   <div style="width: 100%" id="cdf_plot_bandage_ng"></div>



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
         
            // Build cdf plot for bandage_ng
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bandage_ng/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bandage_ng', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bandage_ng
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bandage_ng/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bandage_ng', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bandage_ng
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bandage_ng/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bandage_ng', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bandage_ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bandage_ng/README.html