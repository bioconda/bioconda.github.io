:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lrcell'
.. highlight: bash

bioconductor-lrcell
===================

.. conda:recipe:: bioconductor-lrcell
   :replaces_section_title:
   :noindex:

   Differential cell type change analysis using Logistic\/linear Regression

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/LRcell.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lrcell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrcell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrcell/meta.yaml>`_

   The goal of LRcell is to identify specific sub\-cell types that drives the changes observed in a bulk RNA\-seq differential gene expression experiment. To achieve this\, LRcell utilizes sets of cell marker genes acquired from single\-cell RNA\-sequencing \(scRNA\-seq\) as indicators for various cell types in the tissue of interest. Next\, for each cell type\, using its marker genes as indicators\, we apply Logistic Regression on the complete set of genes with differential expression p\-values to calculate a cell\-type significance p\-value. Finally\, these p\-values are compared to predict which one\(s\) are likely to be responsible for the differential gene expression pattern observed in the bulk RNA\-seq experiments. LRcell is inspired by the LRpath\[\@sartor2009lrpath\] algorithm developed by Sartor et al.\, originally designed for pathway\/gene set enrichment analysis. LRcell contains three major components\: LRcell analysis\, plot generation and marker gene selection. All modules in this package are written in R. This package also provides marker genes in the Prefrontal Cortex \(pFC\) human brain region\, human PBMC and nine mouse brain regions \(Frontal Cortex\, Cerebellum\, Globus Pallidus\, Hippocampus\, Entopeduncular\, Posterior Cortex\, Striatum\, Substantia Nigra and Thalamus\).


.. conda:package:: bioconductor-lrcell

   |downloads_bioconductor-lrcell| |docker_bioconductor-lrcell|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-magrittr: 

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

    pixi global install bioconductor-lrcell

to add into an existing workspace instead, run::

    pixi add bioconductor-lrcell

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lrcell

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lrcell

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lrcell:<tag>

(see `bioconductor-lrcell/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lrcell| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lrcell.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lrcell
   :alt:   (downloads)
.. |docker_bioconductor-lrcell| image:: https://quay.io/repository/biocontainers/bioconductor-lrcell/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lrcell
.. _`bioconductor-lrcell/tags`: https://quay.io/repository/biocontainers/bioconductor-lrcell?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-lrcell";
      var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-lrcell"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-lrcell"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-lrcell"></div>



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
         
            // Build cdf plot for bioconductor-lrcell
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-lrcell/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-lrcell', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-lrcell
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-lrcell/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-lrcell', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-lrcell
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-lrcell/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-lrcell', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lrcell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lrcell/README.html