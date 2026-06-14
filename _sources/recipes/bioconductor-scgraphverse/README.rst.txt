:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scgraphverse'
.. highlight: bash

bioconductor-scgraphverse
=========================

.. conda:recipe:: bioconductor-scgraphverse
   :replaces_section_title:
   :noindex:

   scGraphVerse\: A Gene Network Analysis Package

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/scGraphVerse.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-scgraphverse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scgraphverse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scgraphverse/meta.yaml>`_

   A package for inferring\, comparing\, and visualizing gene networks from single\-cell RNA sequencing data. It integrates multiple methods \(GENIE3\, GRNBoost2\, ZILGM\, PCzinb\, and JRF\) for robust network inference\, supports consensus building across methods or datasets\, and provides tools for evaluating regulatory structure and community similarity. GRNBoost2 requires Python package \'arboreto\' which can be installed using init\_py\(install\_missing \= TRUE\). This package includes adapted functions from ZILGM \(Park et al.\, 2021\)\, JRF \(Petralia et al.\, 2015\)\, and learn2count \(Nguyen et al. 2023\) packages with proper attribution under GPL\-2 license.


.. conda:package:: bioconductor-scgraphverse

   |downloads_bioconductor-scgraphverse| |docker_bioconductor-scgraphverse|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-genie3: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-genie3: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-graph: ``>=1.88.1,<1.89.0a0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.1,<1.37.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-distributions3: 
   :depends on r-doparallel: 
   :depends on r-dorng: 
   :depends on r-dplyr: 
   :depends on r-glmnet: 
   :depends on r-httr: 
   :depends on r-igraph: 
   :depends on r-jsonlite: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-mpath: 
   :depends on r-reticulate: 
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

    pixi global install bioconductor-scgraphverse

to add into an existing workspace instead, run::

    pixi add bioconductor-scgraphverse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scgraphverse

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scgraphverse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scgraphverse:<tag>

(see `bioconductor-scgraphverse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scgraphverse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scgraphverse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scgraphverse
   :alt:   (downloads)
.. |docker_bioconductor-scgraphverse| image:: https://quay.io/repository/biocontainers/bioconductor-scgraphverse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scgraphverse
.. _`bioconductor-scgraphverse/tags`: https://quay.io/repository/biocontainers/bioconductor-scgraphverse?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-scgraphverse";
      var versions = ["1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-scgraphverse"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-scgraphverse"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-scgraphverse"></div>



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
         
            // Build cdf plot for bioconductor-scgraphverse
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-scgraphverse/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-scgraphverse', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-scgraphverse
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-scgraphverse/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-scgraphverse', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-scgraphverse
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-scgraphverse/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-scgraphverse', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scgraphverse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scgraphverse/README.html