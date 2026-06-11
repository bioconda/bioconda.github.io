:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'upimapi'
.. highlight: bash

upimapi
=======

.. conda:recipe:: upimapi
   :replaces_section_title:
   :noindex:

   UniProt Id Mapping through API

   :homepage: https://github.com/iquasere/UPIMAPI
   :documentation: https://github.com/iquasere/UPIMAPI/blob/master/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`upimapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/upimapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/upimapi/meta.yaml>`_

   UPIMAPI takes as input either a list of UniProt IDs or a blast file from
   annotation using UniProt database as reference and uses UniProt\'s API to
   retrieve information relative to those IDs. It is essentially a command
   line implementation of UniProt\'s ID mapping web service available at
   https\:\/\/www.uniprot.org\/uploadlists\/\, allowing for retrieval of information
   from thousands of IDs in one go\, while still relying on the web service.



.. conda:package:: upimapi

   |downloads_upimapi| |docker_upimapi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.13.3-0</code>,  <code>1.13.1-0</code>,  <code>1.13.0-0</code>,  <code>1.12.3-0</code>,  <code>1.12.2-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  <code>1.11.2-0</code>,  <code>1.11.1-0</code>,  </span></summary>
      

      ``1.13.3-0``,  ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.3-0``,  ``1.12.2-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.11.2-0``,  ``1.11.1-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.14-0``,  ``1.8.13-0``,  ``1.8.12-0``,  ``1.8.11-0``,  ``1.8.10-0``,  ``1.8.9-0``,  ``1.8.8-0``,  ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.5-0``,  ``1.8.4-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on diamond: 
   :depends on pandas: 
   :depends on psutil: 
   :depends on pyyaml: 
   :depends on requests: 
   :depends on tqdm: 

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

    pixi global install upimapi

to add into an existing workspace instead, run::

    pixi add upimapi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install upimapi

Alternatively, to install into a new environment, run::

    conda create -n envname upimapi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/upimapi:<tag>

(see `upimapi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_upimapi| image:: https://img.shields.io/conda/dn/bioconda/upimapi.svg?style=flat
   :target: https://anaconda.org/bioconda/upimapi
   :alt:   (downloads)
.. |docker_upimapi| image:: https://quay.io/repository/biocontainers/upimapi/status
   :target: https://quay.io/repository/biocontainers/upimapi
.. _`upimapi/tags`: https://quay.io/repository/biocontainers/upimapi?tab=tags


.. raw:: html

   <script>
      var package = "upimapi";
      var versions = ["1.13.3","1.13.1","1.13.0","1.12.3","1.12.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_upimapi"></div>
   <div style="width: 100%" id="platform_plot_upimapi"></div>
   <div style="width: 100%" id="cdf_plot_upimapi"></div>



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
         
            // Build cdf plot for upimapi
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/upimapi/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_upimapi', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for upimapi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/upimapi/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_upimapi', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for upimapi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/upimapi/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_upimapi', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/upimapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/upimapi/README.html