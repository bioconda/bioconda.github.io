:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lotus2'
.. highlight: bash

lotus2
======

.. conda:recipe:: lotus2
   :replaces_section_title:
   :noindex:

   LotuS2 is a lightweight complete 16S\/18S\/ITS pipeline

   :homepage: http://lotus2.earlham.ac.uk/
   :developer docs: https://github.com/hildebra/lotus2/
   :license: GPL-3.0-or-later
   :recipe: /`lotus2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lotus2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lotus2/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-022-01365-1`, biotools: :biotools:`lotus2`

   


.. conda:package:: lotus2

   |downloads_lotus2| |docker_lotus2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.1-1</code>,  <code>2.34.1-0</code>,  <code>2.34-0</code>,  <code>2.32-1</code>,  <code>2.32-0</code>,  <code>2.31-0</code>,  <code>2.30-1</code>,  <code>2.30-0</code>,  <code>2.28.1-1</code>,  </span></summary>
      

      ``2.34.1-1``,  ``2.34.1-0``,  ``2.34-0``,  ``2.32-1``,  ``2.32-0``,  ``2.31-0``,  ``2.30-1``,  ``2.30-0``,  ``2.28.1-1``,  ``2.28.1-0``,  ``2.28-0``,  ``2.25-0``,  ``2.24-0``,  ``2.23-0``,  ``2.22-0``,  ``2.21-0``,  ``2.19-0``,  ``2.17-0``,  ``2.16-0``,  ``2.14-0``,  ``2.12-1``,  ``2.12-0``,  ``2.11-0``,  ``2.09.2-0``,  ``2.09.1-0``,  ``2.09-0``,  ``2.08-0``,  ``2.07-0``,  ``2.06-0``,  ``2.05.1-0``,  ``2.04-1``,  ``2.04-0``,  ``2.02-0``,  ``2.01-1``,  ``2.01-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-dada2: 
   :depends on bioconductor-phyloseq: 
   :depends on blast: 
   :depends on cd-hit: 
   :depends on clustalo: 
   :depends on fasttree: 
   :depends on hmmer: ``>=3.1``
   :depends on infernal: 
   :depends on iqtree: 
   :depends on itsx: 
   :depends on lambda: ``>=3,<4``
   :depends on lca: ``>=0.25``
   :depends on mafft: 
   :depends on minimap2: 
   :depends on perl: 
   :depends on perl-getopt-long: 
   :depends on pigz: 
   :depends on r-base: 
   :depends on r-dplyr: 
   :depends on rdp_classifier: 
   :depends on rtk: 
   :depends on sdm: ``2.18``
   :depends on swarm: 
   :depends on unzip: 
   :depends on usearch: ``>=12.0_beta,<13``
   :depends on vsearch: 
   :depends on wget: 
   :depends on zip: 

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

    pixi global install lotus2

to add into an existing workspace instead, run::

    pixi add lotus2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lotus2

Alternatively, to install into a new environment, run::

    conda create -n envname lotus2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lotus2:<tag>

(see `lotus2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lotus2| image:: https://img.shields.io/conda/dn/bioconda/lotus2.svg?style=flat
   :target: https://anaconda.org/bioconda/lotus2
   :alt:   (downloads)
.. |docker_lotus2| image:: https://quay.io/repository/biocontainers/lotus2/status
   :target: https://quay.io/repository/biocontainers/lotus2
.. _`lotus2/tags`: https://quay.io/repository/biocontainers/lotus2?tab=tags


.. raw:: html

   <script>
      var package = "lotus2";
      var versions = ["2.34.1","2.34.1","2.34","2.32","2.32"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_lotus2"></div>
   <div style="width: 100%" id="platform_plot_lotus2"></div>
   <div style="width: 100%" id="cdf_plot_lotus2"></div>



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
         
            // Build cdf plot for lotus2
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/lotus2/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_lotus2', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for lotus2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/lotus2/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_lotus2', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for lotus2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/lotus2/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_lotus2', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lotus2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lotus2/README.html