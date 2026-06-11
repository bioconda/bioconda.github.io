:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellsnake'
.. highlight: bash

cellsnake
=========

.. conda:recipe:: cellsnake
   :replaces_section_title:
   :noindex:

   cellsnake\, a user\-friendly tool for single cell RNA sequencing analysis

   :homepage: https://github.com/sinanugur/cellsnake
   :license: MIT
   :recipe: /`cellsnake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellsnake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellsnake/meta.yaml>`_

   


.. conda:package:: cellsnake

   |downloads_cellsnake| |docker_cellsnake|

   :versions:
      
      

      ``0.2.0.12-0``,  ``0.2.0.11-2``,  ``0.2.0.11-1``,  ``0.2.0.11-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.2.0.dev9-0``

      

   
   :depends on bedtools: 
   :depends on celltypist: ``1.3.0``
   :depends on cmake: 
   :depends on docopt: 
   :depends on fastp: 
   :depends on fuzzywuzzy: 
   :depends on geos: ``3.11.1``
   :depends on hdf5: 
   :depends on kraken2: 
   :depends on levenshtein: 
   :depends on matplotlib-base: ``<3.7``
   :depends on numba: ``>=0.56.4``
   :depends on openblas: ``0.3.21``
   :depends on pandas: ``<=1.5.3``
   :depends on plotly: 
   :depends on pysam: ``>=0.16.0.1``
   :depends on python: 
   :depends on r-clustree: ``0.5.0``
   :depends on r-cowplot: 
   :depends on r-curl: 
   :depends on r-dbplyr: ``<=2.3.2``
   :depends on r-expm: 
   :depends on r-fields: 
   :depends on r-ggalluvial: 
   :depends on r-ggpubr: 
   :depends on r-ggraph: ``2.1.0``
   :depends on r-ggthemes: 
   :depends on r-gplots: 
   :depends on r-hdf5r: 
   :depends on r-igraph: 
   :depends on r-librarian: 
   :depends on r-matrix: ``<=1.5_4.1``
   :depends on r-minqa: 
   :depends on r-nmf: 
   :depends on r-openxlsx: 
   :depends on r-optparse: 
   :depends on r-patchwork: 
   :depends on r-plotly: 
   :depends on r-r.utils: 
   :depends on r-randomcolor: 
   :depends on r-reticulate: 
   :depends on r-rsvd: 
   :depends on r-seurat: ``4.3.0``
   :depends on r-seuratobject: ``4.1.3``
   :depends on r-spdep: 
   :depends on r-terra: 
   :depends on r-tidyseurat: 
   :depends on r-tidyverse: 
   :depends on r-v8: 
   :depends on r-viridis: 
   :depends on r-xml: 
   :depends on regex: ``>=2021.4.4``
   :depends on samtools: 
   :depends on scanpy: ``1.9.1``
   :depends on scipy: 
   :depends on snakemake-minimal: ``7.22.0``
   :depends on umap-learn: 

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

    pixi global install cellsnake

to add into an existing workspace instead, run::

    pixi add cellsnake

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cellsnake

Alternatively, to install into a new environment, run::

    conda create -n envname cellsnake

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cellsnake:<tag>

(see `cellsnake/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cellsnake| image:: https://img.shields.io/conda/dn/bioconda/cellsnake.svg?style=flat
   :target: https://anaconda.org/bioconda/cellsnake
   :alt:   (downloads)
.. |docker_cellsnake| image:: https://quay.io/repository/biocontainers/cellsnake/status
   :target: https://quay.io/repository/biocontainers/cellsnake
.. _`cellsnake/tags`: https://quay.io/repository/biocontainers/cellsnake?tab=tags


.. raw:: html

   <script>
      var package = "cellsnake";
      var versions = ["0.2.0.12","0.2.0.11","0.2.0.11","0.2.0.11","0.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_cellsnake"></div>
   <div style="width: 100%" id="platform_plot_cellsnake"></div>
   <div style="width: 100%" id="cdf_plot_cellsnake"></div>



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
         
            // Build cdf plot for cellsnake
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cellsnake/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_cellsnake', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for cellsnake
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cellsnake/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_cellsnake', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for cellsnake
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cellsnake/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_cellsnake', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellsnake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellsnake/README.html