:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cosmosr'
.. highlight: bash

bioconductor-cosmosr
====================

.. conda:recipe:: bioconductor-cosmosr
   :replaces_section_title:
   :noindex:

   COSMOS \(Causal Oriented Search of Multi\-Omic Space\)

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/cosmosR.html
   :license: GPL-3
   :recipe: /`bioconductor-cosmosr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmosr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmosr/meta.yaml>`_

   COSMOS \(Causal Oriented Search of Multi\-Omic Space\) is a method that integrates phosphoproteomics\, transcriptomics\, and metabolomics data sets based on prior knowledge of signaling\, metabolic\, and gene regulatory networks. It estimated the activities of transcrption factors and kinases and finds a network\-level causal reasoning. Thereby\, COSMOS provides mechanistic hypotheses for experimental observations across mulit\-omics datasets.


.. conda:package:: bioconductor-cosmosr

   |downloads_bioconductor-cosmosr| |docker_bioconductor-cosmosr|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-carnival: ``>=2.20.0,<2.21.0``
   :depends on bioconductor-decoupler: ``>=2.16.0,<2.17.0``
   :depends on bioconductor-dorothea: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-igraph: 
   :depends on r-progress: 
   :depends on r-purrr: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-visnetwork: 

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

    pixi global install bioconductor-cosmosr

to add into an existing workspace instead, run::

    pixi add bioconductor-cosmosr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cosmosr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cosmosr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cosmosr:<tag>

(see `bioconductor-cosmosr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cosmosr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosmosr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cosmosr
   :alt:   (downloads)
.. |docker_bioconductor-cosmosr| image:: https://quay.io/repository/biocontainers/bioconductor-cosmosr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosmosr
.. _`bioconductor-cosmosr/tags`: https://quay.io/repository/biocontainers/bioconductor-cosmosr?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-cosmosr";
      var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-cosmosr"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-cosmosr"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-cosmosr"></div>



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
         
            // Build cdf plot for bioconductor-cosmosr
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cosmosr/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-cosmosr', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-cosmosr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cosmosr/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-cosmosr', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-cosmosr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cosmosr/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-cosmosr', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosmosr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosmosr/README.html