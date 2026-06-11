:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scvi-tools'
.. highlight: bash

scvi-tools
==========

.. conda:recipe:: scvi-tools
   :replaces_section_title:
   :noindex:

   Deep probabilistic analysis of single\-cell omics data.

   :homepage: https://scvi-tools.org/
   :documentation: https://docs.scvi-tools.org/en/stable/
   
   :developer docs: https://github.com/YosefLab/scvi-tools
   :license: BSD / BSD-3-Clause
   :recipe: /`scvi-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvi-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvi-tools/meta.yaml>`_

   


.. conda:package:: scvi-tools

   |downloads_scvi-tools| |docker_scvi-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.5-1</code>,  <code>0.14.5-0</code>,  <code>0.14.4-0</code>,  <code>0.14.3-0</code>,  <code>0.14.2-0</code>,  <code>0.13.0-0</code>,  <code>0.12.2-0</code>,  <code>0.11.0-0</code>,  <code>0.10.1-0</code>,  </span></summary>
      

      ``0.14.5-1``,  ``0.14.5-0``,  ``0.14.4-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.13.0-0``,  ``0.12.2-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.7.0b0-0``,  ``0.7.0a6-0``,  ``0.7.0a5-0``,  ``0.7.0a4-1``,  ``0.7.0a4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: ``>=0.7.5``
   :depends on docrep: ``>=0.3.2``
   :depends on h5py: ``>=2.9.0``
   :depends on ipywidgets: ``>=7.5.1``
   :depends on numba: ``>=0.41.0``
   :depends on numpy: ``>=1.17.0``
   :depends on openpyxl: ``>=3.0``
   :depends on pandas: ``>=1.0``
   :depends on pyro-ppl: ``>=1.6.0``
   :depends on python: ``>=3.7``
   :depends on pytorch: ``>=1.8.0``
   :depends on pytorch-lightning: ``>=1.3,<1.4``
   :depends on rich: ``>=9.12.4``
   :depends on scikit-learn: ``>=0.21.2``
   :depends on setuptools: ``<59``
   :depends on tqdm: ``>=4.56.0``

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

    pixi global install scvi-tools

to add into an existing workspace instead, run::

    pixi add scvi-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scvi-tools

Alternatively, to install into a new environment, run::

    conda create -n envname scvi-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scvi-tools:<tag>

(see `scvi-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scvi-tools| image:: https://img.shields.io/conda/dn/bioconda/scvi-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/scvi-tools
   :alt:   (downloads)
.. |docker_scvi-tools| image:: https://quay.io/repository/biocontainers/scvi-tools/status
   :target: https://quay.io/repository/biocontainers/scvi-tools
.. _`scvi-tools/tags`: https://quay.io/repository/biocontainers/scvi-tools?tab=tags


.. raw:: html

   <script>
      var package = "scvi-tools";
      var versions = ["0.14.5","0.14.5","0.14.4","0.14.3","0.14.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_scvi-tools"></div>
   <div style="width: 100%" id="platform_plot_scvi-tools"></div>
   <div style="width: 100%" id="cdf_plot_scvi-tools"></div>



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
         
            // Build cdf plot for scvi-tools
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/scvi-tools/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_scvi-tools', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for scvi-tools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/scvi-tools/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_scvi-tools', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for scvi-tools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/scvi-tools/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_scvi-tools', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scvi-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scvi-tools/README.html