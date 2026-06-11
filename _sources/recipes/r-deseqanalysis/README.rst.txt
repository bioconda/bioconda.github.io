:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-deseqanalysis'
.. highlight: bash

r-deseqanalysis
===============

.. conda:recipe:: r-deseqanalysis
   :replaces_section_title:
   :noindex:

   Toolkit for performing differential expression with DESeq2.

   :homepage: https://r.acidgenomics.com/packages/deseqanalysis/
   :developer docs: https://github.com/acidgenomics/r-deseqanalysis
   :license: GPL / AGPL-3.0
   :recipe: /`r-deseqanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deseqanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deseqanalysis/meta.yaml>`_

   


.. conda:package:: r-deseqanalysis

   |downloads_r-deseqanalysis| |docker_r-deseqanalysis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.2-0</code>,  <code>0.7.1-1</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.12-0</code>,  <code>0.6.11-0</code>,  <code>0.6.10-0</code>,  <code>0.6.9-0</code>,  <code>0.6.8-2</code>,  </span></summary>
      

      ``0.7.2-0``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.8-2``,  ``0.6.8-1``,  ``0.6.8-0``,  ``0.6.7-1``,  ``0.6.7-0``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.3.10-2``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.20-1``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-1``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-apeglm: ``>=1.22.0``
   :depends on bioconductor-biocgenerics: ``>=0.46.0``
   :depends on bioconductor-deseq2: ``>=1.40.0``
   :depends on bioconductor-iranges: ``>=2.34.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0``
   :depends on bioconductor-tximport: ``>=1.28.0``
   :depends on r-acidbase: ``>=0.7.0``
   :depends on r-acidcli: ``>=0.2.8``
   :depends on r-acidexperiment: ``>=0.4.8``
   :depends on r-acidgenerics: ``>=0.6.13``
   :depends on r-acidgenomes: ``>=0.5.2``
   :depends on r-acidmarkdown: ``>=0.2.6``
   :depends on r-acidplots: ``>=0.6.2``
   :depends on r-acidplyr: ``>=0.4.2``
   :depends on r-ashr: ``>=2.2.63``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-basejump: ``>=0.17.0``
   :depends on r-complexupset: ``>=1.3.3``
   :depends on r-ggplot2: ``>=3.4.3``
   :depends on r-ggrepel: ``>=0.9.3``
   :depends on r-goalie: ``>=0.6.19``
   :depends on r-knitr: ``>=1.44``
   :depends on r-pheatmap: ``>=1.0.12``
   :depends on r-pipette: ``>=0.14.0``
   :depends on r-rmarkdown: ``>=2.25``
   :depends on r-syntactic: ``>=0.6.7``

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

    pixi global install r-deseqanalysis

to add into an existing workspace instead, run::

    pixi add r-deseqanalysis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-deseqanalysis

Alternatively, to install into a new environment, run::

    conda create -n envname r-deseqanalysis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-deseqanalysis:<tag>

(see `r-deseqanalysis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-deseqanalysis| image:: https://img.shields.io/conda/dn/bioconda/r-deseqanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/r-deseqanalysis
   :alt:   (downloads)
.. |docker_r-deseqanalysis| image:: https://quay.io/repository/biocontainers/r-deseqanalysis/status
   :target: https://quay.io/repository/biocontainers/r-deseqanalysis
.. _`r-deseqanalysis/tags`: https://quay.io/repository/biocontainers/r-deseqanalysis?tab=tags


.. raw:: html

   <script>
      var package = "r-deseqanalysis";
      var versions = ["0.7.2","0.7.1","0.7.1","0.7.0","0.6.12"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-deseqanalysis"></div>
   <div style="width: 100%" id="platform_plot_r-deseqanalysis"></div>
   <div style="width: 100%" id="cdf_plot_r-deseqanalysis"></div>



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
         
            // Build cdf plot for r-deseqanalysis
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-deseqanalysis/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-deseqanalysis', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-deseqanalysis
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-deseqanalysis/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-deseqanalysis', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-deseqanalysis
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-deseqanalysis/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-deseqanalysis', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-deseqanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-deseqanalysis/README.html