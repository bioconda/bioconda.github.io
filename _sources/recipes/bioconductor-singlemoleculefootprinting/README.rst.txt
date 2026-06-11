:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlemoleculefootprinting'
.. highlight: bash

bioconductor-singlemoleculefootprinting
=======================================

.. conda:recipe:: bioconductor-singlemoleculefootprinting
   :replaces_section_title:
   :noindex:

   Analysis tools for Single Molecule Footprinting \(SMF\) data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/SingleMoleculeFootprinting.html
   :license: GPL-3
   :recipe: /`bioconductor-singlemoleculefootprinting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlemoleculefootprinting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlemoleculefootprinting/meta.yaml>`_

   SingleMoleculeFootprinting provides functions to analyze Single Molecule Footprinting \(SMF\) data. Following the workflow exemplified in its vignette\, the user will be able to perform basic data analysis of SMF data with minimal coding effort. Starting from an aligned bam file\, we show how to perform quality controls over sequencing libraries\, extract methylation information at the single molecule level accounting for the two possible kind of SMF experiments \(single enzyme or double enzyme\)\, classify single molecules based on their patterns of molecular occupancy\, plot SMF information at a given genomic location.


.. conda:package:: bioconductor-singlemoleculefootprinting

   |downloads_bioconductor-singlemoleculefootprinting| |docker_bioconductor-singlemoleculefootprinting|

   :versions:
      
      

      ``2.0.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends on bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-plyranges: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-quasr: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggpointdensity: 
   :depends on r-ggrepel: 
   :depends on r-matrix: 
   :depends on r-patchwork: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyverse: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-singlemoleculefootprinting

to add into an existing workspace instead, run::

    pixi add bioconductor-singlemoleculefootprinting

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-singlemoleculefootprinting

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-singlemoleculefootprinting

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-singlemoleculefootprinting:<tag>

(see `bioconductor-singlemoleculefootprinting/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-singlemoleculefootprinting| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlemoleculefootprinting.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlemoleculefootprinting
   :alt:   (downloads)
.. |docker_bioconductor-singlemoleculefootprinting| image:: https://quay.io/repository/biocontainers/bioconductor-singlemoleculefootprinting/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlemoleculefootprinting
.. _`bioconductor-singlemoleculefootprinting/tags`: https://quay.io/repository/biocontainers/bioconductor-singlemoleculefootprinting?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-singlemoleculefootprinting";
      var versions = ["2.0.0","1.10.0","1.8.0","1.6.0","1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-singlemoleculefootprinting"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-singlemoleculefootprinting"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-singlemoleculefootprinting"></div>



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
         
            // Build cdf plot for bioconductor-singlemoleculefootprinting
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-singlemoleculefootprinting/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-singlemoleculefootprinting', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-singlemoleculefootprinting
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-singlemoleculefootprinting/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-singlemoleculefootprinting', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-singlemoleculefootprinting
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-singlemoleculefootprinting/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-singlemoleculefootprinting', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlemoleculefootprinting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlemoleculefootprinting/README.html