:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binchicken'
.. highlight: bash

binchicken
==========

.. conda:recipe:: binchicken
   :replaces_section_title:
   :noindex:

   Targeted recovery of low abundance metagenome assembled genomes through intelligent coassembly

   :homepage: https://github.com/aroneys/binchicken
   :documentation: https://aroneys.github.io/binchicken
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`binchicken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binchicken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binchicken/meta.yaml>`_

   


.. conda:package:: binchicken

   |downloads_binchicken| |docker_binchicken|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.13.5-0</code>,  <code>0.13.4-0</code>,  <code>0.13.3-0</code>,  <code>0.13.2-1</code>,  <code>0.13.2-0</code>,  <code>0.13.1-0</code>,  <code>0.13.0-0</code>,  <code>0.12.11-0</code>,  <code>0.12.6-1</code>,  </span></summary>
      

      ``0.13.5-0``,  ``0.13.4-0``,  ``0.13.3-0``,  ``0.13.2-1``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.11-0``,  ``0.12.6-1``,  ``0.12.6-0``,  ``0.12.5-1``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.5-0``,  ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bird_tool_utils_python: ``>=0.5.1``
   :depends on extern: 
   :depends on mamba: ``1.4.*``
   :depends on networkx: 
   :depends on parallel: 
   :depends on pigz: 
   :depends on pixi: 
   :depends on polars: ``1.26.*``
   :depends on pyarrow: 
   :depends on pyopenssl: ``>22.1.0``
   :depends on python: ``3.10.*``
   :depends on ruamel.yaml: ``>=0.15.99``
   :depends on snakemake-minimal: ``>=6.0.5,<8``
   :depends on sourmash: ``4.8.*``
   :depends on sourmash_plugin_branchwater: ``0.9.*``

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

    pixi global install binchicken

to add into an existing workspace instead, run::

    pixi add binchicken

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install binchicken

Alternatively, to install into a new environment, run::

    conda create -n envname binchicken

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/binchicken:<tag>

(see `binchicken/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_binchicken| image:: https://img.shields.io/conda/dn/bioconda/binchicken.svg?style=flat
   :target: https://anaconda.org/bioconda/binchicken
   :alt:   (downloads)
.. |docker_binchicken| image:: https://quay.io/repository/biocontainers/binchicken/status
   :target: https://quay.io/repository/biocontainers/binchicken
.. _`binchicken/tags`: https://quay.io/repository/biocontainers/binchicken?tab=tags


.. raw:: html

   <script>
      var package = "binchicken";
      var versions = ["0.13.5","0.13.4","0.13.3","0.13.2","0.13.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_binchicken"></div>
   <div style="width: 100%" id="platform_plot_binchicken"></div>
   <div style="width: 100%" id="cdf_plot_binchicken"></div>



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
         
            // Build cdf plot for binchicken
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/binchicken/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_binchicken', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for binchicken
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/binchicken/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_binchicken', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for binchicken
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/binchicken/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_binchicken', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binchicken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binchicken/README.html