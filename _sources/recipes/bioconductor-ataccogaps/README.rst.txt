:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ataccogaps'
.. highlight: bash

bioconductor-ataccogaps
=======================

.. conda:recipe:: bioconductor-ataccogaps
   :replaces_section_title:
   :noindex:

   Analysis Tools for scATACseq Data with CoGAPS

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ATACCoGAPS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ataccogaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ataccogaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ataccogaps/meta.yaml>`_

   Provides tools for running the CoGAPS algorithm \(Fertig et al\, 2010\) on single\-cell ATAC sequencing data and analysis of the results. Can be used to perform analyses at the level of genes\, motifs\, TFs\, or pathways. Additionally provides tools for transfer learning and data integration with single\-cell RNA sequencing data.


.. conda:package:: bioconductor-ataccogaps

   |downloads_bioconductor-ataccogaps| |docker_bioconductor-ataccogaps|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-bsgenome.mmusculus.ucsc.mm10: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-chromvar: ``>=1.24.0,<1.25.0``
   :depends on bioconductor-cogaps: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-fgsea: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-geneoverlap: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-jaspar2016: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-motifmatchr: ``>=1.24.0,<1.25.0``
   :depends on bioconductor-mus.musculus: ``>=1.3.0,<1.4.0``
   :depends on bioconductor-projectr: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-rgreat: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-tfbstools: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dplyr: 
   :depends on r-gplots: 
   :depends on r-gtools: 
   :depends on r-msigdbr: 
   :depends on r-stringr: 
   :depends on r-tidyverse: 

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

    pixi global install bioconductor-ataccogaps

to add into an existing workspace instead, run::

    pixi add bioconductor-ataccogaps

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ataccogaps

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ataccogaps

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ataccogaps:<tag>

(see `bioconductor-ataccogaps/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ataccogaps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ataccogaps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ataccogaps
   :alt:   (downloads)
.. |docker_bioconductor-ataccogaps| image:: https://quay.io/repository/biocontainers/bioconductor-ataccogaps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ataccogaps
.. _`bioconductor-ataccogaps/tags`: https://quay.io/repository/biocontainers/bioconductor-ataccogaps?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-ataccogaps";
      var versions = ["1.4.0","1.2.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-ataccogaps"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-ataccogaps"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-ataccogaps"></div>



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
         
            // Build cdf plot for bioconductor-ataccogaps
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-ataccogaps/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-ataccogaps', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-ataccogaps
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-ataccogaps/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-ataccogaps', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-ataccogaps
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-ataccogaps/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-ataccogaps', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ataccogaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ataccogaps/README.html