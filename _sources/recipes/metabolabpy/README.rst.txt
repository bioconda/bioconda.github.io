:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabolabpy'
.. highlight: bash

metabolabpy
===========

.. conda:recipe:: metabolabpy
   :replaces_section_title:
   :noindex:

   Python package to process 1D and 2D NMR spectroscopic data for metabolomics and tracer\-based metabolism analysis.

   :homepage: https://github.com/ludwigc/metabolabpy
   :documentation: https://ludwigc.github.io/metabolabpy
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`metabolabpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabolabpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabolabpy/meta.yaml>`_

   


.. conda:package:: metabolabpy

   |downloads_metabolabpy| |docker_metabolabpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.90-0</code>,  <code>0.9.89-0</code>,  <code>0.9.88-0</code>,  <code>0.9.86-0</code>,  <code>0.9.85-0</code>,  <code>0.9.84-0</code>,  <code>0.9.83-0</code>,  <code>0.9.79-0</code>,  <code>0.9.78-0</code>,  </span></summary>
      

      ``0.9.90-0``,  ``0.9.89-0``,  ``0.9.88-0``,  ``0.9.86-0``,  ``0.9.85-0``,  ``0.9.84-0``,  ``0.9.83-0``,  ``0.9.79-0``,  ``0.9.78-0``,  ``0.9.77-0``,  ``0.9.74-0``,  ``0.9.73-0``,  ``0.9.72-0``,  ``0.9.71-0``,  ``0.9.70-0``,  ``0.9.69-0``,  ``0.9.68-0``,  ``0.9.67-0``,  ``0.9.66-0``,  ``0.9.65-0``,  ``0.9.64-0``,  ``0.9.63-0``,  ``0.9.62-0``,  ``0.9.61-0``,  ``0.9.59-0``,  ``0.9.53-0``,  ``0.9.51-0``,  ``0.9.50-0``,  ``0.9.48-0``,  ``0.9.47-0``,  ``0.9.46-0``,  ``0.9.45-0``,  ``0.9.44-0``,  ``0.9.43-0``,  ``0.9.42-0``,  ``0.9.41-0``,  ``0.6.53-0``,  ``0.6.51-0``,  ``0.6.50-0``,  ``0.6.49-0``,  ``0.6.48-0``,  ``0.6.46-0``

      
      .. raw:: html

         </details>
      

   
   :depends on darkdetect: 
   :depends on mat73: 
   :depends on matplotlib-base: 
   :depends on multiprocess: 
   :depends on numba: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on pybaselines: 
   :depends on python: ``>=3.9``
   :depends on pywavelets: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on xlsxwriter: 

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

    pixi global install metabolabpy

to add into an existing workspace instead, run::

    pixi add metabolabpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metabolabpy

Alternatively, to install into a new environment, run::

    conda create -n envname metabolabpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metabolabpy:<tag>

(see `metabolabpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metabolabpy| image:: https://img.shields.io/conda/dn/bioconda/metabolabpy.svg?style=flat
   :target: https://anaconda.org/bioconda/metabolabpy
   :alt:   (downloads)
.. |docker_metabolabpy| image:: https://quay.io/repository/biocontainers/metabolabpy/status
   :target: https://quay.io/repository/biocontainers/metabolabpy
.. _`metabolabpy/tags`: https://quay.io/repository/biocontainers/metabolabpy?tab=tags


.. raw:: html

   <script>
      var package = "metabolabpy";
      var versions = ["0.9.90","0.9.89","0.9.88","0.9.86","0.9.85"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_metabolabpy"></div>
   <div style="width: 100%" id="platform_plot_metabolabpy"></div>
   <div style="width: 100%" id="cdf_plot_metabolabpy"></div>



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
         
            // Build cdf plot for metabolabpy
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metabolabpy/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_metabolabpy', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for metabolabpy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metabolabpy/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_metabolabpy', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for metabolabpy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metabolabpy/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_metabolabpy', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabolabpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabolabpy/README.html