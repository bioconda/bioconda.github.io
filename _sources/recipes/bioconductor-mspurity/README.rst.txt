:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mspurity'
.. highlight: bash

bioconductor-mspurity
=====================

.. conda:recipe:: bioconductor-mspurity
   :replaces_section_title:
   :noindex:

   Automated Evaluation of Precursor Ion Purity for Mass Spectrometry Based Fragmentation in Metabolomics

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/msPurity.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-mspurity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mspurity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mspurity/meta.yaml>`_
   :links: biotools: :biotools:`mspurity`, doi: :doi:`10.1021/acs.analchem.6b04358`

   msPurity R package was developed to\: 1\) Assess the spectral quality of fragmentation spectra by evaluating the \"precursor ion purity\". 2\) Process fragmentation spectra. 3\) Perform spectral matching. What is precursor ion purity\? \-What we call \"Precursor ion purity\" is a measure of the contribution of a selected precursor peak in an isolation window used for fragmentation. The simple calculation involves dividing the intensity of the selected precursor peak by the total intensity of the isolation window. When assessing MS\/MS spectra this calculation is done before and after the MS\/MS scan of interest and the purity is interpolated at the recorded time of the MS\/MS acquisition. Additionally\, isotopic peaks can be removed\, low abundance peaks are removed that are thought to have limited contribution to the resulting MS\/MS spectra and the isolation efficiency of the mass spectrometer can be used to normalise the intensities used for the calculation.


.. conda:package:: bioconductor-mspurity

   |downloads_bioconductor-mspurity| |docker_bioconductor-mspurity|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-2</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.2-1``,  ``1.16.2-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.5.4-1``,  ``1.5.4-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-mzr: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-mzr: ``>=2.44.0,<2.45.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: 
   :depends on r-dbplyr: 
   :depends on r-dosnow: 
   :depends on r-dplyr: 
   :depends on r-fastcluster: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-plyr: 
   :depends on r-rcpp: 
   :depends on r-reshape2: 
   :depends on r-rsqlite: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-mspurity

to add into an existing workspace instead, run::

    pixi add bioconductor-mspurity

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mspurity

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mspurity

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mspurity:<tag>

(see `bioconductor-mspurity/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mspurity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mspurity.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mspurity
   :alt:   (downloads)
.. |docker_bioconductor-mspurity| image:: https://quay.io/repository/biocontainers/bioconductor-mspurity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mspurity
.. _`bioconductor-mspurity/tags`: https://quay.io/repository/biocontainers/bioconductor-mspurity?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-mspurity";
      var versions = ["1.36.0","1.32.0","1.32.0","1.32.0","1.28.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-mspurity"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-mspurity"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-mspurity"></div>



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
         
            // Build cdf plot for bioconductor-mspurity
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mspurity/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-mspurity', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-mspurity
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mspurity/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-mspurity', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-mspurity
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mspurity/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-mspurity', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mspurity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mspurity/README.html