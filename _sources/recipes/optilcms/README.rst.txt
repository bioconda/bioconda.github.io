:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'optilcms'
.. highlight: bash

optilcms
========

.. conda:recipe:: optilcms
   :replaces_section_title:
   :noindex:

   Pipeline for processing LC\-MS raw data with optimized parameters.

   :homepage: https://github.com/xia-lab/OptiLCMS
   :license: MIT / MIT
   :recipe: /`optilcms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optilcms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optilcms/meta.yaml>`_

   


.. conda:package:: optilcms

   |downloads_optilcms| |docker_optilcms|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends on bioconductor-biobase: 
   :depends on bioconductor-biocparallel: ``>=1.8.0``
   :depends on bioconductor-biocstyle: 
   :depends on bioconductor-graph: 
   :depends on bioconductor-massspecwavelet: 
   :depends on bioconductor-msnbase: 
   :depends on bioconductor-mtbls2: 
   :depends on bioconductor-mzr: ``>=2.22.0``
   :depends on bioconductor-rbgl: 
   :depends on bioconductor-s4vectors: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cairo: 
   :depends on r-cluster: 
   :depends on r-data.table: 
   :depends on r-entropy: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-hmisc: 
   :depends on r-knitr: ``>=1.1.0``
   :depends on r-lattice: 
   :depends on r-maldiquant: 
   :depends on r-plyr: 
   :depends on r-progress: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: ``>=1.0.9``
   :depends on r-rjsonio: 
   :depends on r-rmarkdown: 
   :depends on r-rsm: 
   :depends on r-scales: 
   :depends on r-xml: 

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

    pixi global install optilcms

to add into an existing workspace instead, run::

    pixi add optilcms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install optilcms

Alternatively, to install into a new environment, run::

    conda create -n envname optilcms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/optilcms:<tag>

(see `optilcms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_optilcms| image:: https://img.shields.io/conda/dn/bioconda/optilcms.svg?style=flat
   :target: https://anaconda.org/bioconda/optilcms
   :alt:   (downloads)
.. |docker_optilcms| image:: https://quay.io/repository/biocontainers/optilcms/status
   :target: https://quay.io/repository/biocontainers/optilcms
.. _`optilcms/tags`: https://quay.io/repository/biocontainers/optilcms?tab=tags


.. raw:: html

   <script>
      var package = "optilcms";
      var versions = ["1.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_optilcms"></div>
   <div style="width: 100%" id="platform_plot_optilcms"></div>
   <div style="width: 100%" id="cdf_plot_optilcms"></div>



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
         
            // Build cdf plot for optilcms
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/optilcms/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_optilcms', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for optilcms
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/optilcms/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_optilcms', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for optilcms
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/optilcms/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_optilcms', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/optilcms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/optilcms/README.html