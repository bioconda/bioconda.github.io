:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-borealis'
.. highlight: bash

bioconductor-borealis
=====================

.. conda:recipe:: bioconductor-borealis
   :replaces_section_title:
   :noindex:

   Bisulfite\-seq OutlieR mEthylation At singLe\-sIte reSolution

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/borealis.html
   :license: GPL-3
   :recipe: /`bioconductor-borealis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-borealis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-borealis/meta.yaml>`_

   Borealis is an R library performing outlier analysis for count\-based bisulfite sequencing data. It detectes outlier methylated CpG sites from bisulfite sequencing \(BS\-seq\). The core of Borealis is modeling Beta\-Binomial distributions. This can be useful for rare disease diagnoses.


.. conda:package:: bioconductor-borealis

   |downloads_bioconductor-borealis| |docker_bioconductor-borealis|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-bsseq: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-dss: ``>=2.58.0,<2.59.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-gamlss: 
   :depends on r-gamlss.dist: 
   :depends on r-ggplot2: 
   :depends on r-plyr: 
   :depends on r-purrr: 
   :depends on r-r.utils: 
   :depends on r-rlang: 
   :depends on r-snow: 

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

    pixi global install bioconductor-borealis

to add into an existing workspace instead, run::

    pixi add bioconductor-borealis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-borealis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-borealis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-borealis:<tag>

(see `bioconductor-borealis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-borealis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-borealis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-borealis
   :alt:   (downloads)
.. |docker_bioconductor-borealis| image:: https://quay.io/repository/biocontainers/bioconductor-borealis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-borealis
.. _`bioconductor-borealis/tags`: https://quay.io/repository/biocontainers/bioconductor-borealis?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-borealis";
      var versions = ["1.14.0","1.10.0","1.4.0","1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-borealis"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-borealis"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-borealis"></div>



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
         
            // Build cdf plot for bioconductor-borealis
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-borealis/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-borealis', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-borealis
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-borealis/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-borealis', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-borealis
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-borealis/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-borealis', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-borealis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-borealis/README.html