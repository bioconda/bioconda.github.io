:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dotseq'
.. highlight: bash

bioconductor-dotseq
===================

.. conda:recipe:: bioconductor-dotseq
   :replaces_section_title:
   :noindex:

   Genome\-wide Detection of Differential ORF Usage

   :homepage: https://bioconductor.org/packages/3.23/bioc/html/DOTSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dotseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dotseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dotseq/meta.yaml>`_

   Differential open reading frame \(ORF\) translation analysis framework for ribosome profiling \(Ribo\-seq\) with matched RNA\-seq. Implements \(i\) Differential ORF Usage \(DOU\)\, a beta\-binomial generalized linear model that models the expected proportion of Ribo\-seq versus RNA\-seq reads mapping to each ORF within a gene\, and \(ii\) ORF\-level Differential Translation Efficiency \(DTE\)\, a negative binomial GLM that capture changes in translation efficiency of individual ORFs across experimental conditions. Supports ORF\-level read summarization for bulk and single\-cell Ribo\-seq.


.. conda:package:: bioconductor-dotseq

   |downloads_bioconductor-dotseq| |docker_bioconductor-dotseq|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0a0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-deseq2: ``>=1.50.2,<1.51.0a0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.2,<1.47.0a0``
   :depends on bioconductor-genomeinfodbdata: ``>=1.2.15,<1.3.0``
   :depends on bioconductor-genomeinfodbdata: ``>=1.2.15,<1.3.0a0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0a0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0a0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.2,<1.7.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on r-ashr: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-boot: 
   :depends on r-data.table: 
   :depends on r-emmeans: 
   :depends on r-glmmtmb: 
   :depends on r-matrix: 
   :depends on r-pbapply: 
   :depends on r-rcpp: 

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

    pixi global install bioconductor-dotseq

to add into an existing workspace instead, run::

    pixi add bioconductor-dotseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dotseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dotseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dotseq:<tag>

(see `bioconductor-dotseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dotseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dotseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dotseq
   :alt:   (downloads)
.. |docker_bioconductor-dotseq| image:: https://quay.io/repository/biocontainers/bioconductor-dotseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dotseq
.. _`bioconductor-dotseq/tags`: https://quay.io/repository/biocontainers/bioconductor-dotseq?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-dotseq";
      var versions = ["1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-dotseq"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-dotseq"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-dotseq"></div>



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
         
            // Build cdf plot for bioconductor-dotseq
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-dotseq/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-dotseq', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-dotseq
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-dotseq/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-dotseq', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-dotseq
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-dotseq/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-dotseq', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dotseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dotseq/README.html