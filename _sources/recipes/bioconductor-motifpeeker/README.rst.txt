:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifpeeker'
.. highlight: bash

bioconductor-motifpeeker
========================

.. conda:recipe:: bioconductor-motifpeeker
   :replaces_section_title:
   :noindex:

   Benchmarking Epigenomic Profiling Methods Using Motif Enrichment

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/MotifPeeker.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-motifpeeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifpeeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifpeeker/meta.yaml>`_

   MotifPeeker is used to compare and analyse datasets from epigenomic profiling methods with motif enrichment as the key benchmark.  The package outputs an HTML report consisting of three sections\: \(1. General Metrics\) Overview of peaks\-related general metrics for the datasets \(FRiP scores\, peak widths and motif\-summit distances\).  \(2. Known Motif Enrichment Analysis\) Statistics for the frequency of user\-provided motifs enriched in the datasets.  \(3. De\-Novo Motif Enrichment Analysis\) Statistics for the frequency of de\-novo discovered motifs enriched in the datasets and compared with known motifs.


.. conda:package:: bioconductor-motifpeeker

   |downloads_bioconductor-motifpeeker| |docker_bioconductor-motifpeeker|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-memes: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-universalmotif: ``>=1.28.0,<1.29.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-heatmaply: 
   :depends on r-htmltools: 
   :depends on r-htmlwidgets: 
   :depends on r-plotly: 
   :depends on r-purrr: 
   :depends on r-rmarkdown: 
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

    pixi global install bioconductor-motifpeeker

to add into an existing workspace instead, run::

    pixi add bioconductor-motifpeeker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-motifpeeker

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-motifpeeker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-motifpeeker:<tag>

(see `bioconductor-motifpeeker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-motifpeeker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifpeeker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifpeeker
   :alt:   (downloads)
.. |docker_bioconductor-motifpeeker| image:: https://quay.io/repository/biocontainers/bioconductor-motifpeeker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifpeeker
.. _`bioconductor-motifpeeker/tags`: https://quay.io/repository/biocontainers/bioconductor-motifpeeker?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-motifpeeker";
      var versions = ["1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-motifpeeker"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-motifpeeker"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-motifpeeker"></div>



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
         
            // Build cdf plot for bioconductor-motifpeeker
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-motifpeeker/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-motifpeeker', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-motifpeeker
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-motifpeeker/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-motifpeeker', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-motifpeeker
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-motifpeeker/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-motifpeeker', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifpeeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifpeeker/README.html