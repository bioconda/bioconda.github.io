:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseq'
.. highlight: bash

bioconductor-iseq
=================

.. conda:recipe:: bioconductor-iseq
   :replaces_section_title:
   :noindex:

   Bayesian Hierarchical Modeling of ChIP\-seq Data Through Hidden Ising Models

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/iSeq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-iseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseq/meta.yaml>`_
   :links: biotools: :biotools:`iseq`, doi: :doi:`10.1111/j.1541-0420.2009.01379.x`

   Bayesian hidden Ising models are implemented to identify IP\-enriched genomic regions from ChIP\-seq data. They can be used to analyze ChIP\-seq data with and without controls and replicates.


.. conda:package:: bioconductor-iseq

   |downloads_bioconductor-iseq| |docker_bioconductor-iseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62.0-0</code>,  <code>1.58.0-0</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-2</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.46.0-2</code>,  </span></summary>
      

      ``1.62.0-0``,  ``1.58.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-2``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.46.0-2``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-iseq

to add into an existing workspace instead, run::

    pixi add bioconductor-iseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-iseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-iseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-iseq:<tag>

(see `bioconductor-iseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-iseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseq
   :alt:   (downloads)
.. |docker_bioconductor-iseq| image:: https://quay.io/repository/biocontainers/bioconductor-iseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseq
.. _`bioconductor-iseq/tags`: https://quay.io/repository/biocontainers/bioconductor-iseq?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-iseq";
      var versions = ["1.62.0","1.58.0","1.54.0","1.54.0","1.52.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-iseq"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-iseq"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-iseq"></div>



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
         
            // Build cdf plot for bioconductor-iseq
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-iseq/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-iseq', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-iseq
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-iseq/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-iseq', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-iseq
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-iseq/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-iseq', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseq/README.html