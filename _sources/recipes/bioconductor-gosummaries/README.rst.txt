:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gosummaries'
.. highlight: bash

bioconductor-gosummaries
========================

.. conda:recipe:: bioconductor-gosummaries
   :replaces_section_title:
   :noindex:

   Word cloud summaries of GO enrichment analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GOsummaries.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gosummaries <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosummaries>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosummaries/meta.yaml>`_

   A package to visualise Gene Ontology \(GO\) enrichment analysis results on gene lists arising from different analyses such clustering or PCA. The significant GO categories are visualised as word clouds that can be combined with different plots summarising the underlying data.


.. conda:package:: bioconductor-gosummaries

   |downloads_bioconductor-gosummaries| |docker_bioconductor-gosummaries|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.37.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-1</code>,  <code>2.34.0-0</code>,  <code>2.30.0-2</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-1</code>,  </span></summary>
      

      ``2.37.0-0``,  ``2.36.0-0``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.30.0-2``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __osx: ``>=10.9``
   :depends on bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends on bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=15.0.7``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-ggplot2: 
   :depends on r-gprofiler: 
   :depends on r-gtable: 
   :depends on r-plyr: 
   :depends on r-rcpp: 
   :depends on r-reshape2: 

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

    pixi global install bioconductor-gosummaries

to add into an existing workspace instead, run::

    pixi add bioconductor-gosummaries

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gosummaries

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gosummaries

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gosummaries:<tag>

(see `bioconductor-gosummaries/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gosummaries| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gosummaries.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gosummaries
   :alt:   (downloads)
.. |docker_bioconductor-gosummaries| image:: https://quay.io/repository/biocontainers/bioconductor-gosummaries/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gosummaries
.. _`bioconductor-gosummaries/tags`: https://quay.io/repository/biocontainers/bioconductor-gosummaries?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-gosummaries";
      var versions = ["2.37.0","2.36.0","2.34.0","2.34.0","2.30.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-gosummaries"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-gosummaries"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-gosummaries"></div>



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
         
            // Build cdf plot for bioconductor-gosummaries
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gosummaries/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-gosummaries', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-gosummaries
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gosummaries/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-gosummaries', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-gosummaries
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gosummaries/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-gosummaries', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gosummaries/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gosummaries/README.html