:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidbase'
.. highlight: bash

r-acidbase
==========

.. conda:recipe:: r-acidbase
   :replaces_section_title:
   :noindex:

   Low\-level base functions imported by Acid Genomics packages.

   :homepage: https://r.acidgenomics.com/packages/acidbase/
   :developer docs: https://github.com/acidgenomics/r-acidbase
   :license: APACHE / Apache-2.0
   :recipe: /`r-acidbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidbase/meta.yaml>`_

   


.. conda:package:: r-acidbase

   |downloads_r-acidbase| |docker_r-acidbase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.7-0</code>,  <code>0.7.5-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-2</code>,  <code>0.7.3-1</code>,  <code>0.7.3-0</code>,  <code>0.7.2-1</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  </span></summary>
      

      ``0.7.7-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-2``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.23-0``,  ``0.6.22-0``,  ``0.6.21-0``,  ``0.6.20-0``,  ``0.6.19-0``,  ``0.6.18-0``,  ``0.6.17-0``,  ``0.6.16-1``,  ``0.6.16-0``,  ``0.6.15-1``,  ``0.6.15-0``,  ``0.6.13-0``,  ``0.6.12-1``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.8-1``,  ``0.6.8-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.3.16-0``,  ``0.3.15-0``,  ``0.3.14-0``,  ``0.3.13-3``,  ``0.3.13-2``,  ``0.3.13-1``,  ``0.3.13-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-1``,  ``0.1.9-0``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.48.0``
   :depends on bioconductor-s4vectors: ``>=0.40.0``
   :depends on r-acidcli: ``>=0.3.3``
   :depends on r-acidgenerics: ``>=0.7.11``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-goalie: ``>=0.7.10``
   :depends on r-memuse: ``>=4.2.3``
   :depends on r-processx: ``>=3.8.3``
   :depends on r-withr: ``>=2.5.2``

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

    pixi global install r-acidbase

to add into an existing workspace instead, run::

    pixi add r-acidbase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-acidbase

Alternatively, to install into a new environment, run::

    conda create -n envname r-acidbase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-acidbase:<tag>

(see `r-acidbase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-acidbase| image:: https://img.shields.io/conda/dn/bioconda/r-acidbase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidbase
   :alt:   (downloads)
.. |docker_r-acidbase| image:: https://quay.io/repository/biocontainers/r-acidbase/status
   :target: https://quay.io/repository/biocontainers/r-acidbase
.. _`r-acidbase/tags`: https://quay.io/repository/biocontainers/r-acidbase?tab=tags


.. raw:: html

   <script>
      var package = "r-acidbase";
      var versions = ["0.7.7","0.7.5","0.7.4","0.7.3","0.7.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_r-acidbase"></div>
   <div style="width: 100%" id="platform_plot_r-acidbase"></div>
   <div style="width: 100%" id="cdf_plot_r-acidbase"></div>



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
         
            // Build cdf plot for r-acidbase
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-acidbase/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_r-acidbase', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for r-acidbase
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-acidbase/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_r-acidbase', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for r-acidbase
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/r-acidbase/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_r-acidbase', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidbase/README.html