:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmidcommunity'
.. highlight: bash

plasmidcommunity
================

.. conda:recipe:: plasmidcommunity
   :replaces_section_title:
   :noindex:

   Klebsiella pneumoniae Plasmid Classification\, Assignment\, and Transmission Risk Prediction

   :homepage: https://github.com/wuxinmiao5/PlasmidCommunity
   :documentation: https://github.com/wuxinmiao5/PlasmidCommunity/blob/main/README.md
   
   :license: GPL-3.0
   :recipe: /`plasmidcommunity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidcommunity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidcommunity/meta.yaml>`_

   


.. conda:package:: plasmidcommunity

   |downloads_plasmidcommunity| |docker_plasmidcommunity|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on bash: 
   :depends on bioconductor-biostrings: ``>=2.70.3``
   :depends on blast: ``>=2.1.2``
   :depends on fastani: ``>=1.33``
   :depends on prodigal: ``>=2.6.3``
   :depends on r-ape: ``>=5.8``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: ``>=1.1.4``
   :depends on r-ggplot2: ``>=3.5.1``
   :depends on r-ggraph: ``>=2.2.1``
   :depends on r-igraph: ``>=2.0.3``
   :depends on r-readr: ``>=2.1.5``
   :depends on r-readxl: ``>=1.4.3``
   :depends on r-seqinr: ``>=4.2.36``
   :depends on r-tidygraph: ``1.3.0``
   :depends on r-tidyverse: ``>=2.0.0``
   :depends on r-writexl: ``>=1.5.0``
   :depends on util-linux: 

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

    pixi global install plasmidcommunity

to add into an existing workspace instead, run::

    pixi add plasmidcommunity

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plasmidcommunity

Alternatively, to install into a new environment, run::

    conda create -n envname plasmidcommunity

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plasmidcommunity:<tag>

(see `plasmidcommunity/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plasmidcommunity| image:: https://img.shields.io/conda/dn/bioconda/plasmidcommunity.svg?style=flat
   :target: https://anaconda.org/bioconda/plasmidcommunity
   :alt:   (downloads)
.. |docker_plasmidcommunity| image:: https://quay.io/repository/biocontainers/plasmidcommunity/status
   :target: https://quay.io/repository/biocontainers/plasmidcommunity
.. _`plasmidcommunity/tags`: https://quay.io/repository/biocontainers/plasmidcommunity?tab=tags


.. raw:: html

   <script>
      var package = "plasmidcommunity";
      var versions = ["1.0.2","1.0.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_plasmidcommunity"></div>
   <div style="width: 100%" id="platform_plot_plasmidcommunity"></div>
   <div style="width: 100%" id="cdf_plot_plasmidcommunity"></div>



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
         
            // Build cdf plot for plasmidcommunity
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/plasmidcommunity/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_plasmidcommunity', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for plasmidcommunity
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/plasmidcommunity/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_plasmidcommunity', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for plasmidcommunity
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/plasmidcommunity/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_plasmidcommunity', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidcommunity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidcommunity/README.html