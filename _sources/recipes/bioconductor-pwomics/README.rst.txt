:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwomics'
.. highlight: bash

bioconductor-pwomics
====================

.. conda:recipe:: bioconductor-pwomics
   :replaces_section_title:
   :noindex:

   Pathway\-based data integration of omics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/pwOmics.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-pwomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwomics/meta.yaml>`_
   :links: biotools: :biotools:`pwomics`, doi: :doi:`10.1093/bioinformatics/btv323`

   pwOmics performs pathway\-based level\-specific data comparison of matching omics data sets based on pre\-analysed user\-specified lists of differential genes\/transcripts and phosphoproteins. A separate downstream analysis of phosphoproteomic data including pathway identification\, transcription factor identification and target gene identification is opposed to the upstream analysis starting with gene or transcript information as basis for identification of upstream transcription factors and potential proteomic regulators. The cross\-platform comparative analysis allows for comprehensive analysis of single time point experiments and time\-series experiments by providing static and dynamic analysis tools for data integration. In addition\, it provides functions to identify individual signaling axes based on data integration.


.. conda:package:: bioconductor-pwomics

   |downloads_bioconductor-pwomics| |docker_bioconductor-pwomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends on bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends on bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-rbiopaxparser: ``>=2.42.0,<2.43.0``
   :depends on bioconductor-stringdb: ``>=2.14.0,<2.15.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-gplots: 
   :depends on r-igraph: 

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

    pixi global install bioconductor-pwomics

to add into an existing workspace instead, run::

    pixi add bioconductor-pwomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pwomics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pwomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pwomics:<tag>

(see `bioconductor-pwomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pwomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwomics
   :alt:   (downloads)
.. |docker_bioconductor-pwomics| image:: https://quay.io/repository/biocontainers/bioconductor-pwomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwomics
.. _`bioconductor-pwomics/tags`: https://quay.io/repository/biocontainers/bioconductor-pwomics?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-pwomics";
      var versions = ["1.34.0","1.32.0","1.30.0","1.26.0","1.24.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-pwomics"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-pwomics"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-pwomics"></div>



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
         
            // Build cdf plot for bioconductor-pwomics
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pwomics/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-pwomics', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-pwomics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pwomics/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-pwomics', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-pwomics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pwomics/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-pwomics', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwomics/README.html