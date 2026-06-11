:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdcrnatools'
.. highlight: bash

bioconductor-gdcrnatools
========================

.. conda:recipe:: bioconductor-gdcrnatools
   :replaces_section_title:
   :noindex:

   GDCRNATools\: an R\/Bioconductor package for integrative analysis of lncRNA\, mRNA\, and miRNA data in GDC

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/GDCRNATools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdcrnatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdcrnatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdcrnatools/meta.yaml>`_

   This is an easy\-to\-use package for downloading\, organizing\, and integrative analyzing RNA expression data in GDC with an emphasis on deciphering the lncRNA\-mRNA related ceRNA regulatory network in cancer. Three databases of lncRNA\-miRNA interactions including spongeScan\, starBase\, and miRcode\, as well as three databases of mRNA\-miRNA interactions including miRTarBase\, starBase\, and miRcode are incorporated into the package for ceRNAs network construction. limma\, edgeR\, and DESeq2 can be used to identify differentially expressed genes\/miRNAs. Functional enrichment analyses including GO\, KEGG\, and DO can be performed based on the clusterProfiler and DO packages. Both univariate CoxPH and KM survival analyses of multiple genes can be implemented in the package. Besides some routine visualization functions such as volcano plot\, bar plot\, and KM plot\, a few simply shiny apps are developed to facilitate visualization of results on a local webpage.


.. conda:package:: bioconductor-gdcrnatools

   |downloads_bioconductor-gdcrnatools| |docker_bioconductor-gdcrnatools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-genomicdatacommons: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-pathview: ``>=1.50.0,<1.51.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-jsonlite: 
   :depends on r-rjson: 
   :depends on r-shiny: 
   :depends on r-survival: 
   :depends on r-survminer: 
   :depends on r-xml: 

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

    pixi global install bioconductor-gdcrnatools

to add into an existing workspace instead, run::

    pixi add bioconductor-gdcrnatools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gdcrnatools

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gdcrnatools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gdcrnatools:<tag>

(see `bioconductor-gdcrnatools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gdcrnatools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdcrnatools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdcrnatools
   :alt:   (downloads)
.. |docker_bioconductor-gdcrnatools| image:: https://quay.io/repository/biocontainers/bioconductor-gdcrnatools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdcrnatools
.. _`bioconductor-gdcrnatools/tags`: https://quay.io/repository/biocontainers/bioconductor-gdcrnatools?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-gdcrnatools";
      var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-gdcrnatools"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-gdcrnatools"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-gdcrnatools"></div>



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
         
            // Build cdf plot for bioconductor-gdcrnatools
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gdcrnatools/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-gdcrnatools', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-gdcrnatools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gdcrnatools/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-gdcrnatools', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-gdcrnatools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gdcrnatools/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-gdcrnatools', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdcrnatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdcrnatools/README.html