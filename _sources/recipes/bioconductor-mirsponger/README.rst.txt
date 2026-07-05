:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirsponger'
.. highlight: bash

bioconductor-mirsponger
=======================

.. conda:recipe:: bioconductor-mirsponger
   :replaces_section_title:
   :noindex:

   Identification and analysis of miRNA sponge regulation

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/miRspongeR.html
   :license: GPL-3
   :recipe: /`bioconductor-mirsponger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsponger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsponger/meta.yaml>`_

   This package provides several functions to explore miRNA sponge \(also called ceRNA or miRNA decoy\) regulation from putative miRNA\-target interactions or\/and transcriptomics data \(including bulk\, single\-cell and spatial gene expression data\). It provides eight popular methods for identifying miRNA sponge interactions\, and an integrative method to integrate miRNA sponge interactions from different methods\, as well as the functions to validate miRNA sponge interactions\, and infer miRNA sponge modules\, conduct enrichment analysis of miRNA sponge modules\, and conduct survival analysis of miRNA sponge modules. By using a sample control variable strategy\, it provides a function to infer sample\-specific miRNA sponge interactions. In terms of sample\-specific miRNA sponge interactions\, it implements three similarity methods to construct sample\-sample correlation network.


.. conda:package:: bioconductor-mirsponger

   |downloads_bioconductor-mirsponger| |docker_bioconductor-mirsponger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.1-0</code>,  <code>2.10.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>1.20.1-1</code>,  <code>1.20.1-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``2.14.1-0``,  ``2.10.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``1.20.1-1``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.2-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-clusterprofiler: ``>=4.18.4,<4.19.0a0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0a0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0a0``
   :depends on bioconductor-reactomepa: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-reactomepa: ``>=1.54.0,<1.55.0a0``
   :depends on bioconductor-sponge: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-sponge: ``>=1.32.0,<1.33.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=19``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-corpcor: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-igraph: 
   :depends on r-mcl: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 
   :depends on r-survival: 

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

    pixi global install bioconductor-mirsponger

to add into an existing workspace instead, run::

    pixi add bioconductor-mirsponger

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mirsponger

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mirsponger

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mirsponger:<tag>

(see `bioconductor-mirsponger/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mirsponger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirsponger.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirsponger
   :alt:   (downloads)
.. |docker_bioconductor-mirsponger| image:: https://quay.io/repository/biocontainers/bioconductor-mirsponger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirsponger
.. _`bioconductor-mirsponger/tags`: https://quay.io/repository/biocontainers/bioconductor-mirsponger?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-mirsponger";
      var versions = ["2.14.1","2.10.0","2.4.0","2.2.0","2.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-mirsponger"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-mirsponger"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-mirsponger"></div>



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
         
            // Build cdf plot for bioconductor-mirsponger
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mirsponger/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-mirsponger', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-mirsponger
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mirsponger/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-mirsponger', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-mirsponger
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mirsponger/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-mirsponger', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirsponger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirsponger/README.html