:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samtools'
.. highlight: bash

samtools
========

.. conda:recipe:: samtools
   :replaces_section_title:
   :noindex:

   Tools for dealing with SAM\, BAM and CRAM files

   :homepage: https://github.com/samtools/samtools
   :license: MIT
   :recipe: /`samtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samtools/meta.yaml>`_
   :links: biotools: :biotools:`samtools`, usegalaxy-eu: :usegalaxy-eu:`samtools_flagstat`

   


.. conda:package:: samtools

   |downloads_samtools| |docker_samtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.23.1-0</code>,  <code>1.23-0</code>,  <code>1.22.1-0</code>,  <code>1.22-0</code>,  <code>1.21-1</code>,  <code>1.21-0</code>,  <code>1.20-1</code>,  <code>1.20-0</code>,  <code>1.19.2-1</code>,  </span></summary>
      

      ``1.23.1-0``,  ``1.23-0``,  ``1.22.1-0``,  ``1.22-0``,  ``1.21-1``,  ``1.21-0``,  ``1.20-1``,  ``1.20-0``,  ``1.19.2-1``,  ``1.19.2-0``,  ``1.19.1-0``,  ``1.19-0``,  ``1.18-1``,  ``1.18-0``,  ``1.17-2``,  ``1.17-1``,  ``1.17-0``,  ``1.16.1-2``,  ``1.16.1-1``,  ``1.16.1-0``,  ``1.15.1-1``,  ``1.15.1-0``,  ``1.15-1``,  ``1.15-0``,  ``1.14-0``,  ``1.13-0``,  ``1.12-1``,  ``1.12-0``,  ``1.11-0``,  ``1.10-3``,  ``1.10-2``,  ``1.10-1``,  ``1.10-0``,  ``1.9-12``,  ``1.9-11``,  ``1.9-10``,  ``1.9-9``,  ``1.9-8``,  ``1.9-7``,  ``1.9-6``,  ``1.9-5``,  ``1.9-4``,  ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``,  ``1.8-5``,  ``1.8-4``,  ``1.8-3``,  ``1.8-2``,  ``1.7-2``,  ``1.7-1``,  ``1.7-0``,  ``1.6-13``,  ``1.6-12``,  ``1.6-11``,  ``1.6-10``,  ``1.6-9``,  ``1.6-8``,  ``1.6-7``,  ``1.6-6``,  ``1.6-5``,  ``1.6-4``,  ``1.6-3``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``,  ``1.5-2``,  ``1.5-1``,  ``1.5-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3.1-12``,  ``1.3.1-11``,  ``1.3.1-10``,  ``1.3.1-9``,  ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-9``,  ``1.3-8``,  ``1.3-7``,  ``1.3-6``,  ``1.3-5``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.2.rglab-1``,  ``1.2.rglab-0``,  ``1.1-9``,  ``1.1-8``,  ``1.1-7``,  ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-1``,  ``1.1-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.1.19-15``,  ``0.1.19-14``,  ``0.1.19-13``,  ``0.1.19-12``,  ``0.1.19-11``,  ``0.1.19-10``,  ``0.1.19-9``,  ``0.1.19-8``,  ``0.1.19-7``,  ``0.1.19-6``,  ``0.1.19-5``,  ``0.1.19-4``,  ``0.1.19-3``,  ``0.1.19-2``,  ``0.1.19-1``,  ``0.1.19-0``,  ``0.1.18-14``,  ``0.1.18-13``,  ``0.1.18-12``,  ``0.1.18-11``,  ``0.1.18-10``,  ``0.1.18-0``,  ``0.1.17-0``,  ``0.1.16-0``,  ``0.1.15-1``,  ``0.1.15-0``,  ``0.1.14-2``,  ``0.1.14-1``,  ``0.1.14-0``,  ``0.1.13-2``,  ``0.1.13-1``,  ``0.1.13-0``,  ``0.1.12-3``,  ``0.1.12-2``,  ``0.1.12-1``,  ``0.1.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.23.1,<1.24.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on ncurses: ``>=6.5,<7.0a0``

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

    pixi global install samtools

to add into an existing workspace instead, run::

    pixi add samtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install samtools

Alternatively, to install into a new environment, run::

    conda create -n envname samtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/samtools:<tag>

(see `samtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_samtools| image:: https://img.shields.io/conda/dn/bioconda/samtools.svg?style=flat
   :target: https://anaconda.org/bioconda/samtools
   :alt:   (downloads)
.. |docker_samtools| image:: https://quay.io/repository/biocontainers/samtools/status
   :target: https://quay.io/repository/biocontainers/samtools
.. _`samtools/tags`: https://quay.io/repository/biocontainers/samtools?tab=tags


.. raw:: html

   <script>
      var package = "samtools";
      var versions = ["1.23.1","1.23","1.22.1","1.22","1.21"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_samtools"></div>
   <div style="width: 100%" id="platform_plot_samtools"></div>
   <div style="width: 100%" id="cdf_plot_samtools"></div>



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
         
            // Build cdf plot for samtools
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/samtools/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_samtools', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for samtools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/samtools/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_samtools', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for samtools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/samtools/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_samtools', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samtools/README.html