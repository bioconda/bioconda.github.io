:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sigminer'
.. highlight: bash

r-sigminer
==========

.. conda:recipe:: r-sigminer
   :replaces_section_title:
   :noindex:

   Genomic alterations including single nucleotide substitution\, copy number alteration\, etc. are the major force for cancer initialization and development. Due to the specificity of molecular lesions caused by genomic alterations\, we can generate characteristic alteration spectra\, called \'signature\' \(Wang\, Shixiang\, et al.  \(2020\) \<DOI\:10.1101\/2020.04.27.20082404\> \& Alexandrov\, Ludmil B.\, et al. \(2020\) \<DOI\:10.1038\/s41586\-020\-1943\-3\> \& Macintyre\, Geoff\, et al. \(2018\) \<DOI\:10.1038\/s41588\-018\-0179\-8\>\).  This package helps users to extract\, analyze and visualize signatures from genomic alteration records\, thus providing new insight into cancer study.

   :homepage: https://github.com/ShixiangWang/sigminer
   :license: MIT / MIT
   :recipe: /`r-sigminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigminer/meta.yaml>`_

   


.. conda:package:: r-sigminer

   |downloads_r-sigminer| |docker_r-sigminer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.1-2</code>,  <code>2.3.1-1</code>,  <code>2.3.1-0</code>,  <code>2.3.0-0</code>,  <code>2.2.2-0</code>,  <code>2.2.0-2</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.9-2</code>,  </span></summary>
      

      ``2.3.1-2``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.2-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.9-2``,  ``2.1.9-1``,  ``2.1.9-0``,  ``2.1.8-1``,  ``2.1.8-0``,  ``2.1.7-1``,  ``2.1.7-0``,  ``2.1.6-1``,  ``2.1.6-0``,  ``2.1.5-1``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-maftools: ``>=2.26.0,<2.27.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: ``>=2.0.0``
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-furrr: ``>=0.2.0``
   :depends on r-future: 
   :depends on r-ggplot2: ``>=3.3.0``
   :depends on r-ggpubr: 
   :depends on r-magrittr: 
   :depends on r-nmf: 
   :depends on r-purrr: 
   :depends on r-rcpp: 
   :depends on r-rlang: ``>=0.1.2``
   :depends on r-tidyr: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      


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

    pixi global install r-sigminer

to add into an existing workspace instead, run::

    pixi add r-sigminer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-sigminer

Alternatively, to install into a new environment, run::

    conda create -n envname r-sigminer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-sigminer:<tag>

(see `r-sigminer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-sigminer| image:: https://img.shields.io/conda/dn/bioconda/r-sigminer.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sigminer
   :alt:   (downloads)
.. |docker_r-sigminer| image:: https://quay.io/repository/biocontainers/r-sigminer/status
   :target: https://quay.io/repository/biocontainers/r-sigminer
.. _`r-sigminer/tags`: https://quay.io/repository/biocontainers/r-sigminer?tab=tags


.. raw:: html

   <script>
      var package = "r-sigminer";
      var versions = ["2.3.1","2.3.1","2.3.1","2.3.0","2.2.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-sigminer"></div>
   <div style="width: 100%" id="platform_plot_r-sigminer"></div>
   <div style="width: 100%" id="cdf_plot_r-sigminer"></div>



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
         
            // Build cdf plot for r-sigminer
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-sigminer/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-sigminer', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-sigminer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-sigminer/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-sigminer', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-sigminer
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-sigminer/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-sigminer', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sigminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sigminer/README.html