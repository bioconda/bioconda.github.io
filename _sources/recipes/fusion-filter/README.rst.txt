:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusion-filter'
.. highlight: bash

fusion-filter
=============

.. conda:recipe:: fusion-filter
   :replaces_section_title:
   :noindex:

   FusionFilter provides a common fusion\-finding\, filtering\, and annotation framework for the Trinity Cancer Transcriptome Analysis Toolkit \(CTAT\).

   :homepage: https://github.com/FusionFilter/FusionFilter
   :license: BSD-3-Clause
   :recipe: /`fusion-filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-filter/meta.yaml>`_

   FusionFilter provides a common fusion\-finding\, filtering\, and annotation framework used by the Trinity Cancer Transcriptome Analysis Toolkit \(CTAT\). This system is leveraged for preparing a target genome and annotation set for fusion transcript identification\, fusion feature annotation\, and integrates utilities for filtering likely false\-positive fusions. \- https\:\/\/github.com\/FusionFilter\/FusionFilter\/wiki


.. conda:package:: fusion-filter

   |downloads_fusion-filter| |docker_fusion-filter|

   :versions:
      
      

      ``0.5.0-4``,  ``0.5.0-3``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends on blast: ``>=2.7.1``
   :depends on gmap: ``>=2017.10.30``
   :depends on perl: 
   :depends on perl-carp: 
   :depends on perl-db_file: 
   :depends on perl-json-xs: 
   :depends on perl-perlio-gzip: 
   :depends on perl-set-intervaltree: 
   :depends on perl-uri: 
   :depends on python: ``<3``
   :depends on samtools: 
   :depends on star: ``>=2.5.4a``

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

    pixi global install fusion-filter

to add into an existing workspace instead, run::

    pixi add fusion-filter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fusion-filter

Alternatively, to install into a new environment, run::

    conda create -n envname fusion-filter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fusion-filter:<tag>

(see `fusion-filter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fusion-filter| image:: https://img.shields.io/conda/dn/bioconda/fusion-filter.svg?style=flat
   :target: https://anaconda.org/bioconda/fusion-filter
   :alt:   (downloads)
.. |docker_fusion-filter| image:: https://quay.io/repository/biocontainers/fusion-filter/status
   :target: https://quay.io/repository/biocontainers/fusion-filter
.. _`fusion-filter/tags`: https://quay.io/repository/biocontainers/fusion-filter?tab=tags


.. raw:: html

   <script>
      var package = "fusion-filter";
      var versions = ["0.5.0","0.5.0","0.5.0","0.5.0","0.5.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_fusion-filter"></div>
   <div style="width: 100%" id="platform_plot_fusion-filter"></div>
   <div style="width: 100%" id="cdf_plot_fusion-filter"></div>



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
         
            // Build cdf plot for fusion-filter
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fusion-filter/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_fusion-filter', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for fusion-filter
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fusion-filter/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_fusion-filter', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for fusion-filter
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fusion-filter/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_fusion-filter', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusion-filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusion-filter/README.html