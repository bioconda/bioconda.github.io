:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-saige'
.. highlight: bash

r-saige
=======

.. conda:recipe:: r-saige
   :replaces_section_title:
   :noindex:

   SAIGE is an R package with Scalable and Accurate Implementation of Generalized mixed model \(Chen\, H. et al. 2016\)

   :homepage: https://github.com/saigegit/SAIGE
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-saige <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-saige>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-saige/meta.yaml>`_

   SAIGE is an R package with Scalable and Accurate Implementation of Generalized
   mixed model \(Chen\, H. et al. 2016\). It accounts for sample relatedness and is
   feasible for genetic association tests in large cohorts and biobanks \(N \> 400000\).



.. conda:package:: r-saige

   |downloads_r-saige| |docker_r-saige|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-4</code>,  <code>1.3.1-3</code>,  <code>1.3.1-2</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.9-3</code>,  <code>1.1.9-2</code>,  <code>1.1.9-1</code>,  </span></summary>
      

      ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.9-3``,  ``1.1.9-2``,  ``1.1.9-1``,  ``1.1.9-0``,  ``1.1.8-0``,  ``0.45.0-5``,  ``0.45.0-4``,  ``0.45.0-3``,  ``0.45.0-2``,  ``0.45.0-0``,  ``0.44.6.5-3``,  ``0.44.6.5-2``,  ``0.44.6.5-1``,  ``0.44.6.5-0``,  ``0.44.6.2-0``,  ``0.44.6.1-0``,  ``0.44.6-0``,  ``0.44.5-1``,  ``0.44.5-0``,  ``0.44.2-0``,  ``0.44.1-0``,  ``0.44.0-0``,  ``0.43.3-0``,  ``0.43.0-0``,  ``0.42.1-1``,  ``0.42.1-0``,  ``0.42.0-1``,  ``0.42.0-0``,  ``0.39.0-1``,  ``0.39.0-0``,  ``0.35.8.8-2``,  ``0.35.8.8-1``,  ``0.35.8.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-dbplyr: 
   :depends on r-dplyr: 
   :depends on r-matrix: 
   :depends on r-optparse: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rcppeigen: 
   :depends on r-rcppparallel: 
   :depends on r-rhpcblasctl: 
   :depends on r-rsqlite: 
   :depends on r-skat: 
   :depends on r-spatest: 
   :depends on savvy: ``>=2.1.0,<3.0a0``
   :depends on superlu: ``>=7.0.1,<7.1.0a0``
   :depends on zstd: ``>=1.5.7,<1.6.0a0``

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

    pixi global install r-saige

to add into an existing workspace instead, run::

    pixi add r-saige

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-saige

Alternatively, to install into a new environment, run::

    conda create -n envname r-saige

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-saige:<tag>

(see `r-saige/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-saige| image:: https://img.shields.io/conda/dn/bioconda/r-saige.svg?style=flat
   :target: https://anaconda.org/bioconda/r-saige
   :alt:   (downloads)
.. |docker_r-saige| image:: https://quay.io/repository/biocontainers/r-saige/status
   :target: https://quay.io/repository/biocontainers/r-saige
.. _`r-saige/tags`: https://quay.io/repository/biocontainers/r-saige?tab=tags


.. raw:: html

   <script>
      var package = "r-saige";
      var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-saige"></div>
   <div style="width: 100%" id="platform_plot_r-saige"></div>
   <div style="width: 100%" id="cdf_plot_r-saige"></div>



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
         
            // Build cdf plot for r-saige
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-saige/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-saige', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-saige
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-saige/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-saige', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-saige
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-saige/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-saige', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-saige/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-saige/README.html