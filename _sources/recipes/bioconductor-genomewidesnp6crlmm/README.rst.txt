:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomewidesnp6crlmm'
.. highlight: bash

bioconductor-genomewidesnp6crlmm
================================

.. conda:recipe:: bioconductor-genomewidesnp6crlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.22/data/annotation/html/genomewidesnp6Crlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomewidesnp6crlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomewidesnp6crlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomewidesnp6crlmm/meta.yaml>`_

   Package with metadata for fast genotyping Affymetrix GenomeWideSnp\_6 arrays using the \'crlmm\' package.


.. conda:package:: bioconductor-genomewidesnp6crlmm

   |downloads_bioconductor-genomewidesnp6crlmm| |docker_bioconductor-genomewidesnp6crlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-14</code>,  <code>1.0.7-13</code>,  <code>1.0.7-12</code>,  <code>1.0.7-11</code>,  <code>1.0.7-10</code>,  <code>1.0.7-9</code>,  <code>1.0.7-8</code>,  <code>1.0.7-7</code>,  <code>1.0.7-6</code>,  </span></summary>
      

      ``1.0.7-14``,  ``1.0.7-13``,  ``1.0.7-12``,  ``1.0.7-11``,  ``1.0.7-10``,  ``1.0.7-9``,  ``1.0.7-8``,  ``1.0.7-7``,  ``1.0.7-6``,  ``1.0.7-5``,  ``1.0.7-4``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install bioconductor-genomewidesnp6crlmm

to add into an existing workspace instead, run::

    pixi add bioconductor-genomewidesnp6crlmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genomewidesnp6crlmm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genomewidesnp6crlmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genomewidesnp6crlmm:<tag>

(see `bioconductor-genomewidesnp6crlmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genomewidesnp6crlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomewidesnp6crlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomewidesnp6crlmm
   :alt:   (downloads)
.. |docker_bioconductor-genomewidesnp6crlmm| image:: https://quay.io/repository/biocontainers/bioconductor-genomewidesnp6crlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomewidesnp6crlmm
.. _`bioconductor-genomewidesnp6crlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-genomewidesnp6crlmm?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-genomewidesnp6crlmm";
      var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.7"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-genomewidesnp6crlmm"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-genomewidesnp6crlmm"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-genomewidesnp6crlmm"></div>



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
         
            // Build cdf plot for bioconductor-genomewidesnp6crlmm
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-genomewidesnp6crlmm/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-genomewidesnp6crlmm', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-genomewidesnp6crlmm
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-genomewidesnp6crlmm/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-genomewidesnp6crlmm', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-genomewidesnp6crlmm
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-genomewidesnp6crlmm/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-genomewidesnp6crlmm', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomewidesnp6crlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomewidesnp6crlmm/README.html