:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-edge'
.. highlight: bash

bioconductor-edge
=================

.. conda:recipe:: bioconductor-edge
   :replaces_section_title:
   :noindex:

   Extraction of Differential Gene Expression

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/edge.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-edge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edge/meta.yaml>`_
   :links: biotools: :biotools:`edge`

   The edge package implements methods for carrying out differential expression analyses of genome\-wide gene expression studies. Significance testing using the optimal discovery procedure and generalized likelihood ratio tests \(equivalent to F\-tests and t\-tests\) are implemented for general study designs. Special functions are available to facilitate the analysis of common study designs\, including time course experiments. Other packages such as sva and qvalue are integrated in edge to provide a wide range of tools for gene expression analysis.


.. conda:package:: bioconductor-edge

   |downloads_bioconductor-edge| |docker_bioconductor-edge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.42.0-0</code>,  <code>2.38.0-0</code>,  <code>2.34.0-1</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  <code>2.26.0-2</code>,  <code>2.26.0-1</code>,  </span></summary>
      

      ``2.42.0-0``,  ``2.38.0-0``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.26.0-2``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0a0``
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mass: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      


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

    pixi global install bioconductor-edge

to add into an existing workspace instead, run::

    pixi add bioconductor-edge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-edge

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-edge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-edge:<tag>

(see `bioconductor-edge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-edge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-edge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-edge
   :alt:   (downloads)
.. |docker_bioconductor-edge| image:: https://quay.io/repository/biocontainers/bioconductor-edge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-edge
.. _`bioconductor-edge/tags`: https://quay.io/repository/biocontainers/bioconductor-edge?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-edge";
      var versions = ["2.42.0","2.38.0","2.34.0","2.34.0","2.32.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-edge"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-edge"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-edge"></div>



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
         
            // Build cdf plot for bioconductor-edge
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-edge/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-edge', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-edge
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-edge/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-edge', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-edge
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-edge/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-edge', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-edge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-edge/README.html