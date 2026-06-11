:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomemarker'
.. highlight: bash

bioconductor-microbiomemarker
=============================

.. conda:recipe:: bioconductor-microbiomemarker
   :replaces_section_title:
   :noindex:

   microbiome biomarker analysis toolkit

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/microbiomeMarker.html
   :license: GPL-3
   :recipe: /`bioconductor-microbiomemarker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomemarker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomemarker/meta.yaml>`_

   To date\, a number of methods have been developed for microbiome marker discovery based on metagenomic profiles\, e.g. LEfSe. However\, all of these methods have its own advantages and disadvantages\, and none of them is considered standard or universal. Moreover\, different programs or softwares may be development using different programming languages\, even in different operating systems. Here\, we have developed an all\-in\-one R package microbiomeMarker that integrates commonly used differential analysis methods as well as three machine learning\-based approaches\, including Logistic regression\, Random forest\, and Support vector machine\, to facilitate the identification of microbiome markers.


.. conda:package:: bioconductor-microbiomemarker

   |downloads_bioconductor-microbiomemarker| |docker_bioconductor-microbiomemarker|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-aldex2: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-ancombc: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-biomformat: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-ggtree: ``>=3.10.0,<3.11.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends on bioconductor-metagenomeseq: ``>=1.43.0,<1.44.0``
   :depends on bioconductor-multtest: ``>=2.58.0,<2.59.0``
   :depends on bioconductor-phyloseq: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-caret: 
   :depends on r-coin: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggsignif: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-patchwork: 
   :depends on r-plotroc: 
   :depends on r-proc: 
   :depends on r-purrr: 
   :depends on r-rlang: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidytree: 
   :depends on r-vegan: 
   :depends on r-yaml: 

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

    pixi global install bioconductor-microbiomemarker

to add into an existing workspace instead, run::

    pixi add bioconductor-microbiomemarker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-microbiomemarker

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-microbiomemarker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-microbiomemarker:<tag>

(see `bioconductor-microbiomemarker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-microbiomemarker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomemarker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomemarker
   :alt:   (downloads)
.. |docker_bioconductor-microbiomemarker| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomemarker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomemarker
.. _`bioconductor-microbiomemarker/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomemarker?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-microbiomemarker";
      var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-microbiomemarker"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-microbiomemarker"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-microbiomemarker"></div>



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
         
            // Build cdf plot for bioconductor-microbiomemarker
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-microbiomemarker/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-microbiomemarker', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-microbiomemarker
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-microbiomemarker/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-microbiomemarker', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-microbiomemarker
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-microbiomemarker/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-microbiomemarker', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomemarker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomemarker/README.html