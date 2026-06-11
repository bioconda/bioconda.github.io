:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scanpy-scripts'
.. highlight: bash

scanpy-scripts
==============

.. conda:recipe:: scanpy-scripts
   :replaces_section_title:
   :noindex:

   Scripts for using scanpy from the command line

   :homepage: https://github.com/ebi-gene-expression-group/scanpy-scripts
   :license: Apache / Apache-2.0
   :recipe: /`scanpy-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-scripts/meta.yaml>`_

   


.. conda:package:: scanpy-scripts

   |downloads_scanpy-scripts| |docker_scanpy-scripts|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.301-0</code>,  <code>1.9.0-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.1-1</code>,  </span></summary>
      

      ``1.9.301-0``,  ``1.9.0-0``,  ``1.1.6-0``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-3``,  ``0.3.3-2``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-1``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5.post1-0``,  ``0.2.5-0``,  ``0.2.4.post4-3``,  ``0.2.4.post4-2``,  ``0.2.4.post4-1``,  ``0.2.4.post4-0``,  ``0.2.4.post3-0``,  ``0.2.4.post1-0``,  ``0.2.4-0``,  ``0.2.2-0``,  ``0.0.5-5``,  ``0.0.5-4``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.3-1``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bats: 
   :depends on bbknn: ``>=1.5.0,<1.6.0``
   :depends on black: 
   :depends on click: ``<8``
   :depends on fa2: 
   :depends on flit-core: 
   :depends on harmonypy: ``>=0.0.5``
   :depends on igraph: 
   :depends on leidenalg: 
   :depends on loompy: 
   :depends on louvain: 
   :depends on mnnpy: ``>=0.1.9.5``
   :depends on packaging: 
   :depends on pytest: 
   :depends on python: ``<3.10``
   :depends on pytoml: 
   :depends on scanpy: ``1.9.3.*``
   :depends on scikit-learn: ``<1.3.0``
   :depends on scipy: ``<1.9.0``
   :depends on scrublet: 
   :depends on setuptools_scm: 

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

    pixi global install scanpy-scripts

to add into an existing workspace instead, run::

    pixi add scanpy-scripts

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scanpy-scripts

Alternatively, to install into a new environment, run::

    conda create -n envname scanpy-scripts

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scanpy-scripts:<tag>

(see `scanpy-scripts/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scanpy-scripts| image:: https://img.shields.io/conda/dn/bioconda/scanpy-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/scanpy-scripts
   :alt:   (downloads)
.. |docker_scanpy-scripts| image:: https://quay.io/repository/biocontainers/scanpy-scripts/status
   :target: https://quay.io/repository/biocontainers/scanpy-scripts
.. _`scanpy-scripts/tags`: https://quay.io/repository/biocontainers/scanpy-scripts?tab=tags


.. raw:: html

   <script>
      var package = "scanpy-scripts";
      var versions = ["1.9.301","1.9.0","1.1.6","1.1.5","1.1.5"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_scanpy-scripts"></div>
   <div style="width: 100%" id="platform_plot_scanpy-scripts"></div>
   <div style="width: 100%" id="cdf_plot_scanpy-scripts"></div>



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
         
            // Build cdf plot for scanpy-scripts
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/scanpy-scripts/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_scanpy-scripts', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for scanpy-scripts
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/scanpy-scripts/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_scanpy-scripts', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for scanpy-scripts
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/scanpy-scripts/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_scanpy-scripts', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanpy-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanpy-scripts/README.html