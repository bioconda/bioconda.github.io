:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libmaus2'
.. highlight: bash

libmaus2
========

.. conda:recipe:: libmaus2
   :replaces_section_title:
   :noindex:

   Collection of data structures and algorithms for NGS data.

   :homepage: https://gitlab.com/german.tischler/libmaus2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`libmaus2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmaus2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmaus2/meta.yaml>`_
   :links: biotools: :biotools:`libmaus`

   


.. conda:package:: libmaus2

   |downloads_libmaus2| |docker_libmaus2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.813-1</code>,  <code>2.0.813-0</code>,  <code>2.0.810-6</code>,  <code>2.0.810-5</code>,  <code>2.0.810-4</code>,  <code>2.0.810-3</code>,  <code>2.0.810-2</code>,  <code>2.0.777-1</code>,  <code>2.0.777-0</code>,  </span></summary>
      

      ``2.0.813-1``,  ``2.0.813-0``,  ``2.0.810-6``,  ``2.0.810-5``,  ``2.0.810-4``,  ``2.0.810-3``,  ``2.0.810-2``,  ``2.0.777-1``,  ``2.0.777-0``,  ``2.0.774-1``,  ``2.0.774-0``,  ``2.0.772-1``,  ``2.0.772-0``,  ``2.0.760-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: 
   :depends on gmp: ``>=6.3.0,<7.0a0``
   :depends on libcurl: ``>=8.11.1,<9.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on nettle: ``>=3.9.1,<3.10.0a0``
   :depends on snappy: ``1.1.8.*``
   :depends on snappy: ``>=1.1.8,<2.0a0``
   :depends on staden_io_lib: ``>=1.14.14``
   :depends on staden_io_lib: ``>=1.15.0,<1.16.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      


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

    pixi global install libmaus2

to add into an existing workspace instead, run::

    pixi add libmaus2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libmaus2

Alternatively, to install into a new environment, run::

    conda create -n envname libmaus2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libmaus2:<tag>

(see `libmaus2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libmaus2| image:: https://img.shields.io/conda/dn/bioconda/libmaus2.svg?style=flat
   :target: https://anaconda.org/bioconda/libmaus2
   :alt:   (downloads)
.. |docker_libmaus2| image:: https://quay.io/repository/biocontainers/libmaus2/status
   :target: https://quay.io/repository/biocontainers/libmaus2
.. _`libmaus2/tags`: https://quay.io/repository/biocontainers/libmaus2?tab=tags


.. raw:: html

   <script>
      var package = "libmaus2";
      var versions = ["2.0.813","2.0.813","2.0.810","2.0.810","2.0.810"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_libmaus2"></div>
   <div style="width: 100%" id="platform_plot_libmaus2"></div>
   <div style="width: 100%" id="cdf_plot_libmaus2"></div>



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
         
            // Build cdf plot for libmaus2
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/libmaus2/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_libmaus2', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for libmaus2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/libmaus2/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_libmaus2', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for libmaus2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/libmaus2/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_libmaus2', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libmaus2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libmaus2/README.html