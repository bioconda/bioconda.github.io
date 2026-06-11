:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haddock_biobb'
.. highlight: bash

haddock_biobb
=============

.. conda:recipe:: haddock_biobb
   :replaces_section_title:
   :noindex:

   HADDOCK3 is the next generation integrative modelling software in the long\-lasting HADDOCK project.

   :homepage: https://github.com/haddocking/haddock3
   :license: APACHE / Apache-2.0
   :recipe: /`haddock_biobb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haddock_biobb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haddock_biobb/meta.yaml>`_

   HADDOCK3 is the next generation integrative modelling software in the long\-lasting HADDOCK project. It represents a complete rethinking and rewriting of the HADDOCK2.X series\, implementing a new way to interact with HADDOCK and offering new features to users who can now define custom workflows.


.. conda:package:: haddock_biobb

   |downloads_haddock_biobb| |docker_haddock_biobb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2025.11-0</code>,  <code>2025.5-3</code>,  <code>2025.5-2</code>,  <code>2025.5-1</code>,  <code>2025.5-0</code>,  <code>3.0.7-0</code>,  <code>3.0.6-2</code>,  <code>3.0.6-1</code>,  <code>3.0.6-0</code>,  </span></summary>
      

      ``2025.11-0``,  ``2025.5-3``,  ``2025.5-2``,  ``2025.5-1``,  ``2025.5-0``,  ``3.0.7-0``,  ``3.0.6-2``,  ``3.0.6-1``,  ``3.0.6-0``,  ``3.0.5-1``,  ``3.0.5-0``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on freesasa: 
   :depends on jsonpickle: 
   :depends on kaleido-core: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pdb-tools: 
   :depends on pip: 
   :depends on plotly: 
   :depends on python: ``>=3.10,<3.13``
   :depends on pyyaml: 
   :depends on scipy: 
   :depends on toml: 
   :depends on tox: 

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

    pixi global install haddock_biobb

to add into an existing workspace instead, run::

    pixi add haddock_biobb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install haddock_biobb

Alternatively, to install into a new environment, run::

    conda create -n envname haddock_biobb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/haddock_biobb:<tag>

(see `haddock_biobb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_haddock_biobb| image:: https://img.shields.io/conda/dn/bioconda/haddock_biobb.svg?style=flat
   :target: https://anaconda.org/bioconda/haddock_biobb
   :alt:   (downloads)
.. |docker_haddock_biobb| image:: https://quay.io/repository/biocontainers/haddock_biobb/status
   :target: https://quay.io/repository/biocontainers/haddock_biobb
.. _`haddock_biobb/tags`: https://quay.io/repository/biocontainers/haddock_biobb?tab=tags


.. raw:: html

   <script>
      var package = "haddock_biobb";
      var versions = ["2025.11","2025.5","2025.5","2025.5","2025.5"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_haddock_biobb"></div>
   <div style="width: 100%" id="platform_plot_haddock_biobb"></div>
   <div style="width: 100%" id="cdf_plot_haddock_biobb"></div>



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
         
            // Build cdf plot for haddock_biobb
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/haddock_biobb/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_haddock_biobb', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for haddock_biobb
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/haddock_biobb/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_haddock_biobb', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for haddock_biobb
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/haddock_biobb/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_haddock_biobb', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haddock_biobb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haddock_biobb/README.html