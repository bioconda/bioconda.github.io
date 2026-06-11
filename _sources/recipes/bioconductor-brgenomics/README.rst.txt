:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brgenomics'
.. highlight: bash

bioconductor-brgenomics
=======================

.. conda:recipe:: bioconductor-brgenomics
   :replaces_section_title:
   :noindex:

   Tools for the Efficient Analysis of High\-Resolution Genomics Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BRGenomics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-brgenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brgenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brgenomics/meta.yaml>`_

   This package provides useful and efficient utilites for the analysis of high\-resolution genomic data using standard Bioconductor methods and classes. BRGenomics is feature\-rich and simplifies a number of post\-alignment processing steps and data handling. Emphasis is on efficient analysis of multiple datasets\, with support for normalization and blacklisting. Included are functions for\: spike\-in normalizing data\; generating basepair\-resolution readcounts and coverage data \(e.g. for heatmaps\)\; importing and processing bam files \(e.g. for conversion to bigWig files\)\; generating metaplots\/metaprofiles \(bootstrapped mean profiles\) with confidence intervals\; conveniently calling DESeq2 without using sample\-blind estimates of genewise dispersion\; among other features.


.. conda:package:: bioconductor-brgenomics

   |downloads_bioconductor-brgenomics| |docker_bioconductor-brgenomics|

   :versions:
      
      

      ``1.13.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-brgenomics

to add into an existing workspace instead, run::

    pixi add bioconductor-brgenomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-brgenomics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-brgenomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-brgenomics:<tag>

(see `bioconductor-brgenomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-brgenomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brgenomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brgenomics
   :alt:   (downloads)
.. |docker_bioconductor-brgenomics| image:: https://quay.io/repository/biocontainers/bioconductor-brgenomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brgenomics
.. _`bioconductor-brgenomics/tags`: https://quay.io/repository/biocontainers/bioconductor-brgenomics?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-brgenomics";
      var versions = ["1.13.0","1.12.0","1.10.0","1.6.0","1.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-brgenomics"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-brgenomics"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-brgenomics"></div>



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
         
            // Build cdf plot for bioconductor-brgenomics
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-brgenomics/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-brgenomics', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-brgenomics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-brgenomics/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-brgenomics', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-brgenomics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-brgenomics/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-brgenomics', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brgenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brgenomics/README.html