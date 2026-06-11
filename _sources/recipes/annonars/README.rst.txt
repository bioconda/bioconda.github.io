:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'annonars'
.. highlight: bash

annonars
========

.. conda:recipe:: annonars
   :replaces_section_title:
   :noindex:

   Genome annotation based on Rust and RocksDB.

   :homepage: https://github.com/varfish-org/annonars
   :documentation: https://github.com/varfish-org/annonars/blob/v0.44.2/README.md
   
   :license: Apache-2.0
   :recipe: /`annonars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annonars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annonars/meta.yaml>`_

   


.. conda:package:: annonars

   |downloads_annonars| |docker_annonars|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.44.2-0</code>,  <code>0.44.1-0</code>,  <code>0.44.0-0</code>,  <code>0.41.0-0</code>,  <code>0.40.0-0</code>,  <code>0.39.0-0</code>,  <code>0.38.0-0</code>,  <code>0.37.0-0</code>,  <code>0.36.2-0</code>,  </span></summary>
      

      ``0.44.2-0``,  ``0.44.1-0``,  ``0.44.0-0``,  ``0.41.0-0``,  ``0.40.0-0``,  ``0.39.0-0``,  ``0.38.0-0``,  ``0.37.0-0``,  ``0.36.2-0``,  ``0.36.1-1``,  ``0.36.1-0``,  ``0.36.0-0``,  ``0.35.0-0``,  ``0.34.1-0``,  ``0.34.0-1``,  ``0.34.0-0``,  ``0.33.0-0``,  ``0.32.0-0``,  ``0.31.2-0``,  ``0.31.1-0``,  ``0.31.0-0``,  ``0.30.1-0``,  ``0.30.0-0``,  ``0.29.4-0``,  ``0.29.3-0``,  ``0.29.2-0``,  ``0.29.1-0``,  ``0.29.0-0``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.1-0``,  ``0.26.0-0``,  ``0.25.0-0``,  ``0.24.5-0``,  ``0.24.4-0``,  ``0.24.2-0``,  ``0.24.1-0``,  ``0.24.0-0``,  ``0.23.1-0``,  ``0.22.0-0``,  ``0.21.1-0``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.1-0``,  ``0.13.0-0``,  ``0.12.9-0``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.4-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libprotobuf: ``>=6.31.1,<6.31.2.0a0``
   :depends on libsqlite: ``>=3.52.0,<4.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on openssl: ``>=3.5.5,<4.0a0``
   :depends on sqlite: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      


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

    pixi global install annonars

to add into an existing workspace instead, run::

    pixi add annonars

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install annonars

Alternatively, to install into a new environment, run::

    conda create -n envname annonars

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/annonars:<tag>

(see `annonars/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_annonars| image:: https://img.shields.io/conda/dn/bioconda/annonars.svg?style=flat
   :target: https://anaconda.org/bioconda/annonars
   :alt:   (downloads)
.. |docker_annonars| image:: https://quay.io/repository/biocontainers/annonars/status
   :target: https://quay.io/repository/biocontainers/annonars
.. _`annonars/tags`: https://quay.io/repository/biocontainers/annonars?tab=tags


.. raw:: html

   <script>
      var package = "annonars";
      var versions = ["0.44.2","0.44.1","0.44.0","0.41.0","0.40.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_annonars"></div>
   <div style="width: 100%" id="platform_plot_annonars"></div>
   <div style="width: 100%" id="cdf_plot_annonars"></div>



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
         
            // Build cdf plot for annonars
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/annonars/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_annonars', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for annonars
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/annonars/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_annonars', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for annonars
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/annonars/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_annonars', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annonars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annonars/README.html