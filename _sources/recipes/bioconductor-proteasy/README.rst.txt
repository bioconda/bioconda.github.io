:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proteasy'
.. highlight: bash

bioconductor-proteasy
=====================

.. conda:recipe:: bioconductor-proteasy
   :replaces_section_title:
   :noindex:

   Protease Mapping

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/proteasy.html
   :license: GPL-3
   :recipe: /`bioconductor-proteasy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteasy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteasy/meta.yaml>`_

   Retrieval of experimentally derived protease\- and cleavage data derived from the MEROPS database. Proteasy contains functions for mapping peptide termini to known sites where a protease cleaves. This package also makes it possible to quickly look up known substrates based on a list of \(potential\) proteases\, or vice versa \- look up proteases based on a list of substrates.


.. conda:package:: bioconductor-proteasy

   |downloads_bioconductor-proteasy| |docker_bioconductor-proteasy|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationfilter: ``>=1.24.0,<1.25.0``
   :depends on bioconductor-ensdb.hsapiens.v86: ``>=2.99.0,<2.100.0``
   :depends on bioconductor-ensdb.mmusculus.v79: ``>=2.99.0,<2.100.0``
   :depends on bioconductor-ensdb.rnorvegicus.v79: ``>=2.99.0,<2.100.0``
   :depends on bioconductor-ensembldb: ``>=2.24.0,<2.25.0``
   :depends on bioconductor-rcpi: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-proteasy

to add into an existing workspace instead, run::

    pixi add bioconductor-proteasy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-proteasy

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-proteasy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-proteasy:<tag>

(see `bioconductor-proteasy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-proteasy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proteasy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proteasy
   :alt:   (downloads)
.. |docker_bioconductor-proteasy| image:: https://quay.io/repository/biocontainers/bioconductor-proteasy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proteasy
.. _`bioconductor-proteasy/tags`: https://quay.io/repository/biocontainers/bioconductor-proteasy?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-proteasy";
      var versions = ["1.2.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-proteasy"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-proteasy"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-proteasy"></div>



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
         
            // Build cdf plot for bioconductor-proteasy
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-proteasy/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-proteasy', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-proteasy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-proteasy/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-proteasy', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-proteasy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-proteasy/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-proteasy', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proteasy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proteasy/README.html