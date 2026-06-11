:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cotan'
.. highlight: bash

bioconductor-cotan
==================

.. conda:recipe:: bioconductor-cotan
   :replaces_section_title:
   :noindex:

   COexpression Tables ANalysis

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/COTAN.html
   :license: GPL-3
   :recipe: /`bioconductor-cotan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cotan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cotan/meta.yaml>`_

   Statistical and computational method to analyze the co\-expression of gene pairs at single cell level. It provides the foundation for single\-cell gene interactome analysis. The basic idea is studying the zero UMI counts\' distribution instead of focusing on positive counts\; this is done with a generalized contingency tables framework. COTAN can effectively assess the correlated or anti\-correlated expression of gene pairs. It provides a numerical index related to the correlation and an approximate p\-value for the associated independence test. COTAN can also evaluate whether single genes are differentially expressed\, scoring them with a newly defined global differentiation index. Moreover\, this approach provides ways to plot and cluster genes according to their co\-expression pattern with other genes\, effectively helping the study of gene interactions and becoming a new tool to identify cell\-identity marker genes.


.. conda:package:: bioconductor-cotan

   |downloads_bioconductor-cotan| |docker_bioconductor-cotan|

   :versions:
      
      

      ``2.10.3-0``,  ``2.10.1-0``,  ``2.6.0-0``,  ``2.2.1-0``,  ``2.0.4-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocsingular: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-dendextend: 
   :depends on r-dplyr: 
   :depends on r-ggdist: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-ggthemes: 
   :depends on r-matrix: 
   :depends on r-paralleldist: 
   :depends on r-parallelly: 
   :depends on r-proxy: 
   :depends on r-rcolorbrewer: 
   :depends on r-rfast: 
   :depends on r-rlang: 
   :depends on r-rspectra: 
   :depends on r-scales: 
   :depends on r-seurat: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-withr: 
   :depends on r-zeallot: 

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

    pixi global install bioconductor-cotan

to add into an existing workspace instead, run::

    pixi add bioconductor-cotan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cotan

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cotan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cotan:<tag>

(see `bioconductor-cotan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cotan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cotan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cotan
   :alt:   (downloads)
.. |docker_bioconductor-cotan| image:: https://quay.io/repository/biocontainers/bioconductor-cotan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cotan
.. _`bioconductor-cotan/tags`: https://quay.io/repository/biocontainers/bioconductor-cotan?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-cotan";
      var versions = ["2.10.3","2.10.1","2.6.0","2.2.1","2.0.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-cotan"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-cotan"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-cotan"></div>



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
         
            // Build cdf plot for bioconductor-cotan
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cotan/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-cotan', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-cotan
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cotan/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-cotan', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-cotan
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cotan/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-cotan', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cotan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cotan/README.html