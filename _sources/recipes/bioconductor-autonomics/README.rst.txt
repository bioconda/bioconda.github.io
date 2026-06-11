:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-autonomics'
.. highlight: bash

bioconductor-autonomics
=======================

.. conda:recipe:: bioconductor-autonomics
   :replaces_section_title:
   :noindex:

   Unified Statistical Modeling of Omics Data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/autonomics.html
   :license: GPL-3
   :recipe: /`bioconductor-autonomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-autonomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-autonomics/meta.yaml>`_

   This package unifies access to Statistal Modeling of Omics Data. Across linear modeling engines \(lm\, lme\, lmer\, limma\, and wilcoxon\). Across coding systems \(treatment\, difference\, deviation\, etc\). Across model formulae \(with\/without intercept\, random effect\, interaction or nesting\). Across omics platforms \(microarray\, rnaseq\, msproteomics\, affinity proteomics\, metabolomics\). Across projection methods \(pca\, pls\, sma\, lda\, spls\, opls\). Across clustering methods \(hclust\, pam\, cmeans\). Across survival methods \(coxph\, survdiff\, coin\). It provides a fast enrichment analysis implementation.


.. conda:package:: bioconductor-autonomics

   |downloads_bioconductor-autonomics| |docker_bioconductor-autonomics|

   :versions:
      
      

      ``1.18.0-0``,  ``1.10.2-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-vsn: ``>=3.78.0,<3.79.0``
   :depends on r-abind: 
   :depends on r-arrow: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bit64: 
   :depends on r-cluster: 
   :depends on r-codingmatrices: 
   :depends on r-colorspace: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggforce: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-lme4: 
   :depends on r-magrittr: 
   :depends on r-matrixstats: 
   :depends on r-r.utils: 
   :depends on r-rcolorbrewer: 
   :depends on r-readxl: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-stringi: 
   :depends on r-survival: 
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

    pixi global install bioconductor-autonomics

to add into an existing workspace instead, run::

    pixi add bioconductor-autonomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-autonomics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-autonomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-autonomics:<tag>

(see `bioconductor-autonomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-autonomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-autonomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-autonomics
   :alt:   (downloads)
.. |docker_bioconductor-autonomics| image:: https://quay.io/repository/biocontainers/bioconductor-autonomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-autonomics
.. _`bioconductor-autonomics/tags`: https://quay.io/repository/biocontainers/bioconductor-autonomics?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-autonomics";
      var versions = ["1.18.0","1.10.2","1.8.0","1.6.0","1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-autonomics"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-autonomics"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-autonomics"></div>



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
         
            // Build cdf plot for bioconductor-autonomics
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-autonomics/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-autonomics', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-autonomics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-autonomics/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-autonomics', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-autonomics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-autonomics/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-autonomics', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-autonomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-autonomics/README.html