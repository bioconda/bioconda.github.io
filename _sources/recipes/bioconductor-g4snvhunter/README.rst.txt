:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-g4snvhunter'
.. highlight: bash

bioconductor-g4snvhunter
========================

.. conda:recipe:: bioconductor-g4snvhunter
   :replaces_section_title:
   :noindex:

   Evaluating SNV\-Induced Disruption of G\-Quadruplex Structures

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/G4SNVHunter.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-g4snvhunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-g4snvhunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-g4snvhunter/meta.yaml>`_

   G\-quadruplexes \(G4s\) are unique nucleic acid secondary structures predominantly found in guanine\-rich regions and have been shown to be involved in various biological regulatory processes. G4SNVHunter is an R package designed to rapidly identify genomic sequences with G4\-forming propensity and to accurately screen user\-provided single nucleotide variants—as well as other small\-scale variants such as indels and MNVs—for their potential to destabilize these structures. This allows researchers to then screen these critical variants for deeper study\, digging into how they might influence biological functions—think gene regulation\, for instance—by impairing G4 formation propensity.


.. conda:package:: bioconductor-g4snvhunter

   |downloads_bioconductor-g4snvhunter| |docker_bioconductor-g4snvhunter|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=19``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggdensity: 
   :depends on r-ggplot2: 
   :depends on r-ggpointdensity: 
   :depends on r-ggseqlogo: 
   :depends on r-magrittr: 
   :depends on r-openxlsx: 
   :depends on r-progress: 
   :depends on r-rcpp: 
   :depends on r-rcpproll: 
   :depends on r-tidyr: 
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

    pixi global install bioconductor-g4snvhunter

to add into an existing workspace instead, run::

    pixi add bioconductor-g4snvhunter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-g4snvhunter

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-g4snvhunter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-g4snvhunter:<tag>

(see `bioconductor-g4snvhunter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-g4snvhunter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-g4snvhunter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-g4snvhunter
   :alt:   (downloads)
.. |docker_bioconductor-g4snvhunter| image:: https://quay.io/repository/biocontainers/bioconductor-g4snvhunter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-g4snvhunter
.. _`bioconductor-g4snvhunter/tags`: https://quay.io/repository/biocontainers/bioconductor-g4snvhunter?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-g4snvhunter";
      var versions = ["1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-g4snvhunter"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-g4snvhunter"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-g4snvhunter"></div>



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
         
            // Build cdf plot for bioconductor-g4snvhunter
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-g4snvhunter/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-g4snvhunter', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-g4snvhunter
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-g4snvhunter/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-g4snvhunter', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-g4snvhunter
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-g4snvhunter/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-g4snvhunter', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-g4snvhunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-g4snvhunter/README.html