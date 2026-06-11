:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gseamining'
.. highlight: bash

bioconductor-gseamining
=======================

.. conda:recipe:: bioconductor-gseamining
   :replaces_section_title:
   :noindex:

   Make Biological Sense of Gene Set Enrichment Analysis Outputs

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/GSEAmining.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-gseamining <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gseamining>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gseamining/meta.yaml>`_

   Gene Set Enrichment Analysis is a very powerful and interesting computational method that allows an easy correlation between differential expressed genes and biological processes. Unfortunately\, although it was designed to help researchers to interpret gene expression data it can generate huge amounts of results whose biological meaning can be difficult to interpret. Many available tools rely on the hierarchically structured Gene Ontology \(GO\) classification to reduce reundandcy in the results. However\, due to the popularity of GSEA many more gene set collections\, such as those in the Molecular Signatures Database are emerging. Since these collections are not organized as those in GO\, their usage for GSEA do not always give a straightforward answer or\, in other words\, getting all the meaninful information can be challenging with the currently available tools. For these reasons\, GSEAmining was born to be an easy tool to create reproducible reports to help researchers make biological sense of GSEA outputs. Given the results of GSEA\, GSEAmining clusters the different gene sets collections based on the presence of the same genes in the leadind edge \(core\) subset. Leading edge subsets are those genes that contribute most to the enrichment score of each collection of genes or gene sets. For this reason\, gene sets that participate in similar biological processes should share genes in common and in turn cluster together. After that\, GSEAmining is able to identify and represent for each cluster\: \- The most enriched terms in the names of gene sets \(as wordclouds\) \- The most enriched genes in the leading edge subsets \(as bar plots\). In each case\, positive and negative enrichments are shown in different colors so it is easy to distinguish biological processes or genes that may be of interest in that particular study.


.. conda:package:: bioconductor-gseamining

   |downloads_bioconductor-gseamining| |docker_bioconductor-gseamining|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dendextend: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggwordcloud: 
   :depends on r-gridextra: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidytext: 

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

    pixi global install bioconductor-gseamining

to add into an existing workspace instead, run::

    pixi add bioconductor-gseamining

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gseamining

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gseamining

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gseamining:<tag>

(see `bioconductor-gseamining/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gseamining| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gseamining.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gseamining
   :alt:   (downloads)
.. |docker_bioconductor-gseamining| image:: https://quay.io/repository/biocontainers/bioconductor-gseamining/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gseamining
.. _`bioconductor-gseamining/tags`: https://quay.io/repository/biocontainers/bioconductor-gseamining?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-gseamining";
      var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-gseamining"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-gseamining"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-gseamining"></div>



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
         
            // Build cdf plot for bioconductor-gseamining
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gseamining/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-gseamining', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-gseamining
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gseamining/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-gseamining', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-gseamining
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gseamining/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-gseamining', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gseamining/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gseamining/README.html