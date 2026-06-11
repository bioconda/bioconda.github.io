:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'keggcharter'
.. highlight: bash

keggcharter
===========

.. conda:recipe:: keggcharter
   :replaces_section_title:
   :noindex:

   A tool for representing genomic potential and transcriptomic expression into KEGG pathways

   :homepage: https://github.com/iquasere/KEGGCharter
   :documentation: https://github.com/iquasere/KEGGCharter/blob/master/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`keggcharter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/keggcharter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/keggcharter/meta.yaml>`_

   KEGGCharter takes as input a quantification table of proteins with corresponding
   KEGG IDs available and maps that information into KEGG metabolic maps using 
   the KEGG API. Both genomic potential \(from either genomics or metagenomics\)
   and gene expression quantification \(from either \(meta\)transcriptomics or
   \(meta\)proteomics\) can be represented. Genomic information is mapped in a binary
   exists or not rule\, for each taxon available KEGGCharter will assign a color
   which will be included in the boxes corresponding to functions present in that
   taxon. Gene expression quantification is mapped as differential expression
   where quantification between the several columns specified is represented as
   a single row heatmap for each function present in the data.



.. conda:package:: keggcharter

   |downloads_keggcharter| |docker_keggcharter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  </span></summary>
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.4-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on lxml: 
   :depends on matplotlib-base: 
   :depends on mscorefonts: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on poppler: 
   :depends on reportlab: 
   :depends on requests: 
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

    pixi global install keggcharter

to add into an existing workspace instead, run::

    pixi add keggcharter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install keggcharter

Alternatively, to install into a new environment, run::

    conda create -n envname keggcharter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/keggcharter:<tag>

(see `keggcharter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_keggcharter| image:: https://img.shields.io/conda/dn/bioconda/keggcharter.svg?style=flat
   :target: https://anaconda.org/bioconda/keggcharter
   :alt:   (downloads)
.. |docker_keggcharter| image:: https://quay.io/repository/biocontainers/keggcharter/status
   :target: https://quay.io/repository/biocontainers/keggcharter
.. _`keggcharter/tags`: https://quay.io/repository/biocontainers/keggcharter?tab=tags


.. raw:: html

   <script>
      var package = "keggcharter";
      var versions = ["1.1.2","1.1.1","1.1.0","1.0.2","1.0.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_keggcharter"></div>
   <div style="width: 100%" id="platform_plot_keggcharter"></div>
   <div style="width: 100%" id="cdf_plot_keggcharter"></div>



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
         
            // Build cdf plot for keggcharter
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/keggcharter/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_keggcharter', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for keggcharter
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/keggcharter/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_keggcharter', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for keggcharter
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/keggcharter/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_keggcharter', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/keggcharter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/keggcharter/README.html