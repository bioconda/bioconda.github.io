:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'synapseclient'
.. highlight: bash

synapseclient
=============

.. conda:recipe:: synapseclient
   :replaces_section_title:
   :noindex:

   Python client for Synapse.

   :homepage: https://www.synapse.org
   :documentation: https://python-docs.synapse.org
   
   :developer docs: https://github.com/Sage-Bionetworks/synapsePythonClient
   :license: APACHE / Apache-2.0
   :recipe: /`synapseclient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/synapseclient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/synapseclient/meta.yaml>`_

   A client for Synapse\, a collaborative compute space  that allows
   scientists to share and analyze data together.



.. conda:package:: synapseclient

   |downloads_synapseclient| |docker_synapseclient|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.13.0-0</code>,  <code>4.12.0-0</code>,  <code>4.11.0-0</code>,  <code>4.10.0-0</code>,  <code>4.9.0-0</code>,  <code>4.5.0-0</code>,  <code>4.4.1-0</code>,  <code>4.4.0-0</code>,  <code>4.3.1-0</code>,  </span></summary>
      

      ``4.13.0-0``,  ``4.12.0-0``,  ``4.11.0-0``,  ``4.10.0-0``,  ``4.9.0-0``,  ``4.5.0-0``,  ``4.4.1-0``,  ``4.4.0-0``,  ``4.3.1-0``,  ``4.3.0-0``,  ``4.2.0-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.2-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.9.4-0``,  ``1.9.3-0``,  ``1.7.5-1``,  ``1.7.5-0``,  ``1.7.1-0``,  ``1.6.2-0``,  ``1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on async-lru: 
   :depends on asyncio-atexit: 
   :depends on deprecated: ``>=1.2.4``
   :depends on httpx: 
   :depends on loky: 
   :depends on nest-asyncio: 
   :depends on opentelemetry-api: 
   :depends on opentelemetry-exporter-otlp-proto-http: 
   :depends on opentelemetry-instrumentation: 
   :depends on opentelemetry-instrumentation-httpx: 
   :depends on opentelemetry-instrumentation-requests: 
   :depends on opentelemetry-instrumentation-threading: 
   :depends on opentelemetry-instrumentation-urllib: 
   :depends on opentelemetry-sdk: 
   :depends on psutil: 
   :depends on python: ``>=3.9,<3.13``
   :depends on requests: ``>=2.22``
   :depends on tqdm: 
   :depends on urllib3: ``<2``

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

    pixi global install synapseclient

to add into an existing workspace instead, run::

    pixi add synapseclient

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install synapseclient

Alternatively, to install into a new environment, run::

    conda create -n envname synapseclient

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/synapseclient:<tag>

(see `synapseclient/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_synapseclient| image:: https://img.shields.io/conda/dn/bioconda/synapseclient.svg?style=flat
   :target: https://anaconda.org/bioconda/synapseclient
   :alt:   (downloads)
.. |docker_synapseclient| image:: https://quay.io/repository/biocontainers/synapseclient/status
   :target: https://quay.io/repository/biocontainers/synapseclient
.. _`synapseclient/tags`: https://quay.io/repository/biocontainers/synapseclient?tab=tags


.. raw:: html

   <script>
      var package = "synapseclient";
      var versions = ["4.13.0","4.12.0","4.11.0","4.10.0","4.9.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_synapseclient"></div>
   <div style="width: 100%" id="platform_plot_synapseclient"></div>
   <div style="width: 100%" id="cdf_plot_synapseclient"></div>



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
         
            // Build cdf plot for synapseclient
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/synapseclient/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_synapseclient', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for synapseclient
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/synapseclient/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_synapseclient', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for synapseclient
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/synapseclient/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_synapseclient', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/synapseclient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/synapseclient/README.html