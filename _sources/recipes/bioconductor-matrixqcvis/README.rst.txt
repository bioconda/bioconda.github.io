:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-matrixqcvis'
.. highlight: bash

bioconductor-matrixqcvis
========================

.. conda:recipe:: bioconductor-matrixqcvis
   :replaces_section_title:
   :noindex:

   Shiny\-based interactive data\-quality exploration for omics data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/MatrixQCvis.html
   :license: GPL-3
   :recipe: /`bioconductor-matrixqcvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixqcvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixqcvis/meta.yaml>`_

   Data quality assessment is an integral part of preparatory data analysis to ensure sound biological information retrieval. We present here the MatrixQCvis package\, which provides shiny\-based interactive visualization of data quality metrics at the per\-sample and per\-feature level. It is broadly applicable to quantitative omics data types that come in matrix\-like format \(features x samples\). It enables the detection of low\-quality samples\, drifts\, outliers and batch effects in data sets. Visualizations include amongst others bar\- and violin plots of the \(count\/intensity\) values\, mean vs standard deviation plots\, MA plots\, empirical cumulative distribution function \(ECDF\) plots\, visualizations of the distances between samples\, and multiple types of dimension reduction plots. Furthermore\, MatrixQCvis allows for differential expression analysis based on the limma \(moderated t\-tests\) and proDA \(Wald tests\) packages. MatrixQCvis builds upon the popular Bioconductor SummarizedExperiment S4 class and enables thus the facile integration into existing workflows. The package is especially tailored towards metabolomics and proteomics mass spectrometry data\, but also allows to assess the data quality of other data types that can be represented in a SummarizedExperiment object.


.. conda:package:: bioconductor-matrixqcvis

   |downloads_bioconductor-matrixqcvis| |docker_bioconductor-matrixqcvis|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-pcamethods: ``>=2.2.0,<2.3.0``
   :depends on bioconductor-proda: ``>=1.24.0,<1.25.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends on bioconductor-vsn: ``>=3.78.0,<3.79.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=1.0.5``
   :depends on r-dt: ``>=0.33``
   :depends on r-ggplot2: ``>=3.3.3``
   :depends on r-hmisc: ``>=4.5-0``
   :depends on r-htmlwidgets: ``>=1.5.3``
   :depends on r-imputelcmd: ``>=2.0``
   :depends on r-mass: ``>=7.3-58.1``
   :depends on r-plotly: ``>=4.9.3``
   :depends on r-rlang: ``>=0.4.10``
   :depends on r-rmarkdown: ``>=2.7``
   :depends on r-rtsne: ``>=0.15``
   :depends on r-shiny: ``>=1.6.0``
   :depends on r-shinydashboard: ``>=0.7.1``
   :depends on r-shinyhelper: ``>=0.3.2``
   :depends on r-shinyjs: ``>=2.0.0``
   :depends on r-tibble: ``>=3.1.1``
   :depends on r-tidyr: ``>=1.1.3``
   :depends on r-umap: ``>=0.2.7.0``
   :depends on r-upsetr: ``>=1.4.0``

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

    pixi global install bioconductor-matrixqcvis

to add into an existing workspace instead, run::

    pixi add bioconductor-matrixqcvis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-matrixqcvis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-matrixqcvis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-matrixqcvis:<tag>

(see `bioconductor-matrixqcvis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-matrixqcvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-matrixqcvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-matrixqcvis
   :alt:   (downloads)
.. |docker_bioconductor-matrixqcvis| image:: https://quay.io/repository/biocontainers/bioconductor-matrixqcvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-matrixqcvis
.. _`bioconductor-matrixqcvis/tags`: https://quay.io/repository/biocontainers/bioconductor-matrixqcvis?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-matrixqcvis";
      var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-matrixqcvis"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-matrixqcvis"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-matrixqcvis"></div>



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
         
            // Build cdf plot for bioconductor-matrixqcvis
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-matrixqcvis/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-matrixqcvis', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-matrixqcvis
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-matrixqcvis/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-matrixqcvis', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-matrixqcvis
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-matrixqcvis/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-matrixqcvis', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-matrixqcvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-matrixqcvis/README.html