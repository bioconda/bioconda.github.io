:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcbiornaseq'
.. highlight: bash

r-bcbiornaseq
=============

.. conda:recipe:: r-bcbiornaseq
   :replaces_section_title:
   :noindex:

   R package for bcbio RNA\-seq analysis.

   :homepage: https://r.acidgenomics.com/packages/bcbiornaseq/
   :developer docs: https://github.com/hbc/bcbioRNASeq
   :license: GPL / AGPL-3.0
   :recipe: /`r-bcbiornaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiornaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiornaseq/meta.yaml>`_

   


.. conda:package:: r-bcbiornaseq

   |downloads_r-bcbiornaseq| |docker_r-bcbiornaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.5-0</code>,  <code>0.5.4-2</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.3-1</code>,  <code>0.5.3-0</code>,  </span></summary>
      

      ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.5-0``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.0-0``,  ``0.3.44-0``,  ``0.3.42-0``,  ``0.3.41-0``,  ``0.3.40-1``,  ``0.3.40-0``,  ``0.3.39-0``,  ``0.3.37-0``,  ``0.3.36-0``,  ``0.3.34-0``,  ``0.3.33-1``,  ``0.3.33-0``,  ``0.3.32-0``,  ``0.3.31-0``,  ``0.3.30-0``,  ``0.3.29-0``,  ``0.3.28-0``,  ``0.3.27-0``,  ``0.3.26-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.4-0``,  ``0.2.4a-0``,  ``0.2.3a-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.46.0``
   :depends on bioconductor-biocstyle: ``>=2.28.0``
   :depends on bioconductor-clusterprofiler: ``>=4.8.0``
   :depends on bioconductor-degreport: ``>=1.36.0``
   :depends on bioconductor-deseq2: ``>=1.40.0``
   :depends on bioconductor-dose: ``>=3.26.0``
   :depends on bioconductor-edger: ``>=3.42.0``
   :depends on bioconductor-enrichplot: ``>=1.20.0``
   :depends on bioconductor-ensdb.hsapiens.v75: ``>=2.99.0``
   :depends on bioconductor-genomeinfodb: ``>=1.36.0``
   :depends on bioconductor-iranges: ``>=2.34.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.17.0``
   :depends on bioconductor-org.mm.eg.db: ``>=3.17.0``
   :depends on bioconductor-pathview: ``>=1.40.0``
   :depends on bioconductor-rhdf5: ``>=2.44.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0``
   :depends on bioconductor-tximport: ``>=1.28.0``
   :depends on bioconductor-vsn: ``>=3.68.0``
   :depends on r-acidbase: ``>=0.7.0``
   :depends on r-acidcli: ``>=0.3.0``
   :depends on r-acidexperiment: ``>=0.5.0``
   :depends on r-acidgenerics: ``>=0.7.2``
   :depends on r-acidgenomes: ``>=0.6.0``
   :depends on r-acidgsea: ``>=0.9.0``
   :depends on r-acidmarkdown: ``>=0.3.0``
   :depends on r-acidplots: ``>=0.7.1``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-basejump: ``>=0.18.0``
   :depends on r-bcbiobase: ``>=0.9.0``
   :depends on r-deseqanalysis: ``>=0.7.0``
   :depends on r-ggnewscale: ``>=0.4.9``
   :depends on r-ggplot2: ``>=3.4.3``
   :depends on r-goalie: ``>=0.7.1``
   :depends on r-hexbin: ``>=1.28.3``
   :depends on r-knitr: ``>=1.44``
   :depends on r-pheatmap: ``>=1.0.12``
   :depends on r-pipette: ``>=0.14.0``
   :depends on r-rmarkdown: ``>=2.25``
   :depends on r-syntactic: ``>=0.7.0``
   :depends on r-viridis: ``>=0.6.4``
   :depends on r-withr: ``>=2.5.1``

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

    pixi global install r-bcbiornaseq

to add into an existing workspace instead, run::

    pixi add r-bcbiornaseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-bcbiornaseq

Alternatively, to install into a new environment, run::

    conda create -n envname r-bcbiornaseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-bcbiornaseq:<tag>

(see `r-bcbiornaseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-bcbiornaseq| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiornaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcbiornaseq
   :alt:   (downloads)
.. |docker_r-bcbiornaseq| image:: https://quay.io/repository/biocontainers/r-bcbiornaseq/status
   :target: https://quay.io/repository/biocontainers/r-bcbiornaseq
.. _`r-bcbiornaseq/tags`: https://quay.io/repository/biocontainers/r-bcbiornaseq?tab=tags


.. raw:: html

   <script>
      var package = "r-bcbiornaseq";
      var versions = ["0.6.2","0.6.1","0.6.0","0.5.5","0.5.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-bcbiornaseq"></div>
   <div style="width: 100%" id="platform_plot_r-bcbiornaseq"></div>
   <div style="width: 100%" id="cdf_plot_r-bcbiornaseq"></div>



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
         
            // Build cdf plot for r-bcbiornaseq
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-bcbiornaseq/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-bcbiornaseq', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-bcbiornaseq
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-bcbiornaseq/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-bcbiornaseq', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-bcbiornaseq
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-bcbiornaseq/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-bcbiornaseq', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiornaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiornaseq/README.html