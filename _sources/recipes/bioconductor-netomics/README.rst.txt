:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netomics'
.. highlight: bash

bioconductor-netomics
=====================

.. conda:recipe:: bioconductor-netomics
   :replaces_section_title:
   :noindex:

   Multi\-Omics \(time\-course\) network\-based integration and interpretation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/netOmics.html
   :license: GPL-3
   :recipe: /`bioconductor-netomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netomics/meta.yaml>`_

   netOmics is a multi\-omics networks builder and explorer. It uses a combination of network inference algorithms and and knowledge\-based graphs to build multi\-layered networks. The package can be combined with timeOmics to incorporate time\-course expression data and build sub\-networks from multi\-omics kinetic clusters. Finally\, from the generated multi\-omics networks\, propagation analyses allow the identification of missing biological functions \(1\)\, multi\-omics mechanisms \(2\) and molecules between kinetic clusters \(3\). This helps to resolve complex regulatory mechanisms.


.. conda:package:: bioconductor-netomics

   |downloads_bioconductor-netomics| |docker_bioconductor-netomics|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends on bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends on bioconductor-minet: ``>=3.60.0,<3.61.0``
   :depends on bioconductor-randomwalkrestartmh: ``>=1.22.0,<1.23.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-gprofiler2: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-purrr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-netomics

to add into an existing workspace instead, run::

    pixi add bioconductor-netomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-netomics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-netomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-netomics:<tag>

(see `bioconductor-netomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-netomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netomics
   :alt:   (downloads)
.. |docker_bioconductor-netomics| image:: https://quay.io/repository/biocontainers/bioconductor-netomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netomics
.. _`bioconductor-netomics/tags`: https://quay.io/repository/biocontainers/bioconductor-netomics?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-netomics";
      var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-netomics"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-netomics"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-netomics"></div>



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
         
            // Build cdf plot for bioconductor-netomics
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-netomics/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-netomics', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-netomics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-netomics/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-netomics', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-netomics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-netomics/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-netomics', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netomics/README.html