:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vt'
.. highlight: bash

vt
==

.. conda:recipe:: vt
   :replaces_section_title:
   :noindex:

   A tool set for manipulating and generating VCF files.

   :homepage: https://genome.sph.umich.edu/wiki/Vt
   :license: MIT / MIT
   :recipe: /`vt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vt/meta.yaml>`_

   


.. conda:package:: vt

   |downloads_vt| |docker_vt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2015.11.10-4</code>,  <code>2015.11.10-3</code>,  <code>2015.11.10-2</code>,  <code>2015.11.10-1</code>,  <code>2015.11.10-0</code>,  <code>0.57721-13</code>,  <code>0.57721-12</code>,  <code>0.57721-11</code>,  <code>0.57721-10</code>,  </span></summary>
      

      ``2015.11.10-4``,  ``2015.11.10-3``,  ``2015.11.10-2``,  ``2015.11.10-1``,  ``2015.11.10-0``,  ``0.57721-13``,  ``0.57721-12``,  ``0.57721-11``,  ``0.57721-10``,  ``0.57721-9``,  ``0.57721-8``,  ``0.57721-7``,  ``0.57721-6``,  ``0.57721-5``,  ``0.57721-4``,  ``0.57721-3``,  ``0.57721-2``,  ``0.57721-1``,  ``0.57721-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.10.2,<1.24.0a0``
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on libstdcxx-ng: ``>=7.5.0``
   :depends on pcre2: ``>=10.35,<10.36.0a0``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install vt

to add into an existing workspace instead, run::

    pixi add vt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vt

Alternatively, to install into a new environment, run::

    conda create -n envname vt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vt:<tag>

(see `vt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vt| image:: https://img.shields.io/conda/dn/bioconda/vt.svg?style=flat
   :target: https://anaconda.org/bioconda/vt
   :alt:   (downloads)
.. |docker_vt| image:: https://quay.io/repository/biocontainers/vt/status
   :target: https://quay.io/repository/biocontainers/vt
.. _`vt/tags`: https://quay.io/repository/biocontainers/vt?tab=tags


.. raw:: html

   <script>
      var package = "vt";
      var versions = ["2015.11.10","2015.11.10","2015.11.10","2015.11.10","2015.11.10"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_vt"></div>
   <div style="width: 100%" id="platform_plot_vt"></div>
   <div style="width: 100%" id="cdf_plot_vt"></div>



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
         
            // Build cdf plot for vt
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vt/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_vt', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for vt
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vt/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_vt', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for vt
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vt/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_vt', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vt/README.html