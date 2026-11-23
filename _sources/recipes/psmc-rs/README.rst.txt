:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'psmc-rs'
.. highlight: bash

psmc-rs
=======

.. conda:recipe:: psmc-rs
   :replaces_section_title:
   :noindex:

   Fast PSMC inference of effective population size history that reproduces the reference C psmc.

   :homepage: https://github.com/larryivan/psmc-rs
   :documentation: https://github.com/larryivan/psmc-rs/blob/v0.2.0/README.md
   
   :license: MIT / MIT
   :recipe: /`psmc-rs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psmc-rs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psmc-rs/meta.yaml>`_
   :links: doi: :doi:`10.32942/X2P97K`

   psmc\-rs reimplements the pairwise sequentially Markovian coalescent
   \(PSMC\; Li and Durbin 2011\) in Rust. It infers the history of effective
   population size from a single diploid genome with C psmc\'s model and
   defaults\, reproduces C psmc\'s fits\, and runs sequences and bootstrap
   replicates in parallel with results that do not depend on the number of
   threads. It reads psmcfa\, VCF and multihetsep input.



.. conda:package:: psmc-rs

   |downloads_psmc-rs| |docker_psmc-rs|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends on __osx: ``>=11.0``

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

    pixi global install psmc-rs

to add into an existing workspace instead, run::

    pixi add psmc-rs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install psmc-rs

Alternatively, to install into a new environment, run::

    conda create -n envname psmc-rs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/psmc-rs:<tag>

(see `psmc-rs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_psmc-rs| image:: https://img.shields.io/conda/dn/bioconda/psmc-rs.svg?style=flat
   :target: https://anaconda.org/bioconda/psmc-rs
   :alt:   (downloads)
.. |docker_psmc-rs| image:: https://quay.io/repository/biocontainers/psmc-rs/status
   :target: https://quay.io/repository/biocontainers/psmc-rs
.. _`psmc-rs/tags`: https://quay.io/repository/biocontainers/psmc-rs?tab=tags


.. raw:: html

   <script>
      var package = "psmc-rs";
      var versions = ["0.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_psmc-rs"></div>
   <div style="width: 100%" id="platform_plot_psmc-rs"></div>
   <div style="width: 100%" id="cdf_plot_psmc-rs"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for psmc-rs
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/psmc-rs/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_psmc-rs', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for psmc-rs
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/psmc-rs/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_psmc-rs', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for psmc-rs
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/psmc-rs/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_psmc-rs', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psmc-rs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psmc-rs/README.html