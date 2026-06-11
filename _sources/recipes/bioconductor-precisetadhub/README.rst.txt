:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-precisetadhub'
.. highlight: bash

bioconductor-precisetadhub
==========================

.. conda:recipe:: bioconductor-precisetadhub
   :replaces_section_title:
   :noindex:

   Pre\-trained random forest models obtained using preciseTAD

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/preciseTADhub.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-precisetadhub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisetadhub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisetadhub/meta.yaml>`_

   An experimentdata package to supplement the preciseTAD package containing pre\-trained models and the variable importances of each genomic annotation used to build the model parsed into list objects and available in ExperimentHub. In total\, preciseTADhub provides access to n\=84 random forest classification models optimized to predict TAD\/chromatin loop boundary regions and stored as .RDS files. The value\, n\, comes from the fact that we considered l\=2 cell lines \{GM12878\, K562\}\, g\=2 ground truth boundaries \{Arrowhead\, Peakachu\}\, and c\=21 autosomal chromosomes \{CHR1\, CHR2\, ...\, CHR22\} \(omitting CHR9\). Furthermore\, each object is itself a two\-item list containing\: \(1\) the model object\, and \(2\) the variable importances for CTCF\, RAD21\, SMC3\, and ZNF143 used to predict boundary regions. Each model is trained via a \"holdout\" strategy\, in which data from chromosomes \{CHR1\, CHR2\, ...\, CHRi\-1\, CHRi\+1\, ...\, CHR22\} were used to build the model and the ith chromosome was reserved for testing. See https\:\/\/doi.org\/10.1101\/2020.09.03.282186 for more detail on the model building strategy.


.. conda:package:: bioconductor-precisetadhub

   |downloads_bioconductor-precisetadhub| |docker_bioconductor-precisetadhub|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
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

    pixi global install bioconductor-precisetadhub

to add into an existing workspace instead, run::

    pixi add bioconductor-precisetadhub

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-precisetadhub

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-precisetadhub

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-precisetadhub:<tag>

(see `bioconductor-precisetadhub/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-precisetadhub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-precisetadhub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-precisetadhub
   :alt:   (downloads)
.. |docker_bioconductor-precisetadhub| image:: https://quay.io/repository/biocontainers/bioconductor-precisetadhub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-precisetadhub
.. _`bioconductor-precisetadhub/tags`: https://quay.io/repository/biocontainers/bioconductor-precisetadhub?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-precisetadhub";
      var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-precisetadhub"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-precisetadhub"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-precisetadhub"></div>



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
         
            // Build cdf plot for bioconductor-precisetadhub
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-precisetadhub/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-precisetadhub', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-precisetadhub
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-precisetadhub/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-precisetadhub', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-precisetadhub
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-precisetadhub/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-precisetadhub', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-precisetadhub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-precisetadhub/README.html