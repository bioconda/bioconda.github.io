:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-interface-executor-plugins'
.. highlight: bash

snakemake-interface-executor-plugins
====================================

.. conda:recipe:: snakemake-interface-executor-plugins
   :replaces_section_title:
   :noindex:

   This package provides a stable interface for interactions between Snakemake and its executor plugins.

   :homepage: https://github.com/snakemake/snakemake-interface-executor-plugins
   :license: MIT / MIT
   :recipe: /`snakemake-interface-executor-plugins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-executor-plugins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-executor-plugins/meta.yaml>`_

   


.. conda:package:: snakemake-interface-executor-plugins

   |downloads_snakemake-interface-executor-plugins| |docker_snakemake-interface-executor-plugins|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>9.4.0-0</code>,  <code>9.3.9-0</code>,  <code>9.3.8-0</code>,  <code>9.3.7-0</code>,  <code>9.3.6-0</code>,  <code>9.3.5-0</code>,  <code>9.3.3-0</code>,  <code>9.3.2-0</code>,  <code>9.3.1-0</code>,  </span></summary>
      

      ``9.4.0-0``,  ``9.3.9-0``,  ``9.3.8-0``,  ``9.3.7-0``,  ``9.3.6-0``,  ``9.3.5-0``,  ``9.3.3-0``,  ``9.3.2-0``,  ``9.3.1-0``,  ``9.2.0-0``,  ``9.1.1-0``,  ``9.1.0-0``,  ``9.0.2-0``,  ``9.0.1-0``,  ``9.0.0-0``,  ``8.2.0-0``,  ``8.1.3-0``,  ``8.1.2-0``,  ``8.1.1-0``,  ``8.1.0-0``,  ``8.0.2-0``,  ``7.0.3-0``,  ``7.0.2-0``,  ``7.0.1-0``,  ``6.0.0-0``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.0.0-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on argparse-dataclass: ``>=2.0.0,<3.0.0``
   :depends on python: ``>=3.11.0,<4.0.0``
   :depends on snakemake-interface-common: ``>=1.19.0``
   :depends on throttler: ``>=1.2.2,<2.0.0``

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

    pixi global install snakemake-interface-executor-plugins

to add into an existing workspace instead, run::

    pixi add snakemake-interface-executor-plugins

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-interface-executor-plugins

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-interface-executor-plugins

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-interface-executor-plugins:<tag>

(see `snakemake-interface-executor-plugins/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-interface-executor-plugins| image:: https://img.shields.io/conda/dn/bioconda/snakemake-interface-executor-plugins.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-interface-executor-plugins
   :alt:   (downloads)
.. |docker_snakemake-interface-executor-plugins| image:: https://quay.io/repository/biocontainers/snakemake-interface-executor-plugins/status
   :target: https://quay.io/repository/biocontainers/snakemake-interface-executor-plugins
.. _`snakemake-interface-executor-plugins/tags`: https://quay.io/repository/biocontainers/snakemake-interface-executor-plugins?tab=tags


.. raw:: html

   <script>
      var package = "snakemake-interface-executor-plugins";
      var versions = ["9.4.0","9.3.9","9.3.8","9.3.7","9.3.6"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_snakemake-interface-executor-plugins"></div>
   <div style="width: 100%" id="platform_plot_snakemake-interface-executor-plugins"></div>
   <div style="width: 100%" id="cdf_plot_snakemake-interface-executor-plugins"></div>



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
         
            // Build cdf plot for snakemake-interface-executor-plugins
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/snakemake-interface-executor-plugins/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_snakemake-interface-executor-plugins', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for snakemake-interface-executor-plugins
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/snakemake-interface-executor-plugins/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_snakemake-interface-executor-plugins', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for snakemake-interface-executor-plugins
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/snakemake-interface-executor-plugins/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_snakemake-interface-executor-plugins', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-interface-executor-plugins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-interface-executor-plugins/README.html