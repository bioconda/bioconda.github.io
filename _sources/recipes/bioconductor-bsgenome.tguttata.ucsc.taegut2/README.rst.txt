:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.tguttata.ucsc.taegut2'
.. highlight: bash

bioconductor-bsgenome.tguttata.ucsc.taegut2
===========================================

.. conda:recipe:: bioconductor-bsgenome.tguttata.ucsc.taegut2
   :replaces_section_title:
   :noindex:

   Full genome sequences for Taeniopygia guttata \(UCSC version taeGut2\)

   :homepage: https://bioconductor.org/packages/3.22/data/annotation/html/BSgenome.Tguttata.UCSC.taeGut2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.tguttata.ucsc.taegut2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.tguttata.ucsc.taegut2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.tguttata.ucsc.taegut2/meta.yaml>`_

   Full genome sequences for Taeniopygia guttata \(Zebra finch\) as provided by UCSC \(taeGut2\, Feb. 2013\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.tguttata.ucsc.taegut2

   |downloads_bioconductor-bsgenome.tguttata.ucsc.taegut2| |docker_bioconductor-bsgenome.tguttata.ucsc.taegut2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-14</code>,  <code>1.4.2-13</code>,  <code>1.4.2-12</code>,  <code>1.4.2-11</code>,  <code>1.4.2-10</code>,  <code>1.4.2-9</code>,  <code>1.4.2-8</code>,  <code>1.4.2-7</code>,  <code>1.4.2-6</code>,  </span></summary>
      

      ``1.4.2-14``,  ``1.4.2-13``,  ``1.4.2-12``,  ``1.4.2-11``,  ``1.4.2-10``,  ``1.4.2-9``,  ``1.4.2-8``,  ``1.4.2-7``,  ``1.4.2-6``,  ``1.4.2-5``,  ``1.4.2-4``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-0``

      
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

    pixi global install bioconductor-bsgenome.tguttata.ucsc.taegut2

to add into an existing workspace instead, run::

    pixi add bioconductor-bsgenome.tguttata.ucsc.taegut2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bsgenome.tguttata.ucsc.taegut2

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bsgenome.tguttata.ucsc.taegut2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bsgenome.tguttata.ucsc.taegut2:<tag>

(see `bioconductor-bsgenome.tguttata.ucsc.taegut2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bsgenome.tguttata.ucsc.taegut2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.tguttata.ucsc.taegut2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.tguttata.ucsc.taegut2
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.tguttata.ucsc.taegut2| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.tguttata.ucsc.taegut2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.tguttata.ucsc.taegut2
.. _`bioconductor-bsgenome.tguttata.ucsc.taegut2/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.tguttata.ucsc.taegut2?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-bsgenome.tguttata.ucsc.taegut2";
      var versions = ["1.4.2","1.4.2","1.4.2","1.4.2","1.4.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-bsgenome.tguttata.ucsc.taegut2"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-bsgenome.tguttata.ucsc.taegut2"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-bsgenome.tguttata.ucsc.taegut2"></div>



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
         
            // Build cdf plot for bioconductor-bsgenome.tguttata.ucsc.taegut2
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-bsgenome.tguttata.ucsc.taegut2/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-bsgenome.tguttata.ucsc.taegut2', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-bsgenome.tguttata.ucsc.taegut2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-bsgenome.tguttata.ucsc.taegut2/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-bsgenome.tguttata.ucsc.taegut2', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-bsgenome.tguttata.ucsc.taegut2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-bsgenome.tguttata.ucsc.taegut2/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-bsgenome.tguttata.ucsc.taegut2', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.tguttata.ucsc.taegut2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.tguttata.ucsc.taegut2/README.html