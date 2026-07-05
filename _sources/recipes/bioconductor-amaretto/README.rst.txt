:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-amaretto'
.. highlight: bash

bioconductor-amaretto
=====================

.. conda:recipe:: bioconductor-amaretto
   :replaces_section_title:
   :noindex:

   Regulatory Network Inference and Driver Gene Evaluation using Integrative Multi\-Omics Analysis and Penalized Regression

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/AMARETTO.html
   :license: Apache License (== 2.0) + file LICENSE
   :recipe: /`bioconductor-amaretto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amaretto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amaretto/meta.yaml>`_

   Integrating an increasing number of available multi\-omics cancer data remains one of the main challenges to improve our understanding of cancer. One of the main challenges is using multi\-omics data for identifying novel cancer driver genes. We have developed an algorithm\, called AMARETTO\, that integrates copy number\, DNA methylation and gene expression data to identify a set of driver genes by analyzing cancer samples and connects them to clusters of co\-expressed genes\, which we define as modules. We applied AMARETTO in a pancancer setting to identify cancer driver genes and their modules on multiple cancer sites. AMARETTO captures modules enriched in angiogenesis\, cell cycle and EMT\, and modules that accurately predict survival and molecular subtypes. This allows AMARETTO to identify novel cancer driver genes directing canonical cancer pathways.


.. conda:package:: bioconductor-amaretto

   |downloads_bioconductor-amaretto| |docker_bioconductor-amaretto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.13.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.13.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.1.1-1``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0a0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.1,<2.27.0a0``
   :depends on bioconductor-curatedtcgadata: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-curatedtcgadata: ``>=1.32.1,<1.33.0a0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0a0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.1,<1.37.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=19``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-callr: ``>=3.0.0.9001``
   :depends on r-circlize: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-glmnet: 
   :depends on r-gridextra: 
   :depends on r-httr: 
   :depends on r-knitr: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-rcpp: 
   :depends on r-readr: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-tibble: 

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

    pixi global install bioconductor-amaretto

to add into an existing workspace instead, run::

    pixi add bioconductor-amaretto

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-amaretto

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-amaretto

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-amaretto:<tag>

(see `bioconductor-amaretto/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-amaretto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-amaretto.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-amaretto
   :alt:   (downloads)
.. |docker_bioconductor-amaretto| image:: https://quay.io/repository/biocontainers/bioconductor-amaretto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-amaretto
.. _`bioconductor-amaretto/tags`: https://quay.io/repository/biocontainers/bioconductor-amaretto?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-amaretto";
      var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.13.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-amaretto"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-amaretto"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-amaretto"></div>



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
         
            // Build cdf plot for bioconductor-amaretto
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-amaretto/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-amaretto', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-amaretto
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-amaretto/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-amaretto', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-amaretto
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-amaretto/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-amaretto', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-amaretto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-amaretto/README.html