:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gridss'
.. highlight: bash

gridss
======

.. conda:recipe:: gridss
   :replaces_section_title:
   :noindex:

   GRIDSS\: The Genomic Rearrangement IDentification Software Suite.

   :homepage: https://github.com/PapenfussLab/gridss
   :license: GPL3 / GPL-3.0-only
   :recipe: /`gridss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gridss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gridss/meta.yaml>`_
   :links: biotools: :biotools:`gridss`, doi: :doi:`10.1101/gr.222109.117`, doi: :doi:`10.1186/s13059-021-02423-x`

   


.. conda:package:: gridss

   |downloads_gridss| |docker_gridss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.13.2-6</code>,  <code>2.13.2-5</code>,  <code>2.13.2-4</code>,  <code>2.13.2-3</code>,  <code>2.13.2-2</code>,  <code>2.13.2-1</code>,  <code>2.13.2-0</code>,  <code>2.13.1-0</code>,  <code>2.13.0-0</code>,  </span></summary>
      

      ``2.13.2-6``,  ``2.13.2-5``,  ``2.13.2-4``,  ``2.13.2-3``,  ``2.13.2-2``,  ``2.13.2-1``,  ``2.13.2-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.12.2-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.1-1``,  ``2.11.1-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.2-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.4-0``,  ``2.9.3-0``,  ``2.9.2-0``,  ``2.9.1-0``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.2-2``,  ``1.7.2-0``,  ``1.3.4-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bc: 
   :depends on bcftools: 
   :depends on bioconductor-structuralvariantannotation: ``>=1.6``
   :depends on bwa: ``>=0.7``
   :depends on entrez-direct: 
   :depends on htslib: ``>=1.14``
   :depends on htslib: ``>=1.22.1,<1.24.0a0``
   :depends on kraken2: ``>=2.1``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on ncurses: ``>=6.5,<7.0a0``
   :depends on openjdk: ``>=8``
   :depends on r-argparser: 
   :depends on r-base: ``>=4.0``
   :depends on r-stringdist: 
   :depends on r-testthat: 
   :depends on r-tidyverse: 
   :depends on repeatmasker: ``>=4.1.1``
   :depends on samtools: ``>=1.14``

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

    pixi global install gridss

to add into an existing workspace instead, run::

    pixi add gridss

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gridss

Alternatively, to install into a new environment, run::

    conda create -n envname gridss

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gridss:<tag>

(see `gridss/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gridss| image:: https://img.shields.io/conda/dn/bioconda/gridss.svg?style=flat
   :target: https://anaconda.org/bioconda/gridss
   :alt:   (downloads)
.. |docker_gridss| image:: https://quay.io/repository/biocontainers/gridss/status
   :target: https://quay.io/repository/biocontainers/gridss
.. _`gridss/tags`: https://quay.io/repository/biocontainers/gridss?tab=tags


.. raw:: html

   <script>
      var package = "gridss";
      var versions = ["2.13.2","2.13.2","2.13.2","2.13.2","2.13.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_gridss"></div>
   <div style="width: 100%" id="platform_plot_gridss"></div>
   <div style="width: 100%" id="cdf_plot_gridss"></div>



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
         
            // Build cdf plot for gridss
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gridss/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_gridss', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for gridss
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gridss/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_gridss', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for gridss
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gridss/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_gridss', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
The package contains additional command line wrappers for the GRIDSS java\-based utilities.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gridss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gridss/README.html