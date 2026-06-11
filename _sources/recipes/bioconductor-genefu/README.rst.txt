:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genefu'
.. highlight: bash

bioconductor-genefu
===================

.. conda:recipe:: bioconductor-genefu
   :replaces_section_title:
   :noindex:

   Computation of Gene Expression\-Based Signatures in Breast Cancer

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/genefu.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genefu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genefu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genefu/meta.yaml>`_
   :links: biotools: :biotools:`genefu`, doi: :doi:`10.1093/bioinformatics/btv693`

   This package contains functions implementing various tasks usually required by gene expression analysis\, especially in breast cancer studies\: gene mapping between different microarray platforms\, identification of molecular subtypes\, implementation of published gene signatures\, gene selection\, and survival analysis.


.. conda:package:: bioconductor-genefu

   |downloads_bioconductor-genefu| |docker_bioconductor-genefu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.42.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.2-0</code>,  <code>2.22.1-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  </span></summary>
      

      ``2.42.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.2-0``,  ``2.22.1-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-aims: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-survcomp: ``>=1.60.0,<1.61.0``
   :depends on r-amap: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ic10: 
   :depends on r-ic10trainingdata: 
   :depends on r-mclust: 

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

    pixi global install bioconductor-genefu

to add into an existing workspace instead, run::

    pixi add bioconductor-genefu

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genefu

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genefu

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genefu:<tag>

(see `bioconductor-genefu/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genefu| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genefu.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genefu
   :alt:   (downloads)
.. |docker_bioconductor-genefu| image:: https://quay.io/repository/biocontainers/bioconductor-genefu/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genefu
.. _`bioconductor-genefu/tags`: https://quay.io/repository/biocontainers/bioconductor-genefu?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-genefu";
      var versions = ["2.42.0","2.34.0","2.32.0","2.30.0","2.26.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-genefu"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-genefu"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-genefu"></div>



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
         
            // Build cdf plot for bioconductor-genefu
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-genefu/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-genefu', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-genefu
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-genefu/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-genefu', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-genefu
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-genefu/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-genefu', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genefu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genefu/README.html