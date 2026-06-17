:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-monocle3'
.. highlight: bash

r-monocle3
==========

.. conda:recipe:: r-monocle3
   :replaces_section_title:
   :noindex:

   An analysis toolkit for single\-cell RNA\-seq.

   :homepage: https://cole-trapnell-lab.github.io/monocle3
   :documentation: https://cole-trapnell-lab.github.io/monocle3/docs/introduction
   
   :developer docs: https://github.com/cole-trapnell-lab/monocle3
   :license: MIT / MIT
   :recipe: /`r-monocle3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-monocle3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-monocle3/meta.yaml>`_
   :links: biotools: :biotools:`monocle`, doi: :doi:`10.1038/nbt.2859`, doi: :doi:`10.1038/nmeth.4402`, doi: :doi:`10.1038/s41586-019-0969-x`

   


.. conda:package:: r-monocle3

   |downloads_r-monocle3| |docker_r-monocle3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.26-0</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.0.0-5</code>,  <code>1.0.0-4</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.4.26-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-batchelor: ``>=1.22.0,<1.23.0a0``
   :depends on bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.28``
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends on bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends on bioconductor-delayedarray: ``>=0.8``
   :depends on bioconductor-delayedmatrixstats: ``>=1.28.0,<1.29.0a0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.4``
   :depends on bioconductor-hdf5array: ``>=1.34.0,<1.35.0a0``
   :depends on bioconductor-limma: ``>=3.38.3``
   :depends on bioconductor-limma: ``>=3.62.1,<3.63.0a0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.11.5``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends on libcxx: ``>=18``
   :depends on r-assertthat: ``>=0.2.1``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-bpcells: ``>=0.3.0,<0.4.0a0``
   :depends on r-dplyr: ``>=0.8.0.1``
   :depends on r-ggdist: 
   :depends on r-ggforce: 
   :depends on r-ggplot2: ``>=3.1.1``
   :depends on r-ggrastr: 
   :depends on r-ggrepel: ``>=0.8.1``
   :depends on r-grr: 
   :depends on r-htmlwidgets: ``>=1.3``
   :depends on r-igraph: ``>=1.2.4``
   :depends on r-irlba: ``>=2.3.3``
   :depends on r-knitr: 
   :depends on r-leidenbase: 
   :depends on r-lme4: 
   :depends on r-lmtest: ``>=0.9_36``
   :depends on r-mass: ``>=7.3_51.4``
   :depends on r-matrix: ``>=1.2_17``
   :depends on r-matrix.utils: 
   :depends on r-pbapply: ``>=1.4``
   :depends on r-pbmcapply: ``>=1.4.1``
   :depends on r-pheatmap: 
   :depends on r-plotly: ``>=4.9``
   :depends on r-plyr: ``>=1.8.4``
   :depends on r-proxy: ``>=0.4_23``
   :depends on r-pryr: ``>=0.1.4``
   :depends on r-pscl: ``>=1.5.2``
   :depends on r-purrr: ``>=0.3.2``
   :depends on r-rann: ``>=2.6.1``
   :depends on r-rcpp: ``>=1.0.1``
   :depends on r-rcpphnsw: 
   :depends on r-rcppparallel: 
   :depends on r-reshape2: ``>=1.4.3``
   :depends on r-reticulate: ``>=1.11.1``
   :depends on r-rhpcblasctl: 
   :depends on r-rmarkdown: 
   :depends on r-rsample: ``>=0.0.5``
   :depends on r-rtsne: ``>=0.15``
   :depends on r-shiny: 
   :depends on r-slam: ``>=0.1_45``
   :depends on r-spdep: ``>=1.1_2``
   :depends on r-speedglm: ``>=0.3_2``
   :depends on r-spelling: 
   :depends on r-stringr: ``>=1.4``
   :depends on r-terra: 
   :depends on r-testthat: ``>=2.1``
   :depends on r-tibble: ``>=2.1.1``
   :depends on r-tidyr: ``>=0.8.3``
   :depends on r-uwot: ``>=0.1.3``
   :depends on r-viridis: ``>=0.5.1``

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

    pixi global install r-monocle3

to add into an existing workspace instead, run::

    pixi add r-monocle3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-monocle3

Alternatively, to install into a new environment, run::

    conda create -n envname r-monocle3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-monocle3:<tag>

(see `r-monocle3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-monocle3| image:: https://img.shields.io/conda/dn/bioconda/r-monocle3.svg?style=flat
   :target: https://anaconda.org/bioconda/r-monocle3
   :alt:   (downloads)
.. |docker_r-monocle3| image:: https://quay.io/repository/biocontainers/r-monocle3/status
   :target: https://quay.io/repository/biocontainers/r-monocle3
.. _`r-monocle3/tags`: https://quay.io/repository/biocontainers/r-monocle3?tab=tags


.. raw:: html

   <script>
      var package = "r-monocle3";
      var versions = ["1.4.26","1.3.1","1.3.1","1.0.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-monocle3"></div>
   <div style="width: 100%" id="platform_plot_r-monocle3"></div>
   <div style="width: 100%" id="cdf_plot_r-monocle3"></div>



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
         
            // Build cdf plot for r-monocle3
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-monocle3/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-monocle3', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-monocle3
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-monocle3/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-monocle3', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-monocle3
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-monocle3/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-monocle3', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-monocle3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-monocle3/README.html