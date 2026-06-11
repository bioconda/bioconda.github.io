:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-structtoolbox'
.. highlight: bash

bioconductor-structtoolbox
==========================

.. conda:recipe:: bioconductor-structtoolbox
   :replaces_section_title:
   :noindex:

   Data processing \& analysis tools for Metabolomics and other omics

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/structToolbox.html
   :license: GPL-3
   :recipe: /`bioconductor-structtoolbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structtoolbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structtoolbox/meta.yaml>`_

   An extensive set of data \(pre\-\)processing and analysis methods and tools for metabolomics and other omics\, with a strong emphasis on statistics and machine learning. This toolbox allows the user to build extensive and standardised workflows for data analysis. The methods and tools have been implemented using class\-based templates provided by the struct \(Statistics in R Using Class\-based Templates\) package. The toolbox includes pre\-processing methods \(e.g. signal drift and batch correction\, normalisation\, missing value imputation and scaling\)\, univariate \(e.g. ttest\, various forms of ANOVA\, Kruskal–Wallis test and more\) and multivariate statistical methods \(e.g. PCA and PLS\, including cross\-validation and permutation testing\) as well as machine learning methods \(e.g. Support Vector Machines\). The STATistics Ontology \(STATO\) has been integrated and implemented to provide standardised definitions for the different methods\, inputs and outputs.


.. conda:package:: bioconductor-structtoolbox

   |downloads_bioconductor-structtoolbox| |docker_bioconductor-structtoolbox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.2-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.2-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.2-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-struct: ``>=1.22.0,<1.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-ggthemes: 
   :depends on r-gridextra: 
   :depends on r-scales: 
   :depends on r-sp: 

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

    pixi global install bioconductor-structtoolbox

to add into an existing workspace instead, run::

    pixi add bioconductor-structtoolbox

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-structtoolbox

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-structtoolbox

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-structtoolbox:<tag>

(see `bioconductor-structtoolbox/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-structtoolbox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-structtoolbox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-structtoolbox
   :alt:   (downloads)
.. |docker_bioconductor-structtoolbox| image:: https://quay.io/repository/biocontainers/bioconductor-structtoolbox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-structtoolbox
.. _`bioconductor-structtoolbox/tags`: https://quay.io/repository/biocontainers/bioconductor-structtoolbox?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-structtoolbox";
      var versions = ["1.22.0","1.18.2","1.18.0","1.14.0","1.12.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-structtoolbox"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-structtoolbox"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-structtoolbox"></div>



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
         
            // Build cdf plot for bioconductor-structtoolbox
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-structtoolbox/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-structtoolbox', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-structtoolbox
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-structtoolbox/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-structtoolbox', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-structtoolbox
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-structtoolbox/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-structtoolbox', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-structtoolbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-structtoolbox/README.html