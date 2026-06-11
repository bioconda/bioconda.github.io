:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-openebgm'
.. highlight: bash

r-openebgm
==========

.. conda:recipe:: r-openebgm
   :replaces_section_title:
   :noindex:

   An implementation of DuMouchel\'s \(1999\) \<doi\:10.1080\/00031305.1999.10474456\> Bayesian data mining method for the market basket problem. Calculates Empirical Bayes Geometric Mean \(EBGM\) and posterior quantile scores using the Gamma\-Poisson Shrinker \(GPS\) model to find unusually large cell counts in large\, sparse contingency tables. Can be used to find unusually high reporting rates of adverse events associated with products. In general\, can be used to mine any database where the co\-occurrence of two variables or items is of interest. Also calculates relative and proportional reporting ratios. Builds on the work of the \'PhViD\' package\, from which much of the code is derived. Some of the added features include stratification to adjust for confounding variables and data squashing to improve computational efficiency. Includes an implementation of the EM algorithm for hyperparameter estimation loosely derived from the \'mederrRank\' package.

   :homepage: https://journal.r-project.org/archive/2017/RJ-2017-063/index.html
   :license: GPL3 / GPL-2 | GPL-3
   :recipe: /`r-openebgm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-openebgm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-openebgm/meta.yaml>`_

   


.. conda:package:: r-openebgm

   |downloads_r-openebgm| |docker_r-openebgm|

   :versions:
      
      

      ``0.9.1-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: ``>=1.10.0``
   :depends on r-ggplot2: ``>=2.2.1``

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

    pixi global install r-openebgm

to add into an existing workspace instead, run::

    pixi add r-openebgm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-openebgm

Alternatively, to install into a new environment, run::

    conda create -n envname r-openebgm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-openebgm:<tag>

(see `r-openebgm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-openebgm| image:: https://img.shields.io/conda/dn/bioconda/r-openebgm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-openebgm
   :alt:   (downloads)
.. |docker_r-openebgm| image:: https://quay.io/repository/biocontainers/r-openebgm/status
   :target: https://quay.io/repository/biocontainers/r-openebgm
.. _`r-openebgm/tags`: https://quay.io/repository/biocontainers/r-openebgm?tab=tags


.. raw:: html

   <script>
      var package = "r-openebgm";
      var versions = ["0.9.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-openebgm"></div>
   <div style="width: 100%" id="platform_plot_r-openebgm"></div>
   <div style="width: 100%" id="cdf_plot_r-openebgm"></div>



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
         
            // Build cdf plot for r-openebgm
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-openebgm/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-openebgm', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-openebgm
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-openebgm/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-openebgm', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-openebgm
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-openebgm/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-openebgm', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-openebgm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-openebgm/README.html