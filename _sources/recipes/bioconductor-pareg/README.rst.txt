:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pareg'
.. highlight: bash

bioconductor-pareg
==================

.. conda:recipe:: bioconductor-pareg
   :replaces_section_title:
   :noindex:

   Pathway enrichment using a regularized regression approach

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/pareg.html
   :license: GPL-3
   :recipe: /`bioconductor-pareg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pareg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pareg/meta.yaml>`_

   Compute pathway enrichment scores while accounting for term\-term relations. This package uses a regularized multiple linear regression to regress differential expression p\-values obtained from multi\-condition experiments on a pathway membership matrix. By doing so\, it is able to incorporate additional biological knowledge into the enrichment analysis and to estimate pathway enrichment scores more robustly.


.. conda:package:: bioconductor-pareg

   |downloads_bioconductor-pareg| |docker_bioconductor-pareg|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-basilisk: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-dose: ``>=3.28.0,<3.29.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-devtools: 
   :depends on r-dofuture: 
   :depends on r-dorng: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-future: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-ggrepel: 
   :depends on r-glue: 
   :depends on r-hms: 
   :depends on r-igraph: 
   :depends on r-keras: 
   :depends on r-logger: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-nloptr: 
   :depends on r-progress: 
   :depends on r-proxy: 
   :depends on r-purrr: 
   :depends on r-reticulate: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tensorflow: ``>=2.2.0``
   :depends on r-tfprobability: ``>=0.10.0``
   :depends on r-tibble: 
   :depends on r-tidygraph: 
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

    pixi global install bioconductor-pareg

to add into an existing workspace instead, run::

    pixi add bioconductor-pareg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pareg

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pareg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pareg:<tag>

(see `bioconductor-pareg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pareg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pareg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pareg
   :alt:   (downloads)
.. |docker_bioconductor-pareg| image:: https://quay.io/repository/biocontainers/bioconductor-pareg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pareg
.. _`bioconductor-pareg/tags`: https://quay.io/repository/biocontainers/bioconductor-pareg?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-pareg";
      var versions = ["1.6.0","1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-pareg"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-pareg"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-pareg"></div>



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
         
            // Build cdf plot for bioconductor-pareg
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pareg/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-pareg', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-pareg
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pareg/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-pareg', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-pareg
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pareg/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-pareg', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pareg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pareg/README.html