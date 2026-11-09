:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'mantpy'
.. highlight: bash

mantpy
======

.. conda:recipe:: mantpy
   :replaces_section_title:
   :noindex:

   A framework for extracellular matrix analysis in spatial proteomics

   :homepage: https://github.com/moeghaf/Mantpy
   :license: MIT
   :recipe: /`mantpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantpy/meta.yaml>`_

   


.. conda:package:: mantpy

   |downloads_mantpy| |docker_mantpy|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends on anndata: ``>=0.12``
   :depends on dask-core: ``>=2024.10``
   :depends on igraph: ``>=0.10``
   :depends on joblib: ``>=1.3``
   :depends on leidenalg: ``>=0.10``
   :depends on matplotlib-base: ``>=3.8``
   :depends on networkx: ``>=3.2``
   :depends on numpy: ``>=1.24,<2.5``
   :depends on pandas: ``>=2.1``
   :depends on pillow: ``>=10``
   :depends on pooch: ``>=1.8``
   :depends on python: ``>=3.11,<3.14``
   :depends on requests: ``>=2.28``
   :depends on scanpy: ``>=1.10,<1.13``
   :depends on scikit-image: ``>=0.21``
   :depends on scikit-learn: ``>=1.4``
   :depends on scipy: ``>=1.11``
   :depends on seaborn: ``>=0.13``
   :depends on squidpy: ``>=1.8.2,<1.9``
   :depends on tifffile: ``>=2025.5.21``
   :depends on tqdm: ``>=4.66``
   :depends on zarr: ``>=3.1,<3.2``

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

    pixi global install mantpy

to add into an existing workspace instead, run::

    pixi add mantpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mantpy

Alternatively, to install into a new environment, run::

    conda create -n envname mantpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mantpy:<tag>

(see `mantpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mantpy| image:: https://img.shields.io/conda/dn/bioconda/mantpy.svg?style=flat
   :target: https://anaconda.org/bioconda/mantpy
   :alt:   (downloads)
.. |docker_mantpy| image:: https://quay.io/repository/biocontainers/mantpy/status
   :target: https://quay.io/repository/biocontainers/mantpy
.. _`mantpy/tags`: https://quay.io/repository/biocontainers/mantpy?tab=tags


.. raw:: html

   <script>
      var package = "mantpy";
      var versions = ["1.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_mantpy"></div>
   <div style="width: 100%" id="platform_plot_mantpy"></div>
   <div style="width: 100%" id="cdf_plot_mantpy"></div>



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
         
            // Build cdf plot for mantpy
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mantpy/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_mantpy', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for mantpy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mantpy/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_mantpy', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for mantpy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mantpy/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_mantpy', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mantpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mantpy/README.html