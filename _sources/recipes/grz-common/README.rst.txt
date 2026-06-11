:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grz-common'
.. highlight: bash

grz-common
==========

.. conda:recipe:: grz-common
   :replaces_section_title:
   :noindex:

   Common library for grz applications.

   :homepage: https://github.com/BfArM-MVH/grz-tools
   :license: MIT / MIT
   :recipe: /`grz-common <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grz-common>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grz-common/meta.yaml>`_

   


.. conda:package:: grz-common

   |downloads_grz-common| |docker_grz-common|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-0</code>,  <code>2.0.1-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``2.1.0-0``,  ``2.0.1-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boto3: ``>=1.36,<2``
   :depends on click: ``>=8.2,<9``
   :depends on cryptography: ``>=45.0.3``
   :depends on grz-check-python: ``>=0.3.1,<1``
   :depends on grz-pydantic-models: ``>=2.7,<3``
   :depends on packaging: ``>=23,<27``
   :depends on platformdirs: ``>=4.3.6,<5``
   :depends on pydantic: ``>=2.12,<3``
   :depends on pydantic-settings: ``>=2.11,<3``
   :depends on python: ``>=3.12``
   :depends on python-crypt4gh: ``>=1.8.6,<2``
   :depends on pyyaml: ``>=6.0.2,<7``
   :depends on tqdm: ``>=4.66.5,<5``

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

    pixi global install grz-common

to add into an existing workspace instead, run::

    pixi add grz-common

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install grz-common

Alternatively, to install into a new environment, run::

    conda create -n envname grz-common

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/grz-common:<tag>

(see `grz-common/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_grz-common| image:: https://img.shields.io/conda/dn/bioconda/grz-common.svg?style=flat
   :target: https://anaconda.org/bioconda/grz-common
   :alt:   (downloads)
.. |docker_grz-common| image:: https://quay.io/repository/biocontainers/grz-common/status
   :target: https://quay.io/repository/biocontainers/grz-common
.. _`grz-common/tags`: https://quay.io/repository/biocontainers/grz-common?tab=tags


.. raw:: html

   <script>
      var package = "grz-common";
      var versions = ["2.1.0","2.0.1","1.6.1","1.6.0","1.5.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_grz-common"></div>
   <div style="width: 100%" id="platform_plot_grz-common"></div>
   <div style="width: 100%" id="cdf_plot_grz-common"></div>



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
         
            // Build cdf plot for grz-common
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/grz-common/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_grz-common', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for grz-common
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/grz-common/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_grz-common', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for grz-common
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/grz-common/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_grz-common', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grz-common/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grz-common/README.html