:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pepsettest'
.. highlight: bash

bioconductor-pepsettest
=======================

.. conda:recipe:: bioconductor-pepsettest
   :replaces_section_title:
   :noindex:

   Peptide Set Test

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/PepSetTest.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-pepsettest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsettest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsettest/meta.yaml>`_

   Peptide Set Test \(PepSetTest\) is a peptide\-centric strategy to infer differentially expressed proteins in LC\-MS\/MS proteomics data. This test detects coordinated changes in the expression of peptides originating from the same protein and compares these changes against the rest of the peptidome. Compared to traditional aggregation\-based approaches\, the peptide set test demonstrates improved statistical power\, yet controlling the Type I error rate correctly in most cases. This test can be valuable for discovering novel biomarkers and prioritizing drug targets\, especially when the direct application of statistical analysis to protein data fails to provide substantial insights.


.. conda:package:: bioconductor-pepsettest

   |downloads_bioconductor-pepsettest| |docker_bioconductor-pepsettest|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-lme4: 
   :depends on r-mass: 
   :depends on r-matrixstats: 
   :depends on r-reshape2: 
   :depends on r-tibble: 

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

    pixi global install bioconductor-pepsettest

to add into an existing workspace instead, run::

    pixi add bioconductor-pepsettest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pepsettest

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pepsettest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pepsettest:<tag>

(see `bioconductor-pepsettest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pepsettest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepsettest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pepsettest
   :alt:   (downloads)
.. |docker_bioconductor-pepsettest| image:: https://quay.io/repository/biocontainers/bioconductor-pepsettest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepsettest
.. _`bioconductor-pepsettest/tags`: https://quay.io/repository/biocontainers/bioconductor-pepsettest?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-pepsettest";
      var versions = ["1.4.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-pepsettest"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-pepsettest"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-pepsettest"></div>



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
         
            // Build cdf plot for bioconductor-pepsettest
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pepsettest/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-pepsettest', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-pepsettest
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pepsettest/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-pepsettest', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-pepsettest
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-pepsettest/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-pepsettest', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepsettest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepsettest/README.html