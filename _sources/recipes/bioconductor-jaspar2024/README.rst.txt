:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jaspar2024'
.. highlight: bash

bioconductor-jaspar2024
=======================

.. conda:recipe:: bioconductor-jaspar2024
   :replaces_section_title:
   :noindex:

   Data package for JASPAR database \(version 2024\)

   :homepage: https://bioconductor.org/packages/3.22/data/annotation/html/JASPAR2024.html
   :license: GPL-2
   :recipe: /`bioconductor-jaspar2024 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2024>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2024/meta.yaml>`_

   JASPAR \(https\:\/\/jaspar.elixir.no\/\) is a widely\-used open\-access database presenting manually curated high\-quality and non\-redundant DNA\-binding profiles for transcription factors \(TFs\) across taxa. In this 10th release and 20th\-anniversary update\, the CORE collection has expanded with 329 new profiles. We updated three existing profiles and provided orthogonal support for 72 profiles from the previous release UNVALIDATED collection. Altogether\, the JASPAR 2024 update provides a 20 percent increase in CORE profiles from the previous release. A trimming algorithm enhanced profiles by removing low information content flanking base pairs\, which were likely uninformative \(within the capacity of the PFM models\) for TFBS predictions and modelling TF\-DNA interactions. This release includes enhanced metadata\, featuring a refined classification for plant TFs structural DNA\-binding domains. The new JASPAR collections prompt updates to the genomic tracks of predicted TF\-binding sites in 8 organisms\, with human and mouse tracks available as native tracks in the UCSC Genome browser. All data are available through the JASPAR web interface and programmatically through its API and the updated Bioconductor and pyJASPAR packages. Finally\, a new TFBS extraction tool enables users to retrieve predicted JASPAR TFBSs intersecting their genomic regions of interest.


.. conda:package:: bioconductor-jaspar2024

   |downloads_bioconductor-jaspar2024| |docker_bioconductor-jaspar2024|

   :versions:
      
      

      ``0.99.7-0``,  ``0.99.6-1``,  ``0.99.6-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-jaspar2024

to add into an existing workspace instead, run::

    pixi add bioconductor-jaspar2024

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-jaspar2024

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-jaspar2024

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-jaspar2024:<tag>

(see `bioconductor-jaspar2024/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-jaspar2024| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jaspar2024.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-jaspar2024
   :alt:   (downloads)
.. |docker_bioconductor-jaspar2024| image:: https://quay.io/repository/biocontainers/bioconductor-jaspar2024/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jaspar2024
.. _`bioconductor-jaspar2024/tags`: https://quay.io/repository/biocontainers/bioconductor-jaspar2024?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-jaspar2024";
      var versions = ["0.99.7","0.99.6","0.99.6"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-jaspar2024"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-jaspar2024"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-jaspar2024"></div>



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
         
            // Build cdf plot for bioconductor-jaspar2024
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-jaspar2024/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-jaspar2024', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-jaspar2024
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-jaspar2024/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-jaspar2024', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-jaspar2024
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-jaspar2024/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-jaspar2024', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jaspar2024/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jaspar2024/README.html