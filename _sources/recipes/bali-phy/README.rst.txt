:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bali-phy'
.. highlight: bash

bali-phy
========

.. conda:recipe:: bali-phy
   :replaces_section_title:
   :noindex:

   Bayesian co\-estimation of phylogenies and multiple sequence alignments.

   :homepage: http://www.bali-phy.org
   :developer docs: https://github.com/bredelings/BAli-Phy/
   :license: GPL / GPL-2.0-only
   :recipe: /`bali-phy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bali-phy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bali-phy/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab129`, biotools: :biotools:`bali-phy`

   


.. conda:package:: bali-phy

   |downloads_bali-phy| |docker_bali-phy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2-0</code>,  <code>4.1-0</code>,  <code>4.0-0</code>,  <code>4.0beta17-0</code>,  <code>4.0beta16-1</code>,  <code>4.0beta16-0</code>,  <code>4.0beta15-1</code>,  <code>4.0beta15-0</code>,  <code>4.0beta14-0</code>,  </span></summary>
      

      ``4.2-0``,  ``4.1-0``,  ``4.0-0``,  ``4.0beta17-0``,  ``4.0beta16-1``,  ``4.0beta16-0``,  ``4.0beta15-1``,  ``4.0beta15-0``,  ``4.0beta14-0``,  ``4.0beta13-0``,  ``3.6.0-2``,  ``3.6.0-1``,  ``3.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __osx: ``>=10.13``
   :depends on cairo: ``>=1.18.4,<2.0a0``
   :depends on fmt: ``>=12.1.0,<12.2.0a0``
   :depends on gnuplot: 
   :depends on libboost: ``>=1.91.0,<1.92.0a0``
   :depends on libcxx: ``>=19``
   :depends on libglib: ``>=2.88.1,<3.0a0``
   :depends on perl: 
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on r-base: 
   :depends on xxhash: ``>=0.8.3,<0.8.4.0a0``

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

    pixi global install bali-phy

to add into an existing workspace instead, run::

    pixi add bali-phy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bali-phy

Alternatively, to install into a new environment, run::

    conda create -n envname bali-phy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bali-phy:<tag>

(see `bali-phy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bali-phy| image:: https://img.shields.io/conda/dn/bioconda/bali-phy.svg?style=flat
   :target: https://anaconda.org/bioconda/bali-phy
   :alt:   (downloads)
.. |docker_bali-phy| image:: https://quay.io/repository/biocontainers/bali-phy/status
   :target: https://quay.io/repository/biocontainers/bali-phy
.. _`bali-phy/tags`: https://quay.io/repository/biocontainers/bali-phy?tab=tags


.. raw:: html

   <script>
      var package = "bali-phy";
      var versions = ["4.2","4.1","4.0","4.0beta17","4.0beta16"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bali-phy"></div>
   <div style="width: 100%" id="platform_plot_bali-phy"></div>
   <div style="width: 100%" id="cdf_plot_bali-phy"></div>



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
         
            // Build cdf plot for bali-phy
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bali-phy/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bali-phy', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bali-phy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bali-phy/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bali-phy', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bali-phy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bali-phy/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bali-phy', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bali-phy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bali-phy/README.html