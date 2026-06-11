:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cypress'
.. highlight: bash

bioconductor-cypress
====================

.. conda:recipe:: bioconductor-cypress
   :replaces_section_title:
   :noindex:

   Cell\-Type\-Specific Power Assessment

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/cypress.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-cypress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cypress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cypress/meta.yaml>`_

   CYPRESS is a cell\-type\-specific power tool. This package aims to perform power analysis for the cell\-type\-specific data. It calculates FDR\, FDC\, and power\, under various study design parameters\, including but not limited to sample size\, and effect size. It takes the input of a SummarizeExperimental\(SE\) object with observed mixture data \(feature by sample matrix\)\, and the cell\-type mixture proportions \(sample by cell\-type matrix\). It can solve the cell\-type mixture proportions from the reference free panel from TOAST and conduct tests to identify cell\-type\-specific differential expression \(csDE\) genes.


.. conda:package:: bioconductor-cypress

   |downloads_bioconductor-cypress| |docker_bioconductor-cypress|

   :versions:
      
      

      ``1.6.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-preprocesscore: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-proper: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-toast: ``>=1.24.0,<1.25.0``
   :depends on r-abind: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-dplyr: 
   :depends on r-e1071: 
   :depends on r-mass: 
   :depends on r-mvtnorm: 
   :depends on r-rcolorbrewer: 
   :depends on r-rlang: 
   :depends on r-sirt: 
   :depends on r-tca: 
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

    pixi global install bioconductor-cypress

to add into an existing workspace instead, run::

    pixi add bioconductor-cypress

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cypress

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cypress

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cypress:<tag>

(see `bioconductor-cypress/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cypress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cypress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cypress
   :alt:   (downloads)
.. |docker_bioconductor-cypress| image:: https://quay.io/repository/biocontainers/bioconductor-cypress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cypress
.. _`bioconductor-cypress/tags`: https://quay.io/repository/biocontainers/bioconductor-cypress?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-cypress";
      var versions = ["1.6.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-cypress"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-cypress"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-cypress"></div>



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
         
            // Build cdf plot for bioconductor-cypress
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cypress/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-cypress', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-cypress
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cypress/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-cypress', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-cypress
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cypress/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-cypress', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cypress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cypress/README.html