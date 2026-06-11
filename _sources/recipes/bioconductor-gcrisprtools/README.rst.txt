:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcrisprtools'
.. highlight: bash

bioconductor-gcrisprtools
=========================

.. conda:recipe:: bioconductor-gcrisprtools
   :replaces_section_title:
   :noindex:

   Suite of Functions for Pooled Crispr Screen QC and Analysis

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/gCrisprTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gcrisprtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcrisprtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcrisprtools/meta.yaml>`_
   :links: biotools: :biotools:`gcrisprtools`, doi: :doi:`10.1038/nmeth.3252`

   Set of tools for evaluating pooled high\-throughput screening experiments\, typically employing CRISPR\/Cas9 or shRNA expression cassettes. Contains methods for interrogating library and cassette behavior within an experiment\, identifying differentially abundant cassettes\, aggregating signals to identify candidate targets for empirical validation\, hypothesis testing\, and comprehensive reporting. Version 2.0 extends these applications to include a variety of tools for contextualizing and integrating signals across many experiments\, incorporates extended signal enrichment methodologies via the \"sparrow\" package\, and streamlines many formal requirements to aid in interpretablity.


.. conda:package:: bioconductor-gcrisprtools

   |downloads_bioconductor-gcrisprtools| |docker_bioconductor-gcrisprtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.16.0-0</code>,  <code>2.12.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.0.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``2.16.0-0``,  ``2.12.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.0.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-rmarkdown: 
   :depends on r-robustrankaggreg: 

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

    pixi global install bioconductor-gcrisprtools

to add into an existing workspace instead, run::

    pixi add bioconductor-gcrisprtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gcrisprtools

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gcrisprtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gcrisprtools:<tag>

(see `bioconductor-gcrisprtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gcrisprtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcrisprtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcrisprtools
   :alt:   (downloads)
.. |docker_bioconductor-gcrisprtools| image:: https://quay.io/repository/biocontainers/bioconductor-gcrisprtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcrisprtools
.. _`bioconductor-gcrisprtools/tags`: https://quay.io/repository/biocontainers/bioconductor-gcrisprtools?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-gcrisprtools";
      var versions = ["2.16.0","2.12.0","2.8.0","2.6.0","2.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-gcrisprtools"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-gcrisprtools"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-gcrisprtools"></div>



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
         
            // Build cdf plot for bioconductor-gcrisprtools
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gcrisprtools/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-gcrisprtools', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-gcrisprtools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gcrisprtools/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-gcrisprtools', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-gcrisprtools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gcrisprtools/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-gcrisprtools', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcrisprtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcrisprtools/README.html