:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-keggrest'
.. highlight: bash

bioconductor-keggrest
=====================

.. conda:recipe:: bioconductor-keggrest
   :replaces_section_title:
   :noindex:

   Client\-side REST access to the Kyoto Encyclopedia of Genes and Genomes \(KEGG\)

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/KEGGREST.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-keggrest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggrest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggrest/meta.yaml>`_
   :links: biotools: :biotools:`keggrest`, doi: :doi:`10.1007/s11845-015-1283-8`

   A package that provides a client interface to the Kyoto Encyclopedia of Genes and Genomes \(KEGG\) REST API. Only for academic use by academic users belonging to academic institutions \(see \<https\:\/\/www.kegg.jp\/kegg\/rest\/\>\). Note that KEGGREST is based on KEGGSOAP by J. Zhang\, R. Gentleman\, and Marc Carlson\, and KEGG \(python package\) by Aurelien Mazurie.


.. conda:package:: bioconductor-keggrest

   |downloads_bioconductor-keggrest| |docker_bioconductor-keggrest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.1-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.2-0``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.1-0``,  ``1.12.3-0``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-httr: 
   :depends on r-png: 

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

    pixi global install bioconductor-keggrest

to add into an existing workspace instead, run::

    pixi add bioconductor-keggrest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-keggrest

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-keggrest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-keggrest:<tag>

(see `bioconductor-keggrest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-keggrest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-keggrest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-keggrest
   :alt:   (downloads)
.. |docker_bioconductor-keggrest| image:: https://quay.io/repository/biocontainers/bioconductor-keggrest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-keggrest
.. _`bioconductor-keggrest/tags`: https://quay.io/repository/biocontainers/bioconductor-keggrest?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-keggrest";
      var versions = ["1.50.0","1.46.0","1.42.0","1.40.0","1.38.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-keggrest"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-keggrest"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-keggrest"></div>



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
         
            // Build cdf plot for bioconductor-keggrest
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-keggrest/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-keggrest', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-keggrest
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-keggrest/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-keggrest', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-keggrest
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-keggrest/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-keggrest', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-keggrest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-keggrest/README.html