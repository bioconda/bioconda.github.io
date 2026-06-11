:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdrstyle'
.. highlight: bash

bioconductor-gdrstyle
=====================

.. conda:recipe:: bioconductor-gdrstyle
   :replaces_section_title:
   :noindex:

   A package with style requirements for the gDR suite

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/gDRstyle.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdrstyle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrstyle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrstyle/meta.yaml>`_

   Package fills a helper package role for whole gDR suite. It helps to support good development practices by keeping style requirements and style tests for other packages. It also contains build helpers to make all package requirements met.


.. conda:package:: bioconductor-gdrstyle

   |downloads_bioconductor-gdrstyle| |docker_bioconductor-gdrstyle|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-bioccheck: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biocmanager: 
   :depends on r-checkmate: 
   :depends on r-desc: 
   :depends on r-git2r: 
   :depends on r-lintr: ``>=3.0.0``
   :depends on r-pkgbuild: 
   :depends on r-rcmdcheck: 
   :depends on r-remotes: 
   :depends on r-rjson: 
   :depends on r-withr: 
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

    pixi global install bioconductor-gdrstyle

to add into an existing workspace instead, run::

    pixi add bioconductor-gdrstyle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gdrstyle

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gdrstyle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gdrstyle:<tag>

(see `bioconductor-gdrstyle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gdrstyle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdrstyle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdrstyle
   :alt:   (downloads)
.. |docker_bioconductor-gdrstyle| image:: https://quay.io/repository/biocontainers/bioconductor-gdrstyle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdrstyle
.. _`bioconductor-gdrstyle/tags`: https://quay.io/repository/biocontainers/bioconductor-gdrstyle?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-gdrstyle";
      var versions = ["1.8.0","1.4.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-gdrstyle"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-gdrstyle"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-gdrstyle"></div>



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
         
            // Build cdf plot for bioconductor-gdrstyle
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gdrstyle/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-gdrstyle', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-gdrstyle
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gdrstyle/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-gdrstyle', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-gdrstyle
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gdrstyle/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-gdrstyle', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdrstyle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdrstyle/README.html