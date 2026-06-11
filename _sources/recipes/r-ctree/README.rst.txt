:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ctree'
.. highlight: bash

r-ctree
=======

.. conda:recipe:: r-ctree
   :replaces_section_title:
   :noindex:

   Clone trees for Cancer Evolution studies from bulk sequencing data.

   :homepage: https://github.com/caravagnalab/ctree
   :documentation: https://caravagnalab.github.io/ctree/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-ctree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ctree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ctree/meta.yaml>`_

   The ctree package implements clones trees for cancer evolutionary studies. 
   These models are built from Cancer Cell Franctions \(CCFs\) clusters computed via 
   tumour subclonal deconvolution\, using either one or more tumour biopsies at once. 
   They can be used to model evolutionary trajectories from bulk sequencing data\, 
   especially if whole\-genome sequencing is available. The package implements S3 
   objects for the mutation trees\, as well as a Monte Carlo sampler to generate them\, 
   as well as functions to plot and analyze the trees. The sibling of a clone tree is 
   a mutation tree\, which is built from binary mutation profiles\; refer to the mtree 
   package for mutation trees.



.. conda:package:: r-ctree

   |downloads_r-ctree| |docker_r-ctree|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cli: 
   :depends on r-clisymbols: 
   :depends on r-covr: 
   :depends on r-crayon: 
   :depends on r-dplyr: 
   :depends on r-easypar: 
   :depends on r-entropy: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-ggrepel: 
   :depends on r-igraph: 
   :depends on r-knitr: 
   :depends on r-matrixcalc: 
   :depends on r-matrixstats: 
   :depends on r-pio: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-tidygraph: 
   :depends on r-tidyverse: 

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

    pixi global install r-ctree

to add into an existing workspace instead, run::

    pixi add r-ctree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-ctree

Alternatively, to install into a new environment, run::

    conda create -n envname r-ctree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-ctree:<tag>

(see `r-ctree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-ctree| image:: https://img.shields.io/conda/dn/bioconda/r-ctree.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ctree
   :alt:   (downloads)
.. |docker_r-ctree| image:: https://quay.io/repository/biocontainers/r-ctree/status
   :target: https://quay.io/repository/biocontainers/r-ctree
.. _`r-ctree/tags`: https://quay.io/repository/biocontainers/r-ctree?tab=tags


.. raw:: html

   <script>
      var package = "r-ctree";
      var versions = ["1.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-ctree"></div>
   <div style="width: 100%" id="platform_plot_r-ctree"></div>
   <div style="width: 100%" id="cdf_plot_r-ctree"></div>



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
         
            // Build cdf plot for r-ctree
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-ctree/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-ctree', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-ctree
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-ctree/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-ctree', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-ctree
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-ctree/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-ctree', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ctree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ctree/README.html