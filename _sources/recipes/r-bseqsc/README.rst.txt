:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bseqsc'
.. highlight: bash

r-bseqsc
========

.. conda:recipe:: r-bseqsc
   :replaces_section_title:
   :noindex:

   Companion package to\: A single\-cell transcriptomic map of the human and mouse pancreas reveals inter\- and intra\-cell population structure. Baron et al. Cell Systems \(2016\) https\:\/\/www.ncbi.nlm.nih.gov\/pubmed\/27667365

   :homepage: https://github.com/shenorrLab/bseqsc
   :license: GPL / GPL-2
   :recipe: /`r-bseqsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bseqsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bseqsc/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2016.08.011`

   


.. conda:package:: r-bseqsc

   |downloads_r-bseqsc| |docker_r-bseqsc|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.48.0``
   :depends on bioconductor-biobase: ``>=2.46.0``
   :depends on bioconductor-edger: ``>=3.28.0``
   :depends on bioconductor-preprocesscore: ``>=1.48.0``
   :depends on r-abind: ``>=1.4_5``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cssam: ``>=1.4``
   :depends on r-dplyr: ``>=1.0.6``
   :depends on r-e1071: ``>=1.7_7``
   :depends on r-ggplot2: ``>=3.3.3``
   :depends on r-nmf: ``>=0.21.0``
   :depends on r-openxlsx: ``>=4.2.3``
   :depends on r-pkgmaker: ``>=0.32.2``
   :depends on r-plyr: ``>=1.8.6``
   :depends on r-rngtools: ``>=1.5``
   :depends on r-scales: ``>=1.1.1``
   :depends on r-stringr: ``>=1.4.0``
   :depends on xbioc: ``>=0.1.18``

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

    pixi global install r-bseqsc

to add into an existing workspace instead, run::

    pixi add r-bseqsc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-bseqsc

Alternatively, to install into a new environment, run::

    conda create -n envname r-bseqsc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-bseqsc:<tag>

(see `r-bseqsc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-bseqsc| image:: https://img.shields.io/conda/dn/bioconda/r-bseqsc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bseqsc
   :alt:   (downloads)
.. |docker_r-bseqsc| image:: https://quay.io/repository/biocontainers/r-bseqsc/status
   :target: https://quay.io/repository/biocontainers/r-bseqsc
.. _`r-bseqsc/tags`: https://quay.io/repository/biocontainers/r-bseqsc?tab=tags


.. raw:: html

   <script>
      var package = "r-bseqsc";
      var versions = ["1.0","1.0","1.0","1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-bseqsc"></div>
   <div style="width: 100%" id="platform_plot_r-bseqsc"></div>
   <div style="width: 100%" id="cdf_plot_r-bseqsc"></div>



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
         
            // Build cdf plot for r-bseqsc
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-bseqsc/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-bseqsc', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-bseqsc
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-bseqsc/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-bseqsc', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-bseqsc
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-bseqsc/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-bseqsc', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bseqsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bseqsc/README.html