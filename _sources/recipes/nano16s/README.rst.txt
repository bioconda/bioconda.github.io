:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'nano16s'
.. highlight: bash

nano16s
=======

.. conda:recipe:: nano16s
   :replaces_section_title:
   :noindex:

   Taxonomic profiling of Oxford Nanopore full\-length 16S rRNA amplicon data

   :homepage: https://github.com/lz245/nano16s
   :documentation: https://github.com/lz245/nano16s#readme
   
   :license: MIT
   :recipe: /`nano16s <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nano16s>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nano16s/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.22031297`

   A Snakemake workflow for taxonomic profiling of Oxford Nanopore full\-length
   16S rRNA amplicon data. Runs on an ordinary laptop or workstation with a
   single install command and no container or cluster requirement.

   Includes a builder for an up\-to\-date Emu reference database from the current
   NCBI 16S RefSeq Targeted Loci collection. The database is downloaded and
   built by \`nano16s db build\` after installation rather than shipped in the
   package\, since it is refreshed on NCBI\'s schedule rather than the tool\'s.



.. conda:package:: nano16s

   |downloads_nano16s| |docker_nano16s|

   :versions:
      
      

      ``1.2.1-0``

      

   
   :depends on chopper: ``>=0.9``
   :depends on emu: ``>=3.6``
   :depends on minimap2: ``>=2.28``
   :depends on nanostat: ``>=1.6``
   :depends on porechop_abi: ``>=0.5``
   :depends on python: ``>=3.10``
   :depends on samtools: ``>=1.19``
   :depends on snakemake: ``>=9.0,<10``
   :depends on wget: 

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

    pixi global install nano16s

to add into an existing workspace instead, run::

    pixi add nano16s

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nano16s

Alternatively, to install into a new environment, run::

    conda create -n envname nano16s

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nano16s:<tag>

(see `nano16s/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nano16s| image:: https://img.shields.io/conda/dn/bioconda/nano16s.svg?style=flat
   :target: https://anaconda.org/bioconda/nano16s
   :alt:   (downloads)
.. |docker_nano16s| image:: https://quay.io/repository/biocontainers/nano16s/status
   :target: https://quay.io/repository/biocontainers/nano16s
.. _`nano16s/tags`: https://quay.io/repository/biocontainers/nano16s?tab=tags


.. raw:: html

   <script>
      var package = "nano16s";
      var versions = ["1.2.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_nano16s"></div>
   <div style="width: 100%" id="platform_plot_nano16s"></div>
   <div style="width: 100%" id="cdf_plot_nano16s"></div>



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
         
            // Build cdf plot for nano16s
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nano16s/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_nano16s', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for nano16s
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nano16s/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_nano16s', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for nano16s
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nano16s/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_nano16s', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nano16s/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nano16s/README.html