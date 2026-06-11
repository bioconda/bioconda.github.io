:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-goexpress'
.. highlight: bash

bioconductor-goexpress
======================

.. conda:recipe:: bioconductor-goexpress
   :replaces_section_title:
   :noindex:

   Visualise microarray and RNAseq data using gene ontology annotations

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/GOexpress.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-goexpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goexpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goexpress/meta.yaml>`_

   The package contains methods to visualise the expression profile of genes from a microarray or RNA\-seq experiment\, and offers a supervised clustering approach to identify GO terms containing genes with expression levels that best classify two or more predefined groups of samples. Annotations for the genes present in the expression dataset may be obtained from Ensembl through the biomaRt package\, if not provided by the user. The default random forest framework is used to evaluate the capacity of each gene to cluster samples according to the factor of interest. Finally\, GO terms are scored by averaging the rank \(alternatively\, score\) of their respective gene sets to cluster the samples. P\-values may be computed to assess the significance of GO term ranking. Visualisation function include gene expression profile\, gene ontology\-based heatmaps\, and hierarchical clustering of experimental samples using gene expression data.


.. conda:package:: bioconductor-goexpress

   |downloads_bioconductor-goexpress| |docker_bioconductor-goexpress|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: ``>=0.9.0``
   :depends on r-gplots: ``>=2.13.0``
   :depends on r-randomforest: ``>=4.6``
   :depends on r-rcolorbrewer: ``>=1.0``
   :depends on r-rcurl: ``>=1.95``
   :depends on r-stringr: ``>=0.6.2``

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

    pixi global install bioconductor-goexpress

to add into an existing workspace instead, run::

    pixi add bioconductor-goexpress

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-goexpress

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-goexpress

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-goexpress:<tag>

(see `bioconductor-goexpress/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-goexpress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-goexpress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-goexpress
   :alt:   (downloads)
.. |docker_bioconductor-goexpress| image:: https://quay.io/repository/biocontainers/bioconductor-goexpress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-goexpress
.. _`bioconductor-goexpress/tags`: https://quay.io/repository/biocontainers/bioconductor-goexpress?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-goexpress";
      var versions = ["1.44.0","1.40.0","1.36.0","1.34.0","1.32.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-goexpress"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-goexpress"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-goexpress"></div>



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
         
            // Build cdf plot for bioconductor-goexpress
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-goexpress/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-goexpress', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-goexpress
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-goexpress/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-goexpress', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-goexpress
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-goexpress/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-goexpress', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-goexpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-goexpress/README.html