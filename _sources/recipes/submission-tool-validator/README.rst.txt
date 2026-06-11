:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'submission-tool-validator'
.. highlight: bash

submission-tool-validator
=========================

.. conda:recipe:: submission-tool-validator
   :replaces_section_title:
   :noindex:

   This tool helps user to validate submissions in the client side before submitting to PRIDE.

   :homepage: https://github.com/bigbio/submission-tool-validator
   :license: Apache / Apache-2.0
   :recipe: /`submission-tool-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/submission-tool-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/submission-tool-validator/meta.yaml>`_

   


.. conda:package:: submission-tool-validator

   |downloads_submission-tool-validator| |docker_submission-tool-validator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-4</code>,  <code>1.0.2-3</code>,  <code>1.0.2-2</code>,  </span></summary>
      

      ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8``
   :depends on python: ``>=3.6``

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

    pixi global install submission-tool-validator

to add into an existing workspace instead, run::

    pixi add submission-tool-validator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install submission-tool-validator

Alternatively, to install into a new environment, run::

    conda create -n envname submission-tool-validator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/submission-tool-validator:<tag>

(see `submission-tool-validator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_submission-tool-validator| image:: https://img.shields.io/conda/dn/bioconda/submission-tool-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/submission-tool-validator
   :alt:   (downloads)
.. |docker_submission-tool-validator| image:: https://quay.io/repository/biocontainers/submission-tool-validator/status
   :target: https://quay.io/repository/biocontainers/submission-tool-validator
.. _`submission-tool-validator/tags`: https://quay.io/repository/biocontainers/submission-tool-validator?tab=tags


.. raw:: html

   <script>
      var package = "submission-tool-validator";
      var versions = ["1.0.7","1.0.6","1.0.5","1.0.5","1.0.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_submission-tool-validator"></div>
   <div style="width: 100%" id="platform_plot_submission-tool-validator"></div>
   <div style="width: 100%" id="cdf_plot_submission-tool-validator"></div>



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
         
            // Build cdf plot for submission-tool-validator
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/submission-tool-validator/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_submission-tool-validator', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for submission-tool-validator
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/submission-tool-validator/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_submission-tool-validator', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for submission-tool-validator
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/submission-tool-validator/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_submission-tool-validator', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/submission-tool-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/submission-tool-validator/README.html