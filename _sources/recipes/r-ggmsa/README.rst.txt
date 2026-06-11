:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ggmsa'
.. highlight: bash

r-ggmsa
=======

.. conda:recipe:: r-ggmsa
   :replaces_section_title:
   :noindex:

   Supports visualizing multiple sequence alignment of DNA and protein sequences using \'ggplot2\'. It supports a number of colour schemes\, including Chemistry\, Clustal\, Shapely\, Taylor and Zappo. Multiple sequence alignment can easily be combined with other \'ggplot2\' plots\, such as aligning a phylogenetic tree produced by \'ggtree\' with multiple sequence alignment.

   :homepage: https://CRAN.R-project.org/package=ggmsa
   :license: OTHER / Artistic-2.0
   :recipe: /`r-ggmsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggmsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggmsa/meta.yaml>`_

   


.. conda:package:: r-ggmsa

   |downloads_r-ggmsa| |docker_r-ggmsa|

   :versions:
      
      

      ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-r4rna: 
   :depends on r-aplot: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-ggalt: 
   :depends on r-ggforce: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-rcolorbrewer: 
   :depends on r-seqmagick: 
   :depends on r-stringr: 
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

    pixi global install r-ggmsa

to add into an existing workspace instead, run::

    pixi add r-ggmsa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-ggmsa

Alternatively, to install into a new environment, run::

    conda create -n envname r-ggmsa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-ggmsa:<tag>

(see `r-ggmsa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-ggmsa| image:: https://img.shields.io/conda/dn/bioconda/r-ggmsa.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ggmsa
   :alt:   (downloads)
.. |docker_r-ggmsa| image:: https://quay.io/repository/biocontainers/r-ggmsa/status
   :target: https://quay.io/repository/biocontainers/r-ggmsa
.. _`r-ggmsa/tags`: https://quay.io/repository/biocontainers/r-ggmsa?tab=tags


.. raw:: html

   <script>
      var package = "r-ggmsa";
      var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-ggmsa"></div>
   <div style="width: 100%" id="platform_plot_r-ggmsa"></div>
   <div style="width: 100%" id="cdf_plot_r-ggmsa"></div>



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
         
            // Build cdf plot for r-ggmsa
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-ggmsa/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-ggmsa', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-ggmsa
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-ggmsa/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-ggmsa', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-ggmsa
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-ggmsa/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-ggmsa', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ggmsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ggmsa/README.html