:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prinseq-plus-plus'
.. highlight: bash

prinseq-plus-plus
=================

.. conda:recipe:: prinseq-plus-plus
   :replaces_section_title:
   :noindex:

   PRINSEQ\+\+ \- Multi\-threaded C\+\+ sequence cleaning.

   :homepage: https://github.com/Adrian-Cantu/PRINSEQ-plus-plus
   :license: GPL / GPL-2.0-or-later
   :recipe: /`prinseq-plus-plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prinseq-plus-plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prinseq-plus-plus/meta.yaml>`_

   


.. conda:package:: prinseq-plus-plus

   |downloads_prinseq-plus-plus| |docker_prinseq-plus-plus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.4-8</code>,  <code>1.2.4-7</code>,  <code>1.2.4-6</code>,  <code>1.2.4-5</code>,  <code>1.2.4-4</code>,  <code>1.2.4-3</code>,  <code>1.2.4-2</code>,  <code>1.2.4-1</code>,  <code>1.2.4-0</code>,  </span></summary>
      

      ``1.2.4-8``,  ``1.2.4-7``,  ``1.2.4-6``,  ``1.2.4-5``,  ``1.2.4-4``,  ``1.2.4-3``,  ``1.2.4-2``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: ``>=1.70.0``
   :depends on libcxx: ``>=18``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pthread-stubs: 

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

    pixi global install prinseq-plus-plus

to add into an existing workspace instead, run::

    pixi add prinseq-plus-plus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install prinseq-plus-plus

Alternatively, to install into a new environment, run::

    conda create -n envname prinseq-plus-plus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/prinseq-plus-plus:<tag>

(see `prinseq-plus-plus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_prinseq-plus-plus| image:: https://img.shields.io/conda/dn/bioconda/prinseq-plus-plus.svg?style=flat
   :target: https://anaconda.org/bioconda/prinseq-plus-plus
   :alt:   (downloads)
.. |docker_prinseq-plus-plus| image:: https://quay.io/repository/biocontainers/prinseq-plus-plus/status
   :target: https://quay.io/repository/biocontainers/prinseq-plus-plus
.. _`prinseq-plus-plus/tags`: https://quay.io/repository/biocontainers/prinseq-plus-plus?tab=tags


.. raw:: html

   <script>
      var package = "prinseq-plus-plus";
      var versions = ["1.2.4","1.2.4","1.2.4","1.2.4","1.2.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_prinseq-plus-plus"></div>
   <div style="width: 100%" id="platform_plot_prinseq-plus-plus"></div>
   <div style="width: 100%" id="cdf_plot_prinseq-plus-plus"></div>



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
         
            // Build cdf plot for prinseq-plus-plus
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/prinseq-plus-plus/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_prinseq-plus-plus', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for prinseq-plus-plus
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/prinseq-plus-plus/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_prinseq-plus-plus', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for prinseq-plus-plus
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/prinseq-plus-plus/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_prinseq-plus-plus', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prinseq-plus-plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prinseq-plus-plus/README.html