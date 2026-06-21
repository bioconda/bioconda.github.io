:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'salmon'
.. highlight: bash

salmon
======

.. conda:recipe:: salmon
   :replaces_section_title:
   :noindex:

   Highly\-accurate \& wicked fast transcript\-level quantification from RNA\-seq reads \(salmon 2.0\, Rust\).

   :homepage: https://github.com/COMBINE-lab/salmon
   :documentation: https://combine-lab.github.io/salmon
   
   :license: BSD / BSD-3-Clause
   :recipe: /`salmon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmon/meta.yaml>`_
   :links: biotools: :biotools:`salmon`, usegalaxy-eu: :usegalaxy-eu:`salmon`, usegalaxy-eu: :usegalaxy-eu:`salmonquantmerge`, doi: :doi:`10.1038/nmeth.4197`

   


.. conda:package:: salmon

   |downloads_salmon| |docker_salmon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.11.4-0</code>,  <code>1.10.3-5</code>,  <code>1.10.3-4</code>,  </span></summary>
      

      ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.11.4-0``,  ``1.10.3-5``,  ``1.10.3-4``,  ``1.10.3-3``,  ``1.10.3-2``,  ``1.10.3-1``,  ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.1-2``,  ``1.10.1-1``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.15.0-0``,  ``0.14.2-1``,  ``0.14.2-0``,  ``0.14.1-2``,  ``0.14.1-1``,  ``0.14.1-0``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.13.0-2``,  ``0.13.0-1``,  ``0.12.0-1``,  ``0.11.3-2``,  ``0.11.3-1``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.2-3``,  ``0.10.2-1``,  ``0.10.1-1``,  ``0.10.0-1``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.2-3``,  ``0.7.2-2``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on libgcc: ``>=14``

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

    pixi global install salmon

to add into an existing workspace instead, run::

    pixi add salmon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install salmon

Alternatively, to install into a new environment, run::

    conda create -n envname salmon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/salmon:<tag>

(see `salmon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_salmon| image:: https://img.shields.io/conda/dn/bioconda/salmon.svg?style=flat
   :target: https://anaconda.org/bioconda/salmon
   :alt:   (downloads)
.. |docker_salmon| image:: https://quay.io/repository/biocontainers/salmon/status
   :target: https://quay.io/repository/biocontainers/salmon
.. _`salmon/tags`: https://quay.io/repository/biocontainers/salmon?tab=tags


.. raw:: html

   <script>
      var package = "salmon";
      var versions = ["2.1.1","2.1.0","2.0.1","2.0.0","1.12.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_salmon"></div>
   <div style="width: 100%" id="platform_plot_salmon"></div>
   <div style="width: 100%" id="cdf_plot_salmon"></div>



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
         
            // Build cdf plot for salmon
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/salmon/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_salmon', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for salmon
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/salmon/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_salmon', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for salmon
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/salmon/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_salmon', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
salmon 2.0 is a from\-scratch Rust rewrite of the C\+\+ tool. It uses a new
index format and CANNOT read C\+\+ \(pufferfish\) indices — rebuild indices with
2.0. quant.sf and the inferential\-replicate outputs remain compatible with
tximport\/fishpond\/swish. The final C\+\+ release \(1.12.0\) is packaged
separately as \`salmon\-cpp\` for reproducibility. Single\-cell quantification
moved to the alevin\-fry ecosystem.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/salmon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/salmon/README.html