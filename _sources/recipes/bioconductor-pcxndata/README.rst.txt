:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcxndata'
.. highlight: bash

bioconductor-pcxndata
=====================

.. conda:recipe:: bioconductor-pcxndata
   :replaces_section_title:
   :noindex:

   Correlation coefficients and p values between pre\-defined pathway\/gene sets

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/pcxnData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pcxndata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcxndata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcxndata/meta.yaml>`_

   PCxN database contains correlation coefficients and p values between pre\-defined gene sets within MSigDB H hallmark gene sets\, MSigDB C2 CP \(Canonical pathways\)\, MSigDB C5 GO BP gene sets and Pathprint respectively\, as well as adjusted pathway correlations to account for the shared genes between pathway pairs.


.. conda:package:: bioconductor-pcxndata

   |downloads_bioconductor-pcxndata| |docker_bioconductor-pcxndata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.19.0-0</code>,  <code>2.16.0-1</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-2</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.22.0-0``,  ``2.19.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-2``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20231203``
   :depends on curl: 
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-pcxndata

to add into an existing workspace instead, run::

    pixi add bioconductor-pcxndata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pcxndata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pcxndata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pcxndata:<tag>

(see `bioconductor-pcxndata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pcxndata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcxndata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pcxndata
   :alt:   (downloads)
.. |docker_bioconductor-pcxndata| image:: https://quay.io/repository/biocontainers/bioconductor-pcxndata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcxndata
.. _`bioconductor-pcxndata/tags`: https://quay.io/repository/biocontainers/bioconductor-pcxndata?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-pcxndata";
      var versions = ["2.24.0","2.22.0","2.19.0","2.16.0","2.16.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-pcxndata"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-pcxndata"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-pcxndata"></div>



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
         
            // Build cdf plot for bioconductor-pcxndata
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pcxndata/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-pcxndata', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-pcxndata
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pcxndata/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-pcxndata', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-pcxndata
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pcxndata/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-pcxndata', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcxndata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcxndata/README.html