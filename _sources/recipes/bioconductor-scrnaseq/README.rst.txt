:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scrnaseq'
.. highlight: bash

bioconductor-scrnaseq
=====================

.. conda:recipe:: bioconductor-scrnaseq
   :replaces_section_title:
   :noindex:

   Collection of Public Single\-Cell RNA\-Seq Datasets

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/scRNAseq.html
   :license: CC0
   :recipe: /`bioconductor-scrnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrnaseq/meta.yaml>`_

   Gene\-level counts for a collection of public scRNA\-seq datasets\, provided as SingleCellExperiment objects with cell\- and gene\-level metadata.


.. conda:package:: bioconductor-scrnaseq

   |downloads_bioconductor-scrnaseq| |docker_bioconductor-scrnaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.6.1-0</code>,  <code>2.4.0-1</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.20.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.1-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.17-0``,  ``2.2.0-0``,  ``1.99.8-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-alabaster.base: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.matrix: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.sce: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-ensembldb: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-gypsum: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-sparsearray: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: 
   :depends on r-jsonlite: 
   :depends on r-matrix: 
   :depends on r-rsqlite: 

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

    pixi global install bioconductor-scrnaseq

to add into an existing workspace instead, run::

    pixi add bioconductor-scrnaseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scrnaseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scrnaseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scrnaseq:<tag>

(see `bioconductor-scrnaseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scrnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scrnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scrnaseq
   :alt:   (downloads)
.. |docker_bioconductor-scrnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-scrnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scrnaseq
.. _`bioconductor-scrnaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-scrnaseq?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-scrnaseq";
      var versions = ["2.24.0","2.20.0","2.16.0","2.14.0","2.12.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-scrnaseq"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-scrnaseq"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-scrnaseq"></div>



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
         
            // Build cdf plot for bioconductor-scrnaseq
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-scrnaseq/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-scrnaseq', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-scrnaseq
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-scrnaseq/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-scrnaseq', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-scrnaseq
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-scrnaseq/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-scrnaseq', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scrnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scrnaseq/README.html