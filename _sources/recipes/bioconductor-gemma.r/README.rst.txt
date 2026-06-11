:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gemma.r'
.. highlight: bash

bioconductor-gemma.r
====================

.. conda:recipe:: bioconductor-gemma.r
   :replaces_section_title:
   :noindex:

   A wrapper for Gemma\'s Restful API to access curated gene expression data and differential expression analyses

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/gemma.R.html
   :license: Apache License (>= 2)
   :recipe: /`bioconductor-gemma.r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gemma.r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gemma.r/meta.yaml>`_

   Low\- and high\-level wrappers for Gemma\'s RESTful API. They enable access to curated expression and differential expression data from over 10\,000 published studies. Gemma is a web site\, database and a set of tools for the meta\-analysis\, re\-use and sharing of genomics data\, currently primarily targeted at the analysis of gene expression profiles.


.. conda:package:: bioconductor-gemma.r

   |downloads_bioconductor-gemma.r| |docker_bioconductor-gemma.r|

   :versions:
      
      

      ``3.6.1-0``,  ``3.2.0-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-base64enc: 
   :depends on r-bit64: 
   :depends on r-data.table: 
   :depends on r-digest: 
   :depends on r-glue: 
   :depends on r-httr: 
   :depends on r-jsonlite: 
   :depends on r-kableextra: 
   :depends on r-lubridate: 
   :depends on r-magrittr: 
   :depends on r-memoise: 
   :depends on r-r.utils: 
   :depends on r-rappdirs: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tibble: 
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

    pixi global install bioconductor-gemma.r

to add into an existing workspace instead, run::

    pixi add bioconductor-gemma.r

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gemma.r

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gemma.r

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gemma.r:<tag>

(see `bioconductor-gemma.r/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gemma.r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gemma.r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gemma.r
   :alt:   (downloads)
.. |docker_bioconductor-gemma.r| image:: https://quay.io/repository/biocontainers/bioconductor-gemma.r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gemma.r
.. _`bioconductor-gemma.r/tags`: https://quay.io/repository/biocontainers/bioconductor-gemma.r?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-gemma.r";
      var versions = ["3.6.1","3.2.0","2.0.0","1.2.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-gemma.r"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-gemma.r"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-gemma.r"></div>



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
         
            // Build cdf plot for bioconductor-gemma.r
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gemma.r/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-gemma.r', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-gemma.r
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gemma.r/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-gemma.r', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-gemma.r
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-gemma.r/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-gemma.r', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gemma.r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gemma.r/README.html