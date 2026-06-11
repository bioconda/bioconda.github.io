:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sqanti3'
.. highlight: bash

sqanti3
=======

.. conda:recipe:: sqanti3
   :replaces_section_title:
   :noindex:

   SQANTI3 is a tool for the structural and quality annotation of long\-read transcriptomes.

   :homepage: https://github.com/ConesaLab/SQANTI3
   :license: GPL-3.0-only
   :recipe: /`sqanti3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqanti3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqanti3/meta.yaml>`_

   


.. conda:package:: sqanti3

   |downloads_sqanti3| |docker_sqanti3|

   :versions:
      
      

      ``6.0.1-0``,  ``6.0-0``

      

   
   :depends on argcomplete: ``>=3.4``
   :depends on argh: ``>=0.31``
   :depends on bcbio-gff: ``>=0.7``
   :depends on bedtools: ``>=2.31``
   :depends on bioconductor-gviz: 
   :depends on bioconductor-noiseq: ``>=2.46``
   :depends on biopython: ``>=1.81,<1.82``
   :depends on bx-python: ``>=0.11``
   :depends on desalt: ``>=1.5``
   :depends on dill: ``>=0.3.9``
   :depends on gffread: ``>=0.12``
   :depends on gffutils: ``>=0.13``
   :depends on gmap: ``>=2024.11``
   :depends on gtfparse: ``>=2.5``
   :depends on gtftools: ``>=0.9``
   :depends on importlib-metadata: ``>=8.5``
   :depends on intervaltree: ``>=3.1``
   :depends on jinja2: ``>=3.1``
   :depends on kallisto: ``>=0.48``
   :depends on minimap2: ``>=2.28``
   :depends on namfinder: ``>=0.1.3``
   :depends on numpy: ``>=1.26,<2.0``
   :depends on pandas: ``>=2.2,<2.3``
   :depends on pandoc: ``>=3.5``
   :depends on parasail: ``>=1.3``
   :depends on pdf2image: ``>=1.17``
   :depends on perl: ``>=5.32,<5.33``
   :depends on polars: ``>=0.20,<0.21``
   :depends on psutil: ``>=6.1``
   :depends on pyarrow: ``>=14.0,<15.0``
   :depends on pybedtools: ``>=0.10``
   :depends on pyfaidx: ``>=0.8``
   :depends on pysam: ``>=0.22,<0.23``
   :depends on python: ``>=3.11,<3.12``
   :depends on python-edlib: ``>=1.3.9``
   :depends on pyyaml: ``>=6.0.3``
   :depends on r-base: ``>=4.3.3``
   :depends on r-biocmanager: ``>=1.30``
   :depends on r-caret: ``>=6.0``
   :depends on r-devtools: ``>=2.4``
   :depends on r-dplyr: ``>=1.1``
   :depends on r-dt: ``>=0.33``
   :depends on r-e1071: ``>=1.7``
   :depends on r-forcats: ``>=1.0``
   :depends on r-ggplot2: ``>=3.4.0a``
   :depends on r-ggplotify: ``>=0.1``
   :depends on r-gridbase: ``>=0.4``
   :depends on r-gridextra: ``>=2.3``
   :depends on r-htmltools: ``>=0.5``
   :depends on r-jsonlite: ``>=1.8``
   :depends on r-optparse: ``>=1.7``
   :depends on r-plotly: ``>=4.10``
   :depends on r-plyr: ``>=1.8``
   :depends on r-purrr: ``>=1.0``
   :depends on r-randomforest: ``>=4.7``
   :depends on r-readr: ``>=2.1``
   :depends on r-reshape: ``>=0.8``
   :depends on r-rmarkdown: ``>=2.29``
   :depends on r-scales: ``>=1.3``
   :depends on r-stringi: ``>=1.8``
   :depends on r-stringr: ``>=1.5``
   :depends on r-tibble: ``>=3.2``
   :depends on r-tidyr: ``>=1.3``
   :depends on samtools: ``>=1.21``
   :depends on scikit-learn: ``>=1.5,<1.6``
   :depends on scipy: ``>=1.11,<1.12``
   :depends on seaborn: ``>=0.13,<0.14``
   :depends on seqtk: ``>=1.4``
   :depends on simplejson: ``>=3.19``
   :depends on sortedcontainers: ``>=2.4``
   :depends on star: ``>=2.7.11b``
   :depends on td2: ``>=1.0``
   :depends on ultra_bioinformatics: ``>=0.1``
   :depends on zipp: ``>=3.21``

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

    pixi global install sqanti3

to add into an existing workspace instead, run::

    pixi add sqanti3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sqanti3

Alternatively, to install into a new environment, run::

    conda create -n envname sqanti3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sqanti3:<tag>

(see `sqanti3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sqanti3| image:: https://img.shields.io/conda/dn/bioconda/sqanti3.svg?style=flat
   :target: https://anaconda.org/bioconda/sqanti3
   :alt:   (downloads)
.. |docker_sqanti3| image:: https://quay.io/repository/biocontainers/sqanti3/status
   :target: https://quay.io/repository/biocontainers/sqanti3
.. _`sqanti3/tags`: https://quay.io/repository/biocontainers/sqanti3?tab=tags


.. raw:: html

   <script>
      var package = "sqanti3";
      var versions = ["6.0.1","6.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_sqanti3"></div>
   <div style="width: 100%" id="platform_plot_sqanti3"></div>
   <div style="width: 100%" id="cdf_plot_sqanti3"></div>



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
         
            // Build cdf plot for sqanti3
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sqanti3/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_sqanti3', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for sqanti3
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sqanti3/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_sqanti3', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for sqanti3
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sqanti3/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_sqanti3', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sqanti3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sqanti3/README.html