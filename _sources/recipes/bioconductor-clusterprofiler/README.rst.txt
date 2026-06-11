:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterprofiler'
.. highlight: bash

bioconductor-clusterprofiler
============================

.. conda:recipe:: bioconductor-clusterprofiler
   :replaces_section_title:
   :noindex:

   A universal enrichment tool for interpreting omics data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/clusterProfiler.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterprofiler/meta.yaml>`_
   :links: biotools: :biotools:`clusterprofiler`

   This package supports functional characteristics of both coding and non\-coding genomics data for thousands of species with up\-to\-date gene annotation. It provides a universal interface for gene functional annotation from a variety of sources and thus can be applied in diverse scenarios. It provides a tidy interface to access\, manipulate\, and visualize enrichment results to help users achieve efficient data interpretation. Datasets obtained from multiple treatments and time points can be analyzed and compared in a single run\, easily revealing functional consensus and differences among distinct gene clusters.


.. conda:package:: bioconductor-clusterprofiler

   |downloads_bioconductor-clusterprofiler| |docker_bioconductor-clusterprofiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.18.4-0</code>,  <code>4.14.0-0</code>,  <code>4.10.0-0</code>,  <code>4.8.1-0</code>,  <code>4.6.0-0</code>,  <code>4.2.0-0</code>,  <code>4.0.0-0</code>,  <code>3.18.1-0</code>,  <code>3.18.0-0</code>,  </span></summary>
      

      ``4.18.4-0``,  ``4.14.0-0``,  ``4.10.0-0``,  ``4.8.1-0``,  ``4.6.0-0``,  ``4.2.0-0``,  ``4.0.0-0``,  ``3.18.1-0``,  ``3.18.0-0``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-1``,  ``3.10.1-0``,  ``3.8.1-0``,  ``3.6.0-0``,  ``3.4.4-0``,  ``3.0.5-0``,  ``3.0.4-1``,  ``2.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-enrichplot: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-gosemsim: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-gson: ``>=0.0.7``
   :depends on r-httr: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-plyr: 
   :depends on r-rlang: 
   :depends on r-tidyr: 
   :depends on r-yulab.utils: ``>=0.2.3``

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

    pixi global install bioconductor-clusterprofiler

to add into an existing workspace instead, run::

    pixi add bioconductor-clusterprofiler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-clusterprofiler

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-clusterprofiler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-clusterprofiler:<tag>

(see `bioconductor-clusterprofiler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-clusterprofiler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterprofiler
   :alt:   (downloads)
.. |docker_bioconductor-clusterprofiler| image:: https://quay.io/repository/biocontainers/bioconductor-clusterprofiler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterprofiler
.. _`bioconductor-clusterprofiler/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterprofiler?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-clusterprofiler";
      var versions = ["4.18.4","4.14.0","4.10.0","4.8.1","4.6.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-clusterprofiler"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-clusterprofiler"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-clusterprofiler"></div>



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
         
            // Build cdf plot for bioconductor-clusterprofiler
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-clusterprofiler/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-clusterprofiler', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-clusterprofiler
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-clusterprofiler/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-clusterprofiler', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-clusterprofiler
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-clusterprofiler/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-clusterprofiler', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterprofiler/README.html