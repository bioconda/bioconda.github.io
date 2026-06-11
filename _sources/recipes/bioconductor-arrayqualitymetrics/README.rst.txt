:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arrayqualitymetrics'
.. highlight: bash

bioconductor-arrayqualitymetrics
================================

.. conda:recipe:: bioconductor-arrayqualitymetrics
   :replaces_section_title:
   :noindex:

   Quality metrics report for microarray data sets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/arrayQualityMetrics.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-arrayqualitymetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayqualitymetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayqualitymetrics/meta.yaml>`_
   :links: biotools: :biotools:`arrayqualitymetrics`

   This package generates microarray quality metrics reports for data in Bioconductor microarray data containers \(ExpressionSet\, NChannelSet\, AffyBatch\). One and two color array platforms are supported.


.. conda:package:: bioconductor-arrayqualitymetrics

   |downloads_bioconductor-arrayqualitymetrics| |docker_bioconductor-arrayqualitymetrics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.62.0-0</code>,  <code>3.58.0-0</code>,  <code>3.56.0-0</code>,  <code>3.54.0-0</code>,  <code>3.50.0-0</code>,  <code>3.48.0-0</code>,  <code>3.46.0-1</code>,  <code>3.46.0-0</code>,  <code>3.44.0-0</code>,  </span></summary>
      

      ``3.62.0-0``,  ``3.58.0-0``,  ``3.56.0-0``,  ``3.54.0-0``,  ``3.50.0-0``,  ``3.48.0-0``,  ``3.46.0-1``,  ``3.46.0-0``,  ``3.44.0-0``,  ``3.42.0-0``,  ``3.40.0-1``,  ``3.38.0-0``,  ``3.36.0-0``,  ``3.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-affyplm: ``>=1.82.0,<1.83.0``
   :depends on bioconductor-beadarray: ``>=2.56.0,<2.57.0``
   :depends on bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-genefilter: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends on bioconductor-vsn: ``>=3.74.0,<3.75.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-gridsvg: ``>=1.4-3``
   :depends on r-hmisc: 
   :depends on r-hwriter: 
   :depends on r-lattice: 
   :depends on r-latticeextra: 
   :depends on r-rcolorbrewer: 
   :depends on r-setrng: 
   :depends on r-svglite: 
   :depends on r-xml: 

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

    pixi global install bioconductor-arrayqualitymetrics

to add into an existing workspace instead, run::

    pixi add bioconductor-arrayqualitymetrics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-arrayqualitymetrics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-arrayqualitymetrics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-arrayqualitymetrics:<tag>

(see `bioconductor-arrayqualitymetrics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-arrayqualitymetrics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrayqualitymetrics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arrayqualitymetrics
   :alt:   (downloads)
.. |docker_bioconductor-arrayqualitymetrics| image:: https://quay.io/repository/biocontainers/bioconductor-arrayqualitymetrics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrayqualitymetrics
.. _`bioconductor-arrayqualitymetrics/tags`: https://quay.io/repository/biocontainers/bioconductor-arrayqualitymetrics?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-arrayqualitymetrics";
      var versions = ["3.62.0","3.58.0","3.56.0","3.54.0","3.50.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-arrayqualitymetrics"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-arrayqualitymetrics"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-arrayqualitymetrics"></div>



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
         
            // Build cdf plot for bioconductor-arrayqualitymetrics
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-arrayqualitymetrics/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-arrayqualitymetrics', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-arrayqualitymetrics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-arrayqualitymetrics/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-arrayqualitymetrics', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-arrayqualitymetrics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-arrayqualitymetrics/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-arrayqualitymetrics', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrayqualitymetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrayqualitymetrics/README.html