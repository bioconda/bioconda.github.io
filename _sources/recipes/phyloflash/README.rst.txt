:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyloflash'
.. highlight: bash

phyloflash
==========

.. conda:recipe:: phyloflash
   :replaces_section_title:
   :noindex:

   phyloFlash is a pipeline to rapidly reconstruct the SSU rRNAs and explore
   phylogenetic composition of an illumina \(meta\)genomic dataset.

   :homepage: https://github.com/HRGV/phyloFlash
   :license: GPL / GPLv3
   :recipe: /`phyloflash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloflash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloflash/meta.yaml>`_

   


.. conda:package:: phyloflash

   |downloads_phyloflash| |docker_phyloflash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.2-1</code>,  <code>3.4.2-0</code>,  <code>3.4.1-0</code>,  <code>3.4-1</code>,  <code>3.4-0</code>,  <code>3.3b4-0</code>,  <code>3.3b3-0</code>,  <code>3.3b2-0</code>,  <code>3.3b1-1</code>,  </span></summary>
      

      ``3.4.2-1``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4-1``,  ``3.4-0``,  ``3.3b4-0``,  ``3.3b3-0``,  ``3.3b2-0``,  ``3.3b1-1``,  ``3.3b1-0``,  ``3.0b1-1``,  ``3.0b1-0``,  ``2.0beta6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: 
   :depends on bedtools: 
   :depends on emirge: 
   :depends on mafft: 
   :depends on perl: ``>=5.13.2``
   :depends on pigz: 
   :depends on r-base: ``>=4.0.0``
   :depends on r-ggdendro: 
   :depends on r-ggplot2: ``>=3.3.0``
   :depends on r-gtable: 
   :depends on r-optparse: 
   :depends on r-reshape2: 
   :depends on samtools: ``>=1.12``
   :depends on spades: 
   :depends on vsearch: ``>=2.5.0``

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

    pixi global install phyloflash

to add into an existing workspace instead, run::

    pixi add phyloflash

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phyloflash

Alternatively, to install into a new environment, run::

    conda create -n envname phyloflash

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phyloflash:<tag>

(see `phyloflash/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phyloflash| image:: https://img.shields.io/conda/dn/bioconda/phyloflash.svg?style=flat
   :target: https://anaconda.org/bioconda/phyloflash
   :alt:   (downloads)
.. |docker_phyloflash| image:: https://quay.io/repository/biocontainers/phyloflash/status
   :target: https://quay.io/repository/biocontainers/phyloflash
.. _`phyloflash/tags`: https://quay.io/repository/biocontainers/phyloflash?tab=tags


.. raw:: html

   <script>
      var package = "phyloflash";
      var versions = ["3.4.2","3.4.2","3.4.1","3.4","3.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_phyloflash"></div>
   <div style="width: 100%" id="platform_plot_phyloflash"></div>
   <div style="width: 100%" id="cdf_plot_phyloflash"></div>



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
         
            // Build cdf plot for phyloflash
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/phyloflash/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_phyloflash', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for phyloflash
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/phyloflash/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_phyloflash', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for phyloflash
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/phyloflash/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_phyloflash', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyloflash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyloflash/README.html