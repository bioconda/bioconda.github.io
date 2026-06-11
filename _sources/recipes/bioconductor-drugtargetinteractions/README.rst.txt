:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drugtargetinteractions'
.. highlight: bash

bioconductor-drugtargetinteractions
===================================

.. conda:recipe:: bioconductor-drugtargetinteractions
   :replaces_section_title:
   :noindex:

   Drug\-Target Interactions

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/drugTargetInteractions.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-drugtargetinteractions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drugtargetinteractions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drugtargetinteractions/meta.yaml>`_

   Provides utilities for identifying drug\-target interactions for sets of small molecule or gene\/protein identifiers. The required drug\-target interaction information is obained from a local SQLite instance of the ChEMBL database. ChEMBL has been chosen for this purpose\, because it provides one of the most comprehensive and best annotatated knowledge resources for drug\-target information available in the public domain.


.. conda:package:: bioconductor-drugtargetinteractions

   |downloads_bioconductor-drugtargetinteractions| |docker_bioconductor-drugtargetinteractions|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationfilter: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-ensembldb: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-uniprot.ws: ``>=2.50.0,<2.51.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-rappdirs: 
   :depends on r-rsqlite: 

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

    pixi global install bioconductor-drugtargetinteractions

to add into an existing workspace instead, run::

    pixi add bioconductor-drugtargetinteractions

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-drugtargetinteractions

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-drugtargetinteractions

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-drugtargetinteractions:<tag>

(see `bioconductor-drugtargetinteractions/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-drugtargetinteractions| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drugtargetinteractions.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drugtargetinteractions
   :alt:   (downloads)
.. |docker_bioconductor-drugtargetinteractions| image:: https://quay.io/repository/biocontainers/bioconductor-drugtargetinteractions/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drugtargetinteractions
.. _`bioconductor-drugtargetinteractions/tags`: https://quay.io/repository/biocontainers/bioconductor-drugtargetinteractions?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-drugtargetinteractions";
      var versions = ["1.18.0","1.14.0","1.10.1","1.8.0","1.6.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-drugtargetinteractions"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-drugtargetinteractions"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-drugtargetinteractions"></div>



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
         
            // Build cdf plot for bioconductor-drugtargetinteractions
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-drugtargetinteractions/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-drugtargetinteractions', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-drugtargetinteractions
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-drugtargetinteractions/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-drugtargetinteractions', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-drugtargetinteractions
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-drugtargetinteractions/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-drugtargetinteractions', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drugtargetinteractions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drugtargetinteractions/README.html