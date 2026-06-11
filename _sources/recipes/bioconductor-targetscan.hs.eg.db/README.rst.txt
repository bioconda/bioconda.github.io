:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetscan.hs.eg.db'
.. highlight: bash

bioconductor-targetscan.hs.eg.db
================================

.. conda:recipe:: bioconductor-targetscan.hs.eg.db
   :replaces_section_title:
   :noindex:

   TargetScan miRNA target predictions for human

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/targetscan.Hs.eg.db.html
   :license: file LICENSE
   :recipe: /`bioconductor-targetscan.hs.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscan.hs.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscan.hs.eg.db/meta.yaml>`_

   TargetScan miRNA target predictions for human assembled using data from the TargetScan website. TargetScan predicts biological targets of miRNAs by searching for the presence of conserved 8mer and 7mer sites that match the seed region of each miRNA. Also identified are sites with mismatches in the seed region that are compensated by conserved 3\' pairing. In mammals\, predictions are ranked based on the predicted efficacy of targeting as calculated using the context scores of the sites.


.. conda:package:: bioconductor-targetscan.hs.eg.db

   |downloads_bioconductor-targetscan.hs.eg.db| |docker_bioconductor-targetscan.hs.eg.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-14</code>,  <code>0.6.1-13</code>,  <code>0.6.1-12</code>,  <code>0.6.1-11</code>,  <code>0.6.1-10</code>,  <code>0.6.1-9</code>,  <code>0.6.1-8</code>,  <code>0.6.1-7</code>,  <code>0.6.1-6</code>,  </span></summary>
      

      ``0.6.1-14``,  ``0.6.1-13``,  ``0.6.1-12``,  ``0.6.1-11``,  ``0.6.1-10``,  ``0.6.1-9``,  ``0.6.1-8``,  ``0.6.1-7``,  ``0.6.1-6``,  ``0.6.1-5``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-1``,  ``0.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends on bioconductor-data-packages: ``>=20241103``
   :depends on curl: 
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install bioconductor-targetscan.hs.eg.db

to add into an existing workspace instead, run::

    pixi add bioconductor-targetscan.hs.eg.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-targetscan.hs.eg.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-targetscan.hs.eg.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-targetscan.hs.eg.db:<tag>

(see `bioconductor-targetscan.hs.eg.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-targetscan.hs.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetscan.hs.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-targetscan.hs.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-targetscan.hs.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-targetscan.hs.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetscan.hs.eg.db
.. _`bioconductor-targetscan.hs.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-targetscan.hs.eg.db?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-targetscan.hs.eg.db";
      var versions = ["0.6.1","0.6.1","0.6.1","0.6.1","0.6.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-targetscan.hs.eg.db"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-targetscan.hs.eg.db"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-targetscan.hs.eg.db"></div>



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
         
            // Build cdf plot for bioconductor-targetscan.hs.eg.db
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-targetscan.hs.eg.db/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-targetscan.hs.eg.db', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-targetscan.hs.eg.db
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-targetscan.hs.eg.db/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-targetscan.hs.eg.db', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-targetscan.hs.eg.db
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-targetscan.hs.eg.db/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-targetscan.hs.eg.db', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetscan.hs.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetscan.hs.eg.db/README.html