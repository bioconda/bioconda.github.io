:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'swipe'
.. highlight: bash

swipe
=====

.. conda:recipe:: swipe
   :replaces_section_title:
   :noindex:

   Tool for performing rapid local alignment searches in amino acid or nucleotide sequence databases. It is a highly optimized implementation of the Smith\-Waterman algoritm using SIMD parallel computing technology available on common CPUs.

   :homepage: http://dna.uio.no/swipe
   :developer docs: https://github.com/torognes/swipe
   :license: GPL / AGPL-3.0
   :recipe: /`swipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swipe/meta.yaml>`_
   :links: biotools: :biotools:`swipe`, doi: :doi:`10.1186/1471-2105-12-221`

   


.. conda:package:: swipe

   |downloads_swipe| |docker_swipe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-5</code>,  <code>2.1.1-4</code>,  <code>2.1.1-3</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  </span></summary>
      

      ``2.1.1-5``,  ``2.1.1-4``,  ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.12-1``,  ``2.0.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on openmpi: ``>=4.1.6,<5.0a0``
   :depends on tbb: ``>=2021.13.0``

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

    pixi global install swipe

to add into an existing workspace instead, run::

    pixi add swipe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install swipe

Alternatively, to install into a new environment, run::

    conda create -n envname swipe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/swipe:<tag>

(see `swipe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_swipe| image:: https://img.shields.io/conda/dn/bioconda/swipe.svg?style=flat
   :target: https://anaconda.org/bioconda/swipe
   :alt:   (downloads)
.. |docker_swipe| image:: https://quay.io/repository/biocontainers/swipe/status
   :target: https://quay.io/repository/biocontainers/swipe
.. _`swipe/tags`: https://quay.io/repository/biocontainers/swipe?tab=tags


.. raw:: html

   <script>
      var package = "swipe";
      var versions = ["2.1.1","2.1.1","2.1.1","2.1.1","2.1.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_swipe"></div>
   <div style="width: 100%" id="platform_plot_swipe"></div>
   <div style="width: 100%" id="cdf_plot_swipe"></div>



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
         
            // Build cdf plot for swipe
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/swipe/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_swipe', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for swipe
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/swipe/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_swipe', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for swipe
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/swipe/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_swipe', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/swipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/swipe/README.html