:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arraymvout'
.. highlight: bash

bioconductor-arraymvout
=======================

.. conda:recipe:: bioconductor-arraymvout
   :replaces_section_title:
   :noindex:

   multivariate outlier detection for expression array QA

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/arrayMvout.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-arraymvout <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraymvout>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraymvout/meta.yaml>`_

   This package supports the application of diverse quality metrics to AffyBatch instances\, summarizing these metrics via PCA\, and then performing parametric outlier detection on the PCs to identify aberrant arrays with a fixed Type I error rate


.. conda:package:: bioconductor-arraymvout

   |downloads_bioconductor-arraymvout| |docker_bioconductor-arraymvout|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.64.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-affy: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-affycontam: ``>=1.68.0,<1.69.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-lumi: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-mdqc: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-parody: ``>=1.68.0,<1.69.0``
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

    pixi global install bioconductor-arraymvout

to add into an existing workspace instead, run::

    pixi add bioconductor-arraymvout

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-arraymvout

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-arraymvout

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-arraymvout:<tag>

(see `bioconductor-arraymvout/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-arraymvout| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arraymvout.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arraymvout
   :alt:   (downloads)
.. |docker_bioconductor-arraymvout| image:: https://quay.io/repository/biocontainers/bioconductor-arraymvout/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arraymvout
.. _`bioconductor-arraymvout/tags`: https://quay.io/repository/biocontainers/bioconductor-arraymvout?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-arraymvout";
      var versions = ["1.68.0","1.64.0","1.60.0","1.58.0","1.56.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-arraymvout"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-arraymvout"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-arraymvout"></div>



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
         
            // Build cdf plot for bioconductor-arraymvout
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-arraymvout/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-arraymvout', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-arraymvout
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-arraymvout/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-arraymvout', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-arraymvout
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-arraymvout/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-arraymvout', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arraymvout/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arraymvout/README.html