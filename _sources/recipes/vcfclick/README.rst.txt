:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfclick'
.. highlight: bash

vcfclick
========

.. conda:recipe:: vcfclick
   :replaces_section_title:
   :noindex:

   Embedded VCF databases with auditable natural\-language queries

   :homepage: https://github.com/nuin/vcfclick
   :documentation: https://github.com/nuin/vcfclick/blob/main/docs/SCHEMA.md
   
   :license: Apache / Apache-2.0
   :recipe: /`vcfclick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfclick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfclick/meta.yaml>`_

   vcfclick is an embedded analytical store for cohort Variant Call Format
   \(VCF\) data. The cohort is stored in its own directory\, and queries run
   without a daemon\, fully serverless. For Bioconda\, DuckDB is used for
   storage of all variants\, genotypes\, and annotations if needed. chDB can
   be used after being installed by pip. DuckDB also stores annotations as
   one extra file per cohort\, added with a separate command.

   MCP is bundled in the package\, exposing the underlying query system so
   an LLM can query the databases across different cohorts. Arrow\/Parquet
   are available as a public interchange format via \`db dump\` and
   \`db ingest\-parquet\`.

   It also reimplements GATK3\-style CombineVariants \(\`combine\`\)\, trio
   analysis across Mendelian inheritance models \(\`db trio\`\)\, and a native
   truth\-vs\-query concordance benchmark \(\`benchmark\`\) with normalized and
   local\-haplotype engines and GA4GH\-shaped reports.



.. conda:package:: vcfclick

   |downloads_vcfclick| |docker_vcfclick|

   :versions:
      
      

      ``0.8.1-0``

      

   
   :depends on click: ``>=8.1``
   :depends on cyvcf2: ``>=0.31``
   :depends on duckdb: ``>=1.0``
   :depends on mcp: ``>=1.0``
   :depends on numpy: ``>=1.24``
   :depends on pyarrow: ``>=15``
   :depends on pyfaidx: ``>=0.8``
   :depends on python: ``>=3.11``

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

    pixi global install vcfclick

to add into an existing workspace instead, run::

    pixi add vcfclick

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcfclick

Alternatively, to install into a new environment, run::

    conda create -n envname vcfclick

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcfclick:<tag>

(see `vcfclick/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcfclick| image:: https://img.shields.io/conda/dn/bioconda/vcfclick.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfclick
   :alt:   (downloads)
.. |docker_vcfclick| image:: https://quay.io/repository/biocontainers/vcfclick/status
   :target: https://quay.io/repository/biocontainers/vcfclick
.. _`vcfclick/tags`: https://quay.io/repository/biocontainers/vcfclick?tab=tags


.. raw:: html

   <script>
      var package = "vcfclick";
      var versions = ["0.8.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_vcfclick"></div>
   <div style="width: 100%" id="platform_plot_vcfclick"></div>
   <div style="width: 100%" id="cdf_plot_vcfclick"></div>



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
         
            // Build cdf plot for vcfclick
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcfclick/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_vcfclick', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for vcfclick
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcfclick/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_vcfclick', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for vcfclick
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcfclick/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_vcfclick', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfclick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfclick/README.html