:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-svmdo'
.. highlight: bash

bioconductor-svmdo
==================

.. conda:recipe:: bioconductor-svmdo
   :replaces_section_title:
   :noindex:

   Identification of Tumor\-Discriminating mRNA Signatures via Support Vector Machines Supported by Disease Ontology

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/SVMDO.html
   :license: GPL-3
   :recipe: /`bioconductor-svmdo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svmdo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svmdo/meta.yaml>`_

   It is an easy\-to\-use GUI using disease information for detecting tumor\/normal sample discriminating gene sets from differentially expressed genes. Our approach is based on an iterative algorithm filtering genes with disease ontology enrichment analysis and wilk and wilks lambda criterion connected to SVM classification model construction. Along with gene set extraction\, SVMDO also provides individual prognostic marker detection. The algorithm is designed for FPKM and RPKM normalized RNA\-Seq transcriptome datasets.


.. conda:package:: bioconductor-svmdo

   |downloads_bioconductor-svmdo| |docker_bioconductor-svmdo|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bsda: ``>=1.2.1``
   :depends on r-caret: ``>=6.0-93``
   :depends on r-catools: ``>=1.18.2``
   :depends on r-data.table: ``>=1.14.6``
   :depends on r-dplyr: ``>=1.0.10``
   :depends on r-dt: ``>=0.33.0``
   :depends on r-e1071: ``>=1.7-12``
   :depends on r-golem: ``>=0.3.5``
   :depends on r-klar: ``>=1.7-1``
   :depends on r-nortest: ``>=1.0-4``
   :depends on r-shiny: ``>=1.7.4``
   :depends on r-shinyfiles: ``>=0.9.3``
   :depends on r-shinytitle: ``>=0.1.0``
   :depends on r-sjmisc: ``>=2.8.9``
   :depends on r-survival: ``>=3.4-0``

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

    pixi global install bioconductor-svmdo

to add into an existing workspace instead, run::

    pixi add bioconductor-svmdo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-svmdo

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-svmdo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-svmdo:<tag>

(see `bioconductor-svmdo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-svmdo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-svmdo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-svmdo
   :alt:   (downloads)
.. |docker_bioconductor-svmdo| image:: https://quay.io/repository/biocontainers/bioconductor-svmdo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-svmdo
.. _`bioconductor-svmdo/tags`: https://quay.io/repository/biocontainers/bioconductor-svmdo?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-svmdo";
      var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-svmdo"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-svmdo"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-svmdo"></div>



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
         
            // Build cdf plot for bioconductor-svmdo
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-svmdo/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-svmdo', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-svmdo
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-svmdo/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-svmdo', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-svmdo
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-svmdo/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-svmdo', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-svmdo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-svmdo/README.html