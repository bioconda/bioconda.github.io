:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'depthcharge-ms'
.. highlight: bash

depthcharge-ms
==============

.. conda:recipe:: depthcharge-ms
   :replaces_section_title:
   :noindex:

   A mass spectrometry toolkit for deep learning with Transformer models.

   :homepage: https://wfondrie.github.io/depthcharge/latest
   :license: Apache-2.0
   :recipe: /`depthcharge-ms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/depthcharge-ms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/depthcharge-ms/meta.yaml>`_

   


.. conda:package:: depthcharge-ms

   |downloads_depthcharge-ms| |docker_depthcharge-ms|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.10-0``

      

   
   :depends on cloudpathlib: ``>=0.18.1``
   :depends on dill: ``>=0.3.6``
   :depends on einops: ``>=0.4.1``
   :depends on lark: ``>=1.1.4``
   :depends on lxml: ``>=4.9.1``
   :depends on numba: ``>=0.48.0``
   :depends on numpy: ``>=1.18.1``
   :depends on pillow: ``>=9.4.0``
   :depends on polars: ``>=0.19.0``
   :depends on psims: ``>=1.3.3``
   :depends on pyarrow: ``>=12.0.1``
   :depends on pylance: ``>=0.7.5``
   :depends on pyteomics: ``>=4.7.2``
   :depends on python: ``>=3.10,<3.14``
   :depends on pytorch: ``>=2.0.0``
   :depends on rdkit: ``>=2023.03.1``
   :depends on selfies: ``>=2.1.1``
   :depends on sortedcontainers: ``>=2.4.0``
   :depends on spectrum_utils: ``>=0.4.1``
   :depends on timsrust_pyo3: ``>=0.4.1,<0.5.0``
   :depends on tqdm: ``>=4.65.0``

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

    pixi global install depthcharge-ms

to add into an existing workspace instead, run::

    pixi add depthcharge-ms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install depthcharge-ms

Alternatively, to install into a new environment, run::

    conda create -n envname depthcharge-ms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/depthcharge-ms:<tag>

(see `depthcharge-ms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_depthcharge-ms| image:: https://img.shields.io/conda/dn/bioconda/depthcharge-ms.svg?style=flat
   :target: https://anaconda.org/bioconda/depthcharge-ms
   :alt:   (downloads)
.. |docker_depthcharge-ms| image:: https://quay.io/repository/biocontainers/depthcharge-ms/status
   :target: https://quay.io/repository/biocontainers/depthcharge-ms
.. _`depthcharge-ms/tags`: https://quay.io/repository/biocontainers/depthcharge-ms?tab=tags


.. raw:: html

   <script>
      var package = "depthcharge-ms";
      var versions = ["0.5.0","0.4.10"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_depthcharge-ms"></div>
   <div style="width: 100%" id="platform_plot_depthcharge-ms"></div>
   <div style="width: 100%" id="cdf_plot_depthcharge-ms"></div>



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
         
            // Build cdf plot for depthcharge-ms
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/depthcharge-ms/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_depthcharge-ms', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for depthcharge-ms
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/depthcharge-ms/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_depthcharge-ms', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for depthcharge-ms
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/depthcharge-ms/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_depthcharge-ms', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/depthcharge-ms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/depthcharge-ms/README.html