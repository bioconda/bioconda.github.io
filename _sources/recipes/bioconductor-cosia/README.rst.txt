:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cosia'
.. highlight: bash

bioconductor-cosia
==================

.. conda:recipe:: bioconductor-cosia
   :replaces_section_title:
   :noindex:

   An Investigation Across Different Species and Tissues

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/CoSIA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cosia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosia/meta.yaml>`_

   Cross\-Species Investigation and Analysis \(CoSIA\) is a package that provides researchers with an alternative methodology for comparing across species and tissues using normal wild\-type RNA\-Seq Gene Expression data from Bgee. Using RNA\-Seq Gene Expression data\, CoSIA provides multiple visualization tools to explore the transcriptome diversity and variation across genes\, tissues\, and species. CoSIA uses the Coefficient of Variation and Shannon Entropy and Specificity to calculate transcriptome diversity and variation. CoSIA also provides additional conversion tools and utilities to provide a streamlined methodology for cross\-species comparison.


.. conda:package:: bioconductor-cosia

   |downloads_bioconductor-cosia| |docker_bioconductor-cosia|

   :versions:
      
      

      ``1.10.1-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationtools: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-org.ce.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.dm.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.dr.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.mm.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.rn.eg.db: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=1.0.7``
   :depends on r-ggplot2: ``>=3.3.5``
   :depends on r-homologene: ``>=1.4.68.19``
   :depends on r-magrittr: ``>=2.0.1``
   :depends on r-plotly: ``>=4.10.0``
   :depends on r-rcolorbrewer: ``>=1.1-2``
   :depends on r-readr: ``>=2.1.1``
   :depends on r-stringr: ``>=1.4.0``
   :depends on r-tibble: ``>=3.1.7``
   :depends on r-tidyr: ``>=1.2.0``
   :depends on r-tidyselect: ``>=1.1.2``

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

    pixi global install bioconductor-cosia

to add into an existing workspace instead, run::

    pixi add bioconductor-cosia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cosia

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cosia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cosia:<tag>

(see `bioconductor-cosia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cosia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cosia
   :alt:   (downloads)
.. |docker_bioconductor-cosia| image:: https://quay.io/repository/biocontainers/bioconductor-cosia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosia
.. _`bioconductor-cosia/tags`: https://quay.io/repository/biocontainers/bioconductor-cosia?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-cosia";
      var versions = ["1.10.1","1.6.0","1.2.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-cosia"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-cosia"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-cosia"></div>



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
         
            // Build cdf plot for bioconductor-cosia
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cosia/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-cosia', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-cosia
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cosia/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-cosia', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-cosia
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-cosia/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-cosia', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosia/README.html