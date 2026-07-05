:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-numbat'
.. highlight: bash

r-numbat
========

.. conda:recipe:: r-numbat
   :replaces_section_title:
   :noindex:

   A computational method that infers copy number variations \(CNVs\) in cancer scRNA\-seq data and reconstructs the tumor phylogeny. \'numbat\' integrates signals from gene expression\, allelic ratio\, and population haplotype structures to accurately infer allele\-specific CNVs in single cells and reconstruct their lineage relationship. \'numbat\' can be used to\: 1. detect allele\-specific copy number variations from single\-cells\; 2. differentiate tumor versus normal cells in the tumor microenvironment\; 3. infer the clonal architecture and evolutionary history of profiled tumors. \'numbat\' does not require tumor\/normal\-paired DNA or genotype data\, but operates solely on the donor scRNA\-data data \(for example\, 10x Cell Ranger output\). Additional examples and documentations are available at \<https\:\/\/kharchenkolab.github.io\/numbat\/\>. For details on the method please see Gao et al. Nature Biotechnology \(2022\) \<doi\:10.1038\/s41587\-022\-01468\-y\>.

   :homepage: https://github.com/kharchenkolab/numbat/, https://kharchenkolab.github.io/numbat/
   :license: MIT / MIT
   :recipe: /`r-numbat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-numbat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-numbat/meta.yaml>`_

   


.. conda:package:: r-numbat

   |downloads_r-numbat| |docker_r-numbat|

   :versions:
      
      

      ``1.5.2-0``,  ``1.5.1-0``,  ``1.4.2-0``

      

   
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends on bioconductor-ggtree: ``>=3.14.0,<3.15.0a0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends on libcxx: ``>=18``
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-catools: 
   :depends on r-data.table: 
   :depends on r-dendextend: 
   :depends on r-dplyr: ``>=1.1.1``
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-glue: 
   :depends on r-hahmmr: ``>=1.0.0,<1.1.0a0``
   :depends on r-igraph: 
   :depends on r-logger: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-optparse: 
   :depends on r-paralleldist: 
   :depends on r-patchwork: 
   :depends on r-pryr: 
   :depends on r-purrr: 
   :depends on r-r.utils: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rhpcblasctl: 
   :depends on r-roptim: 
   :depends on r-scales: 
   :depends on r-scistreer: ``>=1.1.0``
   :depends on r-scistreer: ``>=1.2.0,<1.3.0a0``
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidygraph: 
   :depends on r-tidyr: ``>=1.3.0``
   :depends on r-vcfr: 
   :depends on r-zoo: 

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

    pixi global install r-numbat

to add into an existing workspace instead, run::

    pixi add r-numbat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-numbat

Alternatively, to install into a new environment, run::

    conda create -n envname r-numbat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-numbat:<tag>

(see `r-numbat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-numbat| image:: https://img.shields.io/conda/dn/bioconda/r-numbat.svg?style=flat
   :target: https://anaconda.org/bioconda/r-numbat
   :alt:   (downloads)
.. |docker_r-numbat| image:: https://quay.io/repository/biocontainers/r-numbat/status
   :target: https://quay.io/repository/biocontainers/r-numbat
.. _`r-numbat/tags`: https://quay.io/repository/biocontainers/r-numbat?tab=tags


.. raw:: html

   <script>
      var package = "r-numbat";
      var versions = ["1.5.2","1.5.1","1.4.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-numbat"></div>
   <div style="width: 100%" id="platform_plot_r-numbat"></div>
   <div style="width: 100%" id="cdf_plot_r-numbat"></div>



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
         
            // Build cdf plot for r-numbat
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-numbat/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-numbat', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-numbat
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-numbat/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-numbat', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-numbat
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-numbat/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-numbat', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-numbat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-numbat/README.html