:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mutationalpatterns'
.. highlight: bash

bioconductor-mutationalpatterns
===============================

.. conda:recipe:: bioconductor-mutationalpatterns
   :replaces_section_title:
   :noindex:

   Comprehensive genome\-wide analysis of mutational processes

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/MutationalPatterns.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mutationalpatterns <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mutationalpatterns>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mutationalpatterns/meta.yaml>`_

   Mutational processes leave characteristic footprints in genomic DNA. This package provides a comprehensive set of flexible functions that allows researchers to easily evaluate and visualize a multitude of mutational patterns in base substitution catalogues of e.g. healthy samples\, tumour samples\, or DNA\-repair deficient cells. The package covers a wide range of patterns including\: mutational signatures\, transcriptional and replicative strand bias\, lesion segregation\, genomic distribution and association with genomic features\, which are collectively meaningful for studying the activity of mutational processes. The package works with single nucleotide variants \(SNVs\)\, insertions and deletions \(Indels\)\, double base substitutions \(DBSs\) and larger multi base substitutions \(MBSs\). The package provides functionalities for both extracting mutational signatures de novo and determining the contribution of previously identified mutational signatures on a single sample level. MutationalPatterns integrates with common R genomic analysis workflows and allows easy association with \(publicly available\) annotation data.


.. conda:package:: bioconductor-mutationalpatterns

   |downloads_bioconductor-mutationalpatterns| |docker_bioconductor-mutationalpatterns|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.19.1-0</code>,  <code>3.16.0-0</code>,  <code>3.12.0-0</code>,  <code>3.10.0-0</code>,  <code>3.8.0-0</code>,  <code>3.4.0-0</code>,  <code>3.2.0-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  </span></summary>
      

      ``3.19.1-0``,  ``3.16.0-0``,  ``3.12.0-0``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.4.0-0``,  ``3.2.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.3-0``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: ``>=0.9.2``
   :depends on r-dplyr: ``>=0.8.3``
   :depends on r-ggalluvial: ``>=0.12.2``
   :depends on r-ggdendro: ``>=0.1-20``
   :depends on r-ggplot2: ``>=2.1.0``
   :depends on r-magrittr: ``>=1.5``
   :depends on r-nmf: ``>=0.20.6``
   :depends on r-pracma: ``>=1.8.8``
   :depends on r-purrr: ``>=0.3.2``
   :depends on r-rcolorbrewer: 
   :depends on r-stringr: ``>=1.4.0``
   :depends on r-tibble: ``>=2.1.3``
   :depends on r-tidyr: ``>=1.0.0``

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

    pixi global install bioconductor-mutationalpatterns

to add into an existing workspace instead, run::

    pixi add bioconductor-mutationalpatterns

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mutationalpatterns

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mutationalpatterns

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mutationalpatterns:<tag>

(see `bioconductor-mutationalpatterns/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mutationalpatterns| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mutationalpatterns.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mutationalpatterns
   :alt:   (downloads)
.. |docker_bioconductor-mutationalpatterns| image:: https://quay.io/repository/biocontainers/bioconductor-mutationalpatterns/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mutationalpatterns
.. _`bioconductor-mutationalpatterns/tags`: https://quay.io/repository/biocontainers/bioconductor-mutationalpatterns?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-mutationalpatterns";
      var versions = ["3.19.1","3.16.0","3.12.0","3.10.0","3.8.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-mutationalpatterns"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-mutationalpatterns"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-mutationalpatterns"></div>



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
         
            // Build cdf plot for bioconductor-mutationalpatterns
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mutationalpatterns/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-mutationalpatterns', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-mutationalpatterns
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mutationalpatterns/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-mutationalpatterns', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-mutationalpatterns
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mutationalpatterns/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-mutationalpatterns', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mutationalpatterns/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mutationalpatterns/README.html