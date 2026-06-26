:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vsn'
.. highlight: bash

bioconductor-vsn
================

.. conda:recipe:: bioconductor-vsn
   :replaces_section_title:
   :noindex:

   Variance stabilization and calibration for microarray data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/vsn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vsn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vsn/meta.yaml>`_
   :links: biotools: :biotools:`vsn`

   The package implements a method for normalising microarray intensities from single\- and multiple\-color arrays. It can also be used for data from other technologies\, as long as they have similar format. The method uses a robust variant of the maximum\-likelihood estimator for an additive\-multiplicative error model and affine calibration. The model incorporates data calibration step \(a.k.a. normalization\)\, a model for the dependence of the variance on the mean intensity and a variance stabilizing data transformation. Differences between transformed intensities are analogous to \"normalized log\-ratios\". However\, in contrast to the latter\, their variance is independent of the mean\, and they are usually more sensitive and specific in detecting differential transcription.


.. conda:package:: bioconductor-vsn

   |downloads_bioconductor-vsn| |docker_bioconductor-vsn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.78.1-0</code>,  <code>3.74.0-1</code>,  <code>3.74.0-0</code>,  <code>3.70.0-1</code>,  <code>3.70.0-0</code>,  <code>3.68.0-0</code>,  <code>3.66.0-1</code>,  <code>3.66.0-0</code>,  <code>3.62.0-2</code>,  </span></summary>
      

      ``3.78.1-0``,  ``3.74.0-1``,  ``3.74.0-0``,  ``3.70.0-1``,  ``3.70.0-0``,  ``3.68.0-0``,  ``3.66.0-1``,  ``3.66.0-0``,  ``3.62.0-2``,  ``3.62.0-1``,  ``3.62.0-0``,  ``3.60.0-0``,  ``3.58.0-1``,  ``3.58.0-0``,  ``3.56.0-0``,  ``3.54.0-0``,  ``3.52.0-1``,  ``3.50.0-0``,  ``3.48.1-0``,  ``3.46.0-0``,  ``3.44.0-0``,  ``3.38.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-affy: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-affy: ``>=1.88.0,<1.89.0a0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-lattice: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


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

    pixi global install bioconductor-vsn

to add into an existing workspace instead, run::

    pixi add bioconductor-vsn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-vsn

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-vsn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-vsn:<tag>

(see `bioconductor-vsn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-vsn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vsn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vsn
   :alt:   (downloads)
.. |docker_bioconductor-vsn| image:: https://quay.io/repository/biocontainers/bioconductor-vsn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vsn
.. _`bioconductor-vsn/tags`: https://quay.io/repository/biocontainers/bioconductor-vsn?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-vsn";
      var versions = ["3.78.1","3.74.0","3.74.0","3.70.0","3.70.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-vsn"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-vsn"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-vsn"></div>



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
         
            // Build cdf plot for bioconductor-vsn
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-vsn/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-vsn', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-vsn
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-vsn/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-vsn', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-vsn
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-vsn/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-vsn', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vsn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vsn/README.html