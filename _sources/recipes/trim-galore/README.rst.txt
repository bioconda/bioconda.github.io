:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trim-galore'
.. highlight: bash

trim-galore
===========

.. conda:recipe:: trim-galore
   :replaces_section_title:
   :noindex:

   Fast adapter and quality trimming for NGS data — Oxidized Edition \(Rust\)

   :homepage: https://www.trimgalore.com/
   :developer docs: https://github.com/FelixKrueger/TrimGalore
   :license: GPL / GPL-3.0-only
   :recipe: /`trim-galore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trim-galore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trim-galore/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`trim_galore`

   Trim Galore v2 is a Rust rewrite of the original Perl Trim Galore. Single
   static binary\, no Python\/Perl\/Cutadapt\/Java\/igzip\/pigz dependencies. Drop\-in
   compatible with v0.6.x scripts and pipelines \(same CLI\, same output
   filenames\, same report format\) with adapter auto\-detection \(Illumina\,
   Nextera\, Small RNA\, BGI\/DNBSEQ\)\, poly\-G\/poly\-A trimming\, paired\-end
   single\-pass processing\, RRBS support\, and bundled FastQC integration via
   fastqc\-rust.



.. conda:package:: trim-galore

   |downloads_trim-galore| |docker_trim-galore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.0-0</code>,  <code>0.6.11-0</code>,  <code>0.6.10-2</code>,  <code>0.6.10-1</code>,  <code>0.6.10-0</code>,  <code>0.6.9-0</code>,  </span></summary>
      

      ``2.3.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``,  ``0.6.11-0``,  ``0.6.10-2``,  ``0.6.10-1``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.7-0``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.0-0``,  ``0.4.5-2``,  ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``

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

    pixi global install trim-galore

to add into an existing workspace instead, run::

    pixi add trim-galore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trim-galore

Alternatively, to install into a new environment, run::

    conda create -n envname trim-galore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trim-galore:<tag>

(see `trim-galore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trim-galore| image:: https://img.shields.io/conda/dn/bioconda/trim-galore.svg?style=flat
   :target: https://anaconda.org/bioconda/trim-galore
   :alt:   (downloads)
.. |docker_trim-galore| image:: https://quay.io/repository/biocontainers/trim-galore/status
   :target: https://quay.io/repository/biocontainers/trim-galore
.. _`trim-galore/tags`: https://quay.io/repository/biocontainers/trim-galore?tab=tags


.. raw:: html

   <script>
      var package = "trim-galore";
      var versions = ["2.3.0","2.2.0","2.2.0","2.1.0","0.6.11"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_trim-galore"></div>
   <div style="width: 100%" id="platform_plot_trim-galore"></div>
   <div style="width: 100%" id="cdf_plot_trim-galore"></div>



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
         
            // Build cdf plot for trim-galore
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/trim-galore/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_trim-galore', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for trim-galore
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/trim-galore/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_trim-galore', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for trim-galore
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/trim-galore/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_trim-galore', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trim-galore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trim-galore/README.html