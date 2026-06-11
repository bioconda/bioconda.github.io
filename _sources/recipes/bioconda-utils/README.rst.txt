:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconda-utils'
.. highlight: bash

bioconda-utils
==============

.. conda:recipe:: bioconda-utils
   :replaces_section_title:
   :noindex:

   Utilities for building and managing bioconda recipes.

   :homepage: https://bioconda.github.io/contributor/build-system.html
   :documentation: https://bioconda.github.io/contributor/guidelines.html
   
   :developer docs: https://github.com/bioconda/bioconda-utils
   :license: MIT / MIT
   :recipe: /`bioconda-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-utils/meta.yaml>`_

   


.. conda:package:: bioconda-utils

   |downloads_bioconda-utils| |docker_bioconda-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.5.0-0</code>,  <code>4.4.1-0</code>,  <code>4.4.0-0</code>,  <code>4.3.2-0</code>,  <code>4.3.1-0</code>,  <code>4.3.0-0</code>,  <code>4.2.0-0</code>,  <code>4.1.0-1</code>,  <code>4.1.0-0</code>,  </span></summary>
      

      ``4.5.0-0``,  ``4.4.1-0``,  ``4.4.0-0``,  ``4.3.2-0``,  ``4.3.1-0``,  ``4.3.0-0``,  ``4.2.0-0``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.9.2-0``,  ``3.9.1-0``,  ``3.9.0-0``,  ``3.8.0-0``,  ``3.7.2-0``,  ``3.7.1-0``,  ``3.7.0-0``,  ``3.6.1-0``,  ``3.6.0-0``,  ``3.5.0-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.0.0-0``,  ``2.15.1-0``,  ``2.15.0-1``,  ``2.15.0-0``,  ``2.14.0-0``,  ``2.13.2-0``,  ``2.13.0-0``,  ``2.12.0-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.1-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.20.0-0``,  ``0.19.4-0``,  ``0.19.3-0``,  ``0.19.2-0``,  ``0.19.1-0``,  ``0.19.0-0``,  ``0.18.6-0``,  ``0.18.5-0``,  ``0.18.4-0``,  ``0.18.1-0``,  ``0.17.10-0``,  ``0.17.9-0``,  ``0.17.8-0``,  ``0.17.6-0``,  ``0.17.5-0``,  ``0.17.4-0``,  ``0.17.3-0``,  ``0.17.2-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.23-0``,  ``0.16.22-1``,  ``0.16.22-0``,  ``0.16.21-0``,  ``0.16.20-0``,  ``0.16.19-0``,  ``0.16.18-0``,  ``0.16.17-0``,  ``0.16.16-0``,  ``0.16.15-0``,  ``0.16.14-0``,  ``0.16.13-0``,  ``0.16.12-0``,  ``0.16.11-0``,  ``0.16.10-1``,  ``0.16.10-0``,  ``0.16.8-3``,  ``0.16.8-2``,  ``0.16.7-1``,  ``0.16.7-0``,  ``0.16.6-0``,  ``0.16.5-0``,  ``0.16.3-0``,  ``0.16.2-0``,  ``0.15.13-0``,  ``0.15.12-0``,  ``0.15.11-0``,  ``0.15.10-1``,  ``0.15.10-0``,  ``0.15.8-0``,  ``0.15.7-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.14.9-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.12.3-1``,  ``0.12.3-0``,  ``0.12.0-0``,  ``0.11.4-1``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aiofiles: ``25.*``
   :depends on aioftp: ``0.27.*``
   :depends on aiohttp: ``3.13.*``
   :depends on aiohttp-jinja2: 
   :depends on aiohttp-security: 
   :depends on aiohttp-session: 
   :depends on anaconda-client: ``1.14.*``
   :depends on argh: ``0.31.*``
   :depends on backoff: ``2.2.*``
   :depends on beautifulsoup4: ``4.*``
   :depends on boltons: ``25.0.*``
   :depends on cachetools: ``7.0.*``
   :depends on colorlog: ``6.*``
   :depends on conda: ``26.3.*``
   :depends on conda-build: ``26.3.*``
   :depends on conda-forge-pinning: ``2026.01.07.13.16.30.*``
   :depends on conda-index: ``0.10.*``
   :depends on conda-libmamba-solver: ``26.3.*``
   :depends on conda-package-streaming: ``0.12.*``
   :depends on diskcache: ``5.*``
   :depends on findutils: 
   :depends on galaxy-tool-util: ``25.*``
   :depends on gidgethub: ``5.*``
   :depends on git: ``2.*``
   :depends on gitpython: ``3.1.*``
   :depends on involucro: ``1.1.*``
   :depends on jinja2: ``3.1.*``
   :depends on jsonschema: ``4.26.*``
   :depends on libblas: ``* *openblas``
   :depends on mamba: ``2.5.*``
   :depends on networkx: ``3.6.*``
   :depends on pandas: ``3.0.*``
   :depends on platformdirs: ``4.*``
   :depends on psutil: 
   :depends on pyaml: ``26.2.*``
   :depends on pygithub: 
   :depends on pyjwt: ``>=2.4.0``
   :depends on python: ``3.13.*``
   :depends on regex: ``2026.*``
   :depends on requests: ``2.33.*``
   :depends on ruamel.yaml: ``0.18.*``
   :depends on setuptools: ``<82``
   :depends on skopeo: ``1.22.*``
   :depends on tabulate: ``0.10.*``
   :depends on tqdm: ``4.67.*``
   :depends on yaspin: ``3.*``

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

    pixi global install bioconda-utils

to add into an existing workspace instead, run::

    pixi add bioconda-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconda-utils

Alternatively, to install into a new environment, run::

    conda create -n envname bioconda-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconda-utils:<tag>

(see `bioconda-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconda-utils| image:: https://img.shields.io/conda/dn/bioconda/bioconda-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconda-utils
   :alt:   (downloads)
.. |docker_bioconda-utils| image:: https://quay.io/repository/biocontainers/bioconda-utils/status
   :target: https://quay.io/repository/biocontainers/bioconda-utils
.. _`bioconda-utils/tags`: https://quay.io/repository/biocontainers/bioconda-utils?tab=tags


.. raw:: html

   <script>
      var package = "bioconda-utils";
      var versions = ["4.5.0","4.4.1","4.4.0","4.3.2","4.3.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconda-utils"></div>
   <div style="width: 100%" id="platform_plot_bioconda-utils"></div>
   <div style="width: 100%" id="cdf_plot_bioconda-utils"></div>



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
         
            // Build cdf plot for bioconda-utils
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconda-utils/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconda-utils', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconda-utils
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconda-utils/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconda-utils', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconda-utils
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconda-utils/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconda-utils', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconda-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconda-utils/README.html