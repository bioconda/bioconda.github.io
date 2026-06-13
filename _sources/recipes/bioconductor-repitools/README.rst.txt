:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-repitools'
.. highlight: bash

bioconductor-repitools
======================

.. conda:recipe:: bioconductor-repitools
   :replaces_section_title:
   :noindex:

   Epigenomic tools

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Repitools.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-repitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-repitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-repitools/meta.yaml>`_
   :links: biotools: :biotools:`repitools`

   Tools for the analysis of enrichment\-based epigenomic data.  Features include summarization and visualization of epigenomic data across promoters according to gene expression context\, finding regions of differential methylation\/binding\, BayMeth for quantifying methylation etc.


.. conda:package:: bioconductor-repitools

   |downloads_bioconductor-repitools| |docker_bioconductor-repitools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends on bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-bsgenome: ``>=1.74.0,<1.75.0a0``
   :depends on bioconductor-dnacopy: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-dnacopy: ``>=1.80.0,<1.81.0a0``
   :depends on bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends on bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends on bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomicalignments: ``>=1.42.0,<1.43.0a0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends on bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends on bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends on bioconductor-rtracklayer: ``>=1.66.0,<1.67.0a0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=18``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cluster: 
   :depends on r-gplots: 
   :depends on r-gsmoothr: 
   :depends on r-mass: 
   :depends on r-rsolnp: 

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

    pixi global install bioconductor-repitools

to add into an existing workspace instead, run::

    pixi add bioconductor-repitools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-repitools

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-repitools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-repitools:<tag>

(see `bioconductor-repitools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-repitools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-repitools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-repitools
   :alt:   (downloads)
.. |docker_bioconductor-repitools| image:: https://quay.io/repository/biocontainers/bioconductor-repitools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-repitools
.. _`bioconductor-repitools/tags`: https://quay.io/repository/biocontainers/bioconductor-repitools?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-repitools";
      var versions = ["1.52.0","1.48.0","1.46.0","1.44.0","1.44.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-repitools"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-repitools"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-repitools"></div>



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
         
            // Build cdf plot for bioconductor-repitools
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-repitools/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-repitools', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-repitools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-repitools/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-repitools', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-repitools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-repitools/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-repitools', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-repitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-repitools/README.html