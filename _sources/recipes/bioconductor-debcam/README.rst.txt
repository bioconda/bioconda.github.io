:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-debcam'
.. highlight: bash

bioconductor-debcam
===================

.. conda:recipe:: bioconductor-debcam
   :replaces_section_title:
   :noindex:

   Deconvolution by Convex Analysis of Mixtures

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/debCAM.html
   :license: GPL-2
   :recipe: /`bioconductor-debcam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-debcam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-debcam/meta.yaml>`_

   An R package for fully unsupervised deconvolution of complex tissues. It provides basic functions to perform unsupervised deconvolution on mixture expression profiles by Convex Analysis of Mixtures \(CAM\) and some auxiliary functions to help understand the subpopulation\-specific results. It also implements functions to perform supervised deconvolution based on prior knowledge of molecular markers\, S matrix or A matrix. Combining molecular markers from CAM and from prior knowledge can achieve semi\-supervised deconvolution of mixtures.


.. conda:package:: bioconductor-debcam

   |downloads_bioconductor-debcam| |docker_bioconductor-debcam|

   :versions:
      
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on openjdk: 
   :depends on r-apcluster: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-corpcor: 
   :depends on r-dmwr2: 
   :depends on r-geometry: 
   :depends on r-nmf: 
   :depends on r-nnls: 
   :depends on r-pcapp: 
   :depends on r-rjava: 

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

    pixi global install bioconductor-debcam

to add into an existing workspace instead, run::

    pixi add bioconductor-debcam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-debcam

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-debcam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-debcam:<tag>

(see `bioconductor-debcam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-debcam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-debcam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-debcam
   :alt:   (downloads)
.. |docker_bioconductor-debcam| image:: https://quay.io/repository/biocontainers/bioconductor-debcam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-debcam
.. _`bioconductor-debcam/tags`: https://quay.io/repository/biocontainers/bioconductor-debcam?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-debcam";
      var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.12.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-debcam"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-debcam"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-debcam"></div>



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
         
            // Build cdf plot for bioconductor-debcam
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-debcam/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-debcam', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-debcam
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-debcam/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-debcam', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-debcam
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-debcam/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-debcam', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-debcam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-debcam/README.html