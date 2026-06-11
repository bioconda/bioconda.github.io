:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aquamis'
.. highlight: bash

aquamis
=======

.. conda:recipe:: aquamis
   :replaces_section_title:
   :noindex:

   AQUAMIS is a snakemake pipeline for routine assembly and quality assessment of microbial isolate sequencing experiments.

   :homepage: https://gitlab.com/bfr_bioinformatics/AQUAMIS
   :license: BSD-3
   :recipe: /`aquamis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquamis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquamis/meta.yaml>`_

   


.. conda:package:: aquamis

   |downloads_aquamis| |docker_aquamis|

   :versions:
      
      

      ``1.4.0-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.0-0``

      

   
   :depends on bbmap: ``>=39``
   :depends on biopython: ``>=1.79``
   :depends on blast: ``>=2.14``
   :depends on bracken: ``>=2.8``
   :depends on bwa: ``>=0.7.17``
   :depends on cerberus: ``>=1.3.4``
   :depends on circos: ``>=0.69.9``
   :depends on confindr: ``0.7.4.*``
   :depends on entrez-direct: ``>=16.2``
   :depends on fastp: ``>=0.23.2``
   :depends on genson: ``>=1.2.2``
   :depends on jsonschema: ``>=4.17``
   :depends on kma: ``>=1.2``
   :depends on kmc: ``>=3.2.1``
   :depends on kraken2: ``>=2.1.3``
   :depends on mash: ``>=2.3``
   :depends on minimap2: ``>=2.26``
   :depends on mlst: ``>=2.23``
   :depends on numpy: ``>=1.21``
   :depends on pandas: ``>=1.3.5``
   :depends on pandoc: ``>=2.19``
   :depends on perl-bio-tools-run-alignment-tcoffee: ``1.7.4 pl5321hdfd78af_4``
   :depends on pilon: ``>=1.24``
   :depends on python: ``3.7.*``
   :depends on pyyaml: ``>=6``
   :depends on quast: ``>=5.2.0``
   :depends on r-base: ``4.0.*``
   :depends on r-dt: ``>=0.25``
   :depends on r-knitr: ``>=1.40``
   :depends on r-rmarkdown: ``>=2.16``
   :depends on r-rrapply: ``>=1.2.5``
   :depends on r-tidyverse: ``>=1.3.2``
   :depends on r-urltools: ``>=1.7.3``
   :depends on samtools: ``>=1.12``
   :depends on seqtk: ``>=1.4``
   :depends on shovill: ``>=1.1.0``
   :depends on snakemake-minimal: ``7.*``
   :depends on spades: ``>=3.15``
   :depends on taxonkit: ``>=0.15``
   :depends on trimmomatic: ``>=0.39``
   :depends on tzdata: 

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

    pixi global install aquamis

to add into an existing workspace instead, run::

    pixi add aquamis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aquamis

Alternatively, to install into a new environment, run::

    conda create -n envname aquamis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aquamis:<tag>

(see `aquamis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aquamis| image:: https://img.shields.io/conda/dn/bioconda/aquamis.svg?style=flat
   :target: https://anaconda.org/bioconda/aquamis
   :alt:   (downloads)
.. |docker_aquamis| image:: https://quay.io/repository/biocontainers/aquamis/status
   :target: https://quay.io/repository/biocontainers/aquamis
.. _`aquamis/tags`: https://quay.io/repository/biocontainers/aquamis?tab=tags


.. raw:: html

   <script>
      var package = "aquamis";
      var versions = ["1.4.0","1.3.7","1.3.6","1.3.5","1.3.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_aquamis"></div>
   <div style="width: 100%" id="platform_plot_aquamis"></div>
   <div style="width: 100%" id="cdf_plot_aquamis"></div>



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
         
            // Build cdf plot for aquamis
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/aquamis/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_aquamis', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for aquamis
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/aquamis/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_aquamis', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for aquamis
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/aquamis/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_aquamis', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aquamis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aquamis/README.html