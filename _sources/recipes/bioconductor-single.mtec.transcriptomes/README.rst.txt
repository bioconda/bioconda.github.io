:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-single.mtec.transcriptomes'
.. highlight: bash

bioconductor-single.mtec.transcriptomes
=======================================

.. conda:recipe:: bioconductor-single.mtec.transcriptomes
   :replaces_section_title:
   :noindex:

   Single Cell Transcriptome Data and Analysis of Mouse mTEC cells

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/Single.mTEC.Transcriptomes.html
   :license: LGPL
   :recipe: /`bioconductor-single.mtec.transcriptomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-single.mtec.transcriptomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-single.mtec.transcriptomes/meta.yaml>`_

   This data package contains the code used to analyse the single\-cell RNA\-seq and the bulk ATAC\-seq data from the manuscript titled\: Single\-cell transcriptome analysis reveals coordinated ectopic\-gene expression patterns in medullary thymic epithelial cells. This paper was published in Nature Immunology 16\,933\-941\(2015\). The data objects provided in this package has been pre\-processed\: the raw data files can be downloaded from ArrayExpress under the accession identifiers E\-MTAB\-3346 and E\-MTAB\-3624. The vignette of this data package provides a documented and reproducible workflow that includes the code that was used to generate each statistic and figure from the manuscript.


.. conda:package:: bioconductor-single.mtec.transcriptomes

   |downloads_bioconductor-single.mtec.transcriptomes| |docker_bioconductor-single.mtec.transcriptomes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-single.mtec.transcriptomes

to add into an existing workspace instead, run::

    pixi add bioconductor-single.mtec.transcriptomes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-single.mtec.transcriptomes

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-single.mtec.transcriptomes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-single.mtec.transcriptomes:<tag>

(see `bioconductor-single.mtec.transcriptomes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-single.mtec.transcriptomes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-single.mtec.transcriptomes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-single.mtec.transcriptomes
   :alt:   (downloads)
.. |docker_bioconductor-single.mtec.transcriptomes| image:: https://quay.io/repository/biocontainers/bioconductor-single.mtec.transcriptomes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-single.mtec.transcriptomes
.. _`bioconductor-single.mtec.transcriptomes/tags`: https://quay.io/repository/biocontainers/bioconductor-single.mtec.transcriptomes?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-single.mtec.transcriptomes";
      var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.25.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-single.mtec.transcriptomes"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-single.mtec.transcriptomes"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-single.mtec.transcriptomes"></div>



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
         
            // Build cdf plot for bioconductor-single.mtec.transcriptomes
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-single.mtec.transcriptomes/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-single.mtec.transcriptomes', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-single.mtec.transcriptomes
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-single.mtec.transcriptomes/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-single.mtec.transcriptomes', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-single.mtec.transcriptomes
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-single.mtec.transcriptomes/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-single.mtec.transcriptomes', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-single.mtec.transcriptomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-single.mtec.transcriptomes/README.html