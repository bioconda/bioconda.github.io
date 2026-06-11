:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-datasets-pylib'
.. highlight: bash

ncbi-datasets-pylib
===================

.. conda:recipe:: ncbi-datasets-pylib
   :replaces_section_title:
   :noindex:

   Easily gather data from across NCBI databases

   :homepage: https://www.ncbi.nlm.nih.gov/datasets
   :documentation: https://www.ncbi.nlm.nih.gov/datasets/docs/v2/download-and-install/
   
   :developer docs: https://github.com/ncbi/datasets
   :license: Unlicense
   :recipe: /`ncbi-datasets-pylib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-datasets-pylib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-datasets-pylib/meta.yaml>`_

   


.. conda:package:: ncbi-datasets-pylib

   |downloads_ncbi-datasets-pylib| |docker_ncbi-datasets-pylib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>16.6.1-0</code>,  <code>16.6.0-0</code>,  <code>16.5.0-0</code>,  <code>16.4.9-0</code>,  <code>16.4.8-0</code>,  <code>16.4.7-0</code>,  <code>16.4.5-0</code>,  <code>16.4.4-0</code>,  <code>16.4.3-0</code>,  </span></summary>
      

      ``16.6.1-0``,  ``16.6.0-0``,  ``16.5.0-0``,  ``16.4.9-0``,  ``16.4.8-0``,  ``16.4.7-0``,  ``16.4.5-0``,  ``16.4.4-0``,  ``16.4.3-0``,  ``16.3.0-0``,  ``16.2.0-0``,  ``16.1.2-0``,  ``16.1.1-0``,  ``16.0.0-0``,  ``15.34.0-0``,  ``15.33.0-0``,  ``15.32.0-0``,  ``15.31.3-0``,  ``15.31.2-0``,  ``15.31.1-0``,  ``15.31.0-0``,  ``15.30.0-0``,  ``15.29.0-0``,  ``15.28.0-0``,  ``15.27.1-0``,  ``15.27.0-0``,  ``15.26.0-0``,  ``15.25.0-0``,  ``15.24.0-0``,  ``15.23.0-0``,  ``15.21.1-0``,  ``15.19.1-0``,  ``15.19.0-0``,  ``15.18.0-0``,  ``15.17.0-0``,  ``15.16.3-0``,  ``15.16.2-0``,  ``15.16.1-0``,  ``15.16.0-0``,  ``15.15.0-0``,  ``15.14.0-0``,  ``15.13.1-0``,  ``15.13.0-0``,  ``15.12.0-0``,  ``15.11.0-0``,  ``14.27.0-0``,  ``14.26.0-0``,  ``14.25.1-0``,  ``14.23.0-0``,  ``14.22.1-0``,  ``14.22.0-0``,  ``14.21.0-0``,  ``14.20.0-0``,  ``14.19.0-0``,  ``14.18.0-0``,  ``14.17.0-0``,  ``14.16.0-0``,  ``14.15.0-0``,  ``14.13.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gffutils: ``0.10.*``
   :depends on jinja2: ``3.1.*``
   :depends on jsonlines: ``3.0.*``
   :depends on protobuf: ``3.20.*``
   :depends on python: ``>=3.8``
   :depends on python-dateutil: ``2.8.*``
   :depends on urllib3: ``1.26.*``

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

    pixi global install ncbi-datasets-pylib

to add into an existing workspace instead, run::

    pixi add ncbi-datasets-pylib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbi-datasets-pylib

Alternatively, to install into a new environment, run::

    conda create -n envname ncbi-datasets-pylib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbi-datasets-pylib:<tag>

(see `ncbi-datasets-pylib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbi-datasets-pylib| image:: https://img.shields.io/conda/dn/bioconda/ncbi-datasets-pylib.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-datasets-pylib
   :alt:   (downloads)
.. |docker_ncbi-datasets-pylib| image:: https://quay.io/repository/biocontainers/ncbi-datasets-pylib/status
   :target: https://quay.io/repository/biocontainers/ncbi-datasets-pylib
.. _`ncbi-datasets-pylib/tags`: https://quay.io/repository/biocontainers/ncbi-datasets-pylib?tab=tags


.. raw:: html

   <script>
      var package = "ncbi-datasets-pylib";
      var versions = ["16.6.1","16.6.0","16.5.0","16.4.9","16.4.8"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_ncbi-datasets-pylib"></div>
   <div style="width: 100%" id="platform_plot_ncbi-datasets-pylib"></div>
   <div style="width: 100%" id="cdf_plot_ncbi-datasets-pylib"></div>



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
         
            // Build cdf plot for ncbi-datasets-pylib
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ncbi-datasets-pylib/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_ncbi-datasets-pylib', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for ncbi-datasets-pylib
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ncbi-datasets-pylib/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_ncbi-datasets-pylib', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for ncbi-datasets-pylib
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ncbi-datasets-pylib/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_ncbi-datasets-pylib', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-datasets-pylib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-datasets-pylib/README.html