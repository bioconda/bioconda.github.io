:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-musicatk'
.. highlight: bash

bioconductor-musicatk
=====================

.. conda:recipe:: bioconductor-musicatk
   :replaces_section_title:
   :noindex:

   Mutational Signature Comprehensive Analysis Toolkit

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/musicatk.html
   :license: LGPL-3
   :recipe: /`bioconductor-musicatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-musicatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-musicatk/meta.yaml>`_

   Mutational signatures are carcinogenic exposures or aberrant cellular processes that can cause alterations to the genome. We created musicatk \(MUtational SIgnature Comprehensive Analysis ToolKit\) to address shortcomings in versatility and ease of use in other pre\-existing computational tools. Although many different types of mutational data have been generated\, current software packages do not have a flexible framework to allow users to mix and match different types of mutations in the mutational signature inference process. Musicatk enables users to count and combine multiple mutation types\, including SBS\, DBS\, and indels. Musicatk calculates replication strand\, transcription strand and combinations of these features along with discovery from unique and proprietary genomic feature associated with any mutation type. Musicatk also implements several methods for discovery of new signatures as well as methods to infer exposure given an existing set of signatures. Musicatk provides functions for visualization and downstream exploratory analysis including the ability to compare signatures between cohorts and find matching signatures in COSMIC V2 or COSMIC V3.


.. conda:package:: bioconductor-musicatk

   |downloads_bioconductor-musicatk| |docker_bioconductor-musicatk|

   :versions:
      
      

      ``2.4.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-bsgenome.mmusculus.ucsc.mm10: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-bsgenome.mmusculus.ucsc.mm9: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-decomptumor2sig: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-maftools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-factoextra: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-gtools: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-matrix: ``>=1.6.1``
   :depends on r-matrixtests: 
   :depends on r-mcmcprecision: 
   :depends on r-nmf: 
   :depends on r-philentropy: 
   :depends on r-plotly: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-shiny: 
   :depends on r-stringi: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyverse: 
   :depends on r-topicmodels: 
   :depends on r-uwot: 

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

    pixi global install bioconductor-musicatk

to add into an existing workspace instead, run::

    pixi add bioconductor-musicatk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-musicatk

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-musicatk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-musicatk:<tag>

(see `bioconductor-musicatk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-musicatk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-musicatk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-musicatk
   :alt:   (downloads)
.. |docker_bioconductor-musicatk| image:: https://quay.io/repository/biocontainers/bioconductor-musicatk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-musicatk
.. _`bioconductor-musicatk/tags`: https://quay.io/repository/biocontainers/bioconductor-musicatk?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-musicatk";
      var versions = ["2.4.0","1.12.0","1.10.0","1.8.0","1.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-musicatk"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-musicatk"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-musicatk"></div>



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
         
            // Build cdf plot for bioconductor-musicatk
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-musicatk/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-musicatk', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-musicatk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-musicatk/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-musicatk', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-musicatk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-musicatk/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-musicatk', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-musicatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-musicatk/README.html