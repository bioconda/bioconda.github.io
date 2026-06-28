:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cohcap'
.. highlight: bash

bioconductor-cohcap
===================

.. conda:recipe:: bioconductor-cohcap
   :replaces_section_title:
   :noindex:

   CpG Island Analysis Pipeline for Illumina Methylation Array and Targeted BS\-Seq Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/COHCAP.html
   :license: GPL-3.0-only
   :recipe: /`bioconductor-cohcap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cohcap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cohcap/meta.yaml>`_
   :links: biotools: :biotools:`cohcap`

   COHCAP \(pronounced \"co\-cap\"\) provides a pipeline to analyze single\-nucleotide resolution methylation data \(Illumina 450k\/EPIC methylation array\, targeted BS\-Seq\, etc.\). It provides differential methylation for CpG Sites\, differential methylation for CpG Islands\, integration with gene expression data\, with visualizaton options. Discussion Group\: https\:\/\/sourceforge.net\/p\/cohcap\/discussion\/bioconductor\/


.. conda:package:: bioconductor-cohcap

   |downloads_bioconductor-cohcap| |docker_bioconductor-cohcap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-3</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-3``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.1-0``,  ``1.32.0-1``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-cohcapanno: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-cohcapanno: ``>=1.38.0,<1.39.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl: ``>=5.6.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-bh: 
   :depends on r-gplots: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-writexls: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      


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

    pixi global install bioconductor-cohcap

to add into an existing workspace instead, run::

    pixi add bioconductor-cohcap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cohcap

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cohcap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cohcap:<tag>

(see `bioconductor-cohcap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cohcap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cohcap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cohcap
   :alt:   (downloads)
.. |docker_bioconductor-cohcap| image:: https://quay.io/repository/biocontainers/bioconductor-cohcap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cohcap
.. _`bioconductor-cohcap/tags`: https://quay.io/repository/biocontainers/bioconductor-cohcap?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-cohcap";
      var versions = ["1.48.0","1.48.0","1.46.0","1.44.0","1.44.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-cohcap"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-cohcap"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-cohcap"></div>



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
         
            // Build cdf plot for bioconductor-cohcap
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cohcap/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-cohcap', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-cohcap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cohcap/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-cohcap', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-cohcap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cohcap/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-cohcap', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cohcap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cohcap/README.html