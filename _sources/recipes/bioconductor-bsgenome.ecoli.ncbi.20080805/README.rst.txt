:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.ecoli.ncbi.20080805'
.. highlight: bash

bioconductor-bsgenome.ecoli.ncbi.20080805
=========================================

.. conda:recipe:: bioconductor-bsgenome.ecoli.ncbi.20080805
   :replaces_section_title:
   :noindex:

   Escherichia coli full genomes

   :homepage: https://bioconductor.org/packages/3.22/data/annotation/html/BSgenome.Ecoli.NCBI.20080805.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.ecoli.ncbi.20080805 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.ecoli.ncbi.20080805>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.ecoli.ncbi.20080805/meta.yaml>`_

   Escherichia coli full genomes for several strains as provided by NCBI on 2008\/08\/05 and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.ecoli.ncbi.20080805

   |downloads_bioconductor-bsgenome.ecoli.ncbi.20080805| |docker_bioconductor-bsgenome.ecoli.ncbi.20080805|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1000-19</code>,  <code>1.3.1000-18</code>,  <code>1.3.1000-17</code>,  <code>1.3.1000-16</code>,  <code>1.3.1000-15</code>,  <code>1.3.1000-14</code>,  <code>1.3.1000-13</code>,  <code>1.3.1000-12</code>,  <code>1.3.1000-11</code>,  </span></summary>
      

      ``1.3.1000-19``,  ``1.3.1000-18``,  ``1.3.1000-17``,  ``1.3.1000-16``,  ``1.3.1000-15``,  ``1.3.1000-14``,  ``1.3.1000-13``,  ``1.3.1000-12``,  ``1.3.1000-11``,  ``1.3.1000-10``,  ``1.3.1000-9``,  ``1.3.1000-8``,  ``1.3.1000-7``,  ``1.3.1000-5``,  ``1.3.1000-4``,  ``1.3.1000-2``,  ``1.3.1000-1``,  ``1.3.1000-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-bsgenome.ecoli.ncbi.20080805

to add into an existing workspace instead, run::

    pixi add bioconductor-bsgenome.ecoli.ncbi.20080805

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bsgenome.ecoli.ncbi.20080805

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bsgenome.ecoli.ncbi.20080805

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bsgenome.ecoli.ncbi.20080805:<tag>

(see `bioconductor-bsgenome.ecoli.ncbi.20080805/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bsgenome.ecoli.ncbi.20080805| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.ecoli.ncbi.20080805.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.ecoli.ncbi.20080805
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.ecoli.ncbi.20080805| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.ecoli.ncbi.20080805/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.ecoli.ncbi.20080805
.. _`bioconductor-bsgenome.ecoli.ncbi.20080805/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.ecoli.ncbi.20080805?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-bsgenome.ecoli.ncbi.20080805";
      var versions = ["1.3.1000","1.3.1000","1.3.1000","1.3.1000","1.3.1000"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-bsgenome.ecoli.ncbi.20080805"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-bsgenome.ecoli.ncbi.20080805"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-bsgenome.ecoli.ncbi.20080805"></div>



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
         
            // Build cdf plot for bioconductor-bsgenome.ecoli.ncbi.20080805
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-bsgenome.ecoli.ncbi.20080805/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-bsgenome.ecoli.ncbi.20080805', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-bsgenome.ecoli.ncbi.20080805
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-bsgenome.ecoli.ncbi.20080805/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-bsgenome.ecoli.ncbi.20080805', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-bsgenome.ecoli.ncbi.20080805
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-bsgenome.ecoli.ncbi.20080805/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-bsgenome.ecoli.ncbi.20080805', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.ecoli.ncbi.20080805/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.ecoli.ncbi.20080805/README.html