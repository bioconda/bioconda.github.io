:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-legato'
.. highlight: bash

bioconductor-legato
===================

.. conda:recipe:: bioconductor-legato
   :replaces_section_title:
   :noindex:

   LegATo\: Longitudinal mEtaGenomic Analysis Toolkit

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/LegATo.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-legato <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-legato>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-legato/meta.yaml>`_

   LegATo is a suite of open\-source software tools for longitudinal microbiome analysis. It is extendable to several different study forms with optimal ease\-of\-use for researchers. Microbiome time\-series data presents distinct challenges including complex covariate dependencies and variety of longitudinal study designs. This toolkit will allow researchers to determine which microbial taxa are affected over time by perturbations such as onset of disease or lifestyle choices\, and to predict the effects of these perturbations over time\, including changes in composition or stability of commensal bacteria.


.. conda:package:: bioconductor-legato

   |downloads_bioconductor-legato| |docker_bioconductor-legato|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends on bioconductor-animalcules: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-plyr: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 

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

    pixi global install bioconductor-legato

to add into an existing workspace instead, run::

    pixi add bioconductor-legato

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-legato

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-legato

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-legato:<tag>

(see `bioconductor-legato/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-legato| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-legato.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-legato
   :alt:   (downloads)
.. |docker_bioconductor-legato| image:: https://quay.io/repository/biocontainers/bioconductor-legato/status
   :target: https://quay.io/repository/biocontainers/bioconductor-legato
.. _`bioconductor-legato/tags`: https://quay.io/repository/biocontainers/bioconductor-legato?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-legato";
      var versions = ["1.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-legato"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-legato"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-legato"></div>



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
         
            // Build cdf plot for bioconductor-legato
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-legato/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-legato', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-legato
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-legato/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-legato', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-legato
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-legato/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-legato', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-legato/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-legato/README.html