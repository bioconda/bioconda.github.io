:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interminer'
.. highlight: bash

bioconductor-interminer
=======================

.. conda:recipe:: bioconductor-interminer
   :replaces_section_title:
   :noindex:

   R Interface with InterMine\-Powered Databases

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/InterMineR.html
   :license: LGPL
   :recipe: /`bioconductor-interminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interminer/meta.yaml>`_

   Databases based on the InterMine platform such as FlyMine\, modMine \(modENCODE\)\, RatMine\, YeastMine\, HumanMine and TargetMine are integrated databases of genomic\, expression and protein data for various organisms. Integrating data makes it possible to run sophisticated data mining queries that span domains of biological knowledge. This R package provides interfaces with these databases through webservices. It makes most from the correspondence of the data frame object in R and the table object in databases\, while hiding the details of data exchange through XML or JSON.


.. conda:package:: bioconductor-interminer

   |downloads_bioconductor-interminer| |docker_bioconductor-interminer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-httr: 
   :depends on r-igraph: 
   :depends on r-rcurl: 
   :depends on r-rjsonio: 
   :depends on r-sqldf: 
   :depends on r-xml: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-interminer

to add into an existing workspace instead, run::

    pixi add bioconductor-interminer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-interminer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-interminer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-interminer:<tag>

(see `bioconductor-interminer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-interminer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interminer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-interminer
   :alt:   (downloads)
.. |docker_bioconductor-interminer| image:: https://quay.io/repository/biocontainers/bioconductor-interminer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interminer
.. _`bioconductor-interminer/tags`: https://quay.io/repository/biocontainers/bioconductor-interminer?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-interminer";
      var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-interminer"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-interminer"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-interminer"></div>



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
         
            // Build cdf plot for bioconductor-interminer
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-interminer/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-interminer', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-interminer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-interminer/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-interminer', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-interminer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-interminer/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-interminer', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interminer/README.html