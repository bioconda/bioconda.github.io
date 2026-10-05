:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'cima'
.. highlight: bash

cima
====

.. conda:recipe:: cima
   :replaces_section_title:
   :noindex:

   Chromatin Imaging Analysis for chromatin tracing experiments

   :homepage: https://pypi.org/project/CIMA/
   :license: BSD-3-Clause
   :recipe: /`cima <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cima>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cima/meta.yaml>`_

   CIMA is a Python package designed to facilitate the automated detection\, assessment\, and analysis of complex chromatin tracing experiments.



.. conda:package:: cima

   |downloads_cima| |docker_cima|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on h5py: ``3.16.0``
   :depends on hdbscan: ``0.8.42``
   :depends on ipykernel: ``7.2.0``
   :depends on ipywidgets: 
   :depends on jupyter-server-proxy: 
   :depends on nest-asyncio2: 
   :depends on numpy: ``2.4.4``
   :depends on pandas: ``3.0.2``
   :depends on polars: ``1.40.0``
   :depends on python: ``>=3.12``
   :depends on pyvista: ``0.47.3``
   :depends on scikit-image: ``0.26.0``
   :depends on scikit-learn: ``1.8.0``
   :depends on scikit-network: ``0.33.5``
   :depends on scipy: ``1.17.1``
   :depends on seaborn: ``0.13.2``
   :depends on tqdm: ``4.67.3``
   :depends on trame: ``>=2.5.2,<4``
   :depends on trame-client: ``>=3.4,<4``
   :depends on trame-server: ``>=2.11.7,!=3.7.*,!=3.8.0,<4``
   :depends on trame-vtk: ``>=2.5.8,<2.10.3``
   :depends on trame-vuetify: ``>=2.3.1``

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

    pixi global install cima

to add into an existing workspace instead, run::

    pixi add cima

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cima

Alternatively, to install into a new environment, run::

    conda create -n envname cima

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cima:<tag>

(see `cima/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cima| image:: https://img.shields.io/conda/dn/bioconda/cima.svg?style=flat
   :target: https://anaconda.org/bioconda/cima
   :alt:   (downloads)
.. |docker_cima| image:: https://quay.io/repository/biocontainers/cima/status
   :target: https://quay.io/repository/biocontainers/cima
.. _`cima/tags`: https://quay.io/repository/biocontainers/cima?tab=tags


.. raw:: html

   <script>
      var package = "cima";
      var versions = ["1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_cima"></div>
   <div style="width: 100%" id="platform_plot_cima"></div>
   <div style="width: 100%" id="cdf_plot_cima"></div>



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
         
            // Build cdf plot for cima
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cima/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_cima', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for cima
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cima/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_cima', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for cima
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cima/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_cima', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cima/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cima/README.html