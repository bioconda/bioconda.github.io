:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mosbi'
.. highlight: bash

bioconductor-mosbi
==================

.. conda:recipe:: bioconductor-mosbi
   :replaces_section_title:
   :noindex:

   Molecular Signature identification using Biclustering

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/mosbi.html
   :license: AGPL-3 + file LICENSE
   :recipe: /`bioconductor-mosbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosbi/meta.yaml>`_

   This package is a implementation of biclustering ensemble method MoSBi \(Molecular signature Identification from Biclustering\). MoSBi provides standardized interfaces for biclustering results and can combine their results with a multi\-algorithm ensemble approach to compute robust ensemble biclusters on molecular omics data. This is done by computing similarity networks of biclusters and filtering for overlaps using a custom error model. After that\, the louvain modularity it used to extract bicluster communities from the similarity network\, which can then be converted to ensemble biclusters. Additionally\, MoSBi includes several network visualization methods to give an intuitive and scalable overview of the results. MoSBi comes with several biclustering algorithms\, but can be easily extended to new biclustering algorithms.


.. conda:package:: bioconductor-mosbi

   |downloads_bioconductor-mosbi| |docker_bioconductor-mosbi|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-fabia: ``>=2.56.0,<2.57.0``
   :depends on bioconductor-fabia: ``>=2.56.0,<2.57.0a0``
   :depends on bioconductor-qubic: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-qubic: ``>=1.38.0,<1.39.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=19``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-akmbiclust: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: 
   :depends on r-biclust: 
   :depends on r-igraph: 
   :depends on r-isa2: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 
   :depends on r-rcppparallel: 
   :depends on r-xml2: 
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

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

    pixi global install bioconductor-mosbi

to add into an existing workspace instead, run::

    pixi add bioconductor-mosbi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mosbi

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mosbi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mosbi:<tag>

(see `bioconductor-mosbi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mosbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mosbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mosbi
   :alt:   (downloads)
.. |docker_bioconductor-mosbi| image:: https://quay.io/repository/biocontainers/bioconductor-mosbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mosbi
.. _`bioconductor-mosbi/tags`: https://quay.io/repository/biocontainers/bioconductor-mosbi?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-mosbi";
      var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-mosbi"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-mosbi"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-mosbi"></div>



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
         
            // Build cdf plot for bioconductor-mosbi
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mosbi/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-mosbi', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-mosbi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mosbi/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-mosbi', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-mosbi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mosbi/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-mosbi', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mosbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mosbi/README.html