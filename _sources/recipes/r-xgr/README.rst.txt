:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-xgr'
.. highlight: bash

r-xgr
=====

.. conda:recipe:: r-xgr
   :replaces_section_title:
   :noindex:

   The central goal of XGR by Fang et al. \(2016\) \<doi\:10.1186\/s13073\-016\-0384\-y\> is to provide a data interpretation system necessary to do \"big data\" science. It is designed to make a user\-defined gene or SNP list \(or genomic regions\) more interpretable by comprehensively utilising ontology annotations and interaction networks to reveal relationships and enhance opportunities for biological discovery. XGR is unique in supporting a broad range of ontologies \(including knowledge of biological and molecular functions\, pathways\, diseases and phenotypes \- in both human and mouse\) and different types of networks \(including functional\, physical and pathway interactions\). There are two core functionalities of XGR. The first is to provide basic infrastructures for easy access to built\-in ontologies and networks. The second is to support data interpretations via 1\) enrichment analysis using either built\-in or custom ontologies\, 2\) similarity analysis for calculating semantic similarity between genes \(or SNPs\) based on their ontology annotation profiles\, 3\) network analysis for identification of gene networks given a query list of \(significant\) genes\, SNPs or genomic regions\, and 4\) annotation analysis for interpreting genomic regions using co\-localised functional genomic annotations \(such as open chromatin\, epigenetic marks\, TF binding sites and genomic segments\) and using nearby gene annotations \(by ontologies\). Together with its web app\, XGR aims to provide a user\-friendly tool for exploring genomic relations at the gene\, SNP and genomic region level.

   :homepage: http://XGR.r-forge.r-project.org, http://galahad.well.ox.ac.uk/XGR
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-xgr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xgr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xgr/meta.yaml>`_

   


.. conda:package:: r-xgr

   |downloads_r-xgr| |docker_r-xgr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.7-5</code>,  <code>1.1.7-4</code>,  <code>1.1.7-3</code>,  <code>1.1.7-2</code>,  <code>1.1.7-1</code>,  <code>1.1.7-0</code>,  <code>1.1.6-1</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  </span></summary>
      

      ``1.1.7-5``,  ``1.1.7-4``,  ``1.1.7-3``,  ``1.1.7-2``,  ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-1``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-iranges: 
   :depends on bioconductor-s4vectors: 
   :depends on bioconductor-suprahex: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-dnet: 
   :depends on r-dplyr: 
   :depends on r-ggnetwork: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-rcircos: 
   :depends on r-tidyr: 

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

    pixi global install r-xgr

to add into an existing workspace instead, run::

    pixi add r-xgr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-xgr

Alternatively, to install into a new environment, run::

    conda create -n envname r-xgr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-xgr:<tag>

(see `r-xgr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-xgr| image:: https://img.shields.io/conda/dn/bioconda/r-xgr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-xgr
   :alt:   (downloads)
.. |docker_r-xgr| image:: https://quay.io/repository/biocontainers/r-xgr/status
   :target: https://quay.io/repository/biocontainers/r-xgr
.. _`r-xgr/tags`: https://quay.io/repository/biocontainers/r-xgr?tab=tags


.. raw:: html

   <script>
      var package = "r-xgr";
      var versions = ["1.1.7","1.1.7","1.1.7","1.1.7","1.1.7"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-xgr"></div>
   <div style="width: 100%" id="platform_plot_r-xgr"></div>
   <div style="width: 100%" id="cdf_plot_r-xgr"></div>



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
         
            // Build cdf plot for r-xgr
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-xgr/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-xgr', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-xgr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-xgr/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-xgr', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-xgr
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-xgr/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-xgr', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-xgr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-xgr/README.html