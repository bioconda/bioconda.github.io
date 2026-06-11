:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-minems2'
.. highlight: bash

r-minems2
=========

.. conda:recipe:: r-minems2
   :replaces_section_title:
   :noindex:

   Mine MS\-MS spectra using a frequent usbgraph mining approach.

   :homepage: https://github.com/adelabriere/mineMS2
   :license: GPL-3.0
   :recipe: /`r-minems2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minems2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minems2/meta.yaml>`_

   


.. conda:package:: r-minems2

   |downloads_r-minems2| |docker_r-minems2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.3-8</code>,  <code>0.9.3-7</code>,  <code>0.9.3-6</code>,  <code>0.9.3-5</code>,  <code>0.9.3-4</code>,  <code>0.9.3-3</code>,  <code>0.9.3-2</code>,  <code>0.9.3-1</code>,  <code>0.9.3-0</code>,  </span></summary>
      

      ``0.9.3-8``,  ``0.9.3-7``,  ``0.9.3-6``,  ``0.9.3-5``,  ``0.9.3-4``,  ``0.9.3-3``,  ``0.9.3-2``,  ``0.9.3-1``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-msnbase: ``>=2.32.0,<2.33.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-rcpp: ``>=0.12.13``
   :depends on r-stringr: 

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

    pixi global install r-minems2

to add into an existing workspace instead, run::

    pixi add r-minems2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-minems2

Alternatively, to install into a new environment, run::

    conda create -n envname r-minems2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-minems2:<tag>

(see `r-minems2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-minems2| image:: https://img.shields.io/conda/dn/bioconda/r-minems2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-minems2
   :alt:   (downloads)
.. |docker_r-minems2| image:: https://quay.io/repository/biocontainers/r-minems2/status
   :target: https://quay.io/repository/biocontainers/r-minems2
.. _`r-minems2/tags`: https://quay.io/repository/biocontainers/r-minems2?tab=tags


.. raw:: html

   <script>
      var package = "r-minems2";
      var versions = ["0.9.3","0.9.3","0.9.3","0.9.3","0.9.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-minems2"></div>
   <div style="width: 100%" id="platform_plot_r-minems2"></div>
   <div style="width: 100%" id="cdf_plot_r-minems2"></div>



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
         
            // Build cdf plot for r-minems2
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-minems2/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-minems2', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-minems2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-minems2/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-minems2', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-minems2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-minems2/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-minems2', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-minems2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-minems2/README.html