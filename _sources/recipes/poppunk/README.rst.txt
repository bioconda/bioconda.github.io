:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poppunk'
.. highlight: bash

poppunk
=======

.. conda:recipe:: poppunk
   :replaces_section_title:
   :noindex:

   PopPUNK \(POPulation Partitioning Using Nucleotide Kmers\)

   :homepage: https://poppunk.bacpop.org
   :documentation: https://poppunk.bacpop.org/index.html
   
   :developer docs: https://github.com/bacpop/PopPUNK
   :license: APACHE / Apache-2.0
   :recipe: /`poppunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poppunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poppunk/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.241455.118`, biotools: :biotools:`poppunk`

   


.. conda:package:: poppunk

   |downloads_poppunk| |docker_poppunk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.8-0</code>,  <code>2.7.7-0</code>,  <code>2.7.6-0</code>,  <code>2.7.5-0</code>,  <code>2.7.2-2</code>,  <code>2.7.2-1</code>,  <code>2.7.2-0</code>,  <code>2.7.1-0</code>,  <code>2.7.0-0</code>,  </span></summary>
      

      ``2.7.8-0``,  ``2.7.7-0``,  ``2.7.6-0``,  ``2.7.5-0``,  ``2.7.2-2``,  ``2.7.2-1``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.7-0``,  ``2.6.5-1``,  ``2.6.5-0``,  ``2.6.4-0``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on dendropy: ``>=4.4.0``
   :depends on graph-tool: ``>=2.35``
   :depends on h5py: 
   :depends on hdbscan: 
   :depends on libcxx: ``>=18``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.4.0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on llvm-openmp: ``>=18.1.8``
   :depends on llvm-openmp: ``>=21.1.8``
   :depends on mandrake: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pp-sketchlib: ``>=2.0.1``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on rapidnj: 
   :depends on requests: 
   :depends on scikit-learn: ``>=0.24``
   :depends on scipy: 
   :depends on tqdm: 
   :depends on treeswift: 
   :depends on xorg-libxaw: 
   :depends on xorg-libxcomposite: 
   :depends on xorg-libxcursor: 
   :depends on xorg-libxdamage: 
   :depends on xorg-libxfixes: 
   :depends on xorg-libxi: 
   :depends on xorg-libxinerama: 
   :depends on xorg-libxpm: 
   :depends on xorg-libxrandr: 

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

    pixi global install poppunk

to add into an existing workspace instead, run::

    pixi add poppunk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install poppunk

Alternatively, to install into a new environment, run::

    conda create -n envname poppunk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/poppunk:<tag>

(see `poppunk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_poppunk| image:: https://img.shields.io/conda/dn/bioconda/poppunk.svg?style=flat
   :target: https://anaconda.org/bioconda/poppunk
   :alt:   (downloads)
.. |docker_poppunk| image:: https://quay.io/repository/biocontainers/poppunk/status
   :target: https://quay.io/repository/biocontainers/poppunk
.. _`poppunk/tags`: https://quay.io/repository/biocontainers/poppunk?tab=tags


.. raw:: html

   <script>
      var package = "poppunk";
      var versions = ["2.7.8","2.7.7","2.7.6","2.7.5","2.7.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_poppunk"></div>
   <div style="width: 100%" id="platform_plot_poppunk"></div>
   <div style="width: 100%" id="cdf_plot_poppunk"></div>



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
         
            // Build cdf plot for poppunk
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/poppunk/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_poppunk', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for poppunk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/poppunk/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_poppunk', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for poppunk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/poppunk/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_poppunk', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poppunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poppunk/README.html