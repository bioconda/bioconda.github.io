:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-syntenet'
.. highlight: bash

bioconductor-syntenet
=====================

.. conda:recipe:: bioconductor-syntenet
   :replaces_section_title:
   :noindex:

   Inference And Analysis Of Synteny Networks

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/syntenet.html
   :license: GPL-3
   :recipe: /`bioconductor-syntenet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-syntenet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-syntenet/meta.yaml>`_

   syntenet can be used to infer synteny networks from whole\-genome protein sequences and analyze them. Anchor pairs are detected with the MCScanX algorithm\, which was ported to this package with the Rcpp framework for R and C\+\+ integration. Anchor pairs from synteny analyses are treated as an undirected unweighted graph \(i.e.\, a synteny network\)\, and users can perform\: i. network clustering\; ii. phylogenomic profiling \(by identifying which species contain which clusters\) and\; iii. microsynteny\-based phylogeny reconstruction with maximum likelihood.


.. conda:package:: bioconductor-syntenet

   |downloads_bioconductor-syntenet| |docker_bioconductor-syntenet|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.4-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggnetwork: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-intergraph: 
   :depends on r-pheatmap: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: ``>=1.0.8``
   :depends on r-rlang: 
   :depends on r-testthat: 

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

    pixi global install bioconductor-syntenet

to add into an existing workspace instead, run::

    pixi add bioconductor-syntenet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-syntenet

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-syntenet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-syntenet:<tag>

(see `bioconductor-syntenet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-syntenet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-syntenet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-syntenet
   :alt:   (downloads)
.. |docker_bioconductor-syntenet| image:: https://quay.io/repository/biocontainers/bioconductor-syntenet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-syntenet
.. _`bioconductor-syntenet/tags`: https://quay.io/repository/biocontainers/bioconductor-syntenet?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-syntenet";
      var versions = ["1.12.0","1.8.0","1.4.0","1.2.4","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-syntenet"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-syntenet"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-syntenet"></div>



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
         
            // Build cdf plot for bioconductor-syntenet
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-syntenet/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-syntenet', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-syntenet
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-syntenet/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-syntenet', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-syntenet
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-syntenet/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-syntenet', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-syntenet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-syntenet/README.html