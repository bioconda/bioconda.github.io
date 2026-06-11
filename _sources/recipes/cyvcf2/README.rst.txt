:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cyvcf2'
.. highlight: bash

cyvcf2
======

.. conda:recipe:: cyvcf2
   :replaces_section_title:
   :noindex:

   A cython wrapper around htslib built for fast parsing of Variant Call Format \(VCF\) files.

   :homepage: https://github.com/brentp/cyvcf2
   :documentation: https://brentp.github.io/cyvcf2
   
   :license: MIT / MIT
   :recipe: /`cyvcf2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyvcf2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyvcf2/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx057`, biotools: :biotools:`cyvcf2`

   


.. conda:package:: cyvcf2

   |downloads_cyvcf2| |docker_cyvcf2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.33.0-0</code>,  <code>0.32.1-0</code>,  <code>0.31.4-1</code>,  <code>0.31.4-0</code>,  <code>0.31.3-0</code>,  <code>0.31.2-0</code>,  <code>0.31.1-3</code>,  <code>0.31.1-2</code>,  <code>0.31.1-1</code>,  </span></summary>
      

      ``0.33.0-0``,  ``0.32.1-0``,  ``0.31.4-1``,  ``0.31.4-0``,  ``0.31.3-0``,  ``0.31.2-0``,  ``0.31.1-3``,  ``0.31.1-2``,  ``0.31.1-1``,  ``0.31.1-0``,  ``0.31.0-1``,  ``0.31.0-0``,  ``0.30.28-1``,  ``0.30.28-0``,  ``0.30.27-0``,  ``0.30.26-0``,  ``0.30.25-0``,  ``0.30.22-0``,  ``0.30.16-2``,  ``0.30.16-1``,  ``0.30.16-0``,  ``0.30.15-1``,  ``0.30.15-0``,  ``0.30.14-1``,  ``0.30.14-0``,  ``0.30.13-0``,  ``0.30.12-0``,  ``0.30.11-2``,  ``0.30.11-1``,  ``0.30.11-0``,  ``0.30.9-0``,  ``0.30.8-0``,  ``0.30.6-1``,  ``0.30.6-0``,  ``0.30.4-0``,  ``0.30.2-0``,  ``0.30.1-0``,  ``0.20.9-0``,  ``0.20.8-0``,  ``0.20.7-0``,  ``0.20.6-0``,  ``0.20.5-0``,  ``0.20.4-1``,  ``0.20.4-0``,  ``0.20.3-0``,  ``0.20.1-1``,  ``0.20.1-0``,  ``0.20.0-1``,  ``0.20.0-0``,  ``0.11.7-0``,  ``0.11.6-0``,  ``0.11.5-1``,  ``0.11.5-0``,  ``0.11.4-0``,  ``0.11.2-0``,  ``0.10.10-0``,  ``0.10.8-2``,  ``0.10.8-1``,  ``0.10.8-0``,  ``0.10.0-0``,  ``0.8.4-4``,  ``0.8.4-3``,  ``0.8.4-2``,  ``0.8.4-1``,  ``0.8.4-0``,  ``0.8.0-0``,  ``0.7.2-3``,  ``0.7.2-2``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.6.6a-0``,  ``0.6.5-0``,  ``0.5.5-0``,  ``0.5.3-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.8-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on click: 
   :depends on coloredlogs: 
   :depends on htslib: ``>=1.23.1,<1.24.0a0``
   :depends on libgcc: ``>=14``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=2.2.6,<3.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install cyvcf2

to add into an existing workspace instead, run::

    pixi add cyvcf2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cyvcf2

Alternatively, to install into a new environment, run::

    conda create -n envname cyvcf2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cyvcf2:<tag>

(see `cyvcf2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cyvcf2| image:: https://img.shields.io/conda/dn/bioconda/cyvcf2.svg?style=flat
   :target: https://anaconda.org/bioconda/cyvcf2
   :alt:   (downloads)
.. |docker_cyvcf2| image:: https://quay.io/repository/biocontainers/cyvcf2/status
   :target: https://quay.io/repository/biocontainers/cyvcf2
.. _`cyvcf2/tags`: https://quay.io/repository/biocontainers/cyvcf2?tab=tags


.. raw:: html

   <script>
      var package = "cyvcf2";
      var versions = ["0.33.0","0.32.1","0.31.4","0.31.4","0.31.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_cyvcf2"></div>
   <div style="width: 100%" id="platform_plot_cyvcf2"></div>
   <div style="width: 100%" id="cdf_plot_cyvcf2"></div>



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
         
            // Build cdf plot for cyvcf2
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cyvcf2/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_cyvcf2', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for cyvcf2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cyvcf2/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_cyvcf2', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for cyvcf2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cyvcf2/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_cyvcf2', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cyvcf2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cyvcf2/README.html