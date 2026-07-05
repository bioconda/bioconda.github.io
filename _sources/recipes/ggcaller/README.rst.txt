:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ggcaller'
.. highlight: bash

ggcaller
========

.. conda:recipe:: ggcaller
   :replaces_section_title:
   :noindex:

   A de Bruijn graph\-based gene\-caller and pangenome analysis tool

   :homepage: https://github.com/bacpop/ggCaller
   :license: MIT / MIT
   :recipe: /`ggcaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggcaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggcaller/meta.yaml>`_

   


.. conda:package:: ggcaller

   |downloads_ggcaller| |docker_ggcaller|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.3.7-0</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  </span></summary>
      

      ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.4-2``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __osx: ``>=10.13``
   :depends on bcbio-gff: 
   :depends on bifrost: ``>=1.2``
   :depends on bifrost: ``>=1.3.5,<2.0a0``
   :depends on biopython: ``1.80.*``
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gffutils: 
   :depends on joblib: 
   :depends on libcxx: ``>=19``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on llvm-openmp: ``>=19.1.7``
   :depends on matplotlib-base: 
   :depends on mkl: ``>=2022.2.1,<2023.0a0``
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pthread-stubs: 
   :depends on python: ``>=3.9,<3.10.0a0``
   :depends on python-edlib: 
   :depends on python-wget: 
   :depends on python_abi: ``3.9.* *_cp39``
   :depends on pytorch: ``1.10.*``
   :depends on pytorch: ``>=1.10.2,<1.11.0a0``
   :depends on pytorch-cpu: ``1.10.*``
   :depends on scipy: 
   :depends on tbb: ``>=2021.13.0``
   :depends on uncertainties: 
   :depends on xorg-libxaw: 
   :depends on xorg-libxcomposite: 
   :depends on xorg-libxcursor: 
   :depends on xorg-libxdamage: 
   :depends on xorg-libxfixes: 
   :depends on xorg-libxi: 
   :depends on xorg-libxinerama: 
   :depends on xorg-libxpm: 
   :depends on xorg-libxrandr: 
   :depends on zlib: 

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

    pixi global install ggcaller

to add into an existing workspace instead, run::

    pixi add ggcaller

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ggcaller

Alternatively, to install into a new environment, run::

    conda create -n envname ggcaller

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ggcaller:<tag>

(see `ggcaller/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ggcaller| image:: https://img.shields.io/conda/dn/bioconda/ggcaller.svg?style=flat
   :target: https://anaconda.org/bioconda/ggcaller
   :alt:   (downloads)
.. |docker_ggcaller| image:: https://quay.io/repository/biocontainers/ggcaller/status
   :target: https://quay.io/repository/biocontainers/ggcaller
.. _`ggcaller/tags`: https://quay.io/repository/biocontainers/ggcaller?tab=tags


.. raw:: html

   <script>
      var package = "ggcaller";
      var versions = ["1.5.1","1.5.0","1.4.3","1.4.2","1.4.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_ggcaller"></div>
   <div style="width: 100%" id="platform_plot_ggcaller"></div>
   <div style="width: 100%" id="cdf_plot_ggcaller"></div>



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
         
            // Build cdf plot for ggcaller
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ggcaller/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_ggcaller', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for ggcaller
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ggcaller/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_ggcaller', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for ggcaller
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ggcaller/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_ggcaller', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ggcaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ggcaller/README.html