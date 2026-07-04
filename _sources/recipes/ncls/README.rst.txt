:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncls'
.. highlight: bash

ncls
====

.. conda:recipe:: ncls
   :replaces_section_title:
   :noindex:

   A fast interval tree\-like implementation in C\, wrapped for the Python ecosystem. Basically a static interval\-tree that is silly fast for both construction and lookups.

   :homepage: https://github.com/endrebak/ncls
   :license: BSD / BSD-3-Clause
   :recipe: /`ncls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncls/meta.yaml>`_

   


.. conda:package:: ncls

   |downloads_ncls| |docker_ncls|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.70-0</code>,  <code>0.0.68-5</code>,  <code>0.0.68-4</code>,  <code>0.0.68-3</code>,  <code>0.0.68-2</code>,  <code>0.0.68-1</code>,  <code>0.0.68-0</code>,  <code>0.0.66-3</code>,  <code>0.0.66-1</code>,  </span></summary>
      

      ``0.0.70-0``,  ``0.0.68-5``,  ``0.0.68-4``,  ``0.0.68-3``,  ``0.0.68-2``,  ``0.0.68-1``,  ``0.0.68-0``,  ``0.0.66-3``,  ``0.0.66-1``,  ``0.0.66-0``,  ``0.0.65-1``,  ``0.0.65-0``,  ``0.0.64-1``,  ``0.0.64-0``,  ``0.0.63-0``,  ``0.0.62-0``,  ``0.0.60-0``,  ``0.0.57-1``,  ``0.0.57-0``,  ``0.0.56-0``,  ``0.0.54-0``,  ``0.0.53-2``,  ``0.0.53-1``,  ``0.0.53-0``,  ``0.0.52-0``,  ``0.0.51-0``,  ``0.0.50-0``,  ``0.0.49-0``,  ``0.0.48-0``,  ``0.0.47-0``,  ``0.0.46-0``,  ``0.0.45-0``,  ``0.0.44-0``,  ``0.0.43-0``,  ``0.0.42-3``,  ``0.0.42-2``,  ``0.0.42-1``,  ``0.0.42-0``

      
      .. raw:: html

         </details>
      

   
   :depends on numpy: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on setuptools: 

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

    pixi global install ncls

to add into an existing workspace instead, run::

    pixi add ncls

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncls

Alternatively, to install into a new environment, run::

    conda create -n envname ncls

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncls:<tag>

(see `ncls/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncls| image:: https://img.shields.io/conda/dn/bioconda/ncls.svg?style=flat
   :target: https://anaconda.org/bioconda/ncls
   :alt:   (downloads)
.. |docker_ncls| image:: https://quay.io/repository/biocontainers/ncls/status
   :target: https://quay.io/repository/biocontainers/ncls
.. _`ncls/tags`: https://quay.io/repository/biocontainers/ncls?tab=tags


.. raw:: html

   <script>
      var package = "ncls";
      var versions = ["0.0.70","0.0.68","0.0.68","0.0.68","0.0.68"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_ncls"></div>
   <div style="width: 100%" id="platform_plot_ncls"></div>
   <div style="width: 100%" id="cdf_plot_ncls"></div>



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
         
            // Build cdf plot for ncls
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ncls/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_ncls', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for ncls
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ncls/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_ncls', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for ncls
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ncls/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_ncls', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncls/README.html