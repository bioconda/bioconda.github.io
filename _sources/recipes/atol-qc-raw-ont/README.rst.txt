:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atol-qc-raw-ont'
.. highlight: bash

atol-qc-raw-ont
===============

.. conda:recipe:: atol-qc-raw-ont
   :replaces_section_title:
   :noindex:

   Run read QC on ONT reads.

   :homepage: https://github.com/TomHarrop/atol-qc-raw-ont
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`atol-qc-raw-ont <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-qc-raw-ont>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-qc-raw-ont/meta.yaml>`_

   


.. conda:package:: atol-qc-raw-ont

   |downloads_atol-qc-raw-ont| |docker_atol-qc-raw-ont|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.12-0</code>,  <code>0.1.11-0</code>,  <code>0.1.10-0</code>,  <code>0.1.9-0</code>,  <code>0.1.7-0</code>,  <code>0.1.6-0</code>,  <code>0.1.5-0</code>,  </span></summary>
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: ``>=39.37``
   :depends on filtlong: ``>=0.3.1``
   :depends on gawk: 
   :depends on pandas: ``>=2.3.3,<3``
   :depends on porechop: ``>=0.2.4``
   :depends on python: ``>=3.12,<3.13``
   :depends on snakemake: ``>=9.11.6,<10``

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

    pixi global install atol-qc-raw-ont

to add into an existing workspace instead, run::

    pixi add atol-qc-raw-ont

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install atol-qc-raw-ont

Alternatively, to install into a new environment, run::

    conda create -n envname atol-qc-raw-ont

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/atol-qc-raw-ont:<tag>

(see `atol-qc-raw-ont/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_atol-qc-raw-ont| image:: https://img.shields.io/conda/dn/bioconda/atol-qc-raw-ont.svg?style=flat
   :target: https://anaconda.org/bioconda/atol-qc-raw-ont
   :alt:   (downloads)
.. |docker_atol-qc-raw-ont| image:: https://quay.io/repository/biocontainers/atol-qc-raw-ont/status
   :target: https://quay.io/repository/biocontainers/atol-qc-raw-ont
.. _`atol-qc-raw-ont/tags`: https://quay.io/repository/biocontainers/atol-qc-raw-ont?tab=tags


.. raw:: html

   <script>
      var package = "atol-qc-raw-ont";
      var versions = ["0.2.1","0.2.0","0.1.12","0.1.11","0.1.10"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_atol-qc-raw-ont"></div>
   <div style="width: 100%" id="platform_plot_atol-qc-raw-ont"></div>
   <div style="width: 100%" id="cdf_plot_atol-qc-raw-ont"></div>



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
         
            // Build cdf plot for atol-qc-raw-ont
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/atol-qc-raw-ont/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_atol-qc-raw-ont', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for atol-qc-raw-ont
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/atol-qc-raw-ont/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_atol-qc-raw-ont', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for atol-qc-raw-ont
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/atol-qc-raw-ont/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_atol-qc-raw-ont', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atol-qc-raw-ont/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atol-qc-raw-ont/README.html