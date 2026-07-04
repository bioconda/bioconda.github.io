:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rust-bio-tools'
.. highlight: bash

rust-bio-tools
==============

.. conda:recipe:: rust-bio-tools
   :replaces_section_title:
   :noindex:

   A growing collection of fast and secure command line utilities for dealing with NGS data implemented on top of Rust\-Bio.

   :homepage: https://github.com/rust-bio/rust-bio-tools
   :license: MIT / MIT
   :recipe: /`rust-bio-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-bio-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-bio-tools/meta.yaml>`_

   


.. conda:package:: rust-bio-tools

   |downloads_rust-bio-tools| |docker_rust-bio-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.42.2-3</code>,  <code>0.42.2-1</code>,  <code>0.42.2-0</code>,  <code>0.42.1-0</code>,  <code>0.42.0-0</code>,  <code>0.41.0-1</code>,  <code>0.41.0-0</code>,  <code>0.40.0-1</code>,  <code>0.40.0-0</code>,  </span></summary>
      

      ``0.42.2-3``,  ``0.42.2-1``,  ``0.42.2-0``,  ``0.42.1-0``,  ``0.42.0-0``,  ``0.41.0-1``,  ``0.41.0-0``,  ``0.40.0-1``,  ``0.40.0-0``,  ``0.39.1-0``,  ``0.39.0-1``,  ``0.39.0-0``,  ``0.38.3-1``,  ``0.38.3-0``,  ``0.38.2-1``,  ``0.38.2-0``,  ``0.38.1-0``,  ``0.38.0-0``,  ``0.37.0-0``,  ``0.36.0-0``,  ``0.35.0-0``,  ``0.34.0-0``,  ``0.33.1-0``,  ``0.33.0-0``,  ``0.32.0-0``,  ``0.31.0-0``,  ``0.30.2-0``,  ``0.30.1-0``,  ``0.30.0-0``,  ``0.29.0-1``,  ``0.29.0-0``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.1-0``,  ``0.26.0-0``,  ``0.25.0-0``,  ``0.24.1-0``,  ``0.24.0-0``,  ``0.23.0-0``,  ``0.22.0-0``,  ``0.21.1-0``,  ``0.21.0-0``,  ``0.20.5-0``,  ``0.20.4-0``,  ``0.20.3-4``,  ``0.20.3-3``,  ``0.20.3-2``,  ``0.20.3-1``,  ``0.20.3-0``,  ``0.20.2-0``,  ``0.20.1-1``,  ``0.20.1-0``,  ``0.20.0-0``,  ``0.19.6-0``,  ``0.19.5-0``,  ``0.19.4-0``,  ``0.19.3-0``,  ``0.19.2-0``,  ``0.19.1-0``,  ``0.19.0-0``,  ``0.18.1-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.1-0``,  ``0.15.0-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.11.0-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=18``
   :depends on openssl: ``>=3.5.3,<4.0a0``
   :depends on starcode: 

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

    pixi global install rust-bio-tools

to add into an existing workspace instead, run::

    pixi add rust-bio-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rust-bio-tools

Alternatively, to install into a new environment, run::

    conda create -n envname rust-bio-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rust-bio-tools:<tag>

(see `rust-bio-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rust-bio-tools| image:: https://img.shields.io/conda/dn/bioconda/rust-bio-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/rust-bio-tools
   :alt:   (downloads)
.. |docker_rust-bio-tools| image:: https://quay.io/repository/biocontainers/rust-bio-tools/status
   :target: https://quay.io/repository/biocontainers/rust-bio-tools
.. _`rust-bio-tools/tags`: https://quay.io/repository/biocontainers/rust-bio-tools?tab=tags


.. raw:: html

   <script>
      var package = "rust-bio-tools";
      var versions = ["0.42.2","0.42.2","0.42.2","0.42.1","0.42.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_rust-bio-tools"></div>
   <div style="width: 100%" id="platform_plot_rust-bio-tools"></div>
   <div style="width: 100%" id="cdf_plot_rust-bio-tools"></div>



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
         
            // Build cdf plot for rust-bio-tools
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rust-bio-tools/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_rust-bio-tools', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for rust-bio-tools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rust-bio-tools/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_rust-bio-tools', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for rust-bio-tools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rust-bio-tools/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_rust-bio-tools', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rust-bio-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rust-bio-tools/README.html