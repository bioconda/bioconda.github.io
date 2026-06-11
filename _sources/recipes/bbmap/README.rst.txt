:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bbmap'
.. highlight: bash

bbmap
=====

.. conda:recipe:: bbmap
   :replaces_section_title:
   :noindex:

   BBMap is a short read aligner\, as well as various other bioinformatic tools.

   :homepage: https://sourceforge.net/projects/bbmap
   :documentation: https://bbmap.org
   
   :license: BSD-3-Clause-LBNL
   :recipe: /`bbmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmap/meta.yaml>`_
   :links: biotools: :biotools:`bbmap`, usegalaxy-eu: :usegalaxy-eu:`bbtools_bbmap`, usegalaxy-eu: :usegalaxy-eu:`bbtools_callvariants`, usegalaxy-eu: :usegalaxy-eu:`bbtools_bbmerge`, usegalaxy-eu: :usegalaxy-eu:`bbtools_tadpole`, usegalaxy-eu: :usegalaxy-eu:`bbtools_bbduk`, usegalaxy-eu: :usegalaxy-eu:`bbtools_bbnorm`, doi: :doi:`10.1371/journal.pone.0185056`

   


.. conda:package:: bbmap

   |downloads_bbmap| |docker_bbmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>39.81-1</code>,  <code>39.81-0</code>,  <code>39.80-0</code>,  <code>39.79-0</code>,  <code>39.77-0</code>,  <code>39.76-0</code>,  <code>39.52-0</code>,  <code>39.50-0</code>,  <code>39.37-0</code>,  </span></summary>
      

      ``39.81-1``,  ``39.81-0``,  ``39.80-0``,  ``39.79-0``,  ``39.77-0``,  ``39.76-0``,  ``39.52-0``,  ``39.50-0``,  ``39.37-0``,  ``39.33-0``,  ``39.28-0``,  ``39.26-0``,  ``39.25-0``,  ``39.24-0``,  ``39.19-0``,  ``39.18-0``,  ``39.17-0``,  ``39.15-0``,  ``39.13-1``,  ``39.13-0``,  ``39.11-0``,  ``39.10-0``,  ``39.09-0``,  ``39.08-0``,  ``39.06-1``,  ``39.06-0``,  ``39.01-1``,  ``39.01-0``,  ``39.00-0``,  ``38.99-0``,  ``38.98-1``,  ``38.98-0``,  ``38.97-1``,  ``38.97-0``,  ``38.96-1``,  ``38.96-0``,  ``38.95-1``,  ``38.95-0``,  ``38.93-0``,  ``38.92-0``,  ``38.91-1``,  ``38.91-0``,  ``38.90-3``,  ``38.90-2``,  ``38.90-1``,  ``38.90-0``,  ``38.89-0``,  ``38.88-0``,  ``38.87-0``,  ``38.86-0``,  ``38.84-1``,  ``38.84-0``,  ``38.79-0``,  ``38.76-0``,  ``38.75-0``,  ``38.73-0``,  ``38.72-0``,  ``38.71-0``,  ``38.70-0``,  ``38.69-0``,  ``38.68-0``,  ``38.67-0``,  ``38.65-0``,  ``38.63-0``,  ``38.62-0``,  ``38.61b-0``,  ``38.58-0``,  ``38.57-0``,  ``38.56-0``,  ``38.51-0``,  ``38.49-0``,  ``38.46-0``,  ``38.45-0``,  ``38.44-0``,  ``38.22-1``,  ``38.22-0``,  ``38.20-0``,  ``38.19-0``,  ``38.18-0``,  ``38.16-0``,  ``38.06-2``,  ``38.06-0``,  ``37.99-1``,  ``37.99-0``,  ``37.96-0``,  ``37.95-0``,  ``37.90-0``,  ``37.78-0``,  ``37.77-0``,  ``37.75-0``,  ``37.66-0``,  ``37.62-2``,  ``37.62-1``,  ``37.62-0``,  ``37.52-1``,  ``37.52-0``,  ``37.17-1``,  ``37.17-0``,  ``37.10-1``,  ``37.10-0``,  ``37.02-0``,  ``36.84-0``,  ``36.32-0``,  ``35.85-2``,  ``35.85-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=14``
   :depends on openjdk: ``>=11.0.1``
   :depends on samtools: ``>=1.23.1,<2.0a0``

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

    pixi global install bbmap

to add into an existing workspace instead, run::

    pixi add bbmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bbmap

Alternatively, to install into a new environment, run::

    conda create -n envname bbmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bbmap:<tag>

(see `bbmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bbmap| image:: https://img.shields.io/conda/dn/bioconda/bbmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bbmap
   :alt:   (downloads)
.. |docker_bbmap| image:: https://quay.io/repository/biocontainers/bbmap/status
   :target: https://quay.io/repository/biocontainers/bbmap
.. _`bbmap/tags`: https://quay.io/repository/biocontainers/bbmap?tab=tags


.. raw:: html

   <script>
      var package = "bbmap";
      var versions = ["39.81","39.81","39.80","39.79","39.77"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bbmap"></div>
   <div style="width: 100%" id="platform_plot_bbmap"></div>
   <div style="width: 100%" id="cdf_plot_bbmap"></div>



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
         
            // Build cdf plot for bbmap
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bbmap/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bbmap', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bbmap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bbmap/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bbmap', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bbmap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bbmap/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bbmap', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
BBMap is a series of Java programs\, but they come with a number of custom
wrapper shell scripts. Each of these is symlinked to the conda bin directory
during install.



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bbmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bbmap/README.html