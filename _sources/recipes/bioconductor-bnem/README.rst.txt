:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bnem'
.. highlight: bash

bioconductor-bnem
=================

.. conda:recipe:: bioconductor-bnem
   :replaces_section_title:
   :noindex:

   Training of logical models from indirect measurements of perturbation experiments

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/bnem.html
   :license: GPL-3
   :recipe: /`bioconductor-bnem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bnem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bnem/meta.yaml>`_

   bnem combines the use of indirect measurements of Nested Effects Models \(package mnem\) with the Boolean networks of CellNOptR. Perturbation experiments of signalling nodes in cells are analysed for their effect on the global gene expression profile. Those profiles give evidence for the Boolean regulation of down\-stream nodes in the network\, e.g.\, whether two parents activate their child independently \(OR\-gate\) or jointly \(AND\-gate\).


.. conda:package:: bioconductor-bnem

   |downloads_bioconductor-bnem| |docker_bioconductor-bnem|

   :versions:
      
      

      ``1.18.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-affy: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-cellnoptr: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-epinem: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-mnem: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-rgraphviz: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends on bioconductor-vsn: ``>=3.78.0,<3.79.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-binom: 
   :depends on r-cluster: 
   :depends on r-flexclust: 
   :depends on r-matrixstats: 
   :depends on r-rcolorbrewer: 
   :depends on r-rmarkdown: 
   :depends on r-snowfall: 

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

    pixi global install bioconductor-bnem

to add into an existing workspace instead, run::

    pixi add bioconductor-bnem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bnem

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bnem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bnem:<tag>

(see `bioconductor-bnem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bnem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bnem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bnem
   :alt:   (downloads)
.. |docker_bioconductor-bnem| image:: https://quay.io/repository/biocontainers/bioconductor-bnem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bnem
.. _`bioconductor-bnem/tags`: https://quay.io/repository/biocontainers/bioconductor-bnem?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-bnem";
      var versions = ["1.18.0","1.10.0","1.8.0","1.6.0","1.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-bnem"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-bnem"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-bnem"></div>



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
         
            // Build cdf plot for bioconductor-bnem
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-bnem/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-bnem', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-bnem
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-bnem/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-bnem', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-bnem
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-bnem/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-bnem', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bnem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bnem/README.html