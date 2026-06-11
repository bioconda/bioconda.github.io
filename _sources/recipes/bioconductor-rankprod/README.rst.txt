:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rankprod'
.. highlight: bash

bioconductor-rankprod
=====================

.. conda:recipe:: bioconductor-rankprod
   :replaces_section_title:
   :noindex:

   Rank Product method for identifying differentially expressed genes with application in meta\-analysis

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/RankProd.html
   :license: file LICENSE
   :recipe: /`bioconductor-rankprod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rankprod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rankprod/meta.yaml>`_
   :links: biotools: :biotools:`rankprod`, doi: :doi:`10.1093/bioinformatics/btl476`

   Non\-parametric method for identifying differentially expressed \(up\- or down\- regulated\) genes based on the estimated percentage of false predictions \(pfp\). The method can combine data sets from different origins \(meta\-analysis\) to increase the power of the identification.


.. conda:package:: bioconductor-rankprod

   |downloads_bioconductor-rankprod| |docker_bioconductor-rankprod|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.36.0-0</code>,  <code>3.32.0-0</code>,  <code>3.28.0-0</code>,  <code>3.26.0-0</code>,  <code>3.24.0-0</code>,  <code>3.20.0-0</code>,  <code>3.18.0-0</code>,  <code>3.16.0-1</code>,  <code>3.16.0-0</code>,  </span></summary>
      

      ``3.36.0-0``,  ``3.32.0-0``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.0-0``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-1``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-0``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-0``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gmp: 
   :depends on r-rmpfr: 

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

    pixi global install bioconductor-rankprod

to add into an existing workspace instead, run::

    pixi add bioconductor-rankprod

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rankprod

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rankprod

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rankprod:<tag>

(see `bioconductor-rankprod/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rankprod| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rankprod.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rankprod
   :alt:   (downloads)
.. |docker_bioconductor-rankprod| image:: https://quay.io/repository/biocontainers/bioconductor-rankprod/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rankprod
.. _`bioconductor-rankprod/tags`: https://quay.io/repository/biocontainers/bioconductor-rankprod?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-rankprod";
      var versions = ["3.36.0","3.32.0","3.28.0","3.26.0","3.24.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-rankprod"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-rankprod"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-rankprod"></div>



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
         
            // Build cdf plot for bioconductor-rankprod
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-rankprod/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-rankprod', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-rankprod
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-rankprod/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-rankprod', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-rankprod
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-rankprod/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-rankprod', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rankprod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rankprod/README.html