:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bohra'
.. highlight: bash

bohra
=====

.. conda:recipe:: bohra
   :replaces_section_title:
   :noindex:

   Pipeline for analysing Illumina data for microbiological public health.

   :homepage: https://github.com/MDU-PHL/bohra
   :documentation: https://mdu-phl.github.io/bohra/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bohra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bohra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bohra/meta.yaml>`_

   


.. conda:package:: bohra

   |downloads_bohra| |docker_bohra|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.7-0</code>,  <code>3.6.6-0</code>,  <code>3.6.5-0</code>,  <code>3.6.4-0</code>,  <code>3.6.3-0</code>,  <code>3.6.1-0</code>,  <code>3.5.2-0</code>,  <code>3.4.3-0</code>,  <code>3.4.2-0</code>,  </span></summary>
      

      ``3.6.7-0``,  ``3.6.6-0``,  ``3.6.5-0``,  ``3.6.4-0``,  ``3.6.3-0``,  ``3.6.1-0``,  ``3.5.2-0``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.2.9-0``,  ``3.2.5-0``,  ``3.2.4-0``,  ``3.0.6-0``,  ``2.3.10-0``,  ``2.3.9-0``,  ``2.3.8-0``,  ``2.3.7-0``,  ``2.3.6-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``1.2.20-0``,  ``1.2.19-1``,  ``1.2.19-0``,  ``1.2.18-0``,  ``1.2.16-0``,  ``1.2.15-0``,  ``1.2.14-0``,  ``1.2.12-0``,  ``1.2.11-0``,  ``1.2.10-1``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.6-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.27-0``,  ``1.0.26-0``,  ``1.0.25-0``,  ``1.0.24-0``,  ``1.0.23-0``,  ``1.0.22-0``,  ``1.0.20-1``,  ``1.0.20-0``,  ``1.0.19-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on click: 
   :depends on csvtk: 
   :depends on jinja2: 
   :depends on nextflow: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on psutil: 
   :depends on pytest: 
   :depends on python: ``>=3.11``

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

    pixi global install bohra

to add into an existing workspace instead, run::

    pixi add bohra

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bohra

Alternatively, to install into a new environment, run::

    conda create -n envname bohra

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bohra:<tag>

(see `bohra/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bohra| image:: https://img.shields.io/conda/dn/bioconda/bohra.svg?style=flat
   :target: https://anaconda.org/bioconda/bohra
   :alt:   (downloads)
.. |docker_bohra| image:: https://quay.io/repository/biocontainers/bohra/status
   :target: https://quay.io/repository/biocontainers/bohra
.. _`bohra/tags`: https://quay.io/repository/biocontainers/bohra?tab=tags


.. raw:: html

   <script>
      var package = "bohra";
      var versions = ["3.6.7","3.6.6","3.6.5","3.6.4","3.6.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bohra"></div>
   <div style="width: 100%" id="platform_plot_bohra"></div>
   <div style="width: 100%" id="cdf_plot_bohra"></div>



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
         
            // Build cdf plot for bohra
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bohra/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bohra', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bohra
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bohra/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bohra', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bohra
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bohra/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bohra', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bohra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bohra/README.html