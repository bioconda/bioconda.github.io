:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'hicexplorer'
.. highlight: bash

hicexplorer
===========

.. conda:recipe:: hicexplorer
   :replaces_section_title:
   :noindex:

   Set of programs to process\, analyze and visualize Hi\-C and capture Hi\-C data

   :homepage: https://github.com/deeptools/HiCExplorer
   :documentation: https://hicexplorer.readthedocs.io
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`hicexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicexplorer/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gky504`, doi: :doi:`10.1093/nar/gkaa220`, doi: :doi:`10.1093/gigascience/giac061`, usegalaxy-eu: :usegalaxy-eu:`hicexplorer_hicplotviewpoint`, biotools: :biotools:`hicexplorer`

   


.. conda:package:: hicexplorer

   |downloads_hicexplorer| |docker_hicexplorer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.0-0</code>,  <code>3.7.6-0</code>,  <code>3.7.5-0</code>,  <code>3.7.4-0</code>,  <code>3.7.3-1</code>,  <code>3.7.3-0</code>,  <code>3.7.2-1</code>,  <code>3.7.2-0</code>,  <code>3.7.1-0</code>,  </span></summary>
      

      ``4.0.0-0``,  ``3.7.6-0``,  ``3.7.5-0``,  ``3.7.4-0``,  ``3.7.3-1``,  ``3.7.3-0``,  ``3.7.2-1``,  ``3.7.2-0``,  ``3.7.1-0``,  ``3.7-0``,  ``3.6-0``,  ``3.5.3-0``,  ``3.5.2-0``,  ``3.5.1-0``,  ``3.5-0``,  ``3.4.3-1``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4-0``,  ``3.3.1-0``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-1``,  ``2.2-0``,  ``2.2beta-0``,  ``2.1.4-3``,  ``2.1.4-2``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1-0``,  ``2.1alpha1-0``,  ``2.0-1``,  ``2.0-0``,  ``1.8.1-0``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6.1-0``,  ``1.6-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1a-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __osx: ``>=11.0``
   :depends on blosc: ``>=1.21.7,<2.0a0``
   :depends on c-blosc2: ``>=2.15,<3.4.1``
   :depends on graphviz: ``>=13,<15``
   :depends on hdf5: ``>=1.14.6,<1.14.7.0a0``
   :depends on hicmatrix: ``>=17,<18``
   :depends on htslib: ``>=1.24,<1.25.0a0``
   :depends on hyperopt: ``>=0.2.7,<0.4``
   :depends on intervaltree: ``>=3.1,<4``
   :depends on libbigwig: ``>=0.4.10,<0.5.0a0``
   :depends on libblas: ``>=3.11.0,<4.0a0``
   :depends on libcblas: ``>=3.11.0,<4.0a0``
   :depends on libcxx: ``>=19``
   :depends on liblapack: ``>=3.11.0,<3.12.0a0``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on matplotlib-base: ``>=3.8,<4``
   :depends on numpy: ``>=1.23,<3``
   :depends on pandas: ``>=2.0,<3``
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python-graphviz: ``>=0.20,<1``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on scipy: ``>=1.10,<2``
   :depends on unidecode: ``>=1.3,<2``

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

    pixi global install hicexplorer

to add into an existing workspace instead, run::

    pixi add hicexplorer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hicexplorer

Alternatively, to install into a new environment, run::

    conda create -n envname hicexplorer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hicexplorer:<tag>

(see `hicexplorer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hicexplorer| image:: https://img.shields.io/conda/dn/bioconda/hicexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/hicexplorer
   :alt:   (downloads)
.. |docker_hicexplorer| image:: https://quay.io/repository/biocontainers/hicexplorer/status
   :target: https://quay.io/repository/biocontainers/hicexplorer
.. _`hicexplorer/tags`: https://quay.io/repository/biocontainers/hicexplorer?tab=tags


.. raw:: html

   <script>
      var package = "hicexplorer";
      var versions = ["4.0.0","3.7.6","3.7.5","3.7.4","3.7.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_hicexplorer"></div>
   <div style="width: 100%" id="platform_plot_hicexplorer"></div>
   <div style="width: 100%" id="cdf_plot_hicexplorer"></div>



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
         
            // Build cdf plot for hicexplorer
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hicexplorer/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_hicexplorer', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for hicexplorer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hicexplorer/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_hicexplorer', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for hicexplorer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hicexplorer/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_hicexplorer', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicexplorer/README.html