:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'linezolid-amr'
.. highlight: bash

linezolid-amr
=============

.. conda:recipe:: linezolid-amr
   :replaces_section_title:
   :noindex:

   Integrated AMR profiling \+ 23S rRNA linezolid heteroresistance \+ in\-house MLST \(S. aureus\, E. faecalis\, E. faecium\, S. pneumoniae\)

   :homepage: https://github.com/iowa69/linezolid-amr
   :documentation: https://github.com/iowa69/linezolid-amr#readme
   
   :license: MIT / MIT
   :recipe: /`linezolid-amr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linezolid-amr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linezolid-amr/meta.yaml>`_

   linezolid\-amr combines NCBI AMRFinderPlus gene\/mutation detection\, an
   in\-house BLAST\-based MLST caller \(no external mlst dependency\)\, and
   species\-aware read mapping to bundled 23S rRNA references to detect
   heteroresistant linezolid\-resistance mutations \(e.g. G2576T\, G2505A\)
   in Staphylococcus aureus\, Enterococcus faecalis\, Enterococcus faecium\,
   and Streptococcus pneumoniae. PubMLST schemes are shipped inside the
   package so MLST works fully offline\; per\-organism 23S FASTA and
   E. coli K\-12 position maps are also bundled. MLST runs first and
   infers the organism \+ Sequence Type\; the same organism drives both
   AMRFinderPlus species mode and 23S reference selection. Mutations are
   reported in E. coli K\-12 23S numbering \(clinical literature convention\).
   Outputs include per\-sample wide CSV \(Kleborate\-style\)\, long CSV\, sorted
   indexed BAM\, full 23S VCF\, JSON report\, and human\-readable text summary.
   A \`folder\` subcommand processes an entire input directory in a single
   command and emits cohort\-level aggregated CSVs.



.. conda:package:: linezolid-amr

   |downloads_linezolid-amr| |docker_linezolid-amr|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.1-0``

      

   
   :depends on bcftools: ``>=1.18``
   :depends on biopython: ``>=1.81``
   :depends on click: ``>=8.0``
   :depends on minimap2: ``>=2.24``
   :depends on ncbi-amrfinderplus: ``>=4.0``
   :depends on pysam: ``>=0.22``
   :depends on python: ``>=3.9``
   :depends on samtools: ``>=1.18``

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

    pixi global install linezolid-amr

to add into an existing workspace instead, run::

    pixi add linezolid-amr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install linezolid-amr

Alternatively, to install into a new environment, run::

    conda create -n envname linezolid-amr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/linezolid-amr:<tag>

(see `linezolid-amr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_linezolid-amr| image:: https://img.shields.io/conda/dn/bioconda/linezolid-amr.svg?style=flat
   :target: https://anaconda.org/bioconda/linezolid-amr
   :alt:   (downloads)
.. |docker_linezolid-amr| image:: https://quay.io/repository/biocontainers/linezolid-amr/status
   :target: https://quay.io/repository/biocontainers/linezolid-amr
.. _`linezolid-amr/tags`: https://quay.io/repository/biocontainers/linezolid-amr?tab=tags


.. raw:: html

   <script>
      var package = "linezolid-amr";
      var versions = ["0.1.6","0.1.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_linezolid-amr"></div>
   <div style="width: 100%" id="platform_plot_linezolid-amr"></div>
   <div style="width: 100%" id="cdf_plot_linezolid-amr"></div>



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
         
            // Build cdf plot for linezolid-amr
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/linezolid-amr/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_linezolid-amr', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for linezolid-amr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/linezolid-amr/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_linezolid-amr', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for linezolid-amr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/linezolid-amr/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_linezolid-amr', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/linezolid-amr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/linezolid-amr/README.html