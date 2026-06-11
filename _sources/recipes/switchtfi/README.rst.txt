:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'switchtfi'
.. highlight: bash

switchtfi
=========

.. conda:recipe:: switchtfi
   :replaces_section_title:
   :noindex:

   Implementation of the SwitchTFI method as presented in\: https\:\/\/doi.org\/10.1101\/2025.01.20.633856

   :homepage: https://github.com/bionetslab/SwitchTFI
   :documentation: https://github.com/bionetslab/SwitchTFI#readme
   
   :license: GPL-3.0-only
   :recipe: /`switchtfi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/switchtfi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/switchtfi/meta.yaml>`_

   


.. conda:package:: switchtfi

   |downloads_switchtfi| |docker_switchtfi|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on anndata: ``>=0.8``
   :depends on graph-tool: ``>=2.45``
   :depends on leidenalg: ``>=0.10``
   :depends on magic-impute: ``>=3.0.0``
   :depends on matplotlib-base: ``>=3.5``
   :depends on networkx: ``>=3.0``
   :depends on numpy: ``>=1.26``
   :depends on pandas: ``>=2.1``
   :depends on pillow: ``>=9.0``
   :depends on pymupdf: ``>=1.20``
   :depends on python: ``>=3.9,<3.13``
   :depends on python-igraph: ``>=0.10``
   :depends on scanpy: ``>=1.9``
   :depends on scikit-learn: ``>=1.5``
   :depends on scipy: ``>=1.10``
   :depends on seaborn: ``>=0.12``
   :depends on statsmodels: ``>=0.13``

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

    pixi global install switchtfi

to add into an existing workspace instead, run::

    pixi add switchtfi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install switchtfi

Alternatively, to install into a new environment, run::

    conda create -n envname switchtfi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/switchtfi:<tag>

(see `switchtfi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_switchtfi| image:: https://img.shields.io/conda/dn/bioconda/switchtfi.svg?style=flat
   :target: https://anaconda.org/bioconda/switchtfi
   :alt:   (downloads)
.. |docker_switchtfi| image:: https://quay.io/repository/biocontainers/switchtfi/status
   :target: https://quay.io/repository/biocontainers/switchtfi
.. _`switchtfi/tags`: https://quay.io/repository/biocontainers/switchtfi?tab=tags


.. raw:: html

   <script>
      var package = "switchtfi";
      var versions = ["0.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_switchtfi"></div>
   <div style="width: 100%" id="platform_plot_switchtfi"></div>
   <div style="width: 100%" id="cdf_plot_switchtfi"></div>



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
         
            // Build cdf plot for switchtfi
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/switchtfi/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_switchtfi', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for switchtfi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/switchtfi/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_switchtfi', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for switchtfi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/switchtfi/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_switchtfi', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/switchtfi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/switchtfi/README.html