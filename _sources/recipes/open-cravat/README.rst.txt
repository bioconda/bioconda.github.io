:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'open-cravat'
.. highlight: bash

open-cravat
===========

.. conda:recipe:: open-cravat
   :replaces_section_title:
   :noindex:

   OpenCRAVAT \- variant analysis toolkit

   :homepage: https://www.opencravat.org
   :documentation: https://github.com/KarchinLab/open-cravat/wiki
   
   :developer docs: https://github.com/KarchinLab/open-cravat
   :license: MIT / MIT
   :recipe: /`open-cravat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/open-cravat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/open-cravat/meta.yaml>`_

   


.. conda:package:: open-cravat

   |downloads_open-cravat| |docker_open-cravat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.1-0</code>,  <code>2.16.0-0</code>,  <code>2.15.0-0</code>,  <code>2.13.0-0</code>,  <code>2.12.0-0</code>,  <code>2.11.1-0</code>,  <code>2.11.0-0</code>,  <code>2.9.1-0</code>,  <code>2.9.0-0</code>,  </span></summary>
      

      ``3.1.1-0``,  ``2.16.0-0``,  ``2.15.0-0``,  ``2.13.0-0``,  ``2.12.0-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.9-0``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aiohttp: ``<4.0.0``
   :depends on aiosqlite: 
   :depends on biopython: 
   :depends on cachelib: 
   :depends on celery: 
   :depends on chardet: ``>=3.0.4,<6.0.0``
   :depends on cryptography: 
   :depends on flask: 
   :depends on flask-caching: 
   :depends on intervaltree: 
   :depends on looseversion: 
   :depends on markdown: 
   :depends on mpmath: 
   :depends on nest-asyncio: 
   :depends on openpyxl: 
   :depends on oyaml: 
   :depends on packaging: ``>=25.0.0``
   :depends on paste: 
   :depends on psutil: 
   :depends on pyliftover: 
   :depends on python: ``>=3.9``
   :depends on pyvcf3: 
   :depends on pyyaml: 
   :depends on requests: 
   :depends on requests-toolbelt: 
   :depends on setuptools: 
   :depends on twobitreader: 
   :depends on waitress: 
   :depends on websockets: 
   :depends on whitenoise: 
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

    pixi global install open-cravat

to add into an existing workspace instead, run::

    pixi add open-cravat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install open-cravat

Alternatively, to install into a new environment, run::

    conda create -n envname open-cravat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/open-cravat:<tag>

(see `open-cravat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_open-cravat| image:: https://img.shields.io/conda/dn/bioconda/open-cravat.svg?style=flat
   :target: https://anaconda.org/bioconda/open-cravat
   :alt:   (downloads)
.. |docker_open-cravat| image:: https://quay.io/repository/biocontainers/open-cravat/status
   :target: https://quay.io/repository/biocontainers/open-cravat
.. _`open-cravat/tags`: https://quay.io/repository/biocontainers/open-cravat?tab=tags


.. raw:: html

   <script>
      var package = "open-cravat";
      var versions = ["3.1.1","2.16.0","2.15.0","2.13.0","2.12.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_open-cravat"></div>
   <div style="width: 100%" id="platform_plot_open-cravat"></div>
   <div style="width: 100%" id="cdf_plot_open-cravat"></div>



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
         
            // Build cdf plot for open-cravat
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/open-cravat/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_open-cravat', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for open-cravat
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/open-cravat/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_open-cravat', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for open-cravat
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/open-cravat/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_open-cravat', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/open-cravat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/open-cravat/README.html