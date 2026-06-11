:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'easy_vitessce'
.. highlight: bash

easy_vitessce
=============

.. conda:recipe:: easy_vitessce
   :replaces_section_title:
   :noindex:

   A package to easily use Vitessce to create interactive plots for single\-cell data

   :homepage: https://github.com/vitessce/easy_vitessce/
   :license: MIT
   :recipe: /`easy_vitessce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/easy_vitessce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/easy_vitessce/meta.yaml>`_

   


.. conda:package:: easy_vitessce

   |downloads_easy_vitessce| |docker_easy_vitessce|

   :versions:
      
      

      ``0.0.10-0``,  ``0.0.9-0``

      

   
   :depends on anndata: ``>=0.11.4``
   :depends on black: ``>=21.11b1``
   :depends on dask-core: ``2024.11.1``
   :depends on distributed: ``<=2024.11.2``
   :depends on donfig: ``>=0.3.1``
   :depends on numcodecs: ``>=0.5.7,<0.16.0``
   :depends on numpy: ``>=1.21.2``
   :depends on pandas: ``>=1.1.2``
   :depends on python: ``>=3.9``
   :depends on scanpy: ``>=1.11.3``
   :depends on scipy: ``>=1.2.1``
   :depends on spatialdata: ``>=0.3.0``
   :depends on spatialdata-plot: ``>=0.2.7``
   :depends on vitessce-python: ``>=3.7.9``
   :depends on xarray: ``>=2024.10.0,<=2025.3.0``
   :depends on zarr: ``>=2.5.0,<3``

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

    pixi global install easy_vitessce

to add into an existing workspace instead, run::

    pixi add easy_vitessce

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install easy_vitessce

Alternatively, to install into a new environment, run::

    conda create -n envname easy_vitessce

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/easy_vitessce:<tag>

(see `easy_vitessce/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_easy_vitessce| image:: https://img.shields.io/conda/dn/bioconda/easy_vitessce.svg?style=flat
   :target: https://anaconda.org/bioconda/easy_vitessce
   :alt:   (downloads)
.. |docker_easy_vitessce| image:: https://quay.io/repository/biocontainers/easy_vitessce/status
   :target: https://quay.io/repository/biocontainers/easy_vitessce
.. _`easy_vitessce/tags`: https://quay.io/repository/biocontainers/easy_vitessce?tab=tags


.. raw:: html

   <script>
      var package = "easy_vitessce";
      var versions = ["0.0.10","0.0.9"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_easy_vitessce"></div>
   <div style="width: 100%" id="platform_plot_easy_vitessce"></div>
   <div style="width: 100%" id="cdf_plot_easy_vitessce"></div>



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
         
            // Build cdf plot for easy_vitessce
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/easy_vitessce/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_easy_vitessce', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for easy_vitessce
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/easy_vitessce/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_easy_vitessce', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for easy_vitessce
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/easy_vitessce/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_easy_vitessce', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/easy_vitessce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/easy_vitessce/README.html