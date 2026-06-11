:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-radiogx'
.. highlight: bash

bioconductor-radiogx
====================

.. conda:recipe:: bioconductor-radiogx
   :replaces_section_title:
   :noindex:

   Analysis of Large\-Scale Radio\-Genomic Data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/RadioGx.html
   :license: GPL-3
   :recipe: /`bioconductor-radiogx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-radiogx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-radiogx/meta.yaml>`_

   Computational tool box for radio\-genomic analysis which integrates radio\-response data\, radio\-biological modelling and comprehensive cell line annotations for hundreds of cancer cell lines. The \'RadioSet\' class enables creation and manipulation of standardized datasets including information about cancer cells lines\, radio\-response assays and dose\-response indicators. Included methods allow fitting and plotting dose\-response data using established radio\-biological models along with quality control to validate results. Additional functions related to fitting and plotting dose response curves\, quantifying statistical correlation and calculating area under the curve \(AUC\) or survival fraction \(SF\) are included. For more details please see the included documentation\, references\, as well as\: Manem\, V. et al \(2018\) \<doi\:10.1101\/449793\>.


.. conda:package:: bioconductor-radiogx

   |downloads_bioconductor-radiogx| |docker_bioconductor-radiogx|

   :versions:
      
      

      ``2.14.0-0``,  ``2.10.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-coregx: ``>=2.14.0,<2.15.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-catools: 
   :depends on r-data.table: 
   :depends on r-downloader: 
   :depends on r-magicaxis: 
   :depends on r-matrixstats: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-scales: 

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

    pixi global install bioconductor-radiogx

to add into an existing workspace instead, run::

    pixi add bioconductor-radiogx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-radiogx

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-radiogx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-radiogx:<tag>

(see `bioconductor-radiogx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-radiogx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-radiogx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-radiogx
   :alt:   (downloads)
.. |docker_bioconductor-radiogx| image:: https://quay.io/repository/biocontainers/bioconductor-radiogx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-radiogx
.. _`bioconductor-radiogx/tags`: https://quay.io/repository/biocontainers/bioconductor-radiogx?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-radiogx";
      var versions = ["2.14.0","2.10.0","2.6.0","2.4.0","2.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-radiogx"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-radiogx"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-radiogx"></div>



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
         
            // Build cdf plot for bioconductor-radiogx
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-radiogx/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-radiogx', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-radiogx
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-radiogx/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-radiogx', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-radiogx
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-radiogx/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-radiogx', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-radiogx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-radiogx/README.html