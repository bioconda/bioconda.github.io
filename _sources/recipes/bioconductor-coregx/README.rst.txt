:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coregx'
.. highlight: bash

bioconductor-coregx
===================

.. conda:recipe:: bioconductor-coregx
   :replaces_section_title:
   :noindex:

   Classes and Functions to Serve as the Basis for Other \'Gx\' Packages

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/CoreGx.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-coregx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregx/meta.yaml>`_

   A collection of functions and classes which serve as the foundation for our lab\'s suite of R packages\, such as \'PharmacoGx\' and \'RadioGx\'. This package was created to abstract shared functionality from other lab package releases to increase ease of maintainability and reduce code repetition in current and future \'Gx\' suite programs. Major features include a \'CoreSet\' class\, from which \'RadioSet\' and \'PharmacoSet\' are derived\, along with get and set methods for each respective slot. Additional functions related to fitting and plotting dose response curves\, quantifying statistical correlation and calculating area under the curve \(AUC\) or survival fraction \(SF\) are included. For more details please see the included documentation\, as well as\: Smirnov\, P.\, Safikhani\, Z.\, El\-Hachem\, N.\, Wang\, D.\, She\, A.\, Olsen\, C.\, Freeman\, M.\, Selby\, H.\, Gendoo\, D.\, Grossman\, P.\, Beck\, A.\, Aerts\, H.\, Lupien\, M.\, Goldenberg\, A. \(2015\) \<doi\:10.1093\/bioinformatics\/btv723\>. Manem\, V.\, Labie\, M.\, Smirnov\, P.\, Kofia\, V.\, Freeman\, M.\, Koritzinksy\, M.\, Abazeed\, M.\, Haibe\-Kains\, B.\, Bratman\, S. \(2018\) \<doi\:10.1101\/449793\>.


.. conda:package:: bioconductor-coregx

   |downloads_bioconductor-coregx| |docker_bioconductor-coregx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.10.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-bumpymatrix: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-piano: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bench: 
   :depends on r-checkmate: 
   :depends on r-crayon: 
   :depends on r-data.table: 
   :depends on r-glue: 
   :depends on r-lsa: 
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

    pixi global install bioconductor-coregx

to add into an existing workspace instead, run::

    pixi add bioconductor-coregx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-coregx

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-coregx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-coregx:<tag>

(see `bioconductor-coregx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-coregx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coregx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-coregx
   :alt:   (downloads)
.. |docker_bioconductor-coregx| image:: https://quay.io/repository/biocontainers/bioconductor-coregx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coregx
.. _`bioconductor-coregx/tags`: https://quay.io/repository/biocontainers/bioconductor-coregx?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-coregx";
      var versions = ["2.14.0","2.10.0","2.6.0","2.4.0","2.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-coregx"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-coregx"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-coregx"></div>



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
         
            // Build cdf plot for bioconductor-coregx
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-coregx/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-coregx', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-coregx
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-coregx/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-coregx', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-coregx
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-coregx/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-coregx', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coregx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coregx/README.html