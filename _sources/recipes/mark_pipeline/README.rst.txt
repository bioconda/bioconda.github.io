:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'mark_pipeline'
.. highlight: bash

mark_pipeline
=============

.. conda:recipe:: mark_pipeline
   :replaces_section_title:
   :noindex:

   Variant calling for the mitochondrial control region from overlapping amplicons \(Illumina and Oxford Nanopore\).

   :homepage: https://github.com/DP-Genome/MARK
   :documentation: https://github.com/DP-Genome/MARK/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`mark_pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mark_pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mark_pipeline/meta.yaml>`_

   MARK \(Mitochondrial Amplicon Resolving Kit\) analyses mtDNA control\-region data from overlapping amplicon panels
   such as the Promega PowerSeq CRM Nested System\, on Illumina and Oxford Nanopore data. It keeps only whole PCR
   products of one amplicon\, hard\-clips the primer bases\, aligns to a shifted rCRS so the control region is
   continuous\, and calls variants with freebayes\, with a heteroplasmy report and a mixture check. MARK.sh \(nanopore\)
   and MARK\-I.sh \(Illumina\) run from the command line\; MARKLaunch.py opens a graphical launcher.
   freebayes is not a dependency of this package\, because its builds conflict with samtools\/bcftools 1.24. Install
   it in its own environment\, which MARK finds by itself\:
   conda create \-n mark\_fb \-c conda\-forge \-c bioconda freebayes\=1.3.10



.. conda:package:: mark_pipeline

   |downloads_mark_pipeline| |docker_mark_pipeline|

   :versions:
      
      

      ``1.7.3-0``

      

   
   :depends on bcftools: ``>=1.24``
   :depends on biopython: 
   :depends on bwa-mem2: ``>=2.3``
   :depends on cutadapt: ``>=5.2``
   :depends on fastp: ``>=1.3.7``
   :depends on fastplong: ``>=0.7.1``
   :depends on fastqc: ``>=0.12.1``
   :depends on matplotlib-base: 
   :depends on minimap2: ``>=2.31``
   :depends on numpy: ``<2.0``
   :depends on pandas: 
   :depends on pillow: 
   :depends on pysam: 
   :depends on python: ``3.10.*``
   :depends on samtools: ``>=1.24``
   :depends on tk: 

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

    pixi global install mark_pipeline

to add into an existing workspace instead, run::

    pixi add mark_pipeline

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mark_pipeline

Alternatively, to install into a new environment, run::

    conda create -n envname mark_pipeline

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mark_pipeline:<tag>

(see `mark_pipeline/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mark_pipeline| image:: https://img.shields.io/conda/dn/bioconda/mark_pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/mark_pipeline
   :alt:   (downloads)
.. |docker_mark_pipeline| image:: https://quay.io/repository/biocontainers/mark_pipeline/status
   :target: https://quay.io/repository/biocontainers/mark_pipeline
.. _`mark_pipeline/tags`: https://quay.io/repository/biocontainers/mark_pipeline?tab=tags


.. raw:: html

   <script>
      var package = "mark_pipeline";
      var versions = ["1.7.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_mark_pipeline"></div>
   <div style="width: 100%" id="platform_plot_mark_pipeline"></div>
   <div style="width: 100%" id="cdf_plot_mark_pipeline"></div>



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
         
            // Build cdf plot for mark_pipeline
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mark_pipeline/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_mark_pipeline', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for mark_pipeline
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mark_pipeline/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_mark_pipeline', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for mark_pipeline
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mark_pipeline/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_mark_pipeline', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mark_pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mark_pipeline/README.html