:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-epitrace'
.. highlight: bash

r-epitrace
==========

.. conda:recipe:: r-epitrace
   :replaces_section_title:
   :noindex:

   Inference of cell age and phylogeny from single cell ATAC data.

   :homepage: https://epitrace.readthedocs.io
   :developer docs: https://github.com/MagpiePKU/EpiTrace
   :license: GPL / GPL-3.0-or-later
   :recipe: /`r-epitrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-epitrace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-epitrace/meta.yaml>`_

   


.. conda:package:: r-epitrace

   |downloads_r-epitrace| |docker_r-epitrace|

   :versions:
      
      

      ``0.0.1.3-0``

      

   
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-ggtree: 
   :depends on bioconductor-plyranges: 
   :depends on bioconductor-sparsematrixstats: 
   :depends on r-ape: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dplyr: 
   :depends on r-easylift: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-nnls: 
   :depends on r-rcolorbrewer: 
   :depends on r-seurat: ``>=4.0``
   :depends on r-seuratobject: 
   :depends on r-signac: ``>=1.5.0``
   :depends on r-stringr: 
   :depends on r-tidyr: 
   :depends on r-wgcna: ``>=1.7``

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

    pixi global install r-epitrace

to add into an existing workspace instead, run::

    pixi add r-epitrace

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-epitrace

Alternatively, to install into a new environment, run::

    conda create -n envname r-epitrace

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-epitrace:<tag>

(see `r-epitrace/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-epitrace| image:: https://img.shields.io/conda/dn/bioconda/r-epitrace.svg?style=flat
   :target: https://anaconda.org/bioconda/r-epitrace
   :alt:   (downloads)
.. |docker_r-epitrace| image:: https://quay.io/repository/biocontainers/r-epitrace/status
   :target: https://quay.io/repository/biocontainers/r-epitrace
.. _`r-epitrace/tags`: https://quay.io/repository/biocontainers/r-epitrace?tab=tags


.. raw:: html

   <script>
      var package = "r-epitrace";
      var versions = ["0.0.1.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-epitrace"></div>
   <div style="width: 100%" id="platform_plot_r-epitrace"></div>
   <div style="width: 100%" id="cdf_plot_r-epitrace"></div>



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
         
            // Build cdf plot for r-epitrace
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-epitrace/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-epitrace', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-epitrace
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-epitrace/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-epitrace', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-epitrace
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-epitrace/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-epitrace', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-epitrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-epitrace/README.html