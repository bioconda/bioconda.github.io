:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anaquin'
.. highlight: bash

bioconductor-anaquin
====================

.. conda:recipe:: bioconductor-anaquin
   :replaces_section_title:
   :noindex:

   Statistical analysis of sequins

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/Anaquin.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-anaquin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anaquin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anaquin/meta.yaml>`_

   The project is intended to support the use of sequins \(synthetic sequencing spike\-in controls\) owned and made available by the Garvan Institute of Medical Research. The goal is to provide a standard open source library for quantitative analysis\, modelling and visualization of spike\-in controls.


.. conda:package:: bioconductor-anaquin

   |downloads_bioconductor-anaquin| |docker_bioconductor-anaquin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  </span></summary>
      

      ``2.34.0-0``,  ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: ``>=2.2.0``
   :depends on r-knitr: 
   :depends on r-locfit: 
   :depends on r-plyr: 
   :depends on r-rocr: 

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

    pixi global install bioconductor-anaquin

to add into an existing workspace instead, run::

    pixi add bioconductor-anaquin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-anaquin

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-anaquin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-anaquin:<tag>

(see `bioconductor-anaquin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-anaquin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anaquin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anaquin
   :alt:   (downloads)
.. |docker_bioconductor-anaquin| image:: https://quay.io/repository/biocontainers/bioconductor-anaquin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anaquin
.. _`bioconductor-anaquin/tags`: https://quay.io/repository/biocontainers/bioconductor-anaquin?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-anaquin";
      var versions = ["2.34.0","2.30.0","2.26.0","2.24.0","2.22.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-anaquin"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-anaquin"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-anaquin"></div>



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
         
            // Build cdf plot for bioconductor-anaquin
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-anaquin/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-anaquin', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-anaquin
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-anaquin/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-anaquin', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-anaquin
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-anaquin/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-anaquin', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anaquin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anaquin/README.html