:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-datasets-pyclient'
.. highlight: bash

ncbi-datasets-pyclient
======================

.. conda:recipe:: ncbi-datasets-pyclient
   :replaces_section_title:
   :noindex:

   NCBI Datasets API

   :homepage: https://www.ncbi.nlm.nih.gov/datasets
   :documentation: https://github.com/misialq/ncbi-datasets-pyclient
   
   :developer docs: https://github.com/ncbi/datasets
   :license: BSD-3-Clause
   :recipe: /`ncbi-datasets-pyclient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-datasets-pyclient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-datasets-pyclient/meta.yaml>`_

   


.. conda:package:: ncbi-datasets-pyclient

   |downloads_ncbi-datasets-pyclient| |docker_ncbi-datasets-pyclient|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>18.30.1-0</code>,  <code>18.29.1-0</code>,  <code>18.26.0-0</code>,  <code>18.25.1-0</code>,  <code>18.24.0-0</code>,  <code>18.23.0-0</code>,  <code>18.22.1-0</code>,  <code>18.21.0-0</code>,  <code>18.20.0-0</code>,  </span></summary>
      

      ``18.30.1-0``,  ``18.29.1-0``,  ``18.26.0-0``,  ``18.25.1-0``,  ``18.24.0-0``,  ``18.23.0-0``,  ``18.22.1-0``,  ``18.21.0-0``,  ``18.20.0-0``,  ``18.19.0-0``,  ``18.18.0-0``,  ``18.17.1-0``,  ``18.16.0-0``,  ``18.15.0-0``,  ``18.14.0-0``,  ``18.13.0-0``,  ``18.4.0-0``,  ``18.3.1-0``,  ``18.3.0-0``,  ``18.2.3-0``,  ``18.2.2-0``,  ``18.2.0-0``,  ``18.1.0-0``,  ``18.0.5-0``,  ``18.0.2-0``,  ``18.0.1-0``,  ``17.3.0-0``,  ``17.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on pydantic: ``>=2``
   :depends on python: ``>=3.8.0,<4.0.0``
   :depends on python-dateutil: ``>=2.8.2``
   :depends on typing_extensions: ``>=4.7.1``
   :depends on urllib3: ``>=1.25.3,<3.0.0``

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

    pixi global install ncbi-datasets-pyclient

to add into an existing workspace instead, run::

    pixi add ncbi-datasets-pyclient

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbi-datasets-pyclient

Alternatively, to install into a new environment, run::

    conda create -n envname ncbi-datasets-pyclient

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbi-datasets-pyclient:<tag>

(see `ncbi-datasets-pyclient/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbi-datasets-pyclient| image:: https://img.shields.io/conda/dn/bioconda/ncbi-datasets-pyclient.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-datasets-pyclient
   :alt:   (downloads)
.. |docker_ncbi-datasets-pyclient| image:: https://quay.io/repository/biocontainers/ncbi-datasets-pyclient/status
   :target: https://quay.io/repository/biocontainers/ncbi-datasets-pyclient
.. _`ncbi-datasets-pyclient/tags`: https://quay.io/repository/biocontainers/ncbi-datasets-pyclient?tab=tags


.. raw:: html

   <script>
      var package = "ncbi-datasets-pyclient";
      var versions = ["18.30.1","18.29.1","18.26.0","18.25.1","18.24.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_ncbi-datasets-pyclient"></div>
   <div style="width: 100%" id="platform_plot_ncbi-datasets-pyclient"></div>
   <div style="width: 100%" id="cdf_plot_ncbi-datasets-pyclient"></div>



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
         
            // Build cdf plot for ncbi-datasets-pyclient
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ncbi-datasets-pyclient/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_ncbi-datasets-pyclient', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for ncbi-datasets-pyclient
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ncbi-datasets-pyclient/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_ncbi-datasets-pyclient', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for ncbi-datasets-pyclient
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ncbi-datasets-pyclient/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_ncbi-datasets-pyclient', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-datasets-pyclient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-datasets-pyclient/README.html