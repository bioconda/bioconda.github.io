:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sdm'
.. highlight: bash

sdm
===

.. conda:recipe:: sdm
   :replaces_section_title:
   :noindex:

   sdm \- simple demultiplex tool for FASTQ demultiplexing and dereplication.

   :homepage: https://github.com/hildebra/sdm
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`sdm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdm/meta.yaml>`_

   


.. conda:package:: sdm

   |downloads_sdm| |docker_sdm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.36-0</code>,  <code>3.29-0</code>,  <code>3.27-0</code>,  <code>3.26-0</code>,  <code>3.11-0</code>,  <code>3.10-0</code>,  <code>3.08-1</code>,  <code>3.08-0</code>,  <code>2.18-0</code>,  </span></summary>
      

      ``3.36-0``,  ``3.29-0``,  ``3.27-0``,  ``3.26-0``,  ``3.11-0``,  ``3.10-0``,  ``3.08-1``,  ``3.08-0``,  ``2.18-0``,  ``2.17-1``,  ``2.17-0``,  ``2.14-0``,  ``2.13-0``,  ``2.11-0``,  ``2.10-0``,  ``2.09-0``,  ``2.08-2``,  ``2.08-1``,  ``2.08-0``,  ``2.06-0``,  ``2.05-0``,  ``2.02-1``,  ``2.02-0``,  ``1.94-1``,  ``1.94-0``,  ``1.93-0``,  ``1.92-0``,  ``1.90-0``,  ``1.89-0``,  ``1.87-0``,  ``1.86-0``,  ``1.85-0``,  ``1.84.1-0``,  ``1.84-0``,  ``1.83post0-0``,  ``1.83-0``,  ``1.73-2``,  ``1.73-1``,  ``1.73-0``,  ``1.47-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``

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

    pixi global install sdm

to add into an existing workspace instead, run::

    pixi add sdm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sdm

Alternatively, to install into a new environment, run::

    conda create -n envname sdm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sdm:<tag>

(see `sdm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sdm| image:: https://img.shields.io/conda/dn/bioconda/sdm.svg?style=flat
   :target: https://anaconda.org/bioconda/sdm
   :alt:   (downloads)
.. |docker_sdm| image:: https://quay.io/repository/biocontainers/sdm/status
   :target: https://quay.io/repository/biocontainers/sdm
.. _`sdm/tags`: https://quay.io/repository/biocontainers/sdm?tab=tags


.. raw:: html

   <script>
      var package = "sdm";
      var versions = ["3.36","3.29","3.27","3.26","3.11"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_sdm"></div>
   <div style="width: 100%" id="platform_plot_sdm"></div>
   <div style="width: 100%" id="cdf_plot_sdm"></div>



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
         
            // Build cdf plot for sdm
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sdm/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_sdm', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for sdm
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sdm/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_sdm', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for sdm
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sdm/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_sdm', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sdm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sdm/README.html