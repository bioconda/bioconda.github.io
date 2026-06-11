:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecellsignalr'
.. highlight: bash

bioconductor-singlecellsignalr
==============================

.. conda:recipe:: bioconductor-singlecellsignalr
   :replaces_section_title:
   :noindex:

   Cell Signalling Using Single\-Cell RNA\-seq or Proteomics Data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/SingleCellSignalR.html
   :license: CeCILL | file LICENSE
   :recipe: /`bioconductor-singlecellsignalr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellsignalr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellsignalr/meta.yaml>`_

   Inference of ligand\-receptor \(L\-R\) interactions from single\-cell expression \(transcriptomics\/proteomics\) data. SingleCellSignalR v2 inferences rely on the statistical model we introduced in the BulkSignalR package as well as the original SingleCellSignalR LR\-score \(both are available\). SingleCellSignalR v2 can be regarded as a wrapper to BulkSignalR fundamental classes. This also enables v2 users to work with any species\, whereas only Mus musculus \& Homo sapiens were available before in SingleCellSignalR v1.


.. conda:package:: bioconductor-singlecellsignalr

   |downloads_bioconductor-singlecellsignalr| |docker_bioconductor-singlecellsignalr|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends on bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-biocmanager: 
   :depends on r-circlize: 
   :depends on r-data.table: 
   :depends on r-foreach: 
   :depends on r-gplots: 
   :depends on r-igraph: 
   :depends on r-pheatmap: 
   :depends on r-rtsne: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-singlecellsignalr

to add into an existing workspace instead, run::

    pixi add bioconductor-singlecellsignalr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-singlecellsignalr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-singlecellsignalr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-singlecellsignalr:<tag>

(see `bioconductor-singlecellsignalr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-singlecellsignalr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecellsignalr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlecellsignalr
   :alt:   (downloads)
.. |docker_bioconductor-singlecellsignalr| image:: https://quay.io/repository/biocontainers/bioconductor-singlecellsignalr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecellsignalr
.. _`bioconductor-singlecellsignalr/tags`: https://quay.io/repository/biocontainers/bioconductor-singlecellsignalr?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-singlecellsignalr";
      var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-singlecellsignalr"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-singlecellsignalr"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-singlecellsignalr"></div>



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
         
            // Build cdf plot for bioconductor-singlecellsignalr
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-singlecellsignalr/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-singlecellsignalr', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-singlecellsignalr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-singlecellsignalr/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-singlecellsignalr', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-singlecellsignalr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-singlecellsignalr/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-singlecellsignalr', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecellsignalr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecellsignalr/README.html