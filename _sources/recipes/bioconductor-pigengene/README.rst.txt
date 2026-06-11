:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pigengene'
.. highlight: bash

bioconductor-pigengene
======================

.. conda:recipe:: bioconductor-pigengene
   :replaces_section_title:
   :noindex:

   Infers biological signatures from gene expression data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Pigengene.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-pigengene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pigengene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pigengene/meta.yaml>`_

   Pigengene package provides an efficient way to infer biological signatures from gene expression profiles. The signatures are independent from the underlying platform\, e.g.\, the input can be microarray or RNA Seq data. It can even infer the signatures using data from one platform\, and evaluate them on the other. Pigengene identifies the modules \(clusters\) of highly coexpressed genes using coexpression network analysis\, summarizes the biological information of each module in an eigengene\, learns a Bayesian network that models the probabilistic dependencies between modules\, and builds a decision tree based on the expression of eigengenes.


.. conda:package:: bioconductor-pigengene

   |downloads_bioconductor-pigengene| |docker_bioconductor-pigengene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-clusterprofiler: ``>=4.14.0,<4.15.0``
   :depends on bioconductor-dose: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends on bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
   :depends on bioconductor-reactomepa: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-rgraphviz: ``>=2.50.0,<2.51.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-bnlearn: ``>=4.7``
   :depends on r-c50: ``>=0.1.2``
   :depends on r-dbi: 
   :depends on r-dplyr: 
   :depends on r-gdata: 
   :depends on r-ggplot2: 
   :depends on r-mass: 
   :depends on r-matrixstats: 
   :depends on r-openxlsx: 
   :depends on r-partykit: 
   :depends on r-pheatmap: ``>=1.0.8``
   :depends on r-wgcna: 

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

    pixi global install bioconductor-pigengene

to add into an existing workspace instead, run::

    pixi add bioconductor-pigengene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pigengene

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pigengene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pigengene:<tag>

(see `bioconductor-pigengene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pigengene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pigengene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pigengene
   :alt:   (downloads)
.. |docker_bioconductor-pigengene| image:: https://quay.io/repository/biocontainers/bioconductor-pigengene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pigengene
.. _`bioconductor-pigengene/tags`: https://quay.io/repository/biocontainers/bioconductor-pigengene?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-pigengene";
      var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-pigengene"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-pigengene"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-pigengene"></div>



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
         
            // Build cdf plot for bioconductor-pigengene
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pigengene/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-pigengene', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-pigengene
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pigengene/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-pigengene', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-pigengene
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pigengene/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-pigengene', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pigengene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pigengene/README.html