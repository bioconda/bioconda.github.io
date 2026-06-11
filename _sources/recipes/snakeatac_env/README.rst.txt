:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakeatac_env'
.. highlight: bash

snakeatac_env
=============

.. conda:recipe:: snakeatac_env
   :replaces_section_title:
   :noindex:

   snakemake based ATACseq pipeline

   :homepage: https://github.com/sebastian-gregoricchio/snakeATAC
   :documentation: https://github.com/sebastian-gregoricchio/snakeATAC/wiki
   
   :license: GPL-3.0-or-later
   :recipe: /`snakeatac_env <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakeatac_env>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakeatac_env/meta.yaml>`_

   


.. conda:package:: snakeatac_env

   |downloads_snakeatac_env| |docker_snakeatac_env|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on bcftools: 
   :depends on bedtools: 
   :depends on bioconductor-copywriter: 
   :depends on bioconductor-shortread: 
   :depends on bioinfokit: 
   :depends on biopython: 
   :depends on bwa-mem2: 
   :depends on bzip2: 
   :depends on cutadapt: 
   :depends on deeptools: ``>=3.5.2``
   :depends on docutils: 
   :depends on fastcluster: 
   :depends on fastqc: 
   :depends on gatk4: 
   :depends on logomaker: 
   :depends on macs3: 
   :depends on matplotlib-base: 
   :depends on multiqc: ``>=1.23``
   :depends on numpydoc: 
   :depends on pandas: 
   :depends on pdfcombine: 
   :depends on pip: 
   :depends on py-bgzip: 
   :depends on py2bit: 
   :depends on pybedtools: 
   :depends on pybigwig: 
   :depends on pyfaidx: 
   :depends on pysam: 
   :depends on python: 
   :depends on r-colorspace: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-generics: 
   :depends on r-ggplot2: 
   :depends on r-ggtext: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-snow: 
   :depends on r-stringr: 
   :depends on r-viridis: 
   :depends on samtools: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on snakemake: ``>=7.24.0``
   :depends on snpsift: 
   :depends on subread: 
   :depends on tobias: 
   :depends on ucsc-bedgraphtobigwig: 

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

    pixi global install snakeatac_env

to add into an existing workspace instead, run::

    pixi add snakeatac_env

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakeatac_env

Alternatively, to install into a new environment, run::

    conda create -n envname snakeatac_env

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakeatac_env:<tag>

(see `snakeatac_env/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakeatac_env| image:: https://img.shields.io/conda/dn/bioconda/snakeatac_env.svg?style=flat
   :target: https://anaconda.org/bioconda/snakeatac_env
   :alt:   (downloads)
.. |docker_snakeatac_env| image:: https://quay.io/repository/biocontainers/snakeatac_env/status
   :target: https://quay.io/repository/biocontainers/snakeatac_env
.. _`snakeatac_env/tags`: https://quay.io/repository/biocontainers/snakeatac_env?tab=tags


.. raw:: html

   <script>
      var package = "snakeatac_env";
      var versions = ["0.1.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_snakeatac_env"></div>
   <div style="width: 100%" id="platform_plot_snakeatac_env"></div>
   <div style="width: 100%" id="cdf_plot_snakeatac_env"></div>



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
         
            // Build cdf plot for snakeatac_env
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/snakeatac_env/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_snakeatac_env', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for snakeatac_env
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/snakeatac_env/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_snakeatac_env', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for snakeatac_env
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/snakeatac_env/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_snakeatac_env', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakeatac_env/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakeatac_env/README.html