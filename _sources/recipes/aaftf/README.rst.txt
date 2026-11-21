:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'aaftf'
.. highlight: bash

aaftf
=====

.. conda:recipe:: aaftf
   :replaces_section_title:
   :noindex:

   Automatic Assembly For The Fungi

   :homepage: https://github.com/stajichlab/AAFTF
   :documentation: https://aaftf.readthedocs.io
   
   :license: MIT AND GPL-3.0-only
   :recipe: /`aaftf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aaftf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aaftf/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.1620526`

   AAFTF automates draft fungal genome assembly from Illumina reads\, optionally with
   long reads\: read trimming and contaminant filtering\, SPAdes\/Flye assembly\, vector and
   contaminant screening \(BLAST\, sourmash\)\, duplicate removal\, polishing\, contig sorting
   and renaming\, coverage analysis and summary statistics including telomere detection.

   Tools used only by optional steps or non\-default methods are not installed with this
   package\; add the ones you need\: bowtie2\, fastp\, trimmomatic\, megahit\, unicycler\,
   nextpolish2\, yak\, novoplasty\, ncbi\-fcs\-gx. \`AAFTF dependency\` lists what is missing.



.. conda:package:: aaftf

   |downloads_aaftf| |docker_aaftf|

   :versions:
      
      

      ``0.8.1-0``

      

   
   :depends on bbmap: ``>=39.80,<40``
   :depends on biopython: ``>=1.88``
   :depends on blast: 
   :depends on bwa: 
   :depends on flye: 
   :depends on freebayes: 
   :depends on matplotlib-base: ``>=3.10.9``
   :depends on minimap2: 
   :depends on mosdepth: ``>=0.3.10``
   :depends on perl: 
   :depends on pigz: 
   :depends on polypolish: ``>=0.7.1,<0.8``
   :depends on psutil: ``>=7.2.2``
   :depends on pypolca: ``>=0.5.0,<0.6``
   :depends on python: ``>=3.11,<3.14``
   :depends on racon: 
   :depends on samtools: ``>=1.24,<2``
   :depends on sourmash: ``>=4.8``
   :depends on sourmash_plugin_branchwater: ``>=0.9.15``
   :depends on spades: 

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

    pixi global install aaftf

to add into an existing workspace instead, run::

    pixi add aaftf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aaftf

Alternatively, to install into a new environment, run::

    conda create -n envname aaftf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aaftf:<tag>

(see `aaftf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aaftf| image:: https://img.shields.io/conda/dn/bioconda/aaftf.svg?style=flat
   :target: https://anaconda.org/bioconda/aaftf
   :alt:   (downloads)
.. |docker_aaftf| image:: https://quay.io/repository/biocontainers/aaftf/status
   :target: https://quay.io/repository/biocontainers/aaftf
.. _`aaftf/tags`: https://quay.io/repository/biocontainers/aaftf?tab=tags


.. raw:: html

   <script>
      var package = "aaftf";
      var versions = ["0.8.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_aaftf"></div>
   <div style="width: 100%" id="platform_plot_aaftf"></div>
   <div style="width: 100%" id="cdf_plot_aaftf"></div>



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
         
            // Build cdf plot for aaftf
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/aaftf/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_aaftf', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for aaftf
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/aaftf/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_aaftf', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for aaftf
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/aaftf/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_aaftf', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aaftf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aaftf/README.html