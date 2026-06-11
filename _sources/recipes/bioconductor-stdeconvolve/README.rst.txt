:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stdeconvolve'
.. highlight: bash

bioconductor-stdeconvolve
=========================

.. conda:recipe:: bioconductor-stdeconvolve
   :replaces_section_title:
   :noindex:

   Reference\-free Cell\-Type Deconvolution of Multi\-Cellular Spatially Resolved Transcriptomics Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/STdeconvolve.html
   :license: GPL-3
   :recipe: /`bioconductor-stdeconvolve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stdeconvolve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stdeconvolve/meta.yaml>`_

   STdeconvolve as an unsupervised\, reference\-free approach to infer latent cell\-type proportions and transcriptional profiles within multi\-cellular spatially\-resolved pixels from spatial transcriptomics \(ST\) datasets. STdeconvolve builds on latent Dirichlet allocation \(LDA\)\, a generative statistical model commonly used in natural language processing for discovering latent topics in collections of documents. In the context of natural language processing\, given a count matrix of words in documents\, LDA infers the distribution of words for each topic and the distribution of topics in each document. In the context of ST data\, given a count matrix of gene expression in multi\-cellular ST pixels\, STdeconvolve applies LDA to infer the putative transcriptional profile for each cell\-type and the proportional representation of each cell\-type in each multi\-cellular ST pixel.


.. conda:package:: bioconductor-stdeconvolve

   |downloads_bioconductor-stdeconvolve| |docker_bioconductor-stdeconvolve|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-clue: 
   :depends on r-ggplot2: 
   :depends on r-liger: 
   :depends on r-matrix: 
   :depends on r-mgcv: 
   :depends on r-reshape2: 
   :depends on r-scatterpie: 
   :depends on r-slam: 
   :depends on r-topicmodels: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-stdeconvolve

to add into an existing workspace instead, run::

    pixi add bioconductor-stdeconvolve

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-stdeconvolve

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-stdeconvolve

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-stdeconvolve:<tag>

(see `bioconductor-stdeconvolve/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-stdeconvolve| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stdeconvolve.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stdeconvolve
   :alt:   (downloads)
.. |docker_bioconductor-stdeconvolve| image:: https://quay.io/repository/biocontainers/bioconductor-stdeconvolve/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stdeconvolve
.. _`bioconductor-stdeconvolve/tags`: https://quay.io/repository/biocontainers/bioconductor-stdeconvolve?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-stdeconvolve";
      var versions = ["1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-stdeconvolve"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-stdeconvolve"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-stdeconvolve"></div>



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
         
            // Build cdf plot for bioconductor-stdeconvolve
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-stdeconvolve/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-stdeconvolve', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-stdeconvolve
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-stdeconvolve/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-stdeconvolve', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-stdeconvolve
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-stdeconvolve/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-stdeconvolve', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stdeconvolve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stdeconvolve/README.html