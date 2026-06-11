:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene'
.. highlight: bash

bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene
==================================================

.. conda:recipe:: bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.22/data/annotation/html/TxDb.Scerevisiae.UCSC.sacCer2.sgdGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene

   |downloads_bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene| |docker_bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.2-21</code>,  <code>3.2.2-20</code>,  <code>3.2.2-19</code>,  <code>3.2.2-18</code>,  <code>3.2.2-17</code>,  <code>3.2.2-16</code>,  <code>3.2.2-15</code>,  <code>3.2.2-14</code>,  <code>3.2.2-13</code>,  </span></summary>
      

      ``3.2.2-21``,  ``3.2.2-20``,  ``3.2.2-19``,  ``3.2.2-18``,  ``3.2.2-17``,  ``3.2.2-16``,  ``3.2.2-15``,  ``3.2.2-14``,  ``3.2.2-13``,  ``3.2.2-12``,  ``3.2.2-11``,  ``3.2.2-10``,  ``3.2.2-9``,  ``3.2.2-7``,  ``3.2.2-6``,  ``3.2.2-5``,  ``3.2.2-3``,  ``3.2.2-2``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
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

    pixi global install bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene

to add into an existing workspace instead, run::

    pixi add bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene:<tag>

(see `bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene
   :alt:   (downloads)
.. |docker_bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene
.. _`bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene";
      var versions = ["3.2.2","3.2.2","3.2.2","3.2.2","3.2.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene"></div>



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
         
            // Build cdf plot for bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.scerevisiae.ucsc.saccer2.sgdgene/README.html