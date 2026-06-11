:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparsesignatures'
.. highlight: bash

bioconductor-sparsesignatures
=============================

.. conda:recipe:: bioconductor-sparsesignatures
   :replaces_section_title:
   :noindex:

   SparseSignatures

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/SparseSignatures.html
   :license: file LICENSE
   :recipe: /`bioconductor-sparsesignatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsesignatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsesignatures/meta.yaml>`_

   Point mutations occurring in a genome can be divided into 96 categories based on the base being mutated\, the base it is mutated into and its two flanking bases. Therefore\, for any patient\, it is possible to represent all the point mutations occurring in that patient\'s tumor as a vector of length 96\, where each element represents the count of mutations for a given category in the patient. A mutational signature represents the pattern of mutations produced by a mutagen or mutagenic process inside the cell. Each signature can also be represented by a vector of length 96\, where each element represents the probability that this particular mutagenic process generates a mutation of the 96 above mentioned categories. In this R package\, we provide a set of functions to extract and visualize the mutational signatures that best explain the mutation counts of a large number of patients.


.. conda:package:: bioconductor-sparsesignatures

   |downloads_bioconductor-sparsesignatures| |docker_bioconductor-sparsesignatures|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.20.0-0``,  ``2.16.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-nmf: 
   :depends on r-nnlasso: 
   :depends on r-nnls: 
   :depends on r-reshape2: 
   :depends on r-rhpcblasctl: 

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

    pixi global install bioconductor-sparsesignatures

to add into an existing workspace instead, run::

    pixi add bioconductor-sparsesignatures

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sparsesignatures

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sparsesignatures

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sparsesignatures:<tag>

(see `bioconductor-sparsesignatures/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sparsesignatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparsesignatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sparsesignatures
   :alt:   (downloads)
.. |docker_bioconductor-sparsesignatures| image:: https://quay.io/repository/biocontainers/bioconductor-sparsesignatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparsesignatures
.. _`bioconductor-sparsesignatures/tags`: https://quay.io/repository/biocontainers/bioconductor-sparsesignatures?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-sparsesignatures";
      var versions = ["2.20.0","2.16.0","2.12.0","2.10.0","2.8.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-sparsesignatures"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-sparsesignatures"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-sparsesignatures"></div>



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
         
            // Build cdf plot for bioconductor-sparsesignatures
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-sparsesignatures/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-sparsesignatures', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-sparsesignatures
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-sparsesignatures/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-sparsesignatures', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-sparsesignatures
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-sparsesignatures/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-sparsesignatures', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparsesignatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparsesignatures/README.html