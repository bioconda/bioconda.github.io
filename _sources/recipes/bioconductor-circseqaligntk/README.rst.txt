:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-circseqaligntk'
.. highlight: bash

bioconductor-circseqaligntk
===========================

.. conda:recipe:: bioconductor-circseqaligntk
   :replaces_section_title:
   :noindex:

   End\-to\-End Analysis of Small RNA\-Seq Data from Viroids

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/CircSeqAlignTk.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-circseqaligntk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-circseqaligntk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-circseqaligntk/meta.yaml>`_

   CircSeqAlignTk is a toolkit for the analysis of RNA\-Seq data derived from circular genome sequences\, with a primary focus on viroids\, circular RNAs typically consisting of a few hundred nucleotides. The toolkit supports an end\-to\-end analysis pipeline\, from alignment to visualization.


.. conda:package:: bioconductor-circseqaligntk

   |downloads_bioconductor-circseqaligntk| |docker_bioconductor-circseqaligntk|

   :versions:
      
      

      ``1.12.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rbowtie2: ``>=2.16.0,<2.17.0``
   :depends on bioconductor-rhisat2: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-shortread: ``>=1.68.0,<1.69.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-htmltools: 
   :depends on r-magrittr: 
   :depends on r-plotly: 
   :depends on r-r.utils: 
   :depends on r-rlang: 
   :depends on r-shiny: 
   :depends on r-shinyfiles: 
   :depends on r-shinyjs: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-circseqaligntk

to add into an existing workspace instead, run::

    pixi add bioconductor-circseqaligntk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-circseqaligntk

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-circseqaligntk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-circseqaligntk:<tag>

(see `bioconductor-circseqaligntk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-circseqaligntk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-circseqaligntk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-circseqaligntk
   :alt:   (downloads)
.. |docker_bioconductor-circseqaligntk| image:: https://quay.io/repository/biocontainers/bioconductor-circseqaligntk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-circseqaligntk
.. _`bioconductor-circseqaligntk/tags`: https://quay.io/repository/biocontainers/bioconductor-circseqaligntk?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-circseqaligntk";
      var versions = ["1.12.0","1.4.0","1.2.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-circseqaligntk"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-circseqaligntk"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-circseqaligntk"></div>



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
         
            // Build cdf plot for bioconductor-circseqaligntk
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-circseqaligntk/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-circseqaligntk', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-circseqaligntk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-circseqaligntk/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-circseqaligntk', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-circseqaligntk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-circseqaligntk/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-circseqaligntk', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-circseqaligntk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-circseqaligntk/README.html