:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'milonga'
.. highlight: bash

milonga
=======

.. conda:recipe:: milonga
   :replaces_section_title:
   :noindex:

   MiLongA \- A snakemake workflow for Microbial Long\-read Assembly

   :homepage: https://gitlab.com/bfr_bioinformatics/milonga
   :license: BSD-3-Clause
   :recipe: /`milonga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/milonga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/milonga/meta.yaml>`_

   


.. conda:package:: milonga

   |downloads_milonga| |docker_milonga|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on abricate: ``>=1.0.1``
   :depends on bcftools: ``>=1.10.2``
   :depends on bedtools: ``>=2.29.2``
   :depends on bioawk: ``>=1.0``
   :depends on bioconductor-biocgenerics: 
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-iranges: 
   :depends on biopython: ``>=1.78``
   :depends on blast: ``>=2.10.1``
   :depends on bowtie2: ``>=2.4.1``
   :depends on checkm-genome: ``>=1.1.3``
   :depends on diamond: ``>=2.0.4``
   :depends on flye: ``>=2.8.1``
   :depends on kraken2: ``>=2.0.8``
   :depends on miniasm: ``>=0.3_r179``
   :depends on minimap2: ``>=2.17``
   :depends on mummer4: ``>=4.0.0beta2``
   :depends on nanofilt: ``>=2.7.1``
   :depends on nanostat: ``>=1.4.0``
   :depends on pandas: ``>=1.1.2``
   :depends on pilon: ``>=1.23``
   :depends on pip: ``>=20.2.3``
   :depends on platon: ``>=1.4.0``
   :depends on porechop: ``>=0.2.4``
   :depends on prodigal: ``>=2.6.3``
   :depends on qcat: ``>=1.1.0``
   :depends on r-base: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-knitr: 
   :depends on r-optparse: 
   :depends on r-plotly: 
   :depends on r-rmarkdown: 
   :depends on r-tidyr: 
   :depends on racon: ``>=1.4.13``
   :depends on samtools: ``>=1.10``
   :depends on snakemake-minimal: ``>=7.12.0``
   :depends on spades: ``>=3.14.1``
   :depends on taxonkit: ``>=0.6.2``
   :depends on unicycler: ``>=0.4.8``
   :depends on yaml: ``>=0.2.5``

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

    pixi global install milonga

to add into an existing workspace instead, run::

    pixi add milonga

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install milonga

Alternatively, to install into a new environment, run::

    conda create -n envname milonga

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/milonga:<tag>

(see `milonga/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_milonga| image:: https://img.shields.io/conda/dn/bioconda/milonga.svg?style=flat
   :target: https://anaconda.org/bioconda/milonga
   :alt:   (downloads)
.. |docker_milonga| image:: https://quay.io/repository/biocontainers/milonga/status
   :target: https://quay.io/repository/biocontainers/milonga
.. _`milonga/tags`: https://quay.io/repository/biocontainers/milonga?tab=tags


.. raw:: html

   <script>
      var package = "milonga";
      var versions = ["1.0.3","1.0.2","1.0.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_milonga"></div>
   <div style="width: 100%" id="platform_plot_milonga"></div>
   <div style="width: 100%" id="cdf_plot_milonga"></div>



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
         
            // Build cdf plot for milonga
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/milonga/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_milonga', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for milonga
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/milonga/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_milonga', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for milonga
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/milonga/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_milonga', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/milonga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/milonga/README.html