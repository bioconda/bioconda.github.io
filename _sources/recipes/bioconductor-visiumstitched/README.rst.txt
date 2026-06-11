:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-visiumstitched'
.. highlight: bash

bioconductor-visiumstitched
===========================

.. conda:recipe:: bioconductor-visiumstitched
   :replaces_section_title:
   :noindex:

   Enable downstream analysis of Visium capture areas stitched together with Fiji

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/visiumStitched.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-visiumstitched <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-visiumstitched>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-visiumstitched/meta.yaml>`_

   This package provides helper functions for working with multiple Visium capture areas that overlap each other. This package was developed along with the companion example use case data available from https\:\/\/github.com\/LieberInstitute\/visiumStitched\_brain. visiumStitched prepares SpaceRanger \(10x Genomics\) output files so you can stitch the images from groups of capture areas together with Fiji. Then visiumStitched builds a SpatialExperiment object with the stitched data and makes an artificial hexagonal grid enabling the seamless use of spatial clustering methods that rely on such grid to identify neighboring spots\, such as PRECAST and BayesSpace. The SpatialExperiment objects created by visiumStitched are compatible with spatialLIBD\, which can be used to build interactive websites for stitched SpatialExperiment objects. visiumStitched also enables casting SpatialExperiment objects as Seurat objects.


.. conda:package:: bioconductor-visiumstitched

   |downloads_bioconductor-visiumstitched| |docker_bioconductor-visiumstitched|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-dropletutils: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-spatiallibd: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-clue: 
   :depends on r-dplyr: 
   :depends on r-imager: 
   :depends on r-matrix: 
   :depends on r-pkgcond: 
   :depends on r-readr: 
   :depends on r-rjson: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-visiumstitched

to add into an existing workspace instead, run::

    pixi add bioconductor-visiumstitched

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-visiumstitched

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-visiumstitched

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-visiumstitched:<tag>

(see `bioconductor-visiumstitched/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-visiumstitched| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-visiumstitched.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-visiumstitched
   :alt:   (downloads)
.. |docker_bioconductor-visiumstitched| image:: https://quay.io/repository/biocontainers/bioconductor-visiumstitched/status
   :target: https://quay.io/repository/biocontainers/bioconductor-visiumstitched
.. _`bioconductor-visiumstitched/tags`: https://quay.io/repository/biocontainers/bioconductor-visiumstitched?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-visiumstitched";
      var versions = ["1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-visiumstitched"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-visiumstitched"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-visiumstitched"></div>



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
         
            // Build cdf plot for bioconductor-visiumstitched
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-visiumstitched/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-visiumstitched', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-visiumstitched
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-visiumstitched/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-visiumstitched', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-visiumstitched
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-visiumstitched/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-visiumstitched', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-visiumstitched/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-visiumstitched/README.html