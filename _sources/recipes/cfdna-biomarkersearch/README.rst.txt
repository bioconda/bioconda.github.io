:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cfdna-biomarkersearch'
.. highlight: bash

cfdna-biomarkersearch
=====================

.. conda:recipe:: cfdna-biomarkersearch
   :replaces_section_title:
   :noindex:

   Pipeline to identify candidate cfDNA biomarker sequences from WGS data

   :homepage: https://github.com/avo-hcemm/cfDNA-biomarkers-pipeline
   :documentation: https://github.com/avo-hcemm/cfDNA-biomarkers-pipeline/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`cfdna-biomarkersearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cfdna-biomarkersearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cfdna-biomarkersearch/meta.yaml>`_

   cfDNA\-BiomarkerDiscovery is a pipeline designed to identify candidate biomarker sequences from cell\-free DNA \(cfDNA\) derived from blood samples. The pipeline takes as input\:
   •	An archive of FASTQ files containing paired\-end reads from whole\-genome sequencing \(WGS\) of one or more case cohorts and a control cohort.
   •	Additional required files\: adapter sequences\, genome version for download\, genome information file\, parameter file\, and an archive with genome FASTA files.
   The pipeline performs\:
   1.	Preprocessing\: adapter trimming\, quality filtering\, and alignment to the reference genome.
   2.	Analysis\: identification of candidate genomic regions as potential biomarkers.
   If informative regions are identified\, the pipeline generates a CSV file listing the candidate biomarker sequences along with their associated genomic coordinates.



.. conda:package:: cfdna-biomarkersearch

   |downloads_cfdna-biomarkersearch| |docker_cfdna-biomarkersearch|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.1-0``

      

   
   :depends on bowtie2: 
   :depends on ca-certificates: 
   :depends on curl: 
   :depends on fastqc: 
   :depends on gnupg: 
   :depends on imbalanced-learn: 
   :depends on multiqc: 
   :depends on numpy: 
   :depends on openjdk: ``>=21``
   :depends on pandas: 
   :depends on samtools: 
   :depends on scikit-bio: 
   :depends on scipy: 
   :depends on setuptools: ``<81``
   :depends on sklearn-compat: 
   :depends on tar: 
   :depends on trimmomatic: 
   :depends on unzip: 
   :depends on wget: 
   :depends on xgboost: 

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

    pixi global install cfdna-biomarkersearch

to add into an existing workspace instead, run::

    pixi add cfdna-biomarkersearch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cfdna-biomarkersearch

Alternatively, to install into a new environment, run::

    conda create -n envname cfdna-biomarkersearch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cfdna-biomarkersearch:<tag>

(see `cfdna-biomarkersearch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cfdna-biomarkersearch| image:: https://img.shields.io/conda/dn/bioconda/cfdna-biomarkersearch.svg?style=flat
   :target: https://anaconda.org/bioconda/cfdna-biomarkersearch
   :alt:   (downloads)
.. |docker_cfdna-biomarkersearch| image:: https://quay.io/repository/biocontainers/cfdna-biomarkersearch/status
   :target: https://quay.io/repository/biocontainers/cfdna-biomarkersearch
.. _`cfdna-biomarkersearch/tags`: https://quay.io/repository/biocontainers/cfdna-biomarkersearch?tab=tags


.. raw:: html

   <script>
      var package = "cfdna-biomarkersearch";
      var versions = ["0.1.3","0.1.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_cfdna-biomarkersearch"></div>
   <div style="width: 100%" id="platform_plot_cfdna-biomarkersearch"></div>
   <div style="width: 100%" id="cdf_plot_cfdna-biomarkersearch"></div>



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
         
            // Build cdf plot for cfdna-biomarkersearch
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cfdna-biomarkersearch/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_cfdna-biomarkersearch', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for cfdna-biomarkersearch
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cfdna-biomarkersearch/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_cfdna-biomarkersearch', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for cfdna-biomarkersearch
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cfdna-biomarkersearch/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_cfdna-biomarkersearch', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cfdna-biomarkersearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cfdna-biomarkersearch/README.html