:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tsenat'
.. highlight: bash

r-tsenat
========

.. conda:recipe:: r-tsenat
   :replaces_section_title:
   :noindex:

   Tsallis Entropy Analysis Toolbox for transcriptome complexity analysis

   :homepage: https://github.com/gallardoalba/TSENAT
   :documentation: https://gallardoalba.github.io/TSENAT
   
   :license: GPL-3.0-or-later
   :recipe: /`r-tsenat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tsenat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tsenat/meta.yaml>`_

   Quantifies and models isoform\-usage complexity in RNA\-seq data using Tsallis entropy\,
   a scale\-dependent diversity measure. TSENAT computes q\-dependent transcriptome
   diversity and divergence\, compares measures between conditions\, and provides
   visualization routines for scale\-dependent complexity analysis.



.. conda:package:: r-tsenat

   |downloads_r-tsenat| |docker_r-tsenat|

   :versions:
      
      

      ``0.99.24-0``,  ``0.99.0-1``,  ``0.99.0-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-digest: 
   :depends on r-dplyr: 
   :depends on r-fdrtool: 
   :depends on r-gamsel: 
   :depends on r-geepack: 
   :depends on r-ggplot2: 
   :depends on r-glmmtmb: 
   :depends on r-glmnet: 
   :depends on r-gridextra: 
   :depends on r-matrixstats: 
   :depends on r-memoise: 
   :depends on r-mgcv: 
   :depends on r-nlme: 
   :depends on r-patchwork: 
   :depends on r-pheatmap: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-readr: 
   :depends on r-rlang: 
   :depends on r-tidyr: 
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

    pixi global install r-tsenat

to add into an existing workspace instead, run::

    pixi add r-tsenat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-tsenat

Alternatively, to install into a new environment, run::

    conda create -n envname r-tsenat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-tsenat:<tag>

(see `r-tsenat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-tsenat| image:: https://img.shields.io/conda/dn/bioconda/r-tsenat.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tsenat
   :alt:   (downloads)
.. |docker_r-tsenat| image:: https://quay.io/repository/biocontainers/r-tsenat/status
   :target: https://quay.io/repository/biocontainers/r-tsenat
.. _`r-tsenat/tags`: https://quay.io/repository/biocontainers/r-tsenat?tab=tags


.. raw:: html

   <script>
      var package = "r-tsenat";
      var versions = ["0.99.24","0.99.0","0.99.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-tsenat"></div>
   <div style="width: 100%" id="platform_plot_r-tsenat"></div>
   <div style="width: 100%" id="cdf_plot_r-tsenat"></div>



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
         
            // Build cdf plot for r-tsenat
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-tsenat/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-tsenat', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-tsenat
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-tsenat/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-tsenat', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-tsenat
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-tsenat/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-tsenat', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tsenat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tsenat/README.html