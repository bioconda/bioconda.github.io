:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hydra-amr'
.. highlight: bash

hydra-amr
=========

.. conda:recipe:: hydra-amr
   :replaces_section_title:
   :noindex:

   Unified AMR\, virulence\, point\-mutation\, heteroresistance\, MLST and lineage typing

   :homepage: https://github.com/iowa69/hydra
   :documentation: https://github.com/iowa69/hydra#readme
   
   :license: MIT / MIT
   :recipe: /`hydra-amr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hydra-amr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hydra-amr/meta.yaml>`_

   Hydra screens bacterial assemblies and raw reads for acquired resistance and
   virulence genes\, organism\-specific resistance point mutations\, multi\-locus
   sequence types and lineage typing schemes\, in one pass over one set of
   databases\, replacing a pipeline of four or five single\-purpose tools.

   It reports heteroresistance directly from reads\: allele fractions are
   measured at every catalogued mutation position\, so a resistance mutation
   carried by only some copies of a multi\-copy locus \- the usual situation for
   the 23S rRNA mutations behind linezolid resistance \- is detected even though
   the assembly consensus is wild type. A FASTQ\-only sample is also sequence
   typed\, by mapping reads to the scheme\'s loci and reading the consensus back
   against every allele\, and each resistance gene it carries is compared with
   the closest reference so its mutations are reported with the fraction of
   reads supporting them.

   Acquired genes are screened against NCBI\, CARD\, ResFinder\, ARG\-ANNOT\,
   MEGARes\, VFDB\, PlasmidFinder\, EcOH and E. coli VF together\, with curated
   drug\-class and gene\-family annotation transferred onto every one of them.
   Results come out as TSV\, CSV\, JSON\, XLSX or a self\-contained HTML report
   with clustered heatmaps\, pivoted on samples or genes\, showing
   presence\/absence\, percent identity\, coverage\, read depth or allele fraction\,
   plus flat one\-row\-per\-hit layouts that existing downstream scripts can read.

   Reference databases are not redistributed. After installation\, \`hydra db
   download\` fetches them from their own upstream sources and converts them \-
   the NCBI protein and point\-mutation references\, NCBI\, CARD\, ResFinder\,
   PlasmidFinder and VFDB gene catalogues\, every PubMLST 7\-locus scheme\, and the
   lineage typing loci and species sketches \- so a fresh machine needs one
   command and no other tool. \`hydra db import\` builds them instead from
   reference data already present\, and \`hydra db bundle\` packs them for machines
   with neither a source nor a network. Each database keeps its own licence\,
   which \`hydra db info\` prints along with its citation.



.. conda:package:: hydra-amr

   |downloads_hydra-amr| |docker_hydra-amr|

   :versions:
      
      

      ``1.3.0-0``

      

   
   :depends on blast: ``>=2.12``
   :depends on mash: ``>=2.3``
   :depends on minimap2: ``>=2.24``
   :depends on numpy: ``>=1.20``
   :depends on openpyxl: ``>=3.0``
   :depends on pandas: ``>=1.3``
   :depends on pysam: ``>=0.19``
   :depends on python: ``>=3.9``
   :depends on samtools: ``>=1.15``
   :depends on scipy: ``>=1.7``

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

    pixi global install hydra-amr

to add into an existing workspace instead, run::

    pixi add hydra-amr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hydra-amr

Alternatively, to install into a new environment, run::

    conda create -n envname hydra-amr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hydra-amr:<tag>

(see `hydra-amr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hydra-amr| image:: https://img.shields.io/conda/dn/bioconda/hydra-amr.svg?style=flat
   :target: https://anaconda.org/bioconda/hydra-amr
   :alt:   (downloads)
.. |docker_hydra-amr| image:: https://quay.io/repository/biocontainers/hydra-amr/status
   :target: https://quay.io/repository/biocontainers/hydra-amr
.. _`hydra-amr/tags`: https://quay.io/repository/biocontainers/hydra-amr?tab=tags


.. raw:: html

   <script>
      var package = "hydra-amr";
      var versions = ["1.3.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_hydra-amr"></div>
   <div style="width: 100%" id="platform_plot_hydra-amr"></div>
   <div style="width: 100%" id="cdf_plot_hydra-amr"></div>



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
         
            // Build cdf plot for hydra-amr
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hydra-amr/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_hydra-amr', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for hydra-amr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hydra-amr/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_hydra-amr', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for hydra-amr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hydra-amr/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_hydra-amr', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hydra-amr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hydra-amr/README.html