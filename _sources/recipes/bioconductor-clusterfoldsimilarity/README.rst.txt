:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterfoldsimilarity'
.. highlight: bash

bioconductor-clusterfoldsimilarity
==================================

.. conda:recipe:: bioconductor-clusterfoldsimilarity
   :replaces_section_title:
   :noindex:

   Calculate similarity of clusters from different single cell samples using foldchanges

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/ClusterFoldSimilarity.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterfoldsimilarity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterfoldsimilarity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterfoldsimilarity/meta.yaml>`_

   This package calculates a similarity coefficient using the fold changes of shared features \(e.g. genes\) among clusters of different samples\/batches\/datasets. The similarity coefficient is calculated using the dot\-product \(Hadamard product\) of every pairwise combination of Fold Changes between a source cluster i of sample\/dataset n and all the target clusters j in sample\/dataset m


.. conda:package:: bioconductor-clusterfoldsimilarity

   |downloads_bioconductor-clusterfoldsimilarity| |docker_bioconductor-clusterfoldsimilarity|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-ggdendro: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-seurat: 
   :depends on r-seuratobject: 

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

    pixi global install bioconductor-clusterfoldsimilarity

to add into an existing workspace instead, run::

    pixi add bioconductor-clusterfoldsimilarity

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-clusterfoldsimilarity

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-clusterfoldsimilarity

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-clusterfoldsimilarity:<tag>

(see `bioconductor-clusterfoldsimilarity/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-clusterfoldsimilarity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterfoldsimilarity.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterfoldsimilarity
   :alt:   (downloads)
.. |docker_bioconductor-clusterfoldsimilarity| image:: https://quay.io/repository/biocontainers/bioconductor-clusterfoldsimilarity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterfoldsimilarity
.. _`bioconductor-clusterfoldsimilarity/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterfoldsimilarity?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-clusterfoldsimilarity";
      var versions = ["1.6.0","1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-clusterfoldsimilarity"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-clusterfoldsimilarity"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-clusterfoldsimilarity"></div>



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
         
            // Build cdf plot for bioconductor-clusterfoldsimilarity
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-clusterfoldsimilarity/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-clusterfoldsimilarity', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-clusterfoldsimilarity
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-clusterfoldsimilarity/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-clusterfoldsimilarity', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-clusterfoldsimilarity
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-clusterfoldsimilarity/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-clusterfoldsimilarity', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterfoldsimilarity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterfoldsimilarity/README.html