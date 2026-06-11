:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.ag'
.. highlight: bash

bioconductor-pd.ag
==================

.. conda:recipe:: bioconductor-pd.ag
   :replaces_section_title:
   :noindex:

   Platform Design Info for The Manufacturer\'s Name AG

   :homepage: https://bioconductor.org/packages/3.22/data/annotation/html/pd.ag.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.ag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.ag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.ag/meta.yaml>`_

   Platform Design Info for The Manufacturer\'s Name AG


.. conda:package:: bioconductor-pd.ag

   |downloads_bioconductor-pd.ag| |docker_bioconductor-pd.ag|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-14</code>,  <code>3.12.0-13</code>,  <code>3.12.0-12</code>,  <code>3.12.0-11</code>,  <code>3.12.0-10</code>,  <code>3.12.0-9</code>,  <code>3.12.0-8</code>,  <code>3.12.0-7</code>,  <code>3.12.0-6</code>,  </span></summary>
      

      ``3.12.0-14``,  ``3.12.0-13``,  ``3.12.0-12``,  ``3.12.0-11``,  ``3.12.0-10``,  ``3.12.0-9``,  ``3.12.0-8``,  ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-oligo: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-oligoclasses: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: ``>=0.3.1``
   :depends on r-rsqlite: ``>=1.0.0``

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

    pixi global install bioconductor-pd.ag

to add into an existing workspace instead, run::

    pixi add bioconductor-pd.ag

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pd.ag

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pd.ag

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pd.ag:<tag>

(see `bioconductor-pd.ag/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pd.ag| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.ag.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.ag
   :alt:   (downloads)
.. |docker_bioconductor-pd.ag| image:: https://quay.io/repository/biocontainers/bioconductor-pd.ag/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.ag
.. _`bioconductor-pd.ag/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.ag?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-pd.ag";
      var versions = ["3.12.0","3.12.0","3.12.0","3.12.0","3.12.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-pd.ag"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-pd.ag"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-pd.ag"></div>



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
         
            // Build cdf plot for bioconductor-pd.ag
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pd.ag/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-pd.ag', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-pd.ag
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pd.ag/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-pd.ag', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-pd.ag
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pd.ag/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-pd.ag', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.ag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.ag/README.html