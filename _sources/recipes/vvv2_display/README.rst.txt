:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vvv2_display'
.. highlight: bash

vvv2_display
============

.. conda:recipe:: vvv2_display
   :replaces_section_title:
   :noindex:

   Creates png image file with all \[vardict\] variants proportions alongside genome\/assembly with annotations from \[vadr\].

   :homepage: https://github.com/ANSES-Ploufragan/vvv2_display/
   :license: GPL / GPL-3.0-only
   :recipe: /`vvv2_display <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vvv2_display>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vvv2_display/meta.yaml>`_

   


.. conda:package:: vvv2_display

   |downloads_vvv2_display| |docker_vvv2_display|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.5.0-0</code>,  <code>0.2.4.0-0</code>,  <code>0.2.3.9-0</code>,  <code>0.2.3.8-0</code>,  <code>0.2.3.7-0</code>,  <code>0.2.3.6-0</code>,  <code>0.2.3.5-0</code>,  <code>0.2.3.4-0</code>,  <code>0.2.3.3-0</code>,  </span></summary>
      

      ``0.2.5.0-0``,  ``0.2.4.0-0``,  ``0.2.3.9-0``,  ``0.2.3.8-0``,  ``0.2.3.7-0``,  ``0.2.3.6-0``,  ``0.2.3.5-0``,  ``0.2.3.4-0``,  ``0.2.3.3-0``,  ``0.2.3.2-0``,  ``0.2.3.1-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on numpy: ``>=1.23.3``
   :depends on pip: 
   :depends on pysam: ``>=0.19.1``
   :depends on python: ``>=3.9``
   :depends on r-cowplot: ``>=1.1.1``
   :depends on r-ggplot2: ``>=3.4.4``
   :depends on r-gridextra: ``>=2.3``
   :depends on r-jsonlite: ``>=1.8.8``
   :depends on r-stringr: ``>=1.5.1``

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

    pixi global install vvv2_display

to add into an existing workspace instead, run::

    pixi add vvv2_display

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vvv2_display

Alternatively, to install into a new environment, run::

    conda create -n envname vvv2_display

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vvv2_display:<tag>

(see `vvv2_display/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vvv2_display| image:: https://img.shields.io/conda/dn/bioconda/vvv2_display.svg?style=flat
   :target: https://anaconda.org/bioconda/vvv2_display
   :alt:   (downloads)
.. |docker_vvv2_display| image:: https://quay.io/repository/biocontainers/vvv2_display/status
   :target: https://quay.io/repository/biocontainers/vvv2_display
.. _`vvv2_display/tags`: https://quay.io/repository/biocontainers/vvv2_display?tab=tags


.. raw:: html

   <script>
      var package = "vvv2_display";
      var versions = ["0.2.5.0","0.2.4.0","0.2.3.9","0.2.3.8","0.2.3.7"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_vvv2_display"></div>
   <div style="width: 100%" id="platform_plot_vvv2_display"></div>
   <div style="width: 100%" id="cdf_plot_vvv2_display"></div>



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
         
            // Build cdf plot for vvv2_display
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vvv2_display/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_vvv2_display', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for vvv2_display
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vvv2_display/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_vvv2_display', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for vvv2_display
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vvv2_display/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_vvv2_display', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vvv2_display/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vvv2_display/README.html