:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-timirgen'
.. highlight: bash

bioconductor-timirgen
=====================

.. conda:recipe:: bioconductor-timirgen
   :replaces_section_title:
   :noindex:

   Time sensitive microRNA\-mRNA integration\, analysis and network generation tool

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TimiRGeN.html
   :license: GPL-3
   :recipe: /`bioconductor-timirgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timirgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timirgen/meta.yaml>`_

   TimiRGeN \(Time Incorporated miR\-mRNA Generation of Networks\) is a novel R package which functionally analyses and integrates time course miRNA\-mRNA differential expression data. This tool can generate small networks within R or export results into cytoscape or pathvisio for more detailed network construction and hypothesis generation. This tool is created for researchers that wish to dive deep into time series multi\-omic datasets. TimiRGeN goes further than many other tools in terms of data reduction. Here\, potentially hundreds\-of\-thousands of potential miRNA\-mRNA interactions can be whittled down into a handful of high confidence miRNA\-mRNA interactions affecting a signalling pathway\, across a time course.


.. conda:package:: bioconductor-timirgen

   |downloads_bioconductor-timirgen| |docker_bioconductor-timirgen|

   :versions:
      
      

      ``1.11.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends on bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends on bioconductor-mfuzz: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-rcy3: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-rwikipathways: ``>=1.22.0,<1.23.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dplyr: ``>=0.8.4``
   :depends on r-freqprof: 
   :depends on r-ggdendro: 
   :depends on r-gghighlight: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-gtools: ``>=3.8.1``
   :depends on r-igraph: ``>=1.2.4.2``
   :depends on r-readxl: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-stringr: ``>=1.4.0``
   :depends on r-tidyr: ``>=1.0.2``

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

    pixi global install bioconductor-timirgen

to add into an existing workspace instead, run::

    pixi add bioconductor-timirgen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-timirgen

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-timirgen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-timirgen:<tag>

(see `bioconductor-timirgen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-timirgen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timirgen.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-timirgen
   :alt:   (downloads)
.. |docker_bioconductor-timirgen| image:: https://quay.io/repository/biocontainers/bioconductor-timirgen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timirgen
.. _`bioconductor-timirgen/tags`: https://quay.io/repository/biocontainers/bioconductor-timirgen?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-timirgen";
      var versions = ["1.11.0","1.10.0","1.8.0","1.4.0","1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-timirgen"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-timirgen"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-timirgen"></div>



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
         
            // Build cdf plot for bioconductor-timirgen
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-timirgen/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-timirgen', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-timirgen
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-timirgen/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-timirgen', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-timirgen
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-timirgen/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-timirgen', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timirgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timirgen/README.html