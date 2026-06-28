:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mumemto'
.. highlight: bash

mumemto
=======

.. conda:recipe:: mumemto
   :replaces_section_title:
   :noindex:

   Finding maximal unique matches across pangenomes.

   :homepage: https://github.com/vikshiv/mumemto
   :documentation: https://github.com/vikshiv/mumemto/wiki
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`mumemto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mumemto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mumemto/meta.yaml>`_

   Mumemto is a tool for finding a variety of matches across collections of sequences like a pangenome.
   It includes a visualization tool for visualizing pangenome synteny.
   The conda package installs the CLI\, the C\/C\+\+ library \(headers include mumemto.h and mumemto.hpp\)
   and CMake package \(find\_package\(Mumemto\)\)\,
   and the Python package \(utilities plus pybind11 bindings\).



.. conda:package:: mumemto

   |downloads_mumemto| |docker_mumemto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.4.0-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=12``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on matplotlib-base: 
   :depends on numba: 
   :depends on numpy: ``>=1.21,<3``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on tqdm: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


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

    pixi global install mumemto

to add into an existing workspace instead, run::

    pixi add mumemto

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mumemto

Alternatively, to install into a new environment, run::

    conda create -n envname mumemto

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mumemto:<tag>

(see `mumemto/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mumemto| image:: https://img.shields.io/conda/dn/bioconda/mumemto.svg?style=flat
   :target: https://anaconda.org/bioconda/mumemto
   :alt:   (downloads)
.. |docker_mumemto| image:: https://quay.io/repository/biocontainers/mumemto/status
   :target: https://quay.io/repository/biocontainers/mumemto
.. _`mumemto/tags`: https://quay.io/repository/biocontainers/mumemto?tab=tags


.. raw:: html

   <script>
      var package = "mumemto";
      var versions = ["1.4.0","1.3.4","1.3.3","1.3.2","1.3.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_mumemto"></div>
   <div style="width: 100%" id="platform_plot_mumemto"></div>
   <div style="width: 100%" id="cdf_plot_mumemto"></div>



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
         
            // Build cdf plot for mumemto
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mumemto/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_mumemto', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for mumemto
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mumemto/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_mumemto', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for mumemto
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mumemto/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_mumemto', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mumemto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mumemto/README.html