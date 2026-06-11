:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multicrispr'
.. highlight: bash

bioconductor-multicrispr
========================

.. conda:recipe:: bioconductor-multicrispr
   :replaces_section_title:
   :noindex:

   Multi\-locus multi\-purpose Crispr\/Cas design

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/multicrispr.html
   :license: GPL-2
   :recipe: /`bioconductor-multicrispr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multicrispr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multicrispr/meta.yaml>`_

   This package is for designing Crispr\/Cas9 and Prime Editing experiments. It contains functions to \(1\) define and transform genomic targets\, \(2\) find spacers \(4\) count offtarget \(mis\)matches\, and \(5\) compute Doench2016\/2014 targeting efficiency. Care has been taken for multicrispr to scale well towards large target sets\, enabling the design of large Crispr\/Cas9 libraries.


.. conda:package:: bioconductor-multicrispr

   |downloads_bioconductor-multicrispr| |docker_bioconductor-multicrispr|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.3-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-crisprseek: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-karyoploter: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-plyranges: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-rbowtie: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-reticulate: 
   :depends on r-stringi: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 

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

    pixi global install bioconductor-multicrispr

to add into an existing workspace instead, run::

    pixi add bioconductor-multicrispr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-multicrispr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-multicrispr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-multicrispr:<tag>

(see `bioconductor-multicrispr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-multicrispr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multicrispr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multicrispr
   :alt:   (downloads)
.. |docker_bioconductor-multicrispr| image:: https://quay.io/repository/biocontainers/bioconductor-multicrispr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multicrispr
.. _`bioconductor-multicrispr/tags`: https://quay.io/repository/biocontainers/bioconductor-multicrispr?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-multicrispr";
      var versions = ["1.20.0","1.16.0","1.12.3","1.10.1","1.8.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-multicrispr"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-multicrispr"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-multicrispr"></div>



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
         
            // Build cdf plot for bioconductor-multicrispr
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-multicrispr/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-multicrispr', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-multicrispr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-multicrispr/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-multicrispr', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-multicrispr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-multicrispr/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-multicrispr', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multicrispr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multicrispr/README.html