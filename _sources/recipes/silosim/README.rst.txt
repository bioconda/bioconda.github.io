:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'silosim'
.. highlight: bash

silosim
=======

.. conda:recipe:: silosim
   :replaces_section_title:
   :noindex:

   Profiles per\-site bacterial genome variability and simulates bacterial genome evolution.

   :homepage: https://github.com/microbialARC/SILOSim
   :documentation: https://github.com/microbialARC/SILOSim/tree/main/docs
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`silosim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/silosim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/silosim/meta.yaml>`_

   SILOSim profiles per\-site variability of a bacterial genome against closely related
   genomes\, inferring substitution entropy and mobile genetic elements\, and uses these
   empirical profiles to simulate genome evolution along a time\-scale phylogeny with
   weighted substitution\, recombination\, and gene gain and loss. This package installs the
   command\-line interface and the Snakemake workflows\; tool environments \(Bakta\, WhatsGNU\,
   NCBI Datasets\, FastANI\, MUMmer4\, snp\-dists and R packages\) are created by Snakemake on first use.



.. conda:package:: silosim

   |downloads_silosim| |docker_silosim|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends on pandas: ``>=2.0``
   :depends on python: ``>=3.11``
   :depends on pyyaml: ``>=6.0``
   :depends on snakemake-minimal: ``>=9.0,<10``

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

    pixi global install silosim

to add into an existing workspace instead, run::

    pixi add silosim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install silosim

Alternatively, to install into a new environment, run::

    conda create -n envname silosim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/silosim:<tag>

(see `silosim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_silosim| image:: https://img.shields.io/conda/dn/bioconda/silosim.svg?style=flat
   :target: https://anaconda.org/bioconda/silosim
   :alt:   (downloads)
.. |docker_silosim| image:: https://quay.io/repository/biocontainers/silosim/status
   :target: https://quay.io/repository/biocontainers/silosim
.. _`silosim/tags`: https://quay.io/repository/biocontainers/silosim?tab=tags


.. raw:: html

   <script>
      var package = "silosim";
      var versions = ["0.1.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_silosim"></div>
   <div style="width: 100%" id="platform_plot_silosim"></div>
   <div style="width: 100%" id="cdf_plot_silosim"></div>



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
         
            // Build cdf plot for silosim
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/silosim/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_silosim', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for silosim
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/silosim/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_silosim', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for silosim
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/silosim/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_silosim', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
Tool environments are built by Snakemake on the first run\, so the first run needs internet access. SILOSim runs on Linux\; the profiler with public query genomes needs at least 40 GB of RAM.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/silosim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/silosim/README.html