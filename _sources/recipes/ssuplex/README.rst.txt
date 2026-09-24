:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssuplex'
.. highlight: bash

ssuplex
=======

.. conda:recipe:: ssuplex
   :replaces_section_title:
   :noindex:

   Fast SSU rRNA extraction and origin sorting \(bacterial\, archaeal\, eukaryotic\, mitochondrial\, chloroplast\) for eDNA reads.

   :homepage: https://github.com/ayobi/ssuplex
   :documentation: https://github.com/ayobi/ssuplex#readme
   
   :license: MIT / MIT
   :recipe: /`ssuplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssuplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssuplex/meta.yaml>`_
   :links: doi: :doi:`10.64898/2026.07.02.736232`

   SSUplex extracts small\-subunit rRNA \(16S\/18S\) sequences from environmental
   sequencing reads and sorts them by origin so each set can be routed to the
   appropriate downstream classifier. It is a Rust reimplementation of the
   Metaxa2 SSU extraction and origin\-classification step\, using nhmmer to scan
   both strands. HMM profiles are not bundled\; build them from the Metaxa2 SSU
   profile database as described in the README.



.. conda:package:: ssuplex

   |downloads_ssuplex| |docker_ssuplex|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on hmmer: ``>=3.1``
   :depends on libgcc: ``>=14``

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

    pixi global install ssuplex

to add into an existing workspace instead, run::

    pixi add ssuplex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ssuplex

Alternatively, to install into a new environment, run::

    conda create -n envname ssuplex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ssuplex:<tag>

(see `ssuplex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ssuplex| image:: https://img.shields.io/conda/dn/bioconda/ssuplex.svg?style=flat
   :target: https://anaconda.org/bioconda/ssuplex
   :alt:   (downloads)
.. |docker_ssuplex| image:: https://quay.io/repository/biocontainers/ssuplex/status
   :target: https://quay.io/repository/biocontainers/ssuplex
.. _`ssuplex/tags`: https://quay.io/repository/biocontainers/ssuplex?tab=tags


.. raw:: html

   <script>
      var package = "ssuplex";
      var versions = ["0.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_ssuplex"></div>
   <div style="width: 100%" id="platform_plot_ssuplex"></div>
   <div style="width: 100%" id="cdf_plot_ssuplex"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for ssuplex
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ssuplex/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_ssuplex', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for ssuplex
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ssuplex/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_ssuplex', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for ssuplex
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ssuplex/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_ssuplex', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssuplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssuplex/README.html