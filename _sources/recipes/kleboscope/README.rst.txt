:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kleboscope'
.. highlight: bash

kleboscope
==========

.. conda:recipe:: kleboscope
   :replaces_section_title:
   :noindex:

   Kleboscope\: Comprehensive K. pneumoniae genomic typing pipeline with parallel execution

   :homepage: https://github.com/bbeckley-hub/Kleboscope
   :license: MIT
   :recipe: /`kleboscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kleboscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kleboscope/meta.yaml>`_

   Kleboscope is a complete\, automated genomic analysis pipeline for Klebsiella pneumoniae\,
   featuring parallel execution for rapid processing of bacterial genomes.



.. conda:package:: kleboscope

   |downloads_kleboscope| |docker_kleboscope|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on abricate: ``>=1.2.0``
   :depends on any2fasta: 
   :depends on beautifulsoup4: ``>=4.11.0``
   :depends on biopython: ``>=1.85``
   :depends on blast: ``>=2.13.0``
   :depends on click: ``>=8.0.0``
   :depends on kaptive: ``>=3.1.0``
   :depends on lxml: ``>=4.9.0``
   :depends on matplotlib-base: ``>=3.5.0``
   :depends on pandas: ``>=1.5.0``
   :depends on perl: 
   :depends on perl-data-dumper: 
   :depends on perl-file-which: 
   :depends on perl-getopt-long: 
   :depends on perl-json: 
   :depends on perl-list-moreutils: 
   :depends on perl-lwp-protocol-https: 
   :depends on perl-moo: 
   :depends on perl-path-tiny: 
   :depends on plotly: ``>=5.10.0``
   :depends on psutil: ``>=5.9.0``
   :depends on python: ``>=3.9``
   :depends on requests: ``>=2.28.0``
   :depends on scipy: ``>=1.10.1``
   :depends on seaborn: ``>=0.12.0``
   :depends on tqdm: ``>=4.64.0``

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

    pixi global install kleboscope

to add into an existing workspace instead, run::

    pixi add kleboscope

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kleboscope

Alternatively, to install into a new environment, run::

    conda create -n envname kleboscope

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kleboscope:<tag>

(see `kleboscope/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kleboscope| image:: https://img.shields.io/conda/dn/bioconda/kleboscope.svg?style=flat
   :target: https://anaconda.org/bioconda/kleboscope
   :alt:   (downloads)
.. |docker_kleboscope| image:: https://quay.io/repository/biocontainers/kleboscope/status
   :target: https://quay.io/repository/biocontainers/kleboscope
.. _`kleboscope/tags`: https://quay.io/repository/biocontainers/kleboscope?tab=tags


.. raw:: html

   <script>
      var package = "kleboscope";
      var versions = ["1.0.1","1.0.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_kleboscope"></div>
   <div style="width: 100%" id="platform_plot_kleboscope"></div>
   <div style="width: 100%" id="cdf_plot_kleboscope"></div>



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
         
            // Build cdf plot for kleboscope
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kleboscope/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_kleboscope', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for kleboscope
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kleboscope/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_kleboscope', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for kleboscope
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kleboscope/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_kleboscope', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kleboscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kleboscope/README.html