:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spacna'
.. highlight: bash

spacna
======

.. conda:recipe:: spacna
   :replaces_section_title:
   :noindex:

   SpaCNA — spatial DNA CNV\, SPI lineage\, and RNA–DNA multi\-omics toolkit

   :homepage: https://github.com/liuyang-zhao/SpaCNA
   :documentation: https://github.com/liuyang-zhao/SpaCNA/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`spacna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacna/meta.yaml>`_

   SpaCNA \(Spatial DNA Copy Number Analysis\) is a toolkit for spatial DNA
   sequencing. It supports spatial and bulk DNA alignment\, CNV\-based spatial
   clustering\, SPI lineage analysis\, RNA–DNA multi\-omics helpers\, bundled
   1 Mb genomic references\, and the \`spacna\` command\-line entry point.



.. conda:package:: spacna

   |downloads_spacna| |docker_spacna|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on bedtools: 
   :depends on biopython: 
   :depends on bowtie2: 
   :depends on fastp: 
   :depends on matplotlib-base: 
   :depends on mosdepth: 
   :depends on natsort: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on parallel: 
   :depends on pigz: 
   :depends on pysam: 
   :depends on python: ``>=3.8,<3.13``
   :depends on r-ape: 
   :depends on r-base: ``>=4.2``
   :depends on r-cluster: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-fields: 
   :depends on r-fnn: 
   :depends on r-ggplot2: 
   :depends on r-hexbin: 
   :depends on r-matrix: 
   :depends on r-patchwork: 
   :depends on r-rtsne: 
   :depends on r-tidyr: 
   :depends on r-viridis: 
   :depends on samtools: 
   :depends on seqkit: 
   :depends on trim-galore: 
   :depends on ucsc-bigwigaverageoverbed: 
   :depends on umi_tools: 

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

    pixi global install spacna

to add into an existing workspace instead, run::

    pixi add spacna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spacna

Alternatively, to install into a new environment, run::

    conda create -n envname spacna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spacna:<tag>

(see `spacna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spacna| image:: https://img.shields.io/conda/dn/bioconda/spacna.svg?style=flat
   :target: https://anaconda.org/bioconda/spacna
   :alt:   (downloads)
.. |docker_spacna| image:: https://quay.io/repository/biocontainers/spacna/status
   :target: https://quay.io/repository/biocontainers/spacna
.. _`spacna/tags`: https://quay.io/repository/biocontainers/spacna?tab=tags


.. raw:: html

   <script>
      var package = "spacna";
      var versions = ["0.1.1","0.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_spacna"></div>
   <div style="width: 100%" id="platform_plot_spacna"></div>
   <div style="width: 100%" id="cdf_plot_spacna"></div>



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
         
            // Build cdf plot for spacna
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spacna/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_spacna', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for spacna
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spacna/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_spacna', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for spacna
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spacna/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_spacna', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
After install\, set genome paths via SPACNA\_\* environment variables \(see
README\). Sample barcodes are not shipped\; download from GitHub.
R entry point\: source\(\"scripts\/R\/spacna.R\"\) after \`cd \$\(spacna path\)\`.
Generate non\-1Mb references with\: spacna gen\-reference \-\-species human \-\-bin\-size 500kb \-\-mode bins


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spacna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spacna/README.html