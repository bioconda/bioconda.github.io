:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ont-end-reason'
.. highlight: bash

ont-end-reason
==============

.. conda:recipe:: ont-end-reason
   :replaces_section_title:
   :noindex:

   Comprehensive CLI for Oxford Nanopore end\_reason analysis

   :homepage: https://github.com/Single-Molecule-Sequencing/ont-end-reason
   :documentation: https://silver-adventure-o322543.pages.github.io/
   
   :license: MIT / MIT
   :recipe: /`ont-end-reason <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-end-reason>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-end-reason/meta.yaml>`_

   ont\-end\-reason is the canonical analysis toolkit for Oxford Nanopore
   Technologies \`end\_reason\` metadata — the tag every read carries that
   explains why sequencing stopped. The package provides\:

     \- 9 analyses \(distribution\, length\, quality with GMM\, temporal\,
       hypothesis tests\, UMC posterior\, signal trace\, SMA metrics\, tables\)
     \- 4 filter operations \(tag\, filter\, export\-fastq\, stats\)
     \- 4 paper figure reproducers \(fig3\, fig5\, fig6\, supplementary\)
     \- 6\-section composed interactive HTML reports

   The Bayesian UMC posterior analysis estimates how much sequence was
   truncated by adaptive sampling — recovering an estimate of \"unobserved\"
   sequence per read. This is the central novel contribution of the
   companion paper.

   Companion to the end\-reason paper from the Single\-Molecule\-Sequencing
   lab at the University of Michigan.



.. conda:package:: ont-end-reason

   |downloads_ont-end-reason| |docker_ont-end-reason|

   :versions:
      
      

      ``0.2.0-0``,  ``0.2.0a1-0``

      

   
   :depends on click: ``>=8.1``
   :depends on jinja2: ``>=3.1``
   :depends on matplotlib-base: ``>=3.7``
   :depends on numpy: ``>=1.24``
   :depends on pandas: ``>=2.0``
   :depends on pod5: ``>=0.3``
   :depends on pysam: ``>=0.22``
   :depends on python: ``>=3.10``
   :depends on pyyaml: ``>=6.0``
   :depends on scipy: ``>=1.10``
   :depends on structlog: ``>=24.1``
   :depends on tabulate: ``>=0.9``

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

    pixi global install ont-end-reason

to add into an existing workspace instead, run::

    pixi add ont-end-reason

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ont-end-reason

Alternatively, to install into a new environment, run::

    conda create -n envname ont-end-reason

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ont-end-reason:<tag>

(see `ont-end-reason/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ont-end-reason| image:: https://img.shields.io/conda/dn/bioconda/ont-end-reason.svg?style=flat
   :target: https://anaconda.org/bioconda/ont-end-reason
   :alt:   (downloads)
.. |docker_ont-end-reason| image:: https://quay.io/repository/biocontainers/ont-end-reason/status
   :target: https://quay.io/repository/biocontainers/ont-end-reason
.. _`ont-end-reason/tags`: https://quay.io/repository/biocontainers/ont-end-reason?tab=tags


.. raw:: html

   <script>
      var package = "ont-end-reason";
      var versions = ["0.2.0","0.2.0a1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_ont-end-reason"></div>
   <div style="width: 100%" id="platform_plot_ont-end-reason"></div>
   <div style="width: 100%" id="cdf_plot_ont-end-reason"></div>



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
         
            // Build cdf plot for ont-end-reason
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ont-end-reason/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_ont-end-reason', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for ont-end-reason
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ont-end-reason/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_ont-end-reason', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for ont-end-reason
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ont-end-reason/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_ont-end-reason', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ont-end-reason/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ont-end-reason/README.html