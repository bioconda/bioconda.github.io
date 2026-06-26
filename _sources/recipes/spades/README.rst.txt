:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spades'
.. highlight: bash

spades
======

.. conda:recipe:: spades
   :replaces_section_title:
   :noindex:

   SPAdes \(St. Petersburg genome assembler\) is intended for both standard isolates and single\-cell MDA bacteria assemblies.

   :homepage: https://github.com/ablab/spades
   :documentation: https://ablab.github.io/spades
   
   :license: GPL / GPL-2.0-only
   :recipe: /`spades <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spades>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spades/meta.yaml>`_
   :links: biotools: :biotools:`spades`, usegalaxy-eu: :usegalaxy-eu:`spades`, doi: :doi:`10.1089/cmb.2012.0021`, doi: :doi:`10.1101/gr.213959.116`, doi: :doi:`10.1093/gigascience/giz100`, doi: :doi:`10.1093/bioinformatics/btz349`

   SPAdes \(St. Petersburg genome assembler\) is a genome assembly algorithm which was designed for
   single cell and multi\-cells bacterial data sets. However\, it might not be suitable for large
   genomes projects.

   SPAdes works with Ion Torrent\, PacBio\, Oxford Nanopore\, and Illumina paired\-end\, mate\-pairs and
   single reads.



.. conda:package:: spades

   |downloads_spades| |docker_spades|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.0-0</code>,  <code>4.2.0-2</code>,  <code>4.2.0-1</code>,  <code>4.2.0-0</code>,  <code>4.1.0-0</code>,  <code>4.0.0-4</code>,  <code>4.0.0-3</code>,  <code>4.0.0-2</code>,  <code>4.0.0-1</code>,  </span></summary>
      

      ``4.3.0-0``,  ``4.2.0-2``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-4``,  ``4.0.0-3``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.15.5-3``,  ``3.15.5-2``,  ``3.15.5-1``,  ``3.15.5-0``,  ``3.15.4-0``,  ``3.15.3-1``,  ``3.15.3-0``,  ``3.15.2-1``,  ``3.15.2-0``,  ``3.15.0-0``,  ``3.14.1-2``,  ``3.14.1-1``,  ``3.14.1-0``,  ``3.14.0-0``,  ``3.13.2-0``,  ``3.13.1-2``,  ``3.13.1-1``,  ``3.13.1-0``,  ``3.13.0-0``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.1-5``,  ``3.11.1-4``,  ``3.11.1-3``,  ``3.11.1-2``,  ``3.11.1-1``,  ``3.11.1-0``,  ``3.11.0-1``,  ``3.11.0-0``,  ``3.10.1-1``,  ``3.10.1-0``,  ``3.10.0-0``,  ``3.9.1-1``,  ``3.9.1-0``,  ``3.9.0-4``,  ``3.9.0-3``,  ``3.9.0-2``,  ``3.9.0-1``,  ``3.9.0-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.0-0``,  ``3.6.2-0``,  ``3.5.0-1``,  ``3.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __osx: ``>=11.0``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libcxx: ``>=19``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on llvm-openmp: ``>=19.1.7``
   :depends on openmpi: ``>=4.1.6,<5.0a0``
   :depends on python: ``>=3.8``

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

    pixi global install spades

to add into an existing workspace instead, run::

    pixi add spades

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spades

Alternatively, to install into a new environment, run::

    conda create -n envname spades

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spades:<tag>

(see `spades/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spades| image:: https://img.shields.io/conda/dn/bioconda/spades.svg?style=flat
   :target: https://anaconda.org/bioconda/spades
   :alt:   (downloads)
.. |docker_spades| image:: https://quay.io/repository/biocontainers/spades/status
   :target: https://quay.io/repository/biocontainers/spades
.. _`spades/tags`: https://quay.io/repository/biocontainers/spades?tab=tags


.. raw:: html

   <script>
      var package = "spades";
      var versions = ["4.3.0","4.2.0","4.2.0","4.2.0","4.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_spades"></div>
   <div style="width: 100%" id="platform_plot_spades"></div>
   <div style="width: 100%" id="cdf_plot_spades"></div>



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
         
            // Build cdf plot for spades
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spades/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_spades', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for spades
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spades/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_spades', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for spades
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spades/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_spades', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spades/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spades/README.html