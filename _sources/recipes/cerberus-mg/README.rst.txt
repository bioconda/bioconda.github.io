:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cerberus-mg'
.. highlight: bash

cerberus-mg
===========

.. conda:recipe:: cerberus-mg
   :replaces_section_title:
   :noindex:

   Three\-headed host\-removal pipeline for metagenomics\: assembly\, profiling\, and GDPR\-compliant outputs from one run.

   :homepage: https://github.com/iowa69/cerberus
   :license: MIT / MIT
   :recipe: /`cerberus-mg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cerberus-mg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cerberus-mg/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.20258069`

   Cerberus is an opinionated all\-in\-one host\-decontamination pipeline that
   produces three publication\-ready outputs from a single run\: a paired\-end
   assembly\-ready FASTQ pair \(conservative\)\, a single merged FASTQ for
   taxonomic profiling \(aggressive\)\, and a GDPR\-compliant zero\-host scrubbed
   output \(via two orthogonal mechanisms\: Kraken2 \+ minimap2\). Works on
   Illumina short reads\, ONT long reads\, and PacBio HiFi\/CLR. Autotunes its
   parameters from fastp QC.



.. conda:package:: cerberus-mg

   |downloads_cerberus-mg| |docker_cerberus-mg|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on aria2: 
   :depends on bbmap: ``>=39.0``
   :depends on bedtools: ``>=2.31``
   :depends on bowtie2: ``>=2.5``
   :depends on chopper: ``>=0.9``
   :depends on fastp: ``>=0.24``
   :depends on kraken2: ``>=2.1.3``
   :depends on minimap2: ``>=2.28``
   :depends on multiqc: ``>=1.25``
   :depends on pigz: 
   :depends on python: ``>=3.10``
   :depends on pyyaml: ``>=6.0``
   :depends on samtools: ``>=1.20``
   :depends on seqkit: ``>=2.8``
   :depends on tqdm: ``>=4.66``
   :depends on winnowmap: ``>=2.03``
   :depends on zstd: ``>=1.5``

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

    pixi global install cerberus-mg

to add into an existing workspace instead, run::

    pixi add cerberus-mg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cerberus-mg

Alternatively, to install into a new environment, run::

    conda create -n envname cerberus-mg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cerberus-mg:<tag>

(see `cerberus-mg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cerberus-mg| image:: https://img.shields.io/conda/dn/bioconda/cerberus-mg.svg?style=flat
   :target: https://anaconda.org/bioconda/cerberus-mg
   :alt:   (downloads)
.. |docker_cerberus-mg| image:: https://quay.io/repository/biocontainers/cerberus-mg/status
   :target: https://quay.io/repository/biocontainers/cerberus-mg
.. _`cerberus-mg/tags`: https://quay.io/repository/biocontainers/cerberus-mg?tab=tags


.. raw:: html

   <script>
      var package = "cerberus-mg";
      var versions = ["0.1.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_cerberus-mg"></div>
   <div style="width: 100%" id="platform_plot_cerberus-mg"></div>
   <div style="width: 100%" id="cdf_plot_cerberus-mg"></div>



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
         
            // Build cdf plot for cerberus-mg
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cerberus-mg/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_cerberus-mg', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for cerberus-mg
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cerberus-mg/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_cerberus-mg', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for cerberus-mg
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cerberus-mg/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_cerberus-mg', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cerberus-mg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cerberus-mg/README.html