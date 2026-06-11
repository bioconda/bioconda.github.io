:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sourmash'
.. highlight: bash

sourmash
========

.. conda:recipe:: sourmash
   :replaces_section_title:
   :noindex:

   Quickly search\, compare\, and analyze genomic and metagenomic data sets.

   :homepage: https://github.com/sourmash-bio/sourmash
   :documentation: https://sourmash.readthedocs.io/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`sourmash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourmash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourmash/meta.yaml>`_
   :links: biotools: :biotools:`sourmash`, doi: :doi:`10.21105/joss.00027`, doi: :doi:`10.12688/f1000research.19675.1`, doi: :doi:`10.5281/zenodo.11557883`

   


.. conda:package:: sourmash

   |downloads_sourmash| |docker_sourmash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.9.4-0</code>,  <code>4.9.3-0</code>,  <code>4.9.2-1</code>,  <code>4.9.2-0</code>,  <code>4.9.0-0</code>,  <code>4.8.14-0</code>,  <code>4.8.12-0</code>,  <code>4.8.11-0</code>,  <code>4.8.10-0</code>,  </span></summary>
      

      ``4.9.4-0``,  ``4.9.3-0``,  ``4.9.2-1``,  ``4.9.2-0``,  ``4.9.0-0``,  ``4.8.14-0``,  ``4.8.12-0``,  ``4.8.11-0``,  ``4.8.10-0``,  ``4.8.9-0``,  ``4.8.8-0``,  ``4.8.7-0``,  ``4.8.6-0``,  ``4.8.5-0``,  ``4.8.4-0``,  ``4.8.3-0``,  ``4.8.2-0``,  ``4.8.1-0``,  ``4.8.0-0``,  ``4.6.1-0``,  ``4.6.0-0``,  ``4.5.0-0``,  ``4.4.3-0``,  ``4.4.2-0``,  ``4.4.1-0``,  ``4.4.0-0``,  ``4.3.0-1``,  ``4.3.0-0``,  ``4.2.4-0``,  ``4.2.3-0``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.1-0``,  ``3.3.0-1``,  ``3.3.0-0``,  ``3.2.3-0``,  ``3.2.2-1``,  ``3.2.2-0``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``2.0.0a11-0``,  ``2.0.0a10-0``,  ``2.0.0a9-0``,  ``2.0.0a8-2``,  ``2.0.0a8-1``,  ``2.0.0a8-0``,  ``2.0.0a7-0``,  ``2.0.0a6-0``,  ``2.0.0a5-0``,  ``2.0.0a4-0``,  ``2.0.0a3-0``,  ``2.0.0a2-0``,  ``2.0.0a1-3``,  ``2.0.0a1-2``,  ``2.0.0a1-1``,  ``2.0.0a1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: 
   :depends on sourmash-minimal: ``4.9.4.*``

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

    pixi global install sourmash

to add into an existing workspace instead, run::

    pixi add sourmash

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sourmash

Alternatively, to install into a new environment, run::

    conda create -n envname sourmash

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sourmash:<tag>

(see `sourmash/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sourmash| image:: https://img.shields.io/conda/dn/bioconda/sourmash.svg?style=flat
   :target: https://anaconda.org/bioconda/sourmash
   :alt:   (downloads)
.. |docker_sourmash| image:: https://quay.io/repository/biocontainers/sourmash/status
   :target: https://quay.io/repository/biocontainers/sourmash
.. _`sourmash/tags`: https://quay.io/repository/biocontainers/sourmash?tab=tags


.. raw:: html

   <script>
      var package = "sourmash";
      var versions = ["4.9.4","4.9.3","4.9.2","4.9.2","4.9.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_sourmash"></div>
   <div style="width: 100%" id="platform_plot_sourmash"></div>
   <div style="width: 100%" id="cdf_plot_sourmash"></div>



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
         
            // Build cdf plot for sourmash
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sourmash/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_sourmash', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for sourmash
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sourmash/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_sourmash', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for sourmash
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sourmash/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_sourmash', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sourmash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sourmash/README.html