:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mafdb.gnomad.r2.1.hs37d5'
.. highlight: bash

bioconductor-mafdb.gnomad.r2.1.hs37d5
=====================================

.. conda:recipe:: bioconductor-mafdb.gnomad.r2.1.hs37d5
   :replaces_section_title:
   :noindex:

   Minor allele frequency data from gnomAD release 2.1 for hs37d5

   :homepage: https://bioconductor.org/packages/3.22/data/annotation/html/MafDb.gnomAD.r2.1.hs37d5.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mafdb.gnomad.r2.1.hs37d5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.gnomad.r2.1.hs37d5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.gnomad.r2.1.hs37d5/meta.yaml>`_

   Store minor allele frequency data from the Genome Aggregation Database \(gnomAD release 2.1\) for the human genome version hs37d5.


.. conda:package:: bioconductor-mafdb.gnomad.r2.1.hs37d5

   |downloads_bioconductor-mafdb.gnomad.r2.1.hs37d5| |docker_bioconductor-mafdb.gnomad.r2.1.hs37d5|

   :versions:
      
      

      ``3.10.0-6``,  ``3.10.0-5``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.8.0-2``,  ``3.8.0-0``

      

   
   :depends on bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicscores: ``>=2.6.0,<2.7.0``
   :depends on bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends on bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends on curl: 
   :depends on r-base: ``>=4.1,<4.2.0a0``

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

    pixi global install bioconductor-mafdb.gnomad.r2.1.hs37d5

to add into an existing workspace instead, run::

    pixi add bioconductor-mafdb.gnomad.r2.1.hs37d5

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mafdb.gnomad.r2.1.hs37d5

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mafdb.gnomad.r2.1.hs37d5

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mafdb.gnomad.r2.1.hs37d5:<tag>

(see `bioconductor-mafdb.gnomad.r2.1.hs37d5/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mafdb.gnomad.r2.1.hs37d5| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mafdb.gnomad.r2.1.hs37d5.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mafdb.gnomad.r2.1.hs37d5
   :alt:   (downloads)
.. |docker_bioconductor-mafdb.gnomad.r2.1.hs37d5| image:: https://quay.io/repository/biocontainers/bioconductor-mafdb.gnomad.r2.1.hs37d5/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mafdb.gnomad.r2.1.hs37d5
.. _`bioconductor-mafdb.gnomad.r2.1.hs37d5/tags`: https://quay.io/repository/biocontainers/bioconductor-mafdb.gnomad.r2.1.hs37d5?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-mafdb.gnomad.r2.1.hs37d5";
      var versions = ["3.10.0","3.10.0","3.10.0","3.10.0","3.8.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-mafdb.gnomad.r2.1.hs37d5"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-mafdb.gnomad.r2.1.hs37d5"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-mafdb.gnomad.r2.1.hs37d5"></div>



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
         
            // Build cdf plot for bioconductor-mafdb.gnomad.r2.1.hs37d5
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mafdb.gnomad.r2.1.hs37d5/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-mafdb.gnomad.r2.1.hs37d5', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-mafdb.gnomad.r2.1.hs37d5
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mafdb.gnomad.r2.1.hs37d5/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-mafdb.gnomad.r2.1.hs37d5', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-mafdb.gnomad.r2.1.hs37d5
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-mafdb.gnomad.r2.1.hs37d5/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-mafdb.gnomad.r2.1.hs37d5', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mafdb.gnomad.r2.1.hs37d5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mafdb.gnomad.r2.1.hs37d5/README.html