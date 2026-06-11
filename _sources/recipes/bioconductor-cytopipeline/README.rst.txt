:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytopipeline'
.. highlight: bash

bioconductor-cytopipeline
=========================

.. conda:recipe:: bioconductor-cytopipeline
   :replaces_section_title:
   :noindex:

   Automation and visualization of flow cytometry data analysis pipelines

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/CytoPipeline.html
   :license: GPL-3
   :recipe: /`bioconductor-cytopipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytopipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytopipeline/meta.yaml>`_

   This package provides support for automation and visualization of flow cytometry data analysis pipelines. In the current state\, the package focuses on the preprocessing and quality control part. The framework is based on two main S4 classes\, i.e. CytoPipeline and CytoProcessingStep. The pipeline steps are linked to corresponding R functions \- that are either provided in the CytoPipeline package itself\, or exported from a third party package\, or coded by the user her\/himself. The processing steps need to be specified centrally and explicitly using either a json input file or through step by step creation of a CytoPipeline object with dedicated methods. After having run the pipeline\, obtained results at all steps can be retrieved and visualized thanks to file caching \(the running facility uses a BiocFileCache implementation\). The package provides also specific visualization tools like pipeline workflow summary display\, and 1D\/2D comparison plots of obtained flowFrames at various steps of the pipeline.


.. conda:package:: bioconductor-cytopipeline

   |downloads_bioconductor-cytopipeline| |docker_bioconductor-cytopipeline|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-flowai: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-ggcyto: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-peacoqc: ``>=1.20.0,<1.21.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-diagram: 
   :depends on r-ggplot2: ``>=3.4.1``
   :depends on r-jsonlite: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-withr: 

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

    pixi global install bioconductor-cytopipeline

to add into an existing workspace instead, run::

    pixi add bioconductor-cytopipeline

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cytopipeline

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cytopipeline

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cytopipeline:<tag>

(see `bioconductor-cytopipeline/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cytopipeline| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytopipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytopipeline
   :alt:   (downloads)
.. |docker_bioconductor-cytopipeline| image:: https://quay.io/repository/biocontainers/bioconductor-cytopipeline/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytopipeline
.. _`bioconductor-cytopipeline/tags`: https://quay.io/repository/biocontainers/bioconductor-cytopipeline?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-cytopipeline";
      var versions = ["1.10.0","1.6.0","1.2.0","1.0.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-cytopipeline"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-cytopipeline"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-cytopipeline"></div>



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
         
            // Build cdf plot for bioconductor-cytopipeline
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cytopipeline/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-cytopipeline', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-cytopipeline
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cytopipeline/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-cytopipeline', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-cytopipeline
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cytopipeline/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-cytopipeline', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytopipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytopipeline/README.html