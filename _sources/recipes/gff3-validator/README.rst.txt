:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'gff3-validator'
.. highlight: bash

gff3-validator
==============

.. conda:recipe:: gff3-validator
   :replaces_section_title:
   :noindex:

   Validate GFF3 files against GFF3 1.26\, with optional genome\-aware biology checks.

   :homepage: https://github.com/FAIR-bioHeaders/gff3-validator
   :documentation: https://github.com/FAIR-bioHeaders/gff3-validator/blob/main/docs/rules.md
   
   :license: MIT / MIT
   :recipe: /`gff3-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3-validator/meta.yaml>`_

   gff3\-validator checks GFF3 files against the GFF3 1.26 specification\:
   syntax\, attributes\, directives and feature structure \(IDs\, Parent
   references\, cycles\, sequence regions\)\, and with \-\-genome\, CDS phase\,
   start and stop codons\, internal stops and strand consistency. Every
   finding cites a numbered rule with its specification reference and a
   suggested fix. Reports are text\, JSON\, HTML or SARIF. Plain and
   gzip\/BGZF input is streamed. Also runs in the browser at
   https\:\/\/fair\-bioheaders.github.io\/gff3\-validator\/



.. conda:package:: gff3-validator

   |downloads_gff3-validator| |docker_gff3-validator|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on python: ``>=3.10``
   :depends on pyyaml: ``>=6.0.1,<7``

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

    pixi global install gff3-validator

to add into an existing workspace instead, run::

    pixi add gff3-validator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gff3-validator

Alternatively, to install into a new environment, run::

    conda create -n envname gff3-validator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gff3-validator:<tag>

(see `gff3-validator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gff3-validator| image:: https://img.shields.io/conda/dn/bioconda/gff3-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/gff3-validator
   :alt:   (downloads)
.. |docker_gff3-validator| image:: https://quay.io/repository/biocontainers/gff3-validator/status
   :target: https://quay.io/repository/biocontainers/gff3-validator
.. _`gff3-validator/tags`: https://quay.io/repository/biocontainers/gff3-validator?tab=tags


.. raw:: html

   <script>
      var package = "gff3-validator";
      var versions = ["0.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_gff3-validator"></div>
   <div style="width: 100%" id="platform_plot_gff3-validator"></div>
   <div style="width: 100%" id="cdf_plot_gff3-validator"></div>



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
         
            // Build cdf plot for gff3-validator
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gff3-validator/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_gff3-validator', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for gff3-validator
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gff3-validator/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_gff3-validator', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for gff3-validator
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gff3-validator/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_gff3-validator', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gff3-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gff3-validator/README.html