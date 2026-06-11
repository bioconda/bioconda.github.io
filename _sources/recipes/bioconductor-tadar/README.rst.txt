:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tadar'
.. highlight: bash

bioconductor-tadar
==================

.. conda:recipe:: bioconductor-tadar
   :replaces_section_title:
   :noindex:

   Transcriptome Analysis of Differential Allelic Representation

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/tadar.html
   :license: GPL-3
   :recipe: /`bioconductor-tadar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tadar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tadar/meta.yaml>`_

   This package provides functions to standardise the analysis of Differential Allelic Representation \(DAR\). DAR compromises the integrity of Differential Expression analysis results as it can bias expression\, influencing the classification of genes \(or transcripts\) as being differentially expressed. DAR analysis results in an easy\-to\-interpret value between 0 and 1 for each genetic feature of interest\, where 0 represents identical allelic representation and 1 represents complete diversity. This metric can be used to identify features prone to false\-positive calls in Differential Expression analysis\, and can be leveraged with statistical methods to alleviate the impact of such artefacts on RNA\-seq data.


.. conda:package:: bioconductor-tadar

   |downloads_bioconductor-tadar| |docker_bioconductor-tadar|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-gviz: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-lifecycle: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-tadar

to add into an existing workspace instead, run::

    pixi add bioconductor-tadar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tadar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tadar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tadar:<tag>

(see `bioconductor-tadar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tadar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tadar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tadar
   :alt:   (downloads)
.. |docker_bioconductor-tadar| image:: https://quay.io/repository/biocontainers/bioconductor-tadar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tadar
.. _`bioconductor-tadar/tags`: https://quay.io/repository/biocontainers/bioconductor-tadar?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-tadar";
      var versions = ["1.8.0","1.4.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-tadar"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-tadar"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-tadar"></div>



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
         
            // Build cdf plot for bioconductor-tadar
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-tadar/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-tadar', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-tadar
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-tadar/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-tadar', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-tadar
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-tadar/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-tadar', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tadar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tadar/README.html