:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'pixel-patrol-base'
.. highlight: bash

pixel-patrol-base
=================

.. conda:recipe:: pixel-patrol-base
   :replaces_section_title:
   :noindex:

   Image prevalidation tool for bioimage datasets

   :homepage: https://ida-mdc.github.io/pixel-patrol/
   :developer docs: https://github.com/ida-mdc/pixel-patrol
   :license: MIT / MIT
   :recipe: /`pixel-patrol-base <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pixel-patrol-base>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pixel-patrol-base/meta.yaml>`_

   PixelPatrol scans image collections\, extracts file\- and pixel\-level
   metadata into a Parquet table and presents it as an interactive web
   report\, helping to spot problems in bioimage datasets before analysis.
   This is the base package providing the CLI\, processing pipeline\,
   plugin registry and the pre\-built web viewer.



.. conda:package:: pixel-patrol-base

   |downloads_pixel-patrol-base| |docker_pixel-patrol-base|

   :versions:
      
      

      ``0.9.2-0``

      

   
   :depends on click: ``>=8.2.1``
   :depends on dask-core: ``>=2025.5.1``
   :depends on distributed: ``>=2025.5.1``
   :depends on matplotlib-base: ``>=3.10.3``
   :depends on numpy: 
   :depends on packaging: ``>=21.0``
   :depends on polars: ``>=1.33.0``
   :depends on psutil: ``>=6.0.0``
   :depends on pyarrow: ``>=21.0.0``
   :depends on python: ``>=3.12``
   :depends on python-duckdb: ``>=1.2.0``
   :depends on pyyaml: ``>=6.0.2``
   :depends on statsmodels: ``>=0.14.4``
   :depends on tqdm: ``>=4.67.1``
   :depends on yaspin: ``>=3.4.0``

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

    pixi global install pixel-patrol-base

to add into an existing workspace instead, run::

    pixi add pixel-patrol-base

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pixel-patrol-base

Alternatively, to install into a new environment, run::

    conda create -n envname pixel-patrol-base

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pixel-patrol-base:<tag>

(see `pixel-patrol-base/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pixel-patrol-base| image:: https://img.shields.io/conda/dn/bioconda/pixel-patrol-base.svg?style=flat
   :target: https://anaconda.org/bioconda/pixel-patrol-base
   :alt:   (downloads)
.. |docker_pixel-patrol-base| image:: https://quay.io/repository/biocontainers/pixel-patrol-base/status
   :target: https://quay.io/repository/biocontainers/pixel-patrol-base
.. _`pixel-patrol-base/tags`: https://quay.io/repository/biocontainers/pixel-patrol-base?tab=tags


.. raw:: html

   <script>
      var package = "pixel-patrol-base";
      var versions = ["0.9.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_pixel-patrol-base"></div>
   <div style="width: 100%" id="platform_plot_pixel-patrol-base"></div>
   <div style="width: 100%" id="cdf_plot_pixel-patrol-base"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for pixel-patrol-base
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pixel-patrol-base/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_pixel-patrol-base', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for pixel-patrol-base
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pixel-patrol-base/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_pixel-patrol-base', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for pixel-patrol-base
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pixel-patrol-base/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_pixel-patrol-base', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pixel-patrol-base/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pixel-patrol-base/README.html