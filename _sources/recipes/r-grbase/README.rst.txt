:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-grbase'
.. highlight: bash

r-grbase
========

.. conda:recipe:: r-grbase
   :replaces_section_title:
   :noindex:

   The \'gRbase\' package provides graphical modelling features used by e.g. the packages \'gRain\'\, \'gRim\' and \'gRc\'. \'gRbase\' implements graph algorithms including \(i\) maximum cardinality search \(for marked and unmarked graphs\). \(ii\) moralization\, \(iii\) triangulation\, \(iv\) creation of junction tree. \'gRbase\' facilitates array operations\, \'gRbase\' implements functions for testing for conditional independence. \'gRbase\' illustrates how hierarchical log\-linear models may be implemented and describes concept of graphical meta data. The facilities of the package are documented in the book by Højsgaard\, Edwards and Lauritzen \(2012\, \<doi\:10.1007\/978\-1\-4614\-2299\-0\>\) and in the paper by Dethlefsen and Højsgaard\, \(2005\, \<doi\:10.18637\/jss.v014.i17\>\). Please see \'citation\(\"gRbase\"\)\' for citation details. NOTICE  \'gRbase\' requires that the packages graph\, \'Rgraphviz\' and \'RBGL\' are installed from \'bioconductor\'\; for installation instructions please refer to the web page given below.

   :homepage: https://people.math.aau.dk/~sorenh/software.html
   :documentation: https://cran.r-project.org/web/packages/gRbase/index.html
   
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-grbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-grbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-grbase/meta.yaml>`_

   


.. conda:package:: r-grbase

   |downloads_r-grbase| |docker_r-grbase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.3-3</code>,  <code>2.0.3-2</code>,  <code>2.0.3-1</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.9.0-0</code>,  </span></summary>
      

      ``2.0.3-3``,  ``2.0.3-2``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.9.0-0``,  ``1.8.9-3``,  ``1.8.9-2``,  ``1.8.9-1``,  ``1.8.9-0``,  ``1.8.8-1``,  ``1.8.8-0``,  ``1.8.7-1``,  ``1.8.7-0``,  ``1.8_6.7-2``,  ``1.8_6.7-1``,  ``1.8_6.7-0``,  ``1.8_3.4-6``,  ``1.8_3.4-5``,  ``1.8_3.4-4``,  ``1.8_3.4-3``,  ``1.8_3.4-2``,  ``1.8_3.4-1``,  ``1.8_3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-rcpp: ``>=0.11.1``
   :depends on r-rcpparmadillo: 
   :depends on r-rcppeigen: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


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

    pixi global install r-grbase

to add into an existing workspace instead, run::

    pixi add r-grbase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-grbase

Alternatively, to install into a new environment, run::

    conda create -n envname r-grbase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-grbase:<tag>

(see `r-grbase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-grbase| image:: https://img.shields.io/conda/dn/bioconda/r-grbase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-grbase
   :alt:   (downloads)
.. |docker_r-grbase| image:: https://quay.io/repository/biocontainers/r-grbase/status
   :target: https://quay.io/repository/biocontainers/r-grbase
.. _`r-grbase/tags`: https://quay.io/repository/biocontainers/r-grbase?tab=tags


.. raw:: html

   <script>
      var package = "r-grbase";
      var versions = ["2.0.3","2.0.3","2.0.3","2.0.3","2.0.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-grbase"></div>
   <div style="width: 100%" id="platform_plot_r-grbase"></div>
   <div style="width: 100%" id="cdf_plot_r-grbase"></div>



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
         
            // Build cdf plot for r-grbase
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-grbase/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-grbase', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-grbase
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-grbase/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-grbase', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-grbase
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-grbase/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-grbase', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-grbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-grbase/README.html