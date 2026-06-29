:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'artic'
.. highlight: bash

artic
=====

.. conda:recipe:: artic
   :replaces_section_title:
   :noindex:

   ARTIC pipeline \- a bioinformatics pipeline for working with virus sequencing data sequenced with nanopore.

   :homepage: https://github.com/artic-network/fieldbioinformatics
   :documentation: https://artic.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`artic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic/meta.yaml>`_

   


.. conda:package:: artic

   |downloads_artic| |docker_artic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.11.0-0</code>,  <code>1.10.3-0</code>,  <code>1.10.2-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  <code>1.9.1-0</code>,  <code>1.9.0-1</code>,  <code>1.9.0-0</code>,  <code>1.8.5-0</code>,  </span></summary>
      

      ``1.11.0-0``,  ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.1-0``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.5-0``,  ``1.8.4-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.5-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.8-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.5-1``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0_rc2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on align_trim: ``>=1.2.0``
   :depends on bcftools: 
   :depends on biopython: 
   :depends on bwa: 
   :depends on clair3: ``>=2.0.1``
   :depends on clint: 
   :depends on cyvcf2: 
   :depends on htslib: 
   :depends on mafft: 
   :depends on minimap2: 
   :depends on multiqc: 
   :depends on pandas: 
   :depends on primalbedtools: ``>=0.10.1``
   :depends on pysam: 
   :depends on pytest: 
   :depends on python: ``>=3.7``
   :depends on requests: 
   :depends on samtools: 
   :depends on seqtk: 
   :depends on tqdm: 

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

    pixi global install artic

to add into an existing workspace instead, run::

    pixi add artic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install artic

Alternatively, to install into a new environment, run::

    conda create -n envname artic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/artic:<tag>

(see `artic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_artic| image:: https://img.shields.io/conda/dn/bioconda/artic.svg?style=flat
   :target: https://anaconda.org/bioconda/artic
   :alt:   (downloads)
.. |docker_artic| image:: https://quay.io/repository/biocontainers/artic/status
   :target: https://quay.io/repository/biocontainers/artic
.. _`artic/tags`: https://quay.io/repository/biocontainers/artic?tab=tags


.. raw:: html

   <script>
      var package = "artic";
      var versions = ["1.11.0","1.10.3","1.10.2","1.10.1","1.10.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_artic"></div>
   <div style="width: 100%" id="platform_plot_artic"></div>
   <div style="width: 100%" id="cdf_plot_artic"></div>



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
         
            // Build cdf plot for artic
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/artic/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_artic', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for artic
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/artic/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_artic', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for artic
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/artic/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_artic', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/artic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/artic/README.html