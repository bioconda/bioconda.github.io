:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dbg2olc'
.. highlight: bash

dbg2olc
=======

.. conda:recipe:: dbg2olc
   :replaces_section_title:
   :noindex:

   Efficient Assembly of Large Genomes Using Long Erroneous Reads of the Third Generation Sequencing Technologies.

   :homepage: https://github.com/yechengxi/DBG2OLC
   :documentation: https://github.com/yechengxi/DBG2OLC/raw/master/Manual.docx
   
   :license: Unknown
   :recipe: /`dbg2olc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbg2olc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbg2olc/meta.yaml>`_

   


.. conda:package:: dbg2olc

   |downloads_dbg2olc| |docker_dbg2olc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20200723-4</code>,  <code>20200723-3</code>,  <code>20200723-2</code>,  <code>20200723-1</code>,  <code>20200723-0</code>,  <code>20180222-3</code>,  <code>20180222-2</code>,  <code>20180222-1</code>,  <code>20180222-0</code>,  </span></summary>
      

      ``20200723-4``,  ``20200723-3``,  ``20200723-2``,  ``20200723-1``,  ``20200723-0``,  ``20180222-3``,  ``20180222-2``,  ``20180222-1``,  ``20180222-0``,  ``20160205-1``,  ``20160205-0``

      
      .. raw:: html

         </details>
      

   
   :depends on assemblyutility: 
   :depends on libcxx: ``>=18``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on sparc: 
   :depends on sparseassembler: 

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

    pixi global install dbg2olc

to add into an existing workspace instead, run::

    pixi add dbg2olc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dbg2olc

Alternatively, to install into a new environment, run::

    conda create -n envname dbg2olc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dbg2olc:<tag>

(see `dbg2olc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dbg2olc| image:: https://img.shields.io/conda/dn/bioconda/dbg2olc.svg?style=flat
   :target: https://anaconda.org/bioconda/dbg2olc
   :alt:   (downloads)
.. |docker_dbg2olc| image:: https://quay.io/repository/biocontainers/dbg2olc/status
   :target: https://quay.io/repository/biocontainers/dbg2olc
.. _`dbg2olc/tags`: https://quay.io/repository/biocontainers/dbg2olc?tab=tags


.. raw:: html

   <script>
      var package = "dbg2olc";
      var versions = ["20200723","20200723","20200723","20200723","20200723"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_dbg2olc"></div>
   <div style="width: 100%" id="platform_plot_dbg2olc"></div>
   <div style="width: 100%" id="cdf_plot_dbg2olc"></div>



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
         
            // Build cdf plot for dbg2olc
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/dbg2olc/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_dbg2olc', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for dbg2olc
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/dbg2olc/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_dbg2olc', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for dbg2olc
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/dbg2olc/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_dbg2olc', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dbg2olc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dbg2olc/README.html