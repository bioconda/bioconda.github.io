:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mcl'
.. highlight: bash

mcl
===

.. conda:recipe:: mcl
   :replaces_section_title:
   :noindex:

   MCL \- a cluster algorithm for graphs.

   :homepage: https://micans.org/mcl
   :documentation: https://micans.org/mcl/man/mcl.html
   
   :developer docs: https://github.com/micans/mcl
   :license: GPL / GPL-3.0-only
   :recipe: /`mcl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcl/meta.yaml>`_
   :links: doi: :doi:`10.1137/040608635`, doi: :doi:`10.1093/nar/30.7.1575`, biotools: :biotools:`mcl`, usegalaxy-eu: :usegalaxy-eu:`mcl`

   


.. conda:package:: mcl

   |downloads_mcl| |docker_mcl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>22.282-4</code>,  <code>22.282-3</code>,  <code>22.282-2</code>,  <code>22.282-1</code>,  <code>22.282-0</code>,  <code>14.137-9</code>,  <code>14.137-8</code>,  <code>14.137-7</code>,  <code>14.137-6</code>,  </span></summary>
      

      ``22.282-4``,  ``22.282-3``,  ``22.282-2``,  ``22.282-1``,  ``22.282-0``,  ``14.137-9``,  ``14.137-8``,  ``14.137-7``,  ``14.137-6``,  ``14.137-5``,  ``14.137-4``,  ``14.137-3``,  ``14.137-2``,  ``14.137-1``,  ``14.137-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install mcl

to add into an existing workspace instead, run::

    pixi add mcl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mcl

Alternatively, to install into a new environment, run::

    conda create -n envname mcl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mcl:<tag>

(see `mcl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mcl| image:: https://img.shields.io/conda/dn/bioconda/mcl.svg?style=flat
   :target: https://anaconda.org/bioconda/mcl
   :alt:   (downloads)
.. |docker_mcl| image:: https://quay.io/repository/biocontainers/mcl/status
   :target: https://quay.io/repository/biocontainers/mcl
.. _`mcl/tags`: https://quay.io/repository/biocontainers/mcl?tab=tags


.. raw:: html

   <script>
      var package = "mcl";
      var versions = ["22.282","22.282","22.282","22.282","22.282"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_mcl"></div>
   <div style="width: 100%" id="platform_plot_mcl"></div>
   <div style="width: 100%" id="cdf_plot_mcl"></div>



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
         
            // Build cdf plot for mcl
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mcl/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_mcl', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for mcl
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mcl/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_mcl', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for mcl
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mcl/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_mcl', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mcl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mcl/README.html