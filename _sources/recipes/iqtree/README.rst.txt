:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iqtree'
.. highlight: bash

iqtree
======

.. conda:recipe:: iqtree
   :replaces_section_title:
   :noindex:

   Efficient phylogenomic software by maximum likelihood.

   :homepage: http://www.iqtree.org
   :documentation: http://www.iqtree.org/doc
   
   :developer docs: https://github.com/iqtree/iqtree3
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`iqtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqtree/meta.yaml>`_
   :links: biotools: :biotools:`iqtree`, doi: :doi:`10.32942/X2P62N`, doi: :doi:`10.1093/molbev/msae264`, doi: :doi:`10.1093/molbev/msae174`, doi: :doi:`10.1093/molbev/msae134`, doi: :doi:`10.1093/sysbio/syae008`, doi: :doi:`10.1093/bioinformatics/btac741`, doi: :doi:`10.1093/bioinformatics/btad540`, doi: :doi:`10.1093/sysbio/syab010`, doi: :doi:`10.1093/sysbio/syz051`, doi: :doi:`10.1093/gbe/evz193`, doi: :doi:`10.1093/molbev/msz043`, doi: :doi:`10.1093/molbev/msx281`, doi: :doi:`10.1093/sysbio/syx068`, doi: :doi:`10.1038/nmeth.4285`, doi: :doi:`10.1093/sysbio/syw037`, doi: :doi:`10.1093/nar/gkw256`, doi: :doi:`10.1093/molbev/msu300`, doi: :doi:`10.1093/molbev/msaa015`, usegalaxy-eu: :usegalaxy-eu:`iqtree`

   


.. conda:package:: iqtree

   |downloads_iqtree| |docker_iqtree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.2-0</code>,  <code>3.1.1-1</code>,  <code>3.1.1-0</code>,  <code>3.0.1-0</code>,  <code>2.4.0-0</code>,  <code>2.3.6-1</code>,  <code>2.3.6-0</code>,  <code>2.3.5-3</code>,  <code>2.3.5-2</code>,  </span></summary>
      

      ``3.1.2-0``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.0.1-0``,  ``2.4.0-0``,  ``2.3.6-1``,  ``2.3.6-0``,  ``2.3.5-3``,  ``2.3.5-2``,  ``2.3.5-1``,  ``2.3.5-0``,  ``2.3.4-2``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.0-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.3-0``,  ``2.2.2.9-0``,  ``2.2.2.7-2``,  ``2.2.2.7-0``,  ``2.2.2.3-2``,  ``2.2.2.3-1``,  ``2.2.2.3-0``,  ``2.2.0.3-1``,  ``2.2.0.3-0``,  ``2.2.0_beta-1``,  ``2.2.0_beta-0``,  ``2.1.4_beta-0``,  ``2.1.2-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``1.6.12-1``,  ``1.6.12-0``,  ``1.6.11.1-0``,  ``1.6.11-0``,  ``1.6.10-0``,  ``1.6.9-1``,  ``1.6.9-0``,  ``1.6.8-0``,  ``1.6.7.2-0``,  ``1.6.7.1-0``,  ``1.6.7-1``,  ``1.6.7-0``,  ``1.6.6-0``,  ``1.5.5-2``,  ``1.5.5-1``,  ``1.5.5-0``,  ``1.5.3-2``,  ``1.5.3-1``,  ``1.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=14``

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

    pixi global install iqtree

to add into an existing workspace instead, run::

    pixi add iqtree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install iqtree

Alternatively, to install into a new environment, run::

    conda create -n envname iqtree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/iqtree:<tag>

(see `iqtree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_iqtree| image:: https://img.shields.io/conda/dn/bioconda/iqtree.svg?style=flat
   :target: https://anaconda.org/bioconda/iqtree
   :alt:   (downloads)
.. |docker_iqtree| image:: https://quay.io/repository/biocontainers/iqtree/status
   :target: https://quay.io/repository/biocontainers/iqtree
.. _`iqtree/tags`: https://quay.io/repository/biocontainers/iqtree?tab=tags


.. raw:: html

   <script>
      var package = "iqtree";
      var versions = ["3.1.2","3.1.1","3.1.1","3.0.1","2.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_iqtree"></div>
   <div style="width: 100%" id="platform_plot_iqtree"></div>
   <div style="width: 100%" id="cdf_plot_iqtree"></div>



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
         
            // Build cdf plot for iqtree
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/iqtree/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_iqtree', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for iqtree
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/iqtree/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_iqtree', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for iqtree
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/iqtree/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_iqtree', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iqtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iqtree/README.html