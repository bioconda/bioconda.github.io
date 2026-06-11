:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-uncoverapplib'
.. highlight: bash

bioconductor-uncoverapplib
==========================

.. conda:recipe:: bioconductor-uncoverapplib
   :replaces_section_title:
   :noindex:

   Interactive graphical application for clinical assessment of sequence coverage at the base\-pair level

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/uncoverappLib.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-uncoverapplib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uncoverapplib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uncoverapplib/meta.yaml>`_

   a Shiny application containing a suite of graphical and statistical tools to support clinical assessment of low coverage regions.It displays three web pages each providing a different analysis module\: Coverage analysis\, calculate AF by allele frequency app and binomial distribution. uncoverAPP provides a statisticl summary of coverage given target file or genes name.


.. conda:package:: bioconductor-uncoverapplib

   |downloads_bioconductor-uncoverapplib| |docker_bioconductor-uncoverapplib|

   :versions:
      
      

      ``1.20.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.7.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-ensdb.hsapiens.v75: ``>=2.99.0,<2.100.0``
   :depends on bioconductor-ensdb.hsapiens.v86: ``>=2.99.0,<2.100.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-gviz: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-organismdbi: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-condformat: 
   :depends on r-dt: 
   :depends on r-markdown: 
   :depends on r-openxlsx: 
   :depends on r-processx: 
   :depends on r-rappdirs: 
   :depends on r-rlist: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-shinycssloaders: 
   :depends on r-shinyjs: 
   :depends on r-shinywidgets: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-uncoverapplib

to add into an existing workspace instead, run::

    pixi add bioconductor-uncoverapplib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-uncoverapplib

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-uncoverapplib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-uncoverapplib:<tag>

(see `bioconductor-uncoverapplib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-uncoverapplib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-uncoverapplib.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-uncoverapplib
   :alt:   (downloads)
.. |docker_bioconductor-uncoverapplib| image:: https://quay.io/repository/biocontainers/bioconductor-uncoverapplib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-uncoverapplib
.. _`bioconductor-uncoverapplib/tags`: https://quay.io/repository/biocontainers/bioconductor-uncoverapplib?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-uncoverapplib";
      var versions = ["1.20.0","1.12.0","1.10.0","1.7.0","1.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-uncoverapplib"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-uncoverapplib"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-uncoverapplib"></div>



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
         
            // Build cdf plot for bioconductor-uncoverapplib
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-uncoverapplib/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-uncoverapplib', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-uncoverapplib
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-uncoverapplib/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-uncoverapplib', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-uncoverapplib
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-uncoverapplib/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-uncoverapplib', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-uncoverapplib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-uncoverapplib/README.html