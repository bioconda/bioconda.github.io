:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cocoa'
.. highlight: bash

bioconductor-cocoa
==================

.. conda:recipe:: bioconductor-cocoa
   :replaces_section_title:
   :noindex:

   Coordinate Covariation Analysis

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/COCOA.html
   :license: GPL-3
   :recipe: /`bioconductor-cocoa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocoa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocoa/meta.yaml>`_

   COCOA is a method for understanding epigenetic variation among samples. COCOA can be used with epigenetic data that includes genomic coordinates and an epigenetic signal\, such as DNA methylation and chromatin accessibility data. To describe the method on a high level\, COCOA quantifies inter\-sample variation with either a supervised or unsupervised technique then uses a database of \"region sets\" to annotate the variation among samples. A region set is a set of genomic regions that share a biological annotation\, for instance transcription factor \(TF\) binding regions\, histone modification regions\, or open chromatin regions. COCOA can identify region sets that are associated with epigenetic variation between samples and increase understanding of variation in your data.


.. conda:package:: bioconductor-cocoa

   |downloads_bioconductor-cocoa| |docker_bioconductor-cocoa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.20.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.2.0-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-mira: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-fitdistrplus: 
   :depends on r-ggplot2: 
   :depends on r-simplecache: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-cocoa

to add into an existing workspace instead, run::

    pixi add bioconductor-cocoa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cocoa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cocoa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cocoa:<tag>

(see `bioconductor-cocoa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cocoa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cocoa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cocoa
   :alt:   (downloads)
.. |docker_bioconductor-cocoa| image:: https://quay.io/repository/biocontainers/bioconductor-cocoa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cocoa
.. _`bioconductor-cocoa/tags`: https://quay.io/repository/biocontainers/bioconductor-cocoa?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-cocoa";
      var versions = ["2.24.0","2.20.0","2.16.0","2.14.0","2.12.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-cocoa"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-cocoa"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-cocoa"></div>



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
         
            // Build cdf plot for bioconductor-cocoa
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cocoa/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-cocoa', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-cocoa
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cocoa/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-cocoa', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-cocoa
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cocoa/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-cocoa', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cocoa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cocoa/README.html