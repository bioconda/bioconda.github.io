:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-atacseqtfea'
.. highlight: bash

bioconductor-atacseqtfea
========================

.. conda:recipe:: bioconductor-atacseqtfea
   :replaces_section_title:
   :noindex:

   Transcription Factor Enrichment Analysis for ATAC\-seq

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/ATACseqTFEA.html
   :license: GPL-3
   :recipe: /`bioconductor-atacseqtfea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atacseqtfea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atacseqtfea/meta.yaml>`_

   Assay for Transpose\-Accessible Chromatin using sequencing \(ATAC\-seq\) is a technique to assess genome\-wide chromatin accessibility by probing open chromatin with hyperactive mutant Tn5 Transposase that inserts sequencing adapters into open regions of the genome. ATACseqTFEA is an improvement of the current computational method that detects differential activity of transcription factors \(TFs\). ATACseqTFEA not only uses the difference of open region information\, but also \(or emphasizes\) the difference of TFs footprints \(cutting sites or insertion sites\). ATACseqTFEA provides an easy\, rigorous way to broadly assess TF activity changes between two conditions.


.. conda:package:: bioconductor-atacseqtfea

   |downloads_bioconductor-atacseqtfea| |docker_bioconductor-atacseqtfea|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-motifmatchr: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-tfbstools: ``>=1.48.0,<1.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-matrix: 
   :depends on r-pracma: 

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

    pixi global install bioconductor-atacseqtfea

to add into an existing workspace instead, run::

    pixi add bioconductor-atacseqtfea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-atacseqtfea

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-atacseqtfea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-atacseqtfea:<tag>

(see `bioconductor-atacseqtfea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-atacseqtfea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-atacseqtfea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-atacseqtfea
   :alt:   (downloads)
.. |docker_bioconductor-atacseqtfea| image:: https://quay.io/repository/biocontainers/bioconductor-atacseqtfea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-atacseqtfea
.. _`bioconductor-atacseqtfea/tags`: https://quay.io/repository/biocontainers/bioconductor-atacseqtfea?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-atacseqtfea";
      var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-atacseqtfea"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-atacseqtfea"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-atacseqtfea"></div>



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
         
            // Build cdf plot for bioconductor-atacseqtfea
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-atacseqtfea/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-atacseqtfea', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-atacseqtfea
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-atacseqtfea/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-atacseqtfea', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-atacseqtfea
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-atacseqtfea/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-atacseqtfea', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-atacseqtfea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-atacseqtfea/README.html