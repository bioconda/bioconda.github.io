:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-infinityflow'
.. highlight: bash

bioconductor-infinityflow
=========================

.. conda:recipe:: bioconductor-infinityflow
   :replaces_section_title:
   :noindex:

   Augmenting Massively Parallel Cytometry Experiments Using Multivariate Non\-Linear Regressions

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/infinityFlow.html
   :license: GPL-3
   :recipe: /`bioconductor-infinityflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-infinityflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-infinityflow/meta.yaml>`_

   Pipeline to analyze and merge data files produced by BioLegend\'s LEGENDScreen or BD Human Cell Surface Marker Screening Panel \(BD Lyoplates\).


.. conda:package:: bioconductor-infinityflow

   |downloads_bioconductor-infinityflow| |docker_bioconductor-infinityflow|

   :versions:
      
      

      ``1.20.2-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-generics: 
   :depends on r-gtools: 
   :depends on r-matlab: 
   :depends on r-pbapply: 
   :depends on r-png: 
   :depends on r-raster: 
   :depends on r-uwot: 
   :depends on r-xgboost: 

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

    pixi global install bioconductor-infinityflow

to add into an existing workspace instead, run::

    pixi add bioconductor-infinityflow

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-infinityflow

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-infinityflow

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-infinityflow:<tag>

(see `bioconductor-infinityflow/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-infinityflow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-infinityflow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-infinityflow
   :alt:   (downloads)
.. |docker_bioconductor-infinityflow| image:: https://quay.io/repository/biocontainers/bioconductor-infinityflow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-infinityflow
.. _`bioconductor-infinityflow/tags`: https://quay.io/repository/biocontainers/bioconductor-infinityflow?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-infinityflow";
      var versions = ["1.20.2","1.12.0","1.10.0","1.8.0","1.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-infinityflow"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-infinityflow"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-infinityflow"></div>



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
         
            // Build cdf plot for bioconductor-infinityflow
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-infinityflow/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-infinityflow', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-infinityflow
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-infinityflow/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-infinityflow', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-infinityflow
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-infinityflow/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-infinityflow', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-infinityflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-infinityflow/README.html